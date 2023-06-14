import { ScrollView, View, Text, TouchableOpacity, Image, FlatList } from "react-native";
import { styles } from "./Styles";
import { translate } from "../../Localization";
import Backend from "../../Backend/Backend";
import FavArticleCard from "../Favourites/FavArticleCard";
import { goBack, getParams } from "../../Backend/Navigator";


export default function FavArticlesPage({ }) {

    // get the article list
    const favArticlesList = Backend.getFavArticles();

    // get the screen name from navigator
    const { prevPage } = getParams();

    // mapping the cards
    const favArticles = favArticlesList.map((favArticle, index) => { return <FavArticleCard key={index} favArticle={favArticle} screen={prevPage}/> });

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>{translate('Favourites.articles')}</Text>
                <TouchableOpacity
                    onPress={goBack}
                    style={styles.close}
                >
                    <Image source={require('../../assets/HighScore/close.png')} style={styles.arrow} />
                </TouchableOpacity>
            </View>
            <FlatList
                data={favArticles}
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