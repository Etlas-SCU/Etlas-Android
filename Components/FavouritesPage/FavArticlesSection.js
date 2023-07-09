import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { styles } from "./Styles";
import FavArticleCard from "../FavArticleCard/FavArticleCard";
import Backend from "../../Helpers/Backend";
import { translate } from "../../Localization";
import { goPage } from "../../Helpers/Navigator";
import { LinearGradient } from 'expo-linear-gradient';
import { useContext, useEffect } from "react";
import { FavArticlesContext } from "../Context/FavArticlesContext";


export default function FavArticlesSection({ }) {

    // get favourite articles
    const { favArticles, updateFavArticles, favArticlesPage, updateFavArticlesPage } = useContext(FavArticlesContext);

    // get articles from backend
    const getFavArticles = async () => {
        try {
            const { statusCode, data } = await Backend.getFavourites(favArticlesPage);
            if (Backend.isSuccessfulRequest(statusCode)) {
                const newFavArticles = await Backend.getArticleFromFavourits(data.results);
                updateFavArticles(newFavArticles);
                updateFavArticlesPage(favArticlesPage + 1);
                console.log("Successfully fetched user's favorite articles");
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getFavArticles();
    }, []);


    // render item in flat list
    const renderItem = ({ item }) => {
        return <FavArticleCard favArticle={item} screen={'favourites'} />
    }

    if (favArticles.length === 0) {
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
                    <Text style={styles.containerHeaderTitle}>{translate('Favourites.articles')}</Text>
                    <TouchableOpacity
                        onPress={() => { goPage('favArticlesPage', 'favourites') }}
                        style={styles.see_all}
                    >
                        <Text style={styles.see_all_text}>{translate('Favourites.see_all')}</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.ArticlesScrollView}>
                    <FlatList
                        data={favArticles}
                        showsHorizontalScrollIndicator={false}
                        renderItem={renderItem}
                        keyExtractor={(_, index) => index.toString()}
                        initialNumToRender={5}
                        contentContainerStyle={styles.contentContainer}
                        nestedScrollEnabled={true}
                        showsVerticalScrollIndicator={false}
                        onEndReached={() => getFavArticles()}
                        onEndReachedThreshold={0.5}
                    />
                </View>
            </LinearGradient>
        </View>
    )
}