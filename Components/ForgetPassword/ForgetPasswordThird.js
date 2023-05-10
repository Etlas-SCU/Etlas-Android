import { styles } from "./Styles";
import { View, Text, Image, TouchableOpacity, ScrollView, TextInput } from "react-native";
import { translate } from "../../Localization";
import { colors } from "../../AppStyles";
import { useState } from "react";


export default function ForgotPasswordThird({ navigation }) {

    // for password
    const [password, setPassword] = useState('');
    const [hiddenPassword, setHiddenPassword] = useState(true);

    // for confirm password
    const [confirmPassword, setConfirmPassword] = useState('');
    const [hiddenConfirmPassword, setHiddenConfirmPassword] = useState(true);

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.contentContainer} showsVerticalScrollIndicator={false}>
                <View style={styles.header_container}>
                    <Text style={styles.header}>{translate('Register.title')}</Text>
                    <TouchableOpacity style={styles.header} onPress={() => navigation.goBack()}>
                        <Image style={styles.arrow} source={require('../../assets/register/left-arrow.png')}></Image>
                    </TouchableOpacity>
                </View>
                <View style={styles.line} />
                <Text style={styles.helpingText}>{translate('Login.description')}</Text>
                <View style={styles.inputView}>
                    <View style={styles.inputContainer}>
                        <Text style={styles.stateName}>{translate('forgotPassword.NewPassword')}</Text>
                        <View style={styles.passwordContainer}>
                            <TextInput
                                style={styles.inputForm}
                                placeholder={translate('forgotPassword.NewPassword')}
                                placeholderTextColor={colors.Grey}
                                onChangeText={(password) => setPassword(password)}
                                cursorColor={colors.LightSeaGreen}
                                secureTextEntry={hiddenPassword}
                            />
                            <TouchableOpacity style={styles.passwordEyeButton} onPress={() => setHiddenPassword(!hiddenPassword)}>
                                <Image style={styles.passwordContainerImage} source={require('../../assets/register/codicon_eye.png')} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.stateName}>{translate('forgotPassword.ConfirmPassword')}</Text>
                        <View style={styles.passwordContainer}>
                            <TextInput
                                style={styles.inputForm}
                                placeholder={translate('forgotPassword.ConfirmPassword')}
                                placeholderTextColor={colors.Grey}
                                onChangeText={(confirmPassword) => setConfirmPassword(confirmPassword)}
                                cursorColor={colors.LightSeaGreen}
                                secureTextEntry={hiddenConfirmPassword}
                            />
                            <TouchableOpacity style={styles.passwordEyeButton} onPress={() => setHiddenConfirmPassword(!hiddenConfirmPassword)}>
                                <Image style={styles.passwordContainerImage} source={require('../../assets/register/codicon_eye.png')} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('forgotPasswordSecond')}>
                    <Text style={styles.buttonText}>{translate('forgotPassword.finish')}</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
}