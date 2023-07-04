import { styles } from "./Styles";
import { View, Text, Image, TouchableOpacity, ScrollView, TextInput } from "react-native";
import { translate } from "../../Localization";
import { colors } from "../../AppStyles";
import { useState, useContext } from "react";
import { goBack, goPageResetStack, getParams } from "../../Helpers/Navigator";
import Backend from "../../Helpers/Backend";
import Loader from "../Loader/Loader";
import PopupMessage from "../PopupMessage/PopupMessage";
import { UserContext } from "../Context/Context";
import SvgMaker from '../../Components/SvgMaker/SvgMaker';
import { LeftArrow, EyeIcon } from "../../assets/SVG/Icons";


export default function ForgotPasswordThird({ }) {

    // for password
    const [password, setPassword] = useState('');
    const [hiddenPassword, setHiddenPassword] = useState(true);

    // for confirm password
    const [confirmPassword, setConfirmPassword] = useState('');
    const [hiddenConfirmPassword, setHiddenConfirmPassword] = useState(true);

    // get requirments from parameters
    const { uidb64, token } = getParams();

    // loader
    const { showLoader, hideLoader, loaderVisible } = useContext(UserContext);

    // popup message
    const { showPopupMessage, popupMessageVisible } = useContext(UserContext);


    // check password
    const checkPassword = async (password) => {
        const { state, message } = await Backend.checkPassword(password);
        if (!state) {
            showPopupMessage('Error', message);
            return false;
        }
        return true;
    }

    // check confirm password
    const checkConfirmPassword = async (confirmPassword, password) => {
        const { state, message } = await Backend.checkConfirmPassword(password, confirmPassword);
        if (!state) {
            showPopupMessage('Error', message);
            return false;
        }
        return true;
    }

    // handle error message
    const handleSubmit = async () => {
        // check password
        const checkpass = await checkPassword(password).then((response) => { return response });
        if (checkpass === false)
            return;

        // check confirm password
        const checkconfirmpass = await checkConfirmPassword(confirmPassword, password).then((response) => { return response });
        if (checkconfirmpass === false)
            return;

        // show loader
        showLoader(translate('messages.ChangingPassword'));

        // send request to backend
        const { statusCode, data } = await Backend.passwordResetConfirm(password, confirmPassword, token, uidb64);

        // hide loader
        hideLoader();

        if (!Backend.isSuccessfulRequest(statusCode)) {
            const errorMessage = await Backend.getErrorMessage(data).then(response => response);
            showPopupMessage('Error', errorMessage);
            return;
        }

        // show success message
        showPopupMessage('Success', data.message);

        // go to login page
        goPageResetStack('login');
    }

    return (
        <View style={styles.container}>
            {loaderVisible ? <Loader /> : null}
            {popupMessageVisible ? <PopupMessage /> : null}
            <ScrollView contentContainerStyle={styles.contentContainer} showsVerticalScrollIndicator={false}>
                <View style={styles.header_container}>
                    <Text style={styles.header}>{translate('forgotPassword.title')}</Text>
                    <TouchableOpacity style={styles.backContainer} onPress={goBack}>
                        <SvgMaker style={styles.back} Svg={LeftArrow} />
                    </TouchableOpacity>
                </View>
                <View style={styles.line} />
                <Text style={styles.helpingText}>{translate('Login.description')}</Text>
                <View style={styles.inputView}>
                    <View style={styles.inputContainer}>
                        <Text style={styles.stateName}>{translate('forgotPassword.NewPassword')}</Text>
                        <View style={styles.passwordContainer}>
                            <TextInput
                                style={styles.inputForm}
                                placeholder={translate('forgotPassword.NewPassword')}
                                placeholderTextColor={colors.Grey}
                                onChangeText={(password) => setPassword(password)}
                                cursorColor={colors.LightSeaGreen}
                                secureTextEntry={hiddenPassword}
                            />
                            <TouchableOpacity style={styles.passwordEyeButton} onPress={() => setHiddenPassword(!hiddenPassword)}>
                                <SvgMaker style={styles.passwordContainerImage} Svg={EyeIcon} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.stateName}>{translate('forgotPassword.ConfirmPassword')}</Text>
                        <View style={styles.passwordContainer}>
                            <TextInput
                                style={styles.inputForm}
                                placeholder={translate('forgotPassword.ConfirmPassword')}
                                placeholderTextColor={colors.Grey}
                                onChangeText={(confirmPassword) => setConfirmPassword(confirmPassword)}
                                cursorColor={colors.LightSeaGreen}
                                secureTextEntry={hiddenConfirmPassword}
                            />
                            <TouchableOpacity style={styles.passwordEyeButton} onPress={() => setHiddenConfirmPassword(!hiddenConfirmPassword)}>
                                <SvgMaker style={styles.passwordContainerImage} Svg={EyeIcon} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => { handleSubmit() }}
                >
                    <Text style={styles.buttonText}>{translate('forgotPassword.finish')}</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
}