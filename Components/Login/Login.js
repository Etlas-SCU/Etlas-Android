import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, TextInput, ScrollView } from "react-native";
import { styles } from './Styles';
import { colors } from "../../AppStyles";
import { translate } from '../../Localization'
import GoogleAuth from "../Authetincations/GoogleAuth";
import FacebookAuth from "../Authetincations/FacebookAuth";
import TwitterAuth from "../Authetincations/TwitterAuth";

export default function Login({ navigation }) {

    // get the data from input
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [hidden, setHidden] = useState(false);


    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.contentContainer} showsVerticalScrollIndicator={false}>
                <View style={styles.header_container}>
                    <Text style={styles.header}>{translate('Login.title')}</Text>
                    <TouchableOpacity style={styles.header} onPress={() => navigation.goBack()}>
                        <Image style={styles.arrow} source={require('../../assets/register/left-arrow.png')}></Image>
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
                    <TouchableOpacity onPress={() => { navigation.navigate({ name: 'forgotPasswordFirst' }) }}>
                        <Text style={styles.passText}>{translate('Login.forgotpassword')}</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.usingApp}>
                    <Text style={styles.usingAppText}>{translate('Login.or')} <Text style={{ fontWeight: 'bold' }}>{translate('Login.signup')}</Text> {translate('Login.using')}</Text>
                    <View style={styles.usingAppicons}>
                        <GoogleAuth/>
                        <TwitterAuth/>
                        <FacebookAuth/>
                    </View>
                </View>
                <TouchableOpacity
                    style={styles.nextButton}
                    onPress={() => { navigation.navigate({ name: 'menuBar' }) }}
                >
                    <Text style={styles.nextText}>{translate('Login.signin')}</Text>
                </TouchableOpacity>
                <View style={styles.signIn}>
                    <Text style={styles.haveAccount}>{translate('Login.haveaccount')} </Text>
                    <TouchableOpacity onPress={() => { navigation.navigate({ name: 'firstPage' }) }}>
                        <Text style={styles.signInText}>{translate('Login.signup')}</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
}