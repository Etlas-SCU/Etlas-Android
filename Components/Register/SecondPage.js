import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, TextInput, ScrollView } from "react-native";
import IntlPhoneField from 'react-native-intl-phone-field';
import { styles } from './Styles';
import { colors } from "../../AppStyles";
import { translate } from '../../Localization'
import GoogleAuth from "../Authetincations/GoogleAuth";
import FacebookAuth from "../Authetincations/FacebookAuth";
import TwitterAuth from "../Authetincations/TwitterAuth";
import { getParams, goBack, goPage } from "../../Backend/Navigator";


export function SecondPage({ }) {

    // get the fullname, email and password from route params 
    const { fullname, email, password } = getParams();
    const [phoneNumber, setPhoneNumber] = useState('');
    const [address, setAddress] = useState('');

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.contentContainer} showsVerticalScrollIndicator={false}>
                <View style={styles.header_container}>
                    <Text style={styles.header}>{translate('Register.title')}</Text>
                    <TouchableOpacity style={styles.header} onPress={goBack}>
                        <Image style={styles.arrow} source={require('../../assets/register/left-arrow.png')}></Image>
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
                        <TwitterAuth />
                        <FacebookAuth />
                    </View>
                </View>
                <TouchableOpacity style={styles.nextButtonSecond}>
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