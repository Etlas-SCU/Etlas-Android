import { styles } from "./Styles";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { translate } from "../../Localization";
import OTPTextInput from 'react-native-otp-textinput'
import { colors } from "../../AppStyles";
import { useContext, useRef, useState } from "react";
import PopupMessage from "../PopupMessage/PopupMessage";
import { UserContext } from "../Context/Context";


export default function ForgotPasswordSecond({ navigation }) {

    const [ OTP, setOTP ] = useState('');
    const otpInput = useRef(null);
    const { popupMessageVisible, showPopupMessage } = useContext(UserContext);

    const checkOtp = () => {
        if (OTP) {
            navigation.navigate('forgotPasswordThird');
        } else {
            otpInput.current.clear();
            showPopupMessage();
        }
    }

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.contentContainer} showsVerticalScrollIndicator={false}>
                <View style={styles.header_container}>
                    <Text style={styles.header}>{translate('forgotPassword.title')}</Text>
                    <TouchableOpacity style={styles.header} onPress={() => { navigation.goBack() }}>
                        <Image style={styles.arrow} source={require('../../assets/register/left-arrow.png')}></Image>
                    </TouchableOpacity>
                </View>
                <View style={styles.line} />
                <Text style={styles.helpingText}>{translate('forgotPassword.descriptionSecond')}</Text>
                { popupMessageVisible ? <PopupMessage  state={'Error'} message={'Invalid OTP'} /> : null }
                <OTPTextInput
                    ref={otpInput}
                    inputCount={6}
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