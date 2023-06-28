import { ScrollView, View, Text, TouchableOpacity, Image, FlatList } from "react-native";
import { styles } from "./Styles";
import { translate } from "../../Localization";
import Backend from "../../Backend/Backend";
import FavArticleCard from "../Favourites/FavArticleCard";
import { goBack, getParams } from "../../Backend/Navigator";
import SvgMaker from "../SvgMaker/SvgMaker";
import { InvCloseIcon } from "../../assets/SVG/Icons";


export default function FavArticlesPage({ }) {

    // get the article list
    const favArticlesList = Backend.getFavArticles();

    // get the screen name from navigator
    const { prevPage } = getParams();

    // render items in flat list
    const renderItem = ({ item }) => {
        return <FavArticleCard favArticle={item} screen={prevPage} />
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
                data={favArticlesList}
                showsHorizontalScrollIndicator={false}
                renderItem={renderItem}
                keyExtractor={(_, index) => index.toString()}
                initialNumToRender={10}
                contentContainerStyle={styles.contentContainer}
                nestedScrollEnabled={true}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}