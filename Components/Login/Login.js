import { View, Text, Image, TouchableOpacity, TextInput, ScrollView } from "react-native";
import { styles } from './Styles';
import { colors } from "../../AppStyles";
import { translate } from '../../Localization'
import GoogleAuth from "../Authetincations/GoogleAuth";
import FacebookAuth from "../Authetincations/FacebookAuth";
import { useState, useContext } from "react";
import { goBack, goPage, goPageResetStack } from "../../Helpers/Navigator";
import Backend from "../../Helpers/Backend";
import { UserContext } from "../Context/Context";
import Loader from "../Loader/Loader";
import PopupMessage from "../PopupMessage/PopupMessage";
import AsyncStorage from "@react-native-async-storage/async-storage";
import SvgMaker from '../../Components/SvgMaker/SvgMaker';
import { LeftArrow, EyeIcon } from "../../assets/SVG/Icons";


export default function Login({ }) {

    // get the data from input
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [hidden, setHidden] = useState(false);
    const { showLoader, hideLoader, loaderVisible } = useContext(UserContext);
    const { showPopupMessage, popupMessageVisible } = useContext(UserContext);


    // check passowrd
    const checkPassword = async (password) => {
        const { state, message } = await Backend.checkPassword(password);
        if (!state) {
            showPopupMessage('Error', message);
            return false;
        }
        return true;
    }

    // check email
    const checkEmail = async (email) => {
        const { state, message } = await Backend.checkEmail(email);
        if (!state) {
            showPopupMessage('Error', message);
            return false;
        }
        return true;
    }

    // login
    const handle_login = async () => {
        // check email  
        const checkemail = await checkEmail(email).then((response) => { return response });
        if (checkemail === false)
            return;

        // check password
        const checkpass = await checkPassword(password).then((response) => { return response });
        if (checkpass === false)
            return;

        // login
        async function login_fetch() {
            showLoader(translate('messages.loggingIn'));
            const { statusCode, data } = await Backend.login(email, password);
            hideLoader();

            if (!Backend.isSuccessfulRequest(statusCode)) {
                const errorMessage = await Backend.getErrorMessage(data).then(response => response);
                showPopupMessage('Error', errorMessage);
            }
            else {
                // store user data to use
                const user = {
                    id: data.id,
                    email: data.email,
                    full_name: data.full_name,
                    address: data.address,
                    phone_number: data.phone_number,
                    image_url: data.image_url,
                };
                await AsyncStorage.setItem('user', JSON.stringify(user));

                // store token to use
                const { access: accessToken, refresh: refreshToken } = data.tokens;
                await AsyncStorage.setItem('accessToken', accessToken);
                await AsyncStorage.setItem('refreshToken', refreshToken);

                // go to home page
                goPageResetStack('menuBar');
            }
        }
        login_fetch();
    };


    return (
        <View style={styles.container}>
            {popupMessageVisible ? <PopupMessage /> : null}
            {loaderVisible ? <Loader /> : null}
            <ScrollView contentContainerStyle={styles.contentContainer} showsVerticalScrollIndicator={false}>
                <View style={styles.header_container}>
                    <Text style={styles.header}>{translate('Login.title')}</Text>
                    <TouchableOpacity style={styles.backContainer} onPress={goBack}>
                        <SvgMaker style={styles.back} Svg={LeftArrow} />
                    </TouchableOpacity>
                </View>
                <View style={styles.line} />
                <Text style={styles.helpingText}>{translate('Login.description')}</Text>
                <View style={styles.inputView}>
                    <Text style={styles.stateName}>{translate('Login.email')}</Text>
                    <TextInput
                        style={styles.inputForm}
                        placeholder={translate('Login.email')}
                        placeholderTextColor={colors.Grey}
                        onChangeText={(email) => setEmail(email)}
                        cursorColor={colors.LightSeaGreen}
                    />
                </View>
                <View style={styles.inputView}>
                    <Text style={styles.stateName}>{translate('Login.password')}</Text>
                    <View style={styles.passwordContainer}>
                        <TextInput
                            style={styles.inputForm}
                            placeholder={translate('Login.password')}
                            placeholderTextColor={colors.Grey}
                            onChangeText={(password) => setPassword(password)}
                            secureTextEntry={!hidden}
                            cursorColor={colors.LightSeaGreen}
                        />
                        <TouchableOpacity style={styles.passwordEyeButton} onPress={() => setHidden(!hidden)}>
                            <SvgMaker style={styles.passwordContainerImage} Svg={EyeIcon} />
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity onPress={() => { goPage('forgotPasswordFirst', 'login') }}>
                        <Text style={styles.passText}>{translate('Login.forgotpassword')}</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.usingApp}>
                    <Text style={styles.usingAppText}>{translate('Login.or')} <Text style={{ fontWeight: 'bold' }}>{translate('Login.signup')}</Text> {translate('Login.using')}</Text>
                    <View style={styles.usingAppicons}>
                        <GoogleAuth />
                        <FacebookAuth />
                    </View>
                </View>
                <TouchableOpacity
                    style={styles.nextButton}
                    onPress={() => { handle_login() }}
                >
                    <Text style={styles.nextText}>{translate('Login.signin')}</Text>
                </TouchableOpacity>
                <View style={styles.signIn}>
                    <Text style={styles.haveAccount}>{translate('Login.haveaccount')} </Text>
                    <TouchableOpacity onPress={() => { goPage('firstPage') }}>
                        <Text style={styles.signInText}>{translate('Login.signup')}</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
}