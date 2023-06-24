import { styles } from "./Styles";
import { translate } from "../../Localization";
import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import { UserContext } from "../Context/Context";
import { Avatar } from "@react-native-material/core";
import { responsiveHeight } from "../../AppStyles";
import MainMenu from "../MainMenu/MainMenu";
import { isIOS } from "../../AppStyles";
import Backend from "../../Backend/Backend";
import { useState, useContext } from "react";
import * as ImagePicker from 'expo-image-picker';
import { goPage, goPageResetStack } from "../../Backend/Navigator";
import { useIsFocused } from "@react-navigation/native";
import { setStatusBarStyle } from "expo-status-bar";
import AsyncStorage from "@react-native-async-storage/async-storage";
import PopupMessage from "../PopupMessage/PopupMessage";
import Loader from "../Loader/Loader";
import { UserDataContext } from "../Context/DataContext";


export default function Settings({ }) {

    // default avatar
    const defaultAvatar = require('../../assets/EditProfile/Avatar.png');

    // check if the currenpage is focused
    const isFocused = useIsFocused();

    if (isFocused) {
        setStatusBarStyle('dark');
    }

    // use user context
    const { showModal, setScreen } = useContext(UserContext);

    // get popup states and loader
    const { popupMessageVisible, showPopupMessage } = useContext(UserContext);
    const { loaderVisible, showLoader, hideLoader } = useContext(UserContext);

    // state for the gallery permission and the stored image
    const [image, setImage] = useState(null);
    const [hasGelleryPermission, setHasGalleryPermission] = useState(null);

    // get user from async storage
    const { userData, updateUserData, removeUserData } = useContext(UserDataContext);

    // pick image from gallery
    const pickImage = async () => {
        // ask for gallery permission
        if (hasGelleryPermission === null) {
            (async () => {
                const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
                setHasGalleryPermission(status === 'granted');
            })();
        }

        // if the user doesn't have permission
        if (hasGelleryPermission === false) {
            showPopupMessage('Error', translate('messages.storageError'));
        }

        // No permissions request is necessary for launching the image library
        const { assets, canceled } = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        // if the user didn't cancel the process
        if (!canceled) {
            setImage(assets[0].uri);
            Backend.changeUserImage(assets[0].uri);
        }

    };

    // state for information
    const [pressed, setPressed] = useState(false);

    // handle logout
    const handle_logout = async () => {
        setPressed(true);
        const { statusCode, data } = await Backend.logout().then(response => response).then(data => data);
        setPressed(false);
        if (!Backend.isSuccessfulRequest(statusCode)) {
            const errorMessage = await Backend.getErrorMessage(data).then(response => response);
            showPopupMessage('Error', errorMessage);
            return;
        }

        // goto login page
        goPageResetStack('login');

        // remove the token from the storage
        try {
            await AsyncStorage.removeItem('accessToken');
            await AsyncStorage.removeItem('refreshToken');
            await removeUserData();
        } catch (e) {
            console.log(e);
        }
    }

    const name = userData.full_name;
    const profileImage = userData.image_url ? { uri: userData.image_url } : defaultAvatar;

    return (
        <View style={styles.container}>
            {isIOS() ? <MainMenu /> : null}
            {popupMessageVisible ? <PopupMessage /> : null}
            {loaderVisible ? <Loader /> : null}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => { showModal(), setScreen('Settings') }} >
                    <Image source={require('../../assets/KnowledgeCheck/tabler_exclamation-circle.png')} style={styles.circle} />
                </TouchableOpacity>
                <Text style={styles.title}>{translate('Settings.title')}</Text>
                <TouchableOpacity
                    onPress={() => { handle_logout() }}
                    disabled={pressed}
                >
                    <Image source={require('../../assets/Settings/logout.png')} />
                </TouchableOpacity>

            </View>
            <View style={styles.avatarBox}>
                <TouchableOpacity onPress={() => { pickImage() }}>
                    <Avatar
                        image={profileImage}
                        imageStyle={styles.profilePic}
                        style={styles.profile}
                        size={responsiveHeight(128)}
                    />
                </TouchableOpacity>
                <Text style={styles.name}>{name}</Text>
            </View>
            <TouchableOpacity
                style={styles.buttonEdit}
                onPress={() => { goPage('editProfile', 'Settings') }}
            >
                <Text style={styles.buttonText}>{translate('Settings.edit')}</Text>
            </TouchableOpacity>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContainer}>
                <View style={styles.Box}>
                    <View style={styles.Bar}>
                        <Text style={styles.BarText}>{translate('Settings.content')}</Text>
                    </View>
                    <TouchableOpacity
                        style={styles.lineBar}
                        onPress={() => { goPage('favourites', 'Settings') }}
                    >
                        <Image source={require('../../assets/Settings/fav.png')} style={styles.left} />
                        <Text style={[styles.text, styles.middle]}>{translate('Settings.fav')}</Text>
                        <Image source={require('../../assets/Settings/arrow.png')} style={styles.right} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.lineBar}
                        onPress={() => { goPage('bestScore', 'Settings') }}
                    >
                        <Image source={require('../../assets/Settings/best_score.png')} style={styles.left} />
                        <Text style={[styles.text, styles.middle]}>{translate('Settings.best_score')}</Text>
                        <Image source={require('../../assets/Settings/arrow.png')} style={styles.right} />
                    </TouchableOpacity>
                </View>
                <View style={styles.Box}>
                    <View style={styles.Bar}>
                        <Text style={styles.BarText}>{translate('Settings.preferences')}</Text>
                    </View>
                    <TouchableOpacity
                        style={styles.lineBar}
                        onPress={() => { goPage('LanguageSelection', 'Settings') }}
                    >
                        <Image source={require('../../assets/Settings/World.png')} style={styles.left} />
                        <Text style={[styles.text, styles.middle]}>{translate('Settings.language')}</Text>
                        <Image source={require('../../assets/Settings/arrow.png')} style={styles.right} />
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )

}