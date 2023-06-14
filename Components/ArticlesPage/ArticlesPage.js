import { useState, useContext } from "react";
import { styles } from "./Styles";
import { View, Text, TouchableOpacity, Image, TextInput, Modal, FlatList } from "react-native";
import { translate } from "../../Localization";
import { colors } from "../../AppStyles";
import ArticleCard from "../ArticleCard/ArticleCard";
import { UserContext } from "../Context/Context";
import MainMenu from "../MainMenu/MainMenu";
import { isIOS } from "../../AppStyles";
import Backend from "../../Backend/Backend";
import { goBack } from "../../Backend/Navigator";


function Filter({ showFilerList, setShowFilterList, sortBy, setSortBy }) {

    const Checked = <Image source={require('../../assets/language_selection/check.png')} style={styles.check} />;

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


    // handle number of column change
    const handleNumColumnChange = (newNumColumns) => {
        setNumColumn(newNumColumns);
    }

    // get the articles from backend
    const ArticlesList = Backend.getArticles().filter((Article) => {
        return Article.Title.toLowerCase().includes(searchTerm.toLowerCase());
    });

    // filtered Sort
    SortFunctions = {
        'Name (a-z)': (a, b) => { return a.Title.localeCompare(b.Title) },
        'Name (z-a)': (a, b) => { return b.Title.localeCompare(a.Title) },
        'Latest': (a, b) => { return a.Date.localeCompare(b.Date) },
        'Oldest': (a, b) => { return b.Date.localeCompare(a.Date) },
    }

    // filtered Articles
    const filteredArticles = ArticlesList.sort(SortFunctions[sortBy]);

    // filter the articles based on the search term and filter option
    const Articles = filteredArticles.map((article, idx) => <ArticleCard article={article} key={idx} screen={'ArticlesPage'} />);

    return (
        <View style={styles.container}>
            {isIOS() ? <MainMenu /> : null}
            {showFilerList ? <Filter showFilerList={showFilerList} setShowFilterList={setShowFilterList} sortBy={sortBy} setSortBy={setSortBy} /> : null}
            <View style={styles.header}>
                <TouchableOpacity style={styles.aboutus} onPress={() => { showModal(), setScreen('ArticlesPage') }}>
                    <Image source={require('../../assets/KnowledgeCheck/tabler_exclamation-circle.png')} />
                </TouchableOpacity>
                <Text style={styles.title}>{translate('Articles.title')}</Text>
                <TouchableOpacity onPress={goBack}>
                    <Image source={require('../../assets/Scan/Arr.png')} />
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
                    <Image source={require('../../assets/ArticlesPage/Filter.png')} />
                </TouchableOpacity>
            </View>
            <FlatList 
                data={Articles}
                renderItem={({item}) => item}
                keyExtractor={(_, index) => index.toString()}
                contentContainerStyle={styles.contentContainer}
                columnWrapperStyle={styles.Gap}
                style={styles.Box}
                key={numColumns}
                numColumns={numColumns}
                horizontal={false}
                initialNumToRender={10}
            />
        </View>
    );
}