import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { styles } from "./Styles";
import FavArticleCard from "./FavArticleCard";
import FavMonumentCard from "./FavMonumentCard";
import Backend from "../../Backend/Backend";
import { translate } from "../../Localization";
import { goPage } from "../../Backend/Navigator";


function Container({ children, ConainerName, pageNav }) {
    return (
        <View style={styles.container}>
            <View style={styles.containerTitle}>
                <Text style={styles.containerHeaderTitle}>{ConainerName}</Text>
                <TouchableOpacity
                    onPress={() => { goPage(pageNav, 'favourites') }}
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

export default function Favourites({ }) {

    // get the lists from the backend
    const ArticlesList = Backend.getFavArticles();
    const MonumentsList = Backend.getFavMonuments();

    // mapping the cards
    const ArticlesCards = ArticlesList.map((Article, index) => { return <FavArticleCard key={index} Article={Article} screen={'favourites'}/> });
    const MonumentsCards = MonumentsList.map((Monument, index) => { return <FavMonumentCard key={index} Monument={Monument} screen={'favourites'}/> });


    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContainer}>
                <View style={styles.header}>
                    <Text style={styles.title}>{translate('Favourites.title')}</Text>
                    <TouchableOpacity
                        onPress={() => { goPage('Settings', 'favourites') }}
                        style={styles.close}
                    >
                        <Image source={require('../../assets/HighScore/close.png')} style={styles.arrow} />
                    </TouchableOpacity>
                </View>
                <View style={styles.containersContainer}>
                    <Container
                        ConainerName={translate('Favourites.3D')}
                        pageTitle={translate('Favourites.Models')}
                        pageNav={'favMonumentsPage'}
                    >
                        {MonumentsCards}
                    </Container>
                    <Container
                        ConainerName={translate('Favourites.articles')}
                        pageTitle={translate('Favourites.articles')}
                        pageNav={'favArticlesPage'}
                    >
                        {ArticlesCards}
                    </Container>
                </View>
            </ScrollView>
        </View>
    )

}