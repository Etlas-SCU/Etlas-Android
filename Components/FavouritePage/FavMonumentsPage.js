import { ScrollView, View, Text, TouchableOpacity, Image, FlatList } from "react-native";
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
            <View style={styles.header}>
                <Text style={styles.title}>{translate('Favourites.Models')}</Text>
                <TouchableOpacity
                    onPress={goBack}
                    style={styles.close}
                >
                    <Image source={require('../../assets/HighScore/close.png')} style={styles.arrow} />
                </TouchableOpacity>
            </View>
            <FlatList
                data={Monuments}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => item}
                keyExtractor={(_, index) => index.toString()}
                initialNumToRender={10}
                contentContainerStyle={styles.contentContainer}
                nestedScrollEnabled={true}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}