import { useContext, useEffect, memo } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { styles } from "./Styles";
import { translate } from "../../Localization";
import ArticleCard from "../ArticleCard/ArticleCard";
import Backend from "../../Helpers/Backend";
import { goPage } from "../../Helpers/Navigator";
import SvgMaker from "../SvgMaker/SvgMaker";
import { NewIcon } from "../../assets/SVG/Icons";
import { ArticlesContext } from "../Context/ArticlesContext";


function ArticlesSection({ articleSearchTerm }) {

    // use the context to get the state of the articles
    const { articles, articlesPage, updateArticlesPage, updateArticles } = useContext(ArticlesContext);

    // get articles from backend
    const getArticles = async () => {
        try {
            const { statusCode, data } = await Backend.getArticles(articlesPage);
            if (Backend.isSuccessfulRequest(statusCode)) {
                updateArticles(data.results);
                updateArticlesPage(articlesPage + 1);
            }
        } catch (error) {
            console.log(error);
        }
    }

    // render element to the list
    const renderSectionItem = ({ item }) => {
        return <ArticleCard article={item} screen={'Home'} />
    }

    // fetch the article in the first time 
    useEffect(() => {
        getArticles();
    }, []);

    // articles after filter
    const ArticlesList = articles.filter((Article) => {
        return Article.article_title.toLowerCase().includes(articleSearchTerm.toLowerCase());
    });

    // if the section is empty
    if (ArticlesList.length == 0) {
        return null;
    }

    return (
        <View styles={styles.Box}>
            <View style={styles.boxHeader}>
                <Text style={styles.boxTitle}>{translate('Home.article')}</Text>
                <SvgMaker Svg={NewIcon} style={styles.new_image} />
                <TouchableOpacity style={styles.see_all} onPress={() => { goPage('ArticlesPage', 'Home') }}>
                    <Text style={styles.see_all_text}>{translate('Home.see_all')}</Text>
                </TouchableOpacity>
            </View>
            <FlatList
                data={ArticlesList}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={renderSectionItem}
                keyExtractor={(_, idx) => idx.toString()}
                style={styles.swipper}
                initialNumToRender={5}
                onEndReached={getArticles}
                onEndReachedThreshold={0.5}
                key={2}
            />
        </View>
    )
};

export default ArticlesSection;
