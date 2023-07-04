import { useState, useContext, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, ScrollView, RefreshControl } from "react-native";
import { styles } from "./Styles";
import { translate } from "../../Localization";
import { colors } from "../../AppStyles";
import { UserContext } from "../Context/Context";
import MainMenu from "../MainMenu/MainMenu";
import Backend from "../../Backend/Backend";
import { useIsFocused } from "@react-navigation/native";
import { setStatusBarStyle } from "expo-status-bar";
import { UserDataContext } from "../Context/DataContext";
import SvgMaker from "../SvgMaker/SvgMaker";
import { Ehome, MenuIcon } from "../../assets/SVG/Icons";
import ArticlesSection from "./ArticlesSection";
import ToursSection from "./ToursSection";


export default function HomePage({ }) {
    // Refreshing state
    const [refreshing, setRefreshing] = useState(false);

    // check if the currenpage is focused
    const isFocused = useIsFocused();

    if (isFocused) {
        setStatusBarStyle('light');
    }

    // use the context to get the state of the modal
    const { modalVisible, showModal, setScreen } = useContext(UserContext);

    // get user data from context
    const { updateUserData, updateScore } = useContext(UserDataContext);

    // The search term state for articles
    const [articleSearchTerm, setArticleSearchTerm] = useState('');

    // The search term state for tours
    const [tourSearchTerm, setTourSearchTerm] = useState('');

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

    // refresh the page
    const onRefresh = async () => {
        setRefreshing(true);
        await getLandmarkScore();
        await getMonumentsScore();
        await getStatuesScore();
        await getUserData();
        setRefreshing(false);
    }

    // for user data and score
    useEffect(() => {
        async function fetchData() {
            await getUserData();
            await getLandmarkScore();
            await getMonumentsScore();
            await getStatuesScore();
        }
        fetchData();
    }, []);

    return (
        <View style={styles.container}>
            {modalVisible ? <MainMenu /> : null}
            <ScrollView
                contentContainerStyle={styles.contentContainer}
                showsVerticalScrollIndicator={false}
                refreshControl={<RefreshControl tintColor={styles.refreshColor} colors={[styles.refreshColor]} refreshing={refreshing} onRefresh={onRefresh} />}
            >
                <View style={styles.header}>
                    <TouchableOpacity style={styles.aboutus} onPress={() => { showModal(), setScreen('Home') }}>
                        <SvgMaker Svg={MenuIcon} />
                    </TouchableOpacity>
                    <Text style={styles.title}>{translate('Home.title')}</Text>
                </View>
                <SvgMaker Svg={Ehome} style={styles.logo} />
                <Text style={styles.etlas}>{translate('Home.etlas')}</Text>
                <Text style={styles.desc}>{translate('Home.desc')}</Text>
                <TextInput
                    style={styles.SearchForm}
                    placeholder={translate('Home.search')}
                    placeholderTextColor={colors.Grey}
                    onChangeText={(searchTerm) => {
                        setArticleSearchTerm(searchTerm);
                        setTourSearchTerm(searchTerm);
                    }}
                    cursorColor={colors.DarkCyan}
                />
                <ToursSection tourSearchTerm={tourSearchTerm} />
                <ArticlesSection articleSearchTerm={articleSearchTerm} />
            </ScrollView>
        </View>
    )
}