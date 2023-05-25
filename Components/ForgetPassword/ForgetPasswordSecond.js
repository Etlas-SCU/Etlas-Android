import { styles } from "./Styles";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { translate } from "../../Localization";
import OTPTextInput from 'react-native-otp-textinput'
import { colors } from "../../AppStyles";
import { useContext, useRef, useState } from "react";
import PopupMessage from "../PopupMessage/PopupMessage";
import { UserContext } from "../Context/Context";
import { goBack, goPage } from "../../Backend/Navigator";


export default function ForgotPasswordSecond({ }) {

    const [OTP, setOTP] = useState('');
    const otpInput = useRef(null);
    const { popupMessageVisible, showPopupMessage } = useContext(UserContext);

    const checkOtp = () => {
        if (OTP) {
            goPage('forgotPasswordThird', 'forgotPasswordSecond');
        } else {
            otpInput.current.clear();
            showPopupMessage('Error', 'Invalid OTP');
        }
    }

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.contentContainer} showsVerticalScrollIndicator={false}>
                <View style={styles.header_container}>
                    <Text style={styles.header}>{translate('forgotPassword.title')}</Text>
                    <TouchableOpacity style={styles.backContainer} onPress={goBack}>
                        <Image style={styles.back} source={require('../../assets/register/left-arrow.png')} />
                    </TouchableOpacity>
                </View>
                <View style={styles.line} />
                <Text style={styles.helpingText}>{translate('forgotPassword.descriptionSecond')}</Text>
                {popupMessageVisible ? <PopupMessage /> : null}
                <OTPTextInput
                    ref={otpInput}
                    inputCount={4}
                    containerStyle={styles.otpInputContainer}
                    textInputStyle={styles.underlineStyleBase}
                    tintColor={colors.LightSeaGreen}
                    offTintColor={colors.SolidGrey}
                    handleTextChange={(OTP) => setOTP(OTP)}
                />
                <TouchableOpacity style={styles.resend}>
                    <Text style={styles.ResendText}>{translate('forgotPassword.Resend')}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => checkOtp()}
                >
                    <Text style={styles.buttonText}>{translate('forgotPassword.next')}</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
}