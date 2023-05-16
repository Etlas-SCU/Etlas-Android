import { ScrollView, View, Text, TouchableOpacity, Image } from "react-native";
import { styles } from "./Styles";
import { translate } from "../../Localization";
import Backend from "../../Backend/Backend";
import FavArticleCard from "../Favourites/FavArticleCard";


export default function FavArticlesPage({ navigation, route }) {

    // get the last screen
    const { screen } = route.params;

    // get the article list
    const ArticlesList = Backend.getFavArticles();

    // mapping the cards
    const Articles = ArticlesList.map((Article, index) => { return <FavArticleCard key={index} Article={Article} navigation={navigation} screen={screen}/> });

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
                    {Articles}
                </View>
            </ScrollView>
        </View>
    )
}