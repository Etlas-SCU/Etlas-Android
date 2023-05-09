import { styles } from "./Styles";
import { View, Text, Image, TouchableOpacity, ScrollView, ImageBackground, TextInput } from "react-native";
import { translate } from "../../Localization";
import { colors } from "../../AppStyles";
import { useState } from "react";

export default function EditProfile({ navigation }) {

    // get the Data
    const [name, setName] = useState('Ahmed Hossam');
    const [email, setEmail] = useState('ahmed.7oskaa@gmail.com');
    const [password, setPassword] = useState('123456789');
    const [phoneNumber, setPhoneNumber] = useState('01208822340');
    const [editable, setEditable] = useState(false);
    const [address, setAddress] = useState('PortSaid');

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
                            <TextInput
                                style={styles.input}
                                placeholder={translate('EditProfile.name')}
                                placeholderTextColor={colors.Grey}
                                defaultValue={name}
                                onChangeText={(name) => setName(name)}
                            />
                        </View>
                        <View style={styles.inputContainer}>
                            <Text style={styles.input_title} >{translate('EditProfile.email')}</Text>
                            <TextInput
                                style={styles.input}
                                placeholder={translate('EditProfile.email')}
                                placeholderTextColor={colors.Grey}
                                defaultValue={email}
                                onChangeText={(email) => setEmail(email)}
                            />
                        </View>
                        <View style={styles.inputContainer}>
                            <Text style={styles.input_title} >{translate('EditProfile.password')}</Text>
                            <TextInput
                                style={styles.input}
                                placeholder={translate('EditProfile.password')}
                                placeholderTextColor={colors.Grey}
                                defaultValue={password}
                                onChangeText={(password) => setPassword(password)}
                                secureTextEntry={true}
                            />
                        </View>
                        <View style={styles.inputContainer}>
                            <Text style={styles.input_title} >{translate('EditProfile.phone')}</Text>
                            <TextInput
                                style={styles.input}
                                placeholder={translate('EditProfile.phone')}
                                placeholderTextColor={colors.Grey}
                                defaultValue={phoneNumber}
                                onChangeText={(phoneNumber) => setPhoneNumber(phoneNumber)}
                            />
                        </View>
                        <View style={styles.inputContainer}>
                            <Text style={styles.input_title} >{translate('EditProfile.address')}</Text>
                            <TextInput
                                style={styles.input}
                                placeholder={translate('EditProfile.address')}
                                placeholderTextColor={colors.Grey}
                                defaultValue={address}
                                onChangeText={(address) => setAddress(address)}
                            />
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