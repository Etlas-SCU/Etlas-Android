import { useState, useContext } from "react";
import { View, Text, Image, TouchableOpacity, TextInput, ScrollView } from "react-native";
import { styles } from './Styles';
import { colors } from "../../AppStyles";
import { translate } from '../../Localization'
import GoogleAuth from "../Authetincations/GoogleAuth";
import FacebookAuth from "../Authetincations/FacebookAuth";
import { goPage, goBack } from "../../Backend/Navigator";
import { UserContext } from "../Context/Context";
import PopupMessage from "../PopupMessage/PopupMessage";

export function FirstPage({ }) {

    // get the data from input
    const [fullname, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [hidden, setHidden] = useState(false);
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

    // check the inputs
    const checkInputs = () => {
        // check if all fields are filled
        if(!fullname.length || !email.length || !password.length){
            showPopupMessage('Error', translate('messages.fillAllFieldsReg'));
            return;
        }

        // check if it's valid email
        if(!email.includes('@')){
            showPopupMessage('Error', translate('messages.invalidEmail'));
            return;
        }

        // check password
        checkPassword();

        // go to next page
        goPage('secondPage', 'firstPage', {
            fullname: fullname,
            email: email,
            password: password
        })
    };


    return (
        <View style={styles.container}>
            {popupMessageVisible ? <PopupMessage /> : null}
            <ScrollView contentContainerStyle={styles.contentContainer} showsVerticalScrollIndicator={false}>
                <View style={styles.header_container}>
                    <Text style={styles.header}>{translate('Register.title')}</Text>
                    <TouchableOpacity style={styles.backContainer} onPress={goBack}>
                        <Image style={styles.back} source={require('../../assets/register/left-arrow.png')} />
                    </TouchableOpacity>
                </View>
                <View style={styles.line} />
                <Text style={styles.helpingText}>{translate('Register.description')}</Text>
                <View style={styles.inputView}>
                    <Text style={styles.stateName}>{translate('Register.fullname')}</Text>
                    <TextInput
                        style={styles.inputForm}
                        placeholder={translate('Register.fullname')}
                        placeholderTextColor={colors.Grey}
                        onChangeText={(fullname) => setFullName(fullname)}
                        cursorColor={colors.LightSeaGreen}
                    />
                </View>
                <View style={styles.inputView}>
                    <Text style={styles.stateName}>{translate('Register.email')}</Text>
                    <TextInput
                        style={styles.inputForm}
                        placeholder={translate('Register.email')}
                        placeholderTextColor={colors.Grey}
                        onChangeText={(email) => setEmail(email)}
                        cursorColor={colors.LightSeaGreen}
                    />
                </View>
                <View style={styles.inputView}>
                    <Text style={styles.stateName}>{translate('Register.password')}</Text>
                    <View style={styles.passwordContainer}>
                        <TextInput
                            style={styles.inputForm}
                            placeholder={translate('Register.password')}
                            placeholderTextColor={colors.Grey}
                            onChangeText={(password) => setPassword(password)}
                            secureTextEntry={!hidden}
                            cursorColor={colors.LightSeaGreen}
                        />
                        <TouchableOpacity style={styles.passwordEyeButton} onPress={() => setHidden(!hidden)}>
                            <Image style={styles.passwordContainerImage} source={require('../../assets/register/codicon_eye.png')} />
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.passText}>{translate('Register.passwordhint')}</Text>
                </View>
                <View style={styles.usingApp}>
                    <Text style={styles.usingAppText}>{translate('Register.or')} <Text style={{ fontWeight: 'bold' }}>{translate('Register.signup')}</Text> {translate('Register.using')}</Text>
                    <View style={styles.usingAppicons}>
                        <GoogleAuth />
                        <FacebookAuth />
                    </View>
                </View>
                <TouchableOpacity
                    style={styles.nextButton}
                    onPress={() => {checkInputs()}}
                >
                    <Text style={styles.nextText}>{translate('Register.next')}</Text>
                </TouchableOpacity>
                <View style={styles.signIn}>
                    <Text style={styles.haveAccount}>{translate('Register.haveaccount')} </Text>
                    <TouchableOpacity onPress={() => { goPage('login') }}>
                        <Text style={styles.signInText}>{translate('Register.signin')}</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
}