import { useState, useContext } from "react";
import { View, Text, Image, TouchableOpacity, TextInput, ScrollView } from "react-native";
import IntlPhoneField from 'react-native-intl-phone-field';
import { styles } from './Styles';
import { colors } from "../../AppStyles";
import { translate } from '../../Localization'
import GoogleAuth from "../Authetincations/GoogleAuth";
import FacebookAuth from "../Authetincations/FacebookAuth";
import { getParams, goBack, goPage } from "../../Backend/Navigator";
import Loader from "../Loader/Loader";
import PopupMessage from "../PopupMessage/PopupMessage";
import Backend from "../../Backend/Backend";
import { UserContext } from "../Context/Context";
import AsyncStorage from "@react-native-async-storage/async-storage";


export function SecondPage({ }) {

    // get the fullname, email and password from route params 
    const { fullname, email, password } = getParams();
    const [phoneNumber, setPhoneNumber] = useState('');
    const [address, setAddress] = useState('');
    const { showLoader, hideLoader, loaderVisible } = useContext(UserContext);
    const { showPopupMessage, popupMessageVisible } = useContext(UserContext);

    // register
    const handle_register = () => {
        async function register_fetch() {
            showLoader(translate('messages.registering'));
            const { statusCode, data } = await Backend.register(fullname, email, password, phoneNumber, address);
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

                showPopupMessage('Success', translate('messages.emailSent'));
                // store token to use
                goPage('emailVerification', 'secondPage', {
                    email: email,
                });
            }
        }
        register_fetch();
    };

    return (
        <View style={styles.container}>
            {loaderVisible ? <Loader /> : null}
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
                    <Text style={styles.stateName}>{translate('Register.phonenumber')}</Text>
                    <IntlPhoneField
                        defaultCountry="EG"
                        defaultPrefix="+20"
                        onChangeText={(phoneNumber) => setPhoneNumber(phoneNumber)}
                        containerStyle={styles.inputForm}
                        textInputStyle={styles.inputFormText}
                    />
                </View>
                <View style={styles.inputView}>
                    <Text style={styles.stateName}>{translate('Register.address')}</Text>
                    <TextInput
                        style={styles.inputForm}
                        placeholder={translate('Register.address')}
                        placeholderTextColor={colors.Grey}
                        onChangeText={(address) => setAddress(address)}
                        cursorColor={colors.LightSeaGreen}
                    />
                </View>
                <View style={styles.usingAppSecond}>
                    <Text style={styles.usingAppText}>{translate('Register.or')} <Text style={{ fontWeight: 'bold' }}>{translate('Register.signup')}</Text> {translate('Register.using')}</Text>
                    <View style={styles.usingAppicons}>
                        <GoogleAuth />
                        <FacebookAuth />
                    </View>
                </View>
                <TouchableOpacity
                    style={styles.nextButtonSecond}
                    onPress={() => { handle_register() }}
                >
                    <Text style={styles.nextText}>{translate('Register.signup')}</Text>
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