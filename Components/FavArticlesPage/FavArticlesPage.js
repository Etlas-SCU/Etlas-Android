import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { styles } from "./Styles";
import { translate } from "../../Localization";
import Backend from "../../Helpers/Backend";
import FavArticleCard from "../FavArticleCard/FavArticleCard";
import { goBack } from "../../Helpers/Navigator";
import SvgMaker from "../SvgMaker/SvgMaker";
import { InvCloseIcon } from "../../assets/SVG/Icons";
import { useContext } from "react";
import { FavArticlesContext } from "../Context/FavArticlesContext";
import EmptyContainer from "../FavouritesPage/EmptyContainer";


export default function FavArticlesPage({ }) {

    // get favourite articles
    const { favArticles, updateFavArticles, FavArticlesPage, updateFavArticlesPage } = useContext(FavArticlesContext);

    // get articles from backend
    const getFavArticle = async () => {
        try {
            const { statusCode, data } = await Backend.getFavourites(FavArticlesPage);
            if (Backend.isSuccessfulRequest(statusCode)) {
                const newFavArticles = await Backend.getArticleFromFavourits(data.results);
                updateFavArticles(newFavArticles);
                updateFavArticlesPage(FavArticlesPage + 1);
            }
        } catch (error) {
            console.log(error);
        }
    }

    // render items in flat list
    const renderItem = ({ item }) => {
        return <FavArticleCard favArticle={item} />
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>{translate('Favourites.articles')}</Text>
                <TouchableOpacity
                    onPress={goBack}
                    style={styles.close}
                >
                    <SvgMaker Svg={InvCloseIcon} style={styles.arrow} />
                </TouchableOpacity>
            </View>
            <FlatList
                data={favArticles}
                showsHorizontalScrollIndicator={false}
                renderItem={renderItem}
                keyExtractor={(_, index) => index.toString()}
                initialNumToRender={10}
                contentContainerStyle={styles.contentContainer}
                nestedScrollEnabled={true}
                showsVerticalScrollIndicator={false}
                onEndReached={() => getFavArticle()}
                onEndReachedThreshold={0.5}
                ListEmptyComponent={<EmptyContainer />}
            />
        </View>
    )
}