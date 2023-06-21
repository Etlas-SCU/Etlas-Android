import { styles } from "./Styles";
import { View, Text, Image, TouchableOpacity, ScrollView, ImageBackground, TextInput } from "react-native";
import { translate } from "../../Localization";
import { colors } from "../../AppStyles";
import { useState, useEffect, useContext } from "react";
import Backend from "../../Backend/Backend";
import { goBack } from "../../Backend/Navigator";
import { UserContext } from "../Context/Context";
import Loader from "../Loader/Loader";
import PopupMessage from "../PopupMessage/PopupMessage";


export default function EditProfile({ }) {

    // get the loader states
    const { showLoader, hideLoader, loaderVisible } = useContext(UserContext);

    // popup message
    const { showPopupMessage, popupMessageVisible } = useContext(UserContext);

    // for name input
    const [userName, setUserName] = useState();
    const [nameEdit, setNameEdit] = useState(false);

    // for email input
    const [userEmail, setUserEmail] = useState();
    const [emailEdit, setEmailEdit] = useState(false);

    // for phone number input
    const [userPhoneNumber, setUserPhoneNumber] = useState();
    const [phoneNumberEdit, setPhoneNumberEdit] = useState(false);

    // for address input
    const [userAddress, setUserAddress] = useState();
    const [addressEdit, setAddressEdit] = useState(false);

    // get the user data from Backend
    const getUserData = async () => {
        try {
            showLoader(translate('messages.getuserData'));
            const { statusCode, data } = await Backend.getUserData();
            hideLoader();

            if (!Backend.isSuccessfulRequest(statusCode)) {
                const errorMessage = await Backend.getErrorMessage(data).then(response => response);
                showPopupMessage('Error', errorMessage);
                return false;
            }
            const { full_name, email, phone_number, address } = data;
            setUserName(full_name);
            setUserEmail(email);
            setUserPhoneNumber(phone_number);
            setUserAddress(address);
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }


    const updateUser = async () => {
        try {
            showLoader(translate('messages.updateUser'));
            const { statusCode, data } = await Backend.updateUser(userName, userEmail, userAddress, userPhoneNumber);
            hideLoader();

            if (!Backend.isSuccessfulRequest(statusCode)) {
                const errorMessage = await Backend.getErrorMessage(data).then(response => response);
                showPopupMessage('Error', errorMessage);
                return false;
            }
            showPopupMessage('Success', translate('messages.updateUserSuccess'));
        } catch (error) {
            console.log(error);
        }
    }

    // get the user data from Backend
    useEffect(() => {
        getUserData();
    }, []);

    // for editable icons
    const edit = require('../../assets/EditProfile/edit.png');
    const save = require('../../assets/EditProfile/save.png');

    return (
        <View style={styles.container}>
            {loaderVisible ? <Loader /> : null}
            {popupMessageVisible ? <PopupMessage /> : null}
            <ImageBackground source={require('../../assets/EditProfile/Background.png')} resizeMode="cover" style={styles.background}>
                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.contentContainer}>
                    <View style={styles.header}>
                        <Text style={styles.title}>{translate('EditProfile.title')}</Text>
                        <TouchableOpacity
                            onPress={goBack}
                            style={styles.close}
                        >
                            <Image source={require('../../assets/HighScore/close.png')} style={styles.closeIcon} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.profileContainer}>
                        <View style={styles.inputContainer}>
                            <Text style={styles.input_title} >{translate('EditProfile.name')}</Text>
                            <View style={styles.inputFieldContainer}>
                                <TextInput
                                    style={[styles.input, nameEdit ? styles.editable : styles.uneditable]}
                                    placeholder={translate('EditProfile.name')}
                                    placeholderTextColor={colors.Grey}
                                    defaultValue={userName}
                                    onChangeText={(userName) => setUserName(userName)}
                                    editable={nameEdit}
                                />
                                <TouchableOpacity onPress={() => setNameEdit(!nameEdit)} style={styles.EditButton}>
                                    <Image source={nameEdit ? save : edit} style={styles.editIcon} />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.inputContainer}>
                            <Text style={styles.input_title} >{translate('EditProfile.email')}</Text>
                            <View style={styles.inputFieldContainer}>
                                <TextInput
                                    style={[styles.input, emailEdit ? styles.editable : styles.uneditable]}
                                    placeholder={translate('EditProfile.email')}
                                    placeholderTextColor={colors.Grey}
                                    defaultValue={userEmail}
                                    onChangeText={(userEmail) => setUserEmail(userEmail)}
                                    editable={emailEdit}
                                />
                                <TouchableOpacity onPress={() => setEmailEdit(!emailEdit)} style={styles.EditButton}>
                                    <Image source={emailEdit ? save : edit} style={styles.editIcon} />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.inputContainer}>
                            <Text style={styles.input_title} >{translate('EditProfile.phone')}</Text>
                            <View style={styles.inputFieldContainer}>
                                <TextInput
                                    style={[styles.input, phoneNumberEdit ? styles.editable : styles.uneditable]}
                                    placeholder={translate('EditProfile.phone')}
                                    placeholderTextColor={colors.Grey}
                                    defaultValue={userPhoneNumber}
                                    onChangeText={(userPhoneNumber) => setUserPhoneNumber(userPhoneNumber)}
                                    editable={phoneNumberEdit}
                                />
                                <TouchableOpacity onPress={() => setPhoneNumberEdit(!phoneNumberEdit)} style={styles.EditButton}>
                                    <Image source={phoneNumberEdit ? save : edit} style={styles.editIcon} />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.inputContainer}>
                            <Text style={styles.input_title} >{translate('EditProfile.address')}</Text>
                            <View style={styles.inputFieldContainer}>
                                <TextInput
                                    style={[styles.input, addressEdit ? styles.editable : styles.uneditable]}
                                    placeholder={translate('EditProfile.address')}
                                    placeholderTextColor={colors.Grey}
                                    defaultValue={userAddress}
                                    onChangeText={(userAddress) => setUserAddress(userAddress)}
                                    editable={addressEdit}
                                />
                                <TouchableOpacity onPress={() => setAddressEdit(!addressEdit)} style={styles.EditButton}>
                                    <Image source={addressEdit ? save : edit} style={styles.editIcon} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <TouchableOpacity
                        style={styles.saveButton}
                        onPress={updateUser}
                    >
                        <Text style={styles.saveButtonText}>{translate('EditProfile.save')}</Text>
                    </TouchableOpacity>
                </ScrollView>
            </ImageBackground>
        </View>
    );
}