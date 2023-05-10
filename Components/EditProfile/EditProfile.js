import { styles } from "./Styles";
import { View, Text, Image, TouchableOpacity, ScrollView, ImageBackground, TextInput } from "react-native";
import { translate } from "../../Localization";
import { colors } from "../../AppStyles";
import { useState } from "react";

export default function EditProfile({ navigation }) {

    // get the Data
    // for name input
    const [name, setName] = useState('Ahmed Hossam');
    const [nameEdit, setNameEdit] = useState(false);

    // for email input
    const [email, setEmail] = useState('ahmed.7oskaa@gmail.com');
    const [emailEdit, setEmailEdit] = useState(false);

    // for password input
    const [password, setPassword] = useState('123456789');
    const [passwordEdit, setPasswordEdit] = useState(false);

    // for phone number input
    const [phoneNumber, setPhoneNumber] = useState('01208822340');
    const [phoneNumberEdit, setPhoneNumberEdit] = useState(false);

    // for address input
    const [address, setAddress] = useState('PortSaid');
    const [addressEdit, setAddressEdit] = useState(false);

    // for editable icons
    const edit = require('../../assets/EditProfile/edit.png');
    const save = require('../../assets/EditProfile/save.png');

    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../assets/EditProfile/Background.png')} resizeMode="cover" style={styles.background}>
                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.contentContainer}>
                    <View style={styles.header}>
                        <Text style={styles.title}>{translate('EditProfile.title')}</Text>
                        <TouchableOpacity 
                            onPress={() => { navigation.navigate({ name: 'Settings' }) }} 
                            style={styles.close}
                        >
                            <Image source={require('../../assets/HighScore/close.png')} style={styles.closeIcon}/>
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
                                    defaultValue={name}
                                    onChangeText={(name) => setName(name)}
                                    editable={nameEdit}
                                />
                                <TouchableOpacity onPress={() => setNameEdit(!nameEdit)} style={styles.EditButton}>
                                    <Image source={nameEdit ? save : edit} style={styles.editIcon}/>
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
                                defaultValue={email}
                                onChangeText={(email) => setEmail(email)}
                                editable={emailEdit}
                            />
                            <TouchableOpacity onPress={() => setEmailEdit(!emailEdit)} style={styles.EditButton}>
                                <Image source={emailEdit ? save : edit} style={styles.editIcon}/>
                            </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.inputContainer}>
                            <Text style={styles.input_title} >{translate('EditProfile.password')}</Text>
                            <View style={styles.inputFieldContainer}>
                                <TextInput
                                    style={[styles.input, passwordEdit ? styles.editable : styles.uneditable]}
                                    placeholder={translate('EditProfile.password')}
                                    placeholderTextColor={colors.Grey}
                                    defaultValue={password}
                                    onChangeText={(password) => setPassword(password)}
                                    secureTextEntry={true}
                                    editable={passwordEdit}
                                />
                                <TouchableOpacity onPress={() => setPasswordEdit(!passwordEdit)} style={styles.EditButton}>
                                    <Image source={passwordEdit ? save : edit} style={styles.editIcon}/>
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
                                    defaultValue={phoneNumber}
                                    onChangeText={(phoneNumber) => setPhoneNumber(phoneNumber)}
                                    editable={phoneNumberEdit}
                                />
                                <TouchableOpacity onPress={() => setPhoneNumberEdit(!phoneNumberEdit)} style={styles.EditButton}>
                                    <Image source={phoneNumberEdit ? save : edit} style={styles.editIcon}/>
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
                                    defaultValue={address}
                                    onChangeText={(address) => setAddress(address)}
                                    editable={addressEdit}
                                />
                                <TouchableOpacity onPress={() => setAddressEdit(!addressEdit)} style={styles.EditButton}>
                                    <Image source={addressEdit ? save : edit} style={styles.editIcon}/>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <TouchableOpacity 
                        style={styles.saveButton} 
                        onPress={() => { navigation.navigate({ name: 'editProfile' }) }}
                    >
                        <Text style={styles.saveButtonText}>{translate('EditProfile.save')}</Text>
                    </TouchableOpacity>
                </ScrollView>
            </ImageBackground>
        </View>  
    );
}