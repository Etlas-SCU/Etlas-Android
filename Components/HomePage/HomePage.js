import { useState, useContext, useEffect, memo } from "react";
import { View, Text, Image, TextInput, TouchableOpacity, ScrollView, FlatList, RefreshControl } from "react-native";
import { styles } from "./Styles";
import { translate } from "../../Localization";
import { colors } from "../../AppStyles";
import ToursCard from "../ToursCard/ToursCard";
import ArticleCard from "../ArticleCard/ArticleCard";
import { UserContext } from "../Context/Context";
import MainMenu from "../MainMenu/MainMenu";
import Backend from "../../Backend/Backend";
import { goPage } from "../../Backend/Navigator";
import { useIsFocused } from "@react-navigation/native";
import { setStatusBarStyle } from "expo-status-bar";
import { UserDataContext } from "../Context/DataContext";
import Loader from "../Loader/Loader";
import PopupMessage from "../PopupMessage/PopupMessage";


const Section = memo(({ title, List, pageName, isArticle }) => {

    // render element to the list
    const renderSectionItem = ({ item }) => {
        if (isArticle) {
            return <ArticleCard article={item} screen={'Home'} />
        } else {
            return <ToursCard Tour={item} screen={'Home'} />
        }
    }

    return (
        <View styles={styles.Box}>
            <View style={styles.boxHeader}>
                <Text style={styles.boxTitle}>{title}</Text>
                <Image style={styles.new_image} source={require('../../assets/HomePage/New.png')} />
                <TouchableOpacity style={styles.see_all} onPress={() => { goPage(pageName, 'Home') }}>
                    <Text style={styles.see_all_text}>{translate('Home.see_all')}</Text>
                </TouchableOpacity>
            </View>
            <FlatList
                data={List}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={renderSectionItem}
                keyExtractor={(_, idx) => idx.toString()}
                style={styles.swipper}
                initialNumToRender={5}
            />
        </View>
    )
});

export default function HomePage({ }) {
    // Refreshing state
    const [refreshing, setRefreshing] = useState(false);

    // check if the currenpage is focused
    const isFocused = useIsFocused();

    if (isFocused) {
        setStatusBarStyle('light');
    }


    const { modalVisible, showModal, setScreen } = useContext(UserContext);
    const { updateUserData, updateScore } = useContext(UserDataContext);
    const [searchTerm, setSearchTerm] = useState('');

    // get user data from backend
    const getUserData = async () => {
        try {
            const { statusCode, data } = await Backend.getUserData();
            if (Backend.isSuccessfulRequest(statusCode)) {
                updateUserData(data);
            }
        } catch (error) {
            console.log(error);
        }
    }

    // get landmark score
    const getLandmarkScore = async () => {
        try {
            const { statusCode, data } = await Backend.getLandmarkScore();
            if (Backend.isSuccessfulRequest(statusCode)) {
                updateScore(data.best_score_landmarks, "Landmarks");
            }
        } catch (error) {
            console.log(error);
        }
    }

    // get monuments score
    const getMonumentsScore = async () => {
        try {
            const { statusCode, data } = await Backend.getMonumentScore();
            if (Backend.isSuccessfulRequest(statusCode)) {
                updateScore(data.best_score_monuments, "Monuments");
            }
        } catch (error) {
            console.log(error);
        }
    }

    // get statues score
    const getStatuesScore = async () => {
        try {
            const { statusCode, data } = await Backend.getStatueScore();
            if (Backend.isSuccessfulRequest(statusCode)) {
                updateScore(data.best_score_statues, "Statues");
            }
        } catch (error) {
            console.log(error);
        }
    }

    // get score of the user
    const getScore = () => {
        getLandmarkScore();
        getMonumentsScore();
        getStatuesScore();
    }

    // refresh the page
    const onRefresh = () => {
        setRefreshing(true);
        getUserData();
        getScore();
        setRefreshing(false);
    }

    useEffect(() => {
        getUserData();
        getScore();
    })


    // get tours list from backend
    const ToursList = Backend.getTours().filter((Tour) => {
        return Tour.Title.toLowerCase().includes(searchTerm.toLowerCase());
    });
    const ArticlesList = Backend.getArticles().filter((Article) => {
        return Article.Title.toLowerCase().includes(searchTerm.toLowerCase());
    });

    return (
        <View style={styles.container}>
            {modalVisible ? <MainMenu /> : null}
            <ScrollView
                contentContainerStyle={styles.contentContainer}
                showsVerticalScrollIndicator={false}
                refreshControl={<RefreshControl colors={[styles.refreshColor]} refreshing={refreshing} onRefresh={onRefresh}/>}
            >
                <View style={styles.header}>
                    <TouchableOpacity style={styles.aboutus} onPress={() => { showModal(), setScreen('Home') }}>
                        <Image source={require('../../assets/KnowledgeCheck/tabler_exclamation-circle.png')} />
                    </TouchableOpacity>
                    <Text style={styles.title}>{translate('Home.title')}</Text>
                </View>
                <Image style={styles.logo} source={require('../../assets/HomePage/e.png')} />
                <Text style={styles.etlas}>{translate('Home.etlas')}</Text>
                <Text style={styles.desc}>{translate('Home.desc')}</Text>
                <TextInput
                    style={styles.SearchForm}
                    placeholder={translate('Home.search')}
                    placeholderTextColor={colors.Grey}
                    onChangeText={(searchTerm) => setSearchTerm(searchTerm)}
                    cursorColor={colors.DarkCyan}
                />
                <Section
                    title={translate('Home.tours')}
                    pageName='ToursPage'
                    List={ToursList}
                    isArticle={false}
                />
                <Section
                    title={translate('Home.article')}
                    pageName='ArticlesPage'
                    List={ArticlesList}
                    isArticle={true}
                />
            </ScrollView>
        </View>
    )
}