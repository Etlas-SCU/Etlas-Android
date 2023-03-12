import { StyleSheet, Text, View, TouchableOpacity, ImageBackground, Image } from "react-native";
import { useFonts } from 'expo-font';
import Swiper from 'react-native-swiper'

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
                        <TouchableOpacity style={styles.continue}>
                            <Text style={styles.button_text}>العربــية</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.slide2}>
                        <TouchableOpacity style={styles.continue}>
                            <Text style={styles.button_text}>English</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.slide3}>
                        <TouchableOpacity style={styles.continue}>
                            <Text style={styles.button_text}>Spanish</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.slide4}>
                        <TouchableOpacity style={styles.continue}>
                            <Text style={styles.button_text}>French</Text>
                        </TouchableOpacity>
                    </View>
                </Swiper>
                <View style={styles.button_container}>
                    <TouchableOpacity style={styles.continue}>
                        <Text style={styles.button_text}>Continue</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        flex: 1,
    },
    text_box: {
        flexDirection: "row",
    },
    header: {
        fontFamily: 'CapitalisTypOasis',
        color: '#BF8148',
        fontSize: 50,
        textAlign: 'left',
        marginTop: 102,
        marginLeft: 24,
    },
    desc: {
        fontFamily: 'Montserrat-Medium',
        color: '#FFFFFF',
        fontSize: 20,
        textAlign: 'left',
        marginTop: 23,
        marginLeft: 24,
        flexDirection: "row",
        flexWrap: "wrap",
        width: 284,
        marginBottom: 20
    },
    worry: {
        fontFamily: 'Montserrat-Bold',
        color: '#FFFFFF',
        fontSize: 20,
        textAlign: 'left',
        marginTop: 23,
        marginLeft: 24,
        flexDirection: "row",
        flexWrap: "wrap",
        width: 287
    },
    logoContainer: {
        alignItems: 'flex-end',
    },
    wolf: {
        flex: 1,
        width: "55%",
        height: "65%",
        resizeMode: 'contain',
        position: 'absolute',
        bottom: "-15%",
        marginLeft: "-1%",
        marginTop: 30
    },
    button_container: {
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 15,
        paddingTop: 10
    },
    continue: {
        width: 285,
        height: 57,
        borderRadius: 20,
        backgroundColor: '#BF8148',
        justifyContent: "center",
        alignItems: "center",
    },
    button_text: {
        fontFamily: 'Montserrat-Bold',
        color: '#FFFFFF',
        fontSize: 20,
        textAlign: 'center',
    },
    swipper: {
        flex: 0.7,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 30,
    },
    wrapper: { },
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    slide4: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: '#FFFFFF',
        fontSize: 30,
        fontWeight: 'bold',
        fontFamily: 'Montserrat-Bold',
        textAlign: 'center',
        verticalAlign: 'middle'
    },
    arrows: {
        backgroundColor: 'transparent', 
        flexDirection: 'column', 
        position: 'absolute', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        color: '#FFFFFF',
        verticalAlign: 'middle',
    }
});
