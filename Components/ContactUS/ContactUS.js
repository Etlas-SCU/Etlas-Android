import { styles } from "./Styles";
import { translate } from "../../Localization";
import { View, Text, TextInput, ScrollView, TouchableOpacity, Image } from 'react-native'
import { colors } from "../../AppStyles";
import { goBack } from "../../Backend/Navigator";
import SvgMaker from "../SvgMaker/SvgMaker";
import { CloseIcon } from "../../assets/SVG/Icons";
import { ContactUs } from "../../assets/SVG/Images";
import Backend from "../../Backend/Backend";
import { UserContext } from "../Context/Context";
import { useContext, useState, useRef } from "react";
import PopupMessage from "../PopupMessage/PopupMessage";


export default function ContactUS({ }) {

    // popup messages
    const { showPopupMessage, popupMessageVisible } = useContext(UserContext);

    // state to user
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    // reference for each input
    const fullNameRef = useRef();
    const emailRef = useRef();
    const subjectRef = useRef();
    const messageRef = useRef();


    // check the required fileds
    const checkRequiredFields = async () => {
        if (!fullName.length || !email.length || !subject.length || !message.length)
            return false;
        return true;
    }

    // check if the email is valid email
    const checkEmail = async (email) => {
        const { state, message } = await Backend.checkEmail(email);
        if (!state) {
            showPopupMessage('Error', message);
        }
        return state;
    }

    // on submit
    const submit = async () => {
        // check if all fields are filled
        if (!checkRequiredFields()) {
            showPopupMessage('Error', translate('messages.fillAllFieldsReg'));
            return;
        }

        // check if email is valid
        if (!checkEmail(email)) {
            return;
        }

        // send contact us email
        const { statusCode, data } = await Backend.sendContactUsEmail(fullName, email, subject, message);

        // check if request is not successful
        if (!Backend.isSuccessfulRequest(statusCode)) {
            const errorMessage = await Backend.getErrorMessage(data);
            showPopupMessage('Error', errorMessage);
            return;
        }

        // show success message
        showPopupMessage('Success', data.success);

        // clear the fields
        setFullName('');
        setEmail('');
        setSubject('');
        setMessage('');

        // clear all inputs
        fullNameRef.current.clear();
        emailRef.current.clear();
        subjectRef.current.clear();
        messageRef.current.clear();
    }


    return (
        <View style={styles.container}>
            {popupMessageVisible ? <PopupMessage /> : null}
            <View style={styles.upperBox}>
                <TouchableOpacity
                    style={styles.closeContainer}
                    onPress={goBack}
                >
                    <SvgMaker Svg={CloseIcon} style={styles.close} />
                </TouchableOpacity>
                <Text style={styles.boxtitle}>{translate('ContactUs.title')}</Text>
                <Image source={ContactUs} style={styles.cover} />
            </View>
            <View style={styles.container} >
                <ScrollView
                    contentContainerStyle={styles.scrollContainer}
                    showsVerticalScrollIndicator={false}
                >
                    <View style={styles.textInputContainer}>
                        <View style={styles.inputContainer}>
                            <Text style={styles.title} >{translate('ContactUs.fullname')}</Text>
                            <TextInput
                                style={styles.input}
                                placeholder={translate('ContactUs.fullname')}
                                placeholderTextColor={colors.Grey}
                                onChangeText={(fullName) => setFullName(fullName)}
                                ref={fullNameRef}
                            />
                        </View>
                        <View style={styles.inputContainer}>
                            <Text style={styles.title} >{translate('ContactUs.email')}</Text>
                            <TextInput
                                style={styles.input}
                                placeholderTextColor={colors.Grey}
                                placeholder={translate('ContactUs.email')}
                                onChangeText={(email) => setEmail(email)}
                                ref={emailRef}
                            />
                        </View>
                        <View style={styles.inputContainer}>
                            <Text style={styles.title} >{translate('ContactUs.subject')}</Text>
                            <TextInput
                                style={styles.input}
                                placeholderTextColor={colors.Grey}
                                placeholder={translate('ContactUs.subject_input')}
                                onChangeText={(subject) => setSubject(subject)}
                                ref={subjectRef}
                            />
                        </View>
                        <View style={styles.inputContainer}>
                            <Text style={styles.title} >{translate('ContactUs.message')}</Text>
                            <TextInput
                                style={styles.input_message}
                                placeholderTextColor={colors.Grey}
                                multiline={true}
                                placeholder={translate('ContactUs.message')}
                                onChangeText={(message) => setMessage(message)}
                                ref={messageRef}
                            />
                        </View>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={submit}
                        >
                            <Text style={styles.submit}>{translate('ContactUs.submit')}</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}