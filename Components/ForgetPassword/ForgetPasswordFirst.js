import { styles } from "./Styles";
import { View, Text, Image, TouchableOpacity, ScrollView, TextInput } from "react-native";
import { translate } from "../../Localization";
import { colors } from "../../AppStyles";
import { useState, useContext } from "react";
import { goBack, goPage } from "../../Helpers/Navigator";
import Backend from "../../Helpers/Backend";
import PopupMessage from "../PopupMessage/PopupMessage";
import Loader from "../Loader/Loader";
import { UserContext } from "../Context/Context";
import SvgMaker from '../../Components/SvgMaker/SvgMaker';
import { LeftArrow } from "../../assets/SVG/Icons";


export default function ForgotPasswordFirst({ }) {

    // get the data from input
    const [email, setEmail] = useState('');

    // get popup states and loader
    const { showPopupMessage, popupMessageVisible } = useContext(UserContext);
    const { loaderVisible, showLoader, hideLoader } = useContext(UserContext);

    // check email
    const checkEmail = async (email) => {
        const { state, message } = await Backend.checkEmail(email);
        if (!state) {
            showPopupMessage('Error', message);
            return false;
        }
        return true;
    }

    // handle gonext
    const handle_goNext = async (email) => {
        // check email
        const checkemail = await checkEmail(email).then((response) => { return response });
        if (checkemail === false)
            return;

        // verify with otp
        showLoader(translate('messages.sendingOTP'));
        const { statusCode, data } = await Backend.passwordReset(email);
        hideLoader();

        if (!Backend.isSuccessfulRequest(statusCode)) {
            const errorMessage = await Backend.getErrorMessage(data).then(response => response);
            showPopupMessage('Error', errorMessage);
            return;
        }
        else if (data && data.success) {
            showPopupMessage('Success', data.success);

            // go next
            goPage('forgotPasswordSecond', 'forgotPasswordFirst', { email: email });
            return;
        }
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
                <Text style={styles.helpingText}>{translate('forgotPassword.descriptionFirst')}</Text>
                <View style={styles.FirstPageInput}>
                    <Text style={styles.stateName}>{translate('forgotPassword.email')}</Text>
                    <TextInput
                        style={styles.inputForm}
                        placeholder={translate('forgotPassword.email')}
                        placeholderTextColor={colors.Grey}
                        onChangeText={(email) => setEmail(email)}
                        cursorColor={colors.LightSeaGreen}
                    />
                </View>
                <TouchableOpacity style={styles.button} onPress={() => { handle_goNext(email) }}>
                    <Text style={styles.buttonText}>{translate('forgotPassword.next')}</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
}