import { ScrollView, View, Text, TouchableOpacity, Image } from "react-native";
import { styles } from "./Styles";
import { translate } from "../../Localization";
import Backend from "../../Backend/Backend";
import FavMonumentCard from "../Favourites/FavMonumentCard";
import { goBack, getParams } from "../../Backend/Navigator";


export default function FavMonumentsPage({ }) {

    // get the monument list from backend
    const MonumentsList = Backend.getFavMonuments();

    // get the screen name from navigator
    const { prevPage } = getParams();
    
    // mapping the cards
    const Monuments = MonumentsList.map((Monument, index) => { return <FavMonumentCard key={index} Monument={Monument} screen={prevPage} /> });

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
                <View style={styles.header}>
                    <Text style={styles.title}>{translate('Favourites.title')}</Text>
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