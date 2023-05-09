import { styles } from "./Styles";
import { View, Text, Image, TouchableOpacity, ScrollView, TextInput } from "react-native";
import { translate } from "../../Localization";
import { colors } from "../../AppStyles";
import { useState } from "react";


export default function ForgotPasswordThird({ navigation }) {

    // get the data from input
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');


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
                        <TextInput
                            style={styles.inputForm}
                            placeholder={translate('forgotPassword.NewPassword')}
                            placeholderTextColor={colors.Grey}
                            onChangeText={(password) => setPassword(password)}
                            cursorColor={colors.LightSeaGreen}
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.stateName}>{translate('forgotPassword.ConfirmPassword')}</Text>
                        <TextInput
                            style={styles.inputForm}
                            placeholder={translate('forgotPassword.ConfirmPassword')}
                            placeholderTextColor={colors.Grey}
                            onChangeText={(confirmPassword) => setConfirmPassword(confirmPassword)}
                            cursorColor={colors.LightSeaGreen}
                        />
                    </View>
                </View>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('forgotPasswordSecond')}>
                    <Text style={styles.buttonText}>{translate('forgotPassword.finish')}</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
}