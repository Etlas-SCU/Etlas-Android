import { styles } from "./Styles";
import { View, Text, Image, TouchableOpacity, ScrollView, ImageBackground, TextInput } from "react-native";
import { translate } from "../../Localization";
import { colors } from "../../AppStyles";
import { useState, useContext } from "react";
import Backend from "../../Backend/Backend";
import { goBack, goPage } from "../../Backend/Navigator";
import { UserContext } from "../Context/Context";
import Loader from "../Loader/Loader";
import PopupMessage from "../PopupMessage/PopupMessage";
import { UserDataContext } from "../Context/DataContext";
import SvgMaker from "../SvgMaker/SvgMaker";
import { InvCloseIcon, EditIcon, SaveIcon } from "../../assets/SVG/Icons";


export default function EditProfile({ }) {

    // get the loader states
    const { showLoader, hideLoader, loaderVisible } = useContext(UserContext);

    // popup message
    const { showPopupMessage, popupMessageVisible } = useContext(UserContext);

    // update userData
    const { updateUserData, userData } = useContext(UserDataContext);

    // for name input
    const [userName, setUserName] = useState(userData.full_name);
    const [nameEdit, setNameEdit] = useState(false);

    // for email input
    const [userEmail, setUserEmail] = useState(userData.email);
    const [emailEdit, setEmailEdit] = useState(false);

    // for phone number input
    const [userPhoneNumber, setUserPhoneNumber] = useState(userData.phone_number);
    const [phoneNumberEdit, setPhoneNumberEdit] = useState(false);

    // for address input
    const [userAddress, setUserAddress] = useState(userData.address);
    const [addressEdit, setAddressEdit] = useState(false);

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
            await updateUserData(data);
            goPage('Settings');
        } catch (error) {
            console.log(error);
        }
    }

    // for editable icons
    const edit = EditIcon;
    const save = SaveIcon;

    return (
        <View style={styles.container}>
            {loaderVisible ? <Loader /> : null}
            {popupMessageVisible ? <PopupMessage /> : null}
            <ImageBackground source={require('../../assets/Backgrounds/EditProfile.png')} resizeMode="cover" style={styles.background}>
                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.contentContainer}>
                    <View style={styles.header}>
                        <Text style={styles.title}>{translate('EditProfile.title')}</Text>
                        <TouchableOpacity
                            onPress={goBack}
                            style={styles.close}
                        >
                            <SvgMaker Svg={InvCloseIcon} style={styles.closeIcon} />
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
                                    <SvgMaker Svg={nameEdit ? save : edit} style={styles.editIcon} />
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
                                    <SvgMaker Svg={emailEdit ? save : edit} style={styles.editIcon} />
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
                                    <SvgMaker Svg={phoneNumberEdit ? save : edit} style={styles.editIcon} />
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
                                    <SvgMaker Svg={addressEdit ? save : edit} style={styles.editIcon} />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <TouchableOpacity
                            onPress={() => { goPage('editPassword') }}
                        >
                            <Text style={styles.changePassword}>{translate('EditProfile.changePassword')}</Text>
                        </TouchableOpacity>
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