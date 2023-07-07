import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { styles } from "./Styles";
import FavMonumentCard from "../FavMonumentsCard/FavMonumentCard";
import Backend from "../../Helpers/Backend";
import { translate } from "../../Localization";
import { goPage } from "../../Helpers/Navigator";
import { LinearGradient } from 'expo-linear-gradient';
import { useContext, useEffect } from "react";
import { FavArticlesContext } from "../Context/FavArticlesContext";


export default function FavMonumentsSection({ }) {

    // get favourite articles
    const MonumentsList = Backend.getFavMonuments();

    // get articles from backend
    const getFavMonuments = async () => {
        try {
            const { statusCode, data } = await Backend.getFavourites();
            if (Backend.isSuccessfulRequest(statusCode)) {
                let favArticlesResponse = [];
                data.results.forEach((obj) => {
                    if (obj.article)
                        favArticlesResponse.push(obj.article)
                });
                updateFavArticles(favArticlesResponse);
                console.log("Successfully fetched user's favorite monuments");
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {

    }, []);


    // render item in flat list
    const renderItem = ({ item }) => {
        return <FavMonumentCard Monument={item} screen={'favourites'} />
    }

    if(MonumentsList.length === 0){
        return null;
    }

    return (
        <View style={[styles.containerScroll, styles.shadowProp]}>
            <LinearGradient
                style={styles.gradient}
                colors={styles.gradientColors}
                start={styles.startOff}
                end={styles.endOff}
            >
                <View style={styles.containerTitle}>
                    <Text style={styles.containerHeaderTitle}>{translate('Favourites.3D')}</Text>
                    <TouchableOpacity
                        onPress={() => { goPage('favMonumentsPage', 'favourites') }}
                        style={styles.see_all}
                    >
                        <Text style={styles.see_all_text}>{translate('Favourites.see_all')}</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.MonumentsScrollView}>
                    <FlatList
                        data={MonumentsList}
                        showsHorizontalScrollIndicator={false}
                        renderItem={renderItem}
                        keyExtractor={(_, index) => index.toString()}
                        initialNumToRender={5}
                        contentContainerStyle={styles.contentContainer}
                        nestedScrollEnabled={true}
                        showsVerticalScrollIndicator={false}
                    />
                </View>
            </LinearGradient>
        </View>
    )
}