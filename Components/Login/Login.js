import { View, Text, Image, TouchableOpacity, TextInput, ScrollView } from "react-native";
import { styles } from './Styles';
import { colors } from "../../AppStyles";
import { translate } from '../../Localization'
import GoogleAuth from "../Authetincations/GoogleAuth";
import FacebookAuth from "../Authetincations/FacebookAuth";
import { useState, useContext } from "react";
import { goBack, goPage } from "../../Backend/Navigator";
import Backend from "../../Backend/Backend";
import { UserContext } from "../Context/Context";
import Loader from "../Loader/Loader";
import PopupMessage from "../PopupMessage/PopupMessage";
import AsyncStorage from "@react-native-async-storage/async-storage";


export default function Login({ }) {

    // get the data from input
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [hidden, setHidden] = useState(false);
    const {showLoader, hideLoader, loaderVisible} = useContext(UserContext);
    const {showPopupMessage, popupMessageVisible} = useContext(UserContext);


    // check password
    const checkPassword = () => {
        // check how strong of password
        if(password.length < 8){
            showPopupMessage('Error', translate('messages.passwordLength'));
            return;
        }
        if(password.length > 20){
            showPopupMessage('Error', translate('messages.passwordLength'));
            return;
        }
        if(!password.match(/[a-z]/g)){
            showPopupMessage('Error', translate('messages.passwordLowercase'));
            return;
        }
        if(!password.match(/[A-Z]/g)){
            showPopupMessage('Error', translate('messages.passwordUppercase'));
            return;
        }
        if(!password.match(/[0-9]/g)){
            showPopupMessage('Error', translate('messages.passwordNumber'));
            return;
        }
        if(!password.match(/[^a-zA-Z\d]/g)){
            showPopupMessage('Error', translate('messages.passwordSpecial'));
            return;
        }
    };

    // login
    const handle_login = () => {
        if(!password.length || !email.length){
            showPopupMessage('Error', translate('messages.fillAllFieldsReg'));
            return;
        }
        // check if it's valid email
        if(!email.includes('@') || !email.includes('.com')){
            showPopupMessage('Error', translate('messages.invalidEmail'));
            return;
        }
        // check password
        checkPassword();
        async function login_fetch() {
            showLoader(translate('messages.loggingIn'));
            const response = await Backend.login(email, password);
            if(response){
                if(response.detail)
                    showPopupMessage('Error', response.detail);
                else {
                    // store user data to use
                    const user = {
                        id: response.id,
                        email: response.email,
                        full_name: response.full_name,
                        address: response.address,
                        phone_number: response.phone_number,
                        image_url: response.image_url,
                    };
                    await AsyncStorage.setItem('user', JSON.stringify(user));
                    
                    // store token to use
                    const { access:accessToken, refresh:refreshToken } = response.tokens;
                    await AsyncStorage.setItem('accessToken', accessToken);
                    await AsyncStorage.setItem('refreshToken', refreshToken);
                    // go to home page
                    goPage('menuBar');
                }
                hideLoader();
            }
        }
        login_fetch();
    };


    return (
        <View style={styles.container}>
            {popupMessageVisible ? <PopupMessage/> : null}
            {loaderVisible ? <Loader/> : null}
            <ScrollView contentContainerStyle={styles.contentContainer} showsVerticalScrollIndicator={false}>
                <View style={styles.header_container}>
                    <Text style={styles.header}>{translate('Login.title')}</Text>
                    <TouchableOpacity style={styles.backContainer} onPress={goBack}>
                        <Image style={styles.back} source={require('../../assets/register/left-arrow.png')} />
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
                            <Image style={styles.passwordContainerImage} source={require('../../assets/register/codicon_eye.png')} />
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity onPress={() => { goPage('forgotPasswordFirst', 'login') }}>
                        <Text style={styles.passText}>{translate('Login.forgotpassword')}</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.usingApp}>
                    <Text style={styles.usingAppText}>{translate('Login.or')} <Text style={{ fontWeight: 'bold' }}>{translate('Login.signup')}</Text> {translate('Login.using')}</Text>
                    <View style={styles.usingAppicons}>
                        <GoogleAuth/>
                        <FacebookAuth/>
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