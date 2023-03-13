import { Text, View, TouchableOpacity, ImageBackground, Image } from "react-native";
import { useFonts } from 'expo-font';
import Swiper from 'react-native-swiper'
import { styles } from "./styles";

export default function LanguageSelection () {
    
    // get the font from the local fonts
    let [fontsLoaded] = useFonts({
        'CapitalisTypOasis': require('../../assets/fonts/CapitalisTypOasis.ttf'),
        'Montserrat-Medium': require('../../assets/fonts/Montserrat-Medium.ttf'),
        'Montserrat-Bold': require('../../assets/fonts/Montserrat-Bold.ttf')
    });    

    // if the font not loaded don't appear anything
    if (!fontsLoaded)
        return null
    
    // if the font loaded, return the text
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../assets/language_selection/Language_Selection.png')} resizeMode='cover' style={styles.image}>
                <Text style={styles.header}>Language Selection</Text>
                <View style={styles.text_box}>
                    <Text style={styles.desc}>Please, choose your preferred language that you want to be set on the application, it can also be changed anytime.</Text>
                </View>
                <Swiper style={styles.wrapper} 
                    showsButtons={true} 
                    horizontal={false} 
                    buttonWrapperStyle={styles.arrows}
                    nextButton={<Image source={require('../../assets/language_selection/material-symbols_keyboard-arrow-down.png')}/>}
                    prevButton={<Image source={require('../../assets/language_selection/material-symbols_keyboard-arrow-up.png')}/>}
                    showsPagination={false}
                    containerStyle={styles.swipper}
                    bounces={true}
                >
                    <View style={styles.slide1}>
                        <TouchableOpacity style={[styles.language_active, styles.buttons]}>
                            <Text style={styles.button_text}>English</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.slide2}>
                        <TouchableOpacity style={[styles.language_not_active, styles.buttons]} disabled={true}>
                            <Text style={styles.button_text}>العربــية</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.slide3}>
                        <TouchableOpacity style={[styles.language_not_active, styles.buttons]} disabled={true}>
                            <Text style={styles.button_text}>Spanish</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.slide4}>
                        <TouchableOpacity style={[styles.language_not_active, styles.buttons]} disabled={true}>
                            <Text style={styles.button_text}>French</Text>
                        </TouchableOpacity>
                    </View>
                </Swiper>
                <View style={styles.button_container}>
                    <TouchableOpacity style={[styles.continue, styles.buttons]}>
                        <Text style={styles.button_text}>Continue</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    );
}
