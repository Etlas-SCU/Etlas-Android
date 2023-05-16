import { styles } from "./Styles";
import { translate } from "../../Localization";
import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import { UserContext } from "../Context/Context";
import { Avatar } from "@react-native-material/core";
import { responsiveHeight } from "../../AppStyles";
import MainMenu from "../MainMenu/MainMenu";
import { isIOS } from "../../AppStyles";
import Backend from "../../Backend/Backend";
import { useState, useEffect, useContext } from "react";
import * as ImagePicker from 'expo-image-picker';
import PopupMessage from "../PopupMessage/PopupMessage";


export default function Settings({ navigation }) {

    // use user context
    const { showModal, setScreen, showPopupMessage } = useContext(UserContext);

    // get User Information
    const { img, name } = Backend.getUser();

    // state for the gallery permission and the stored image
    const [image, setImage] = useState(null);
    const [hasGelleryPermission, setHasGalleryPermission] = useState(null);

    // ask for gallery permission
    useEffect(() => {
        (async () => {
            const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
            setHasGalleryPermission(status === 'granted');
        })();
    }, []);

    // pick image from gallery
    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.canceled) {
            setImage(result.assets[0].uri);
            Backend.changeUserImage(image);
        }
    };

    // if haven't a permission
    if (hasGelleryPermission === false) {
        showPopupMessage();
    }

    return (
        <View style={styles.container}>
            {isIOS() ? <MainMenu /> : null}
            <PopupMessage state={'Error'} message={'No Access to Internal Storage'}/>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContainer}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => { showModal(), setScreen('Settings') }} >
                        <Image source={require('../../assets/KnowledgeCheck/tabler_exclamation-circle.png')} style={styles.circle}/>
                    </TouchableOpacity>
                    <Text style={styles.title}>{translate('Settings.title')}</Text>
                    <TouchableOpacity onPress={() => { showModal(), setScreen('Settings') }} >
                        <Image source={require('../../assets/Settings/logout.png')}/>
                    </TouchableOpacity>
                    
                </View>
                <View style={styles.avatarBox}>
                    <TouchableOpacity onPress={() => { pickImage() }}>
                        <Avatar
                            image={img}
                            imageStyle={styles.profilePic}
                            style={styles.profile}
                            size={responsiveHeight(128)}
                        />
                    </TouchableOpacity>
                    <Text style={styles.name}>{name}</Text>
                </View>
                <TouchableOpacity 
                    style={styles.buttonEdit}
                    onPress={() => { navigation.navigate({ name: 'editProfile' }) }}
                >
                    <Text style={styles.buttonText}>{translate('Settings.edit')}</Text>
                </TouchableOpacity>
                <View style={styles.Box}>
                    <Text style={styles.Bar}>{translate('Settings.content')}</Text>
                    <TouchableOpacity 
                        style={styles.lineBar}
                        onPress={() => { navigation.navigate({ name: 'favourites' }) }}
                    >
                        <Image source={require('../../assets/Settings/fav.png')} style={styles.left}/>
                        <Text style={[styles.text, styles.middle]}>{translate('Settings.fav')}</Text>
                        <Image source={require('../../assets/Settings/arrow.png')} style={styles.right}/>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={styles.lineBar}
                        onPress={() => { navigation.navigate({ name: 'bestScore' }) }}
                    >
                        <Image source={require('../../assets/Settings/best_score.png')} style={styles.left}/>
                        <Text style={[styles.text, styles.middle]}>{translate('Settings.best_score')}</Text>
                        <Image source={require('../../assets/Settings/arrow.png')} style={styles.right}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.Box}>
                    <Text style={styles.Bar}>{translate('Settings.preferences')}</Text>
                    <TouchableOpacity 
                        style={styles.lineBar} 
                        onPress={() => { navigation.navigate({ name:'LanguageSelection' }) }}
                    >
                        <Image source={require('../../assets/Settings/World.png')} style={styles.left}/>
                        <Text style={[styles.text, styles.middle]}>{translate('Settings.language')}</Text>
                        <Image source={require('../../assets/Settings/arrow.png')} style={styles.right}/>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )

}