import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, TextInput, ScrollView, SafeAreaView } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { styles } from './Styles';
import { colors } from "../../AppStyles";

export default function Login() {

    // get the navigation
    const navigation = useNavigation();    

    // get the data from input
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [hidden, setHidden] = useState(false);


    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.container}>
                <View style={styles.header_container}>
                    <Text style={styles.header}>Login</Text>
                    <TouchableOpacity style={styles.header} onPress={() => navigation.goBack()}>
                        <Image style={styles.arrow} source={require('../../assets/register/left-arrow.png')}></Image>
                    </TouchableOpacity>
                </View>
                <View style={styles.line}/>
                <Text style={styles.helpingText}>Please, Enter Your Account.</Text>
                <View style={styles.inputView}>
                    <Text style={styles.stateName}>E-mail</Text>
                    <TextInput 
                        style={styles.inputForm} 
                        placeholder="E-mail" 
                        placeholderTextColor={colors.Grey} 
                        onChangeText={(email) => setEmail(email)}
                        cursorColor={colors.LightSeaGreen}
                    />
                </View>
                <View style={styles.inputView}>
                    <Text style={styles.stateName}>Password</Text>
                    <View style={styles.passwordContainer}>
                        <TextInput 
                            style={[styles.inputForm, {flex: 1}]} 
                            placeholder="Password" 
                            placeholderTextColor={colors.Grey} 
                            onChangeText={(password) => setPassword(password)}
                            secureTextEntry={!hidden}
                            cursorColor={colors.LightSeaGreen}
                        />
                        <TouchableOpacity style={styles.passwordEyeButton} onPress={() => setHidden(!hidden)}>
                            <Image style={styles.passwordContainerImage} source={require('../../assets/register/codicon_eye.png')} />
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.passText}>Forgot password?</Text>
                </View>
                <View style={styles.usingApp}>
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
                <TouchableOpacity 
                    style={styles.nextButton} 
                >
                    <Text style={styles.nextText}>Sign in</Text>
                </TouchableOpacity>
                <View style={styles.signIn}>
                    <Text style={styles.haveAccount}>Don't have an account yet? </Text>
                    <TouchableOpacity onPress={() => { navigation.navigate({name: 'firstPage'})}}>
                            <Text style={styles.signInText}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>    
        </SafeAreaView>
    );
}