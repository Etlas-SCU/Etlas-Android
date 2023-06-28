import { styles } from "./Styles";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { translate } from "../../Localization";
import OTPTextInput from 'react-native-otp-textinput'
import { colors } from "../../AppStyles";
import { useContext, useRef, useState } from "react";
import PopupMessage from "../PopupMessage/PopupMessage";
import { UserContext } from "../Context/Context";
import { goBack, goPage, getParams } from "../../Backend/Navigator";
import Backend from "../../Backend/Backend";
import Loader from "../Loader/Loader";
import SvgMaker from '../../Components/SvgMaker/SvgMaker';
import { LeftArrow } from "../../assets/SVG/Icons";


export default function ForgotPasswordSecond({ }) {

    const [OTP, setOTP] = useState('');
    const otpInput = useRef(null);
    const { popupMessageVisible, showPopupMessage } = useContext(UserContext);
    const { loaderVisible, showLoader, hideLoader } = useContext(UserContext);
    const { email } = getParams();


    // check otp validation
    const checkOtp = async (otp) => {
        const { state, message } = await Backend.checkOTP(otp).then((response) => { return response });
        if (!state) {
            showPopupMessage('Error', message);
            otpInput.current.clear();
            return false;
        }
    }


    // referesh the OTP
    const resendOTP = async (email) => {
        const { statusCode, data } = await Backend.refereshOTP(email);
        if (!Backend.isSuccessfulRequest(statusCode)) {
            const errorMessage = await Backend.getErrorMessage(data).then(response => response);
            showPopupMessage('Error', errorMessage);
            return;
        }
        showPopupMessage('Success', data.success);
    }


    // try to verify
    const verify = async (otp) => {
        async function verify_with_otp(otp) {
            // check otp
            const checkotp = await checkOtp(otp).then((response) => { return response });
            if (checkotp === false)
                return;

            // verify with otp
            showLoader(translate('messages.verifying'));
            const { statusCode, data } = await Backend.passwordVerify(otp);
            hideLoader();
            if (!Backend.isSuccessfulRequest(statusCode)) {
                const errorMessage = await Backend.getErrorMessage(data).then(response => response);
                showPopupMessage('Error', errorMessage);
                otpInput.current.clear();
                return;
            }
            else if (data && data.success) {
                const { uidb64, token, success } = data;
                showPopupMessage('Success', success);
                goPage('forgotPasswordThird', 'forgotPasswordSecond', {
                    uidb64: uidb64,
                    token: token,
                });
                return;
            }
        }
        verify_with_otp(otp);
    }


    return (
        <View style={styles.container}>
            {popupMessageVisible ? <PopupMessage /> : null}
            {loaderVisible ? <Loader /> : null}
            <ScrollView contentContainerStyle={styles.contentContainer} showsVerticalScrollIndicator={false}>
                <View style={styles.header_container}>
                    <Text style={styles.header}>{translate('forgotPassword.title')}</Text>
                    <TouchableOpacity style={styles.backContainer} onPress={goBack}>
                        <SvgMaker style={styles.back} Svg={LeftArrow} />
                    </TouchableOpacity>
                </View>
                <View style={styles.line} />
                <Text style={styles.helpingText}>{translate('forgotPassword.descriptionSecond')}</Text>
                <OTPTextInput
                    ref={otpInput}
                    inputCount={4}
                    containerStyle={styles.otpInputContainer}
                    textInputStyle={styles.underlineStyleBase}
                    tintColor={colors.LightSeaGreen}
                    offTintColor={colors.SolidGrey}
                    handleTextChange={(OTP) => setOTP(OTP)}
                />
                <TouchableOpacity
                    style={styles.resend}
                    onPress={() => resendOTP(email)}
                >
                    <Text style={styles.ResendText}>{translate('forgotPassword.Resend')}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => verify(OTP)}
                >
                    <Text style={styles.buttonText}>{translate('forgotPassword.next')}</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
}