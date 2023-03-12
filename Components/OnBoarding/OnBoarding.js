import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { useFonts } from 'expo-font';

export default function OnBoarding () {
    
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
            <Text style={styles.header}>Etlas</Text>
            <View style={styles.text_box}>
                <Text style={styles.desc}>Is an augmented reality application that helps people to recognize monuments during their tour in anywhere in  the world by only a scan using your mobile camera.</Text>
            </View>
            <Text style={styles.worry}>No worries, your tour guide is here ;)</Text>
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require('../../assets/on_boarding/e.png')}></Image>
            </View>
            <Image style={styles.wolf} source={require('../../assets/on_boarding/EG_by_Onlywolfs.png')}></Image>
            <View style={styles.button_container}>
                <TouchableOpacity style={[styles.sign_buttons, styles.sign_in]}>
                    <Text style={styles.button_text}>Sign in</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.sign_buttons, styles.sign_up]}>
                    <Text style={styles.button_text}>Sign up</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#003441',
        Width: "2rem"
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
        width: 284
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
        alignItems: "flex-end",
        marginRight: "10%",
        marginTop: "5%",
        gap: 15
    },
    sign_buttons: {
        width: 181,
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
    sign_in: {
        backgroundColor: '#BF8148',
    },
    sign_up: {
        backgroundColor: 'transparent',
        borderWidth: 2,
        borderColor: '#BF8148',
    }
});
