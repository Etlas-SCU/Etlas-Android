import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, TextInput, ScrollView, SafeAreaView } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { styles } from './Styles';
import { colors } from "../../AppStyles";

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
                    <Text style={styles.header}>Register</Text>
                    <TouchableOpacity style={styles.header} onPress={() => navigation.goBack()}>
                        <Image style={styles.arrow} source={require('../../assets/register/left-arrow.png')}></Image>
                    </TouchableOpacity>
                </View>
                <View style={styles.line}/>
                <Text style={styles.helpingText}>Please, fill your information up carefully.</Text>
                <View style={styles.inputView}>
                    <Text style={styles.stateName}>Full Name</Text>
                    <TextInput 
                        style={styles.inputForm} 
                        placeholder="Full Name" 
                        placeholderTextColor={colors.Grey} 
                        onChangeText={(fullname) => setFullName(fullname)}
                        cursorColor={colors.LightSeaGreen}
                    />
                </View>
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
                    <Text style={styles.passText}>Password must be at least 8 characters and must contain letters and symbols.</Text>
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
                    <Text style={styles.nextText}>Next</Text>
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