import { useState, useContext } from "react";
import { styles } from "./Styles";
import { View, Text, TouchableOpacity, TextInput, Modal, FlatList } from "react-native";
import { translate } from "../../Localization";
import { colors } from "../../AppStyles";
import ArticleCard from "../ArticleCard/ArticleCard";
import { UserContext } from "../Context/Context";
import MainMenu from "../MainMenu/MainMenu";
import { isIOS } from "../../AppStyles";
import Backend from "../../Backend/Backend";
import { goBack } from "../../Backend/Navigator";
import SvgMaker from "../SvgMaker/SvgMaker";
import { LeftArrow, MenuIcon, FilterIcon, InvCheckIcon } from "../../assets/SVG/Icons";
import { ArticlesContext } from "../Context/ArticlesContext";


function Filter({ showFilerList, setShowFilterList, sortBy, setSortBy }) {

    const Checked = <SvgMaker Svg={InvCheckIcon} style={styles.check} />;

    const optionsList = [
        'Name (a-z)',
        'Name (z-a)',
        'Latest',
        'Oldest',
    ];

    const options = optionsList.map((option, idx) => {
        return (
            <TouchableOpacity
                key={idx}
                style={styles.option}
                onPress={() => { setSortBy(option), setShowFilterList(false) }}
            >
                <Text style={styles.optionText}>{option}</Text>
                {option === sortBy ? Checked : null}
            </TouchableOpacity>
        )
    });

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={showFilerList}
        >
            <View style={styles.modalContainer}>
                <Text style={styles.modaltitle}>{translate('ToursPage.sortBy')}</Text>
                <View style={styles.modal}>
                    {options}
                </View>
            </View>

        </Modal>
    )

}


export default function ArticlesPage({ }) {

    const [searchTerm, setSearchTerm] = useState('');
    const { showModal, setScreen } = useContext(UserContext);
    const [showFilerList, setShowFilterList] = useState(false);
    const [sortBy, setSortBy] = useState('Latest');
    const [numColumns, setNumColumn] = useState(2);
    const { articles, articlesPage, updateArticlesPage, updateArticles } = useContext(ArticlesContext);

    // get the articles from backend
    const ArticlesList = articles.filter((Article) => {
        return Article.article_title.toLowerCase().includes(searchTerm.toLowerCase());
    });

    // filtered Sort
    SortFunctions = {
        'Name (a-z)': (a, b) => { return a.article_title.localeCompare(b.article_title) },
        'Name (z-a)': (a, b) => { return b.article_title.localeCompare(a.article_title) },
        'Latest': (a, b) => { return b.date.localeCompare(a.date) },
        'Oldest': (a, b) => { return a.date.localeCompare(b.date) },
    }

    // filtered Articles
    const filteredArticles = ArticlesList.sort(SortFunctions[sortBy]);

    // render item in flat list
    const renderItem = ({ item }) => {
        return <ArticleCard article={item} screen={'ArticlesPage'} />
    }

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

    // handle end reached
    

    return (
        <View style={styles.container}>
            {isIOS() ? <MainMenu /> : null}
            {showFilerList ? <Filter showFilerList={showFilerList} setShowFilterList={setShowFilterList} sortBy={sortBy} setSortBy={setSortBy} /> : null}
            <View style={styles.header}>
                <TouchableOpacity style={styles.aboutus} onPress={() => { showModal(), setScreen('ArticlesPage') }}>
                    <SvgMaker Svg={MenuIcon} />
                </TouchableOpacity>
                <Text style={styles.title}>{translate('Articles.title')}</Text>
                <TouchableOpacity onPress={goBack}>
                    <SvgMaker Svg={LeftArrow} />
                </TouchableOpacity>
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.SearchForm}
                    placeholder={translate('Articles.search')}
                    placeholderTextColor={colors.Grey}
                    onChangeText={(searchTerm) => setSearchTerm(searchTerm)}
                    cursorColor={colors.DarkCyan}
                />
                <TouchableOpacity
                    style={styles.filter}
                    onPress={() => { setShowFilterList(true) }}
                >
                    <SvgMaker Svg={FilterIcon} />
                </TouchableOpacity>
            </View>
            <FlatList
                data={filteredArticles}
                renderItem={renderItem}
                keyExtractor={(_, index) => index.toString()}
                contentContainerStyle={styles.contentContainer}
                columnWrapperStyle={styles.Gap}
                style={styles.Box}
                key={numColumns}
                numColumns={numColumns}
                horizontal={false}
                initialNumToRender={10}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                onEndReached={getArticles}
                onEndReachedThreshold={0.5}
            />
        </View>
    );
}