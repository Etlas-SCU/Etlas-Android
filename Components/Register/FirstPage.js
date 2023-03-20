import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, TextInput, ScrollView, SafeAreaView } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { styles } from './Styles';
import { colors } from "../../AppStyles";
import { translate } from '../../Localization'

export function FirstPage() {

    // get the navigation
    const navigation = useNavigation();    

    // get the data from input
    const [fullname, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [hidden, setHidden] = useState(false);


    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.container}>
                <View style={styles.header_container}>
                    <Text style={styles.header}>{translate('Register.title')}</Text>
                    <TouchableOpacity style={styles.header} onPress={() => navigation.goBack()}>
                        <Image style={styles.arrow} source={require('../../assets/register/left-arrow.png')}></Image>
                    </TouchableOpacity>
                </View>
                <View style={styles.line}/>
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
                            style={[styles.inputForm, {flex: 1}]} 
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
                    <Text style={styles.usingAppText}>{translate('Register.or')} <Text style={{fontWeight: 'bold'}}>{translate('Register.signup')}</Text> {translate('Register.using')}</Text>
                    <View style={styles.usingAppicons}>
                        <TouchableOpacity>
                            <Image source={require('../../assets/register/google.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image source={require('../../assets/register/twitter.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image source={require('../../assets/register/facebook.png')} />
                        </TouchableOpacity>
                    </View>
                </View>
                <TouchableOpacity 
                    style={styles.nextButton} 
                    onPress={() => {
                        navigation.navigate({
                            name: 'secondPage',
                            params: {
                                fullname: fullname,
                                email: email,
                                password: password
                            }    
                        })
                    }}
                >
                    <Text style={styles.nextText}>{translate('Register.next')}</Text>
                </TouchableOpacity>
                <View style={styles.signIn}>
                    <Text style={styles.haveAccount}>{translate('Register.haveaccount')} </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('login')}>
                            <Text style={styles.signInText}>{translate('Register.signin')}</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>    
        </SafeAreaView>
    );
}