import { styles } from "./Styles";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { translate } from "../../../Localization";
import OTPTextInput from 'react-native-otp-textinput'
import { colors } from "../../../AppStyles";
import { useContext, useRef, useState } from "react";
import PopupMessage from "../../PopupMessage/PopupMessage";
import { UserContext } from "../../Context/Context";
import { goBack, goPage, getParams } from "../../../Backend/Navigator";
import Loader from "../../Loader/Loader";
import Backend from "../../../Backend/Backend";


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

    // try to verify
    const verify = async (otp) => {
        async function verify_with_otp(otp) {
            // check otp
            const checkotp = await checkOtp(otp).then((response) => { return response });
            if (checkotp === false)
                return;

            // verify with otp
            showLoader(translate('messages.verifying'));
            const { status, data } = await Backend.emailVerify(otp);
            hideLoader();
            if (status !== 200) {
                const errorMessage = await Backend.getErrorMessage(data).then(response => response);
                showPopupMessage('Error', errorMessage);
                otpInput.current.clear();
                return;
            }
            else if(data && data.success) {
                showPopupMessage('Success', data.success);
                goPage('login');
                return;
            }
        }
        verify_with_otp(otp);
    }


    // referesh the OTP
    const resendOTP = async () => {
        const { status, data } = await Backend.refereshOTP(email);
        if (status !== 200) {
            if(data.error)
                showPopupMessage('Error', data.error);
            else if(data.email)
                showPopupMessage('Error', data.email);
            return;
        }
        showPopupMessage('Success', data.success);
    }

    return (
        <View style={styles.container}>
            {loaderVisible ? <Loader /> : null}
            {popupMessageVisible ? <PopupMessage /> : null}
            <ScrollView contentContainerStyle={styles.contentContainer} showsVerticalScrollIndicator={false}>
                <View style={styles.header_container}>
                    <Text style={styles.header}>{translate('emailConfirmation.title')}</Text>
                    <TouchableOpacity style={styles.backContainer} onPress={goBack}>
                        <Image style={styles.back} source={require('../../../assets/register/left-arrow.png')} />
                    </TouchableOpacity>
                </View>
                <View style={styles.line} />
                <Text style={styles.helpingText}>{translate('emailConfirmation.description')}</Text>
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