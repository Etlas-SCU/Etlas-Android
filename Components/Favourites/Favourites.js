import { View, Text, TouchableOpacity, Image, ScrollView, FlatList } from "react-native";
import { styles } from "./Styles";
import FavArticleCard from "./FavArticleCard";
import FavMonumentCard from "./FavMonumentCard";
import Backend from "../../Backend/Backend";
import { translate } from "../../Localization";
import { goBack, goPage } from "../../Backend/Navigator";


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
                <FlatList
                    data={children}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => item}
                    keyExtractor={(_, index) => index.toString()}
                    initialNumToRender={10}
                    contentContainerStyle={styles.contentContainer}
                    nestedScrollEnabled={true}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </View>
    )
}

export default function Favourites({ }) {

    // get the lists from the backend
    const favArticlesList = Backend.getFavArticles();
    const MonumentsList = Backend.getFavMonuments();

    // mapping the cards
    const favArticlesCards = favArticlesList.map((favArticle, index) => { return <FavArticleCard key={index} favArticle={favArticle} screen={'favourites'}/> });
    const MonumentsCards = MonumentsList.map((Monument, index) => { return <FavMonumentCard key={index} Monument={Monument} screen={'favourites'}/> });

    const ContainerData = [
        {
            ConainerName: translate('Favourites.3D'),
            pageTitle: translate('Favourites.Models'),
            pageNav: 'favMonumentsPage',
            children: MonumentsCards
        },
        {
            ConainerName: translate('Favourites.articles'),
            pageTitle: translate('Favourites.articles'),
            pageNav: 'favArticlesPage',
            children: favArticlesCards
        }
    ];

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>{translate('Favourites.title')}</Text>
                <TouchableOpacity
                    onPress={goBack}
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
                    children={MonumentsCards}
                />
                <Container
                    ConainerName={translate('Favourites.articles')}
                    pageTitle={translate('Favourites.articles')}
                    pageNav={'favArticlesPage'}
                    children={favArticlesCards}
                />
        </View>
        </View>
    )

}