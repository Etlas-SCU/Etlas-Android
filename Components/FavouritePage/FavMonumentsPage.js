import { ScrollView, View, Text, TouchableOpacity, Image } from "react-native";
import { styles } from "./Styles";
import { translate } from "../../Localization";
import Backend from "../../Backend/Backend";
import FavMonumentCard from "../Favourites/FavMonumentCard";
import { goBack, getParams } from "../../Backend/Navigator";
import { useIsFocused } from '@react-navigation/native';
import { setStatusBarStyle } from "expo-status-bar";


export default function FavMonumentsPage({ }) {

    // check if the currenpage is focused
    const isFocused = useIsFocused();
    
    if(isFocused){
        setStatusBarStyle('dark');
    }

    // get the monument list from backend
    const MonumentsList = Backend.getFavMonuments();

    // get the screen name from navigator
    const { prevPage } = getParams()? getParams() : { prevPage: 'Home' };
    
    // mapping the cards
    const Monuments = MonumentsList.map((Monument, index) => { return <FavMonumentCard key={index} Monument={Monument} screen={prevPage} /> });

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
                <View style={styles.header}>
                    <Text style={styles.title}>{translate('Favourites.Models')}</Text>
                    <TouchableOpacity
                        onPress={goBack}
                        style={styles.close}
                    >
                        <Image source={require('../../assets/HighScore/close.png')} style={styles.arrow} />
                    </TouchableOpacity>
                </View>
                <View style={styles.childrenContainer}>
                    {Monuments}
                </View>
            </ScrollView>
        </View>
    )
}