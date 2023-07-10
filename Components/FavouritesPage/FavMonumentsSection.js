import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { styles } from "./Styles";
import FavMonumentCard from "../FavMonumentsCard/FavMonumentCard";
import Backend from "../../Helpers/Backend";
import { translate } from "../../Localization";
import { goPage } from "../../Helpers/Navigator";
import { LinearGradient } from 'expo-linear-gradient';
import { useContext, useEffect } from "react";
import { FavMonumentsContext } from "../Context/FavMonumentsContext";
import EmptyContainer from "./EmptyContainer";


export default function FavMonumentsSection({ }) {

    // get favourite articles
    const { favMonumentsPage, updateFavMonumentsPage, favMonuments, updateFavMonuments } = useContext(FavMonumentsContext)

    // get articles from backend
    const getFavMonuments = async () => {
        try {
            const { statusCode, data } = await Backend.getFavourites(favMonumentsPage);
            if (Backend.isSuccessfulRequest(statusCode)) {
                const newFavMonuments = await Backend.getMonumentFromFavourits(data.results);
                updateFavMonuments(newFavMonuments);
                updateFavMonumentsPage(favMonumentsPage + 1);
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getFavMonuments();
    }, []);


    // render item in flat list
    const renderItem = ({ item }) => {
        return <FavMonumentCard favMonument={item} />
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
                        data={favMonuments}
                        showsHorizontalScrollIndicator={false}
                        renderItem={renderItem}
                        keyExtractor={(_, index) => index.toString()}
                        initialNumToRender={5}
                        contentContainerStyle={styles.contentContainer}
                        nestedScrollEnabled={true}
                        showsVerticalScrollIndicator={false}
                        onEndReached={() => getFavMonuments()}
                        onEndReachedThreshold={0.5}
                        ListEmptyComponent={<EmptyContainer />}
                    />
                </View>
            </LinearGradient>
        </View>
    )
}