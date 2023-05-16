import { ScrollView, View, Text, TouchableOpacity, Image } from "react-native";
import { styles } from "./Styles";
import { translate } from "../../Localization";
import Backend from "../../Backend/Backend";
import FavMonumentCard from "../Favourites/FavMonumentCard";


export default function FavMonumentsPage({ navigation }) {

    const MonumentsList = Backend.getFavMonuments();

    const Monuments = MonumentsList.map((Monument, index) => { return <FavMonumentCard key={index} Monument={Monument} navigation={navigation} /> });

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
                <View style={styles.header}>
                    <Text style={styles.title}>{translate('Favourites.title')}</Text>
                    <TouchableOpacity
                        onPress={() => { navigation.navigate({ name: 'favourites' }) }}
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