import { styles } from "./Styles";
import { View, Text, Image, TouchableOpacity, ScrollView, TextInput } from "react-native";
import { translate } from "../../Localization";
import { colors } from "../../AppStyles";
import { useState } from "react";
import { goBack, goPage } from "../../Backend/Navigator";


export default function ForgotPasswordFirst({ }) {

    // get the data from input
    const [email, setEmail] = useState('');

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.contentContainer} showsVerticalScrollIndicator={false}>
                <View style={styles.header_container}>
                    <Text style={styles.header}>{translate('forgotPassword.title')}</Text>
                    <TouchableOpacity style={styles.header} onPress={goBack}>
                        <Image style={styles.arrow} source={require('../../assets/register/left-arrow.png')}></Image>
                    </TouchableOpacity>
                </View>
                <View style={styles.line} />
                <Text style={styles.helpingText}>{translate('forgotPassword.descriptionFirst')}</Text>
                <View style={styles.FirstPageInput}>
                    <Text style={styles.stateName}>{translate('forgotPassword.email')}</Text>
                    <TextInput
                        style={styles.inputForm}
                        placeholder={translate('forgotPassword.email')}
                        placeholderTextColor={colors.Grey}
                        onChangeText={(email) => setEmail(email)}
                        cursorColor={colors.LightSeaGreen}
                    />
                </View>
                <TouchableOpacity style={styles.button} onPress={() => { goPage('forgotPasswordSecond', 'forgotPasswordFirst') }}>
                    <Text style={styles.buttonText}>{translate('forgotPassword.next')}</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
}