import { View, Text, TouchableOpacity, Image, FlatList } from "react-native";
import { styles } from "./Styles";
import FavArticleCard from "./FavArticleCard";
import FavMonumentCard from "./FavMonumentCard";
import Backend from "../../Helpers/Backend";
import { translate } from "../../Localization";
import { goBack, goPage } from "../../Helpers/Navigator";
import { LinearGradient } from 'expo-linear-gradient';
import SvgMaker from "../SvgMaker/SvgMaker";
import { InvCloseIcon } from "../../assets/SVG/Icons";


function Container({ List, ConainerName, pageNav, isArticle }) {

    // render item in flat list
    const renderItem = ({ item }) => {
        if (isArticle) {
            return <FavArticleCard favArticle={item} screen={'favourites'} />
        } else {
            return <FavMonumentCard Monument={item} screen={'favourites'} />
        }
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
                        data={List}
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

export default function Favourites({ }) {

    // get the lists from the backend
    const favArticlesList = Backend.getFavArticles();
    const favMonumentsList = Backend.getFavMonuments();


    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>{translate('Favourites.title')}</Text>
                <TouchableOpacity
                    onPress={goBack}
                    style={styles.close}
                >
                    <SvgMaker Svg={InvCloseIcon} style={styles.arrow} />
                </TouchableOpacity>
            </View>
            <View style={styles.containersContainer}>
                <Container
                    ConainerName={translate('Favourites.3D')}
                    pageTitle={translate('Favourites.Models')}
                    pageNav={'favMonumentsPage'}
                    List={favMonumentsList}
                    isArticle={false}
                />
                <Container
                    ConainerName={translate('Favourites.articles')}
                    pageTitle={translate('Favourites.articles')}
                    pageNav={'favArticlesPage'}
                    List={favArticlesList}
                    isArticle={true}
                />
            </View>
        </View>
    )

}