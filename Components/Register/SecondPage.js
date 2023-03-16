import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, TextInput, ScrollView, SafeAreaView } from "react-native";
import IntlPhoneField from 'react-native-intl-phone-field';
import { useNavigation } from '@react-navigation/native';
import { styles } from './Styles';
import { colors } from "../../AppStyles";

export function SecondPage({ route }) {

    // get the navigation
    const navigation = useNavigation();    

    // get the fullname, email and password from route params 
    const { fullname, email, password } = route.params;
    const [phoneNumber, setPhoneNumber] = useState('');
    const [address, setAddress] = useState('');
        
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.container}>
                <View style={styles.header_container}>
                    <Text style={styles.header}>Register</Text>
                    <TouchableOpacity style={styles.header} onPress={() => navigation.goBack()}>
                        <Image style={styles.arrow} source={require('../../assets/register/left-arrow.png')}></Image>
                    </TouchableOpacity>
                </View>
                <View style={styles.line}/>
                <Text style={styles.helpingText}>Please, fill your information up carefully.</Text>
                <View style={styles.inputView}>
                    <Text style={styles.stateName}>Phone Number</Text>
                    <IntlPhoneField
                        defaultCountry="EG"
                        defaultPrefix="+20"
                        onChangeText={(phoneNumber) => setPhoneNumber(phoneNumber)}
                        containerStyle={styles.inputForm}
                        textInputStyle={styles.inputFormText}
                    />
                </View>
                <View style={styles.inputView}>
                    <Text style={styles.stateName}>Address</Text>
                    <TextInput 
                        style={styles.inputForm} 
                        placeholder="Address" 
                        placeholderTextColor={colors.Grey} 
                        onChangeText={(address) => setAddress(address)}
                        cursorColor={colors.LightSeaGreen}
                    />
                </View>
                <View style={styles.usingAppSecond}>
                    <Text style={styles.usingAppText}>OR <Text style={{fontWeight: 'bold'}}>Sign Up</Text> Using</Text>
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
                <TouchableOpacity style={styles.nextButtonSecond}>
                        <Text style={styles.nextText}>Register</Text>
                </TouchableOpacity>
                <View style={styles.signIn}>
                    <Text style={styles.haveAccount}>Already have an account? </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('login')}>
                            <Text style={styles.signInText}>Sign In</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}