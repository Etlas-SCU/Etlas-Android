import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { styles } from "./Styles";
import FavArticleCard from "./FavArticleCard";
import FavMonumentCard from "./FavMonumentCard";
import Backend from "../../Backend/Backend";
import { translate } from "../../Localization";


function Container({ children, ConainerName, navigation, pageNav }) {
    return (
        <View style={styles.container}>
            <View style={styles.containerTitle}>
                <Text style={styles.containerHeaderTitle}>{ConainerName}</Text>
                <TouchableOpacity
                    onPress={() => { navigation.navigate({ name: pageNav }) }}
                    style={styles.see_all}
                >
                    <Text style={styles.see_all_text}>{translate('Favourites.see_all')}</Text>
                </TouchableOpacity>
            </View>
            <View style={ConainerName !== 'Articles' ? styles.MonumentsScrollView : styles.ArticlesScrollView}>
                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.ScrollViewContent} nestedScrollEnabled={true}>
                    {children}
                </ScrollView>
            </View>
        </View>
    )
}

export default function Favourites({ navigation }) {

    // get the lists from the backend
    const ArticlesList = Backend.getFavArticles();
    const MonumentsList = Backend.getFavMonuments();

    // mapping the cards
    const ArticlesCards = ArticlesList.map((Article, index) => { return <FavArticleCard key={index} Article={Article} navigation={navigation} /> });
    const MonumentsCards = MonumentsList.map((Monument, index) => { return <FavMonumentCard key={index} Monument={Monument} navigation={navigation} /> });


    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContainer}>
                <View style={styles.header}>
                    <Text style={styles.title}>{translate('Favourites.title')}</Text>
                    <TouchableOpacity
                        onPress={() => { navigation.navigate({ name: 'Settings' }) }}
                        style={styles.close}
                    >
                        <Image source={require('../../assets/HighScore/close.png')} style={styles.arrow} />
                    </TouchableOpacity>
                </View>
                <View style={styles.containersContainer}>
                    <Container
                        ConainerName={translate('Favourites.3D')}
                        pageTitle={translate('Favourites.Models')}
                        navigation={navigation}
                        pageNav={'favMonumentsPage'}
                    >
                        {MonumentsCards}
                    </Container>
                    <Container
                        ConainerName={translate('Favourites.articles')}
                        pageTitle={translate('Favourites.articles')}
                        navigation={navigation}
                        pageNav={'favArticlesPage'}
                    >
                        {ArticlesCards}
                    </Container>
                </View>
            </ScrollView>
        </View>
    )

}