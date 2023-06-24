import { View, Image, Text, TouchableOpacity, ScrollView, RefreshControl } from "react-native";
import { styles } from './Styles'
import { translate } from "../../Localization";
import { UserContext } from "../Context/Context";
import { useContext, useEffect, useState, useCallback } from "react";
import MainMenu from "../MainMenu/MainMenu";
import { isIOS } from "../../AppStyles";
import { goPage } from "../../Backend/Navigator";
import { useIsFocused } from "@react-navigation/native";
import { setStatusBarStyle } from "expo-status-bar";
import PopupMessage from "../PopupMessage/PopupMessage";
import Loader from "../Loader/Loader";
import Backend from "../../Backend/Backend";


function Card({ title, img, desc, score }) {
    return (
        <TouchableOpacity
            style={styles.body}
            onPress={() => {
                goPage('KnowledgeGame', 'KnowledgeCheck', { lastGame: title })
            }}
        >
            <View style={styles.bodyContent}>
                <Text numberOfLines={1} style={styles.bodyTitle} adjustsFontSizeToFit={true}>{title}</Text>
                <Text numberOfLines={2} style={styles.bodyText} adjustsFontSizeToFit={true}>{desc}</Text>
                <Text numberOfLines={1} style={styles.bodyScore} adjustsFontSizeToFit={true}>{score}</Text>
            </View>
            <View style={styles.bodyImage}>
                <Image source={img} style={styles.image} />
            </View>
        </TouchableOpacity>
    )
}

export default function KnowledgeCheck({ }) {

    // check if the currenpage is focused
    const isFocused = useIsFocused();

    if (isFocused) {
        setStatusBarStyle('light');
    }

    // main menu
    const { showModal, setScreen } = useContext(UserContext);

    // get popup states and loader
    const { showPopupMessage, popupMessageVisible } = useContext(UserContext);
    const { loaderVisible, showLoader, hideLoader } = useContext(UserContext);

    // states for scores
    const [landmarkScore, setLandmarkScore] = useState('0/0');
    const [monumentScore, setMonumentScore] = useState('0/0');
    const [statueScore, setStatueScore] = useState('0/0');

    // refresh control
    const [refreshing, setRefreshing] = useState(false);
    
    // on refresh
    const onRefresh = useCallback(async () => {
        setRefreshing(true);
        await loadScores();
        setRefreshing(false);
    }, []);
    
    // get monument score
    const getMonumentScore = async () => {
        try {
            const { statusCode, data } = await Backend.getMonumentScore();
            if (!Backend.isSuccessfulRequest(statusCode)) {
                hideLoader();
                const errorMessage = await Backend.getErrorMessage(data).then(response => response);
                showPopupMessage('Error', errorMessage);
                return false;
            }
            setMonumentScore(data.best_score_monuments);
            return true;
        } catch (error) {
            console.log(error);
        }
    }

    // get landmark score
    const getLandmarkScore = async () => {
        try {
            const { statusCode, data } = await Backend.getLandmarkScore();
            if (!Backend.isSuccessfulRequest(statusCode)) {
                hideLoader();
                const errorMessage = await Backend.getErrorMessage(data).then(response => response);
                showPopupMessage('Error', errorMessage);
                return false;
            }
            setLandmarkScore(data.best_score_landmarks);
            return true;
        } catch (error) {
            console.log(error);
        }
    }

    // get statue score
    const getStatueScore = async () => {
        try {
            const { statusCode, data } = await Backend.getStatueScore();
            if (!Backend.isSuccessfulRequest(statusCode)) {
                hideLoader();
                const errorMessage = await Backend.getErrorMessage(data).then(response => response);
                showPopupMessage('Error', errorMessage);
                return false;
            }
            setStatueScore(data.best_score_statues);
            return true;
        } catch (error) {
            console.log(error);
        }
    }


    // loading Scores
    const loadScores = async () => {
        showLoader(translate('messages.getScore'));
        await getMonumentScore();
        await getLandmarkScore();
        await getStatueScore();
        hideLoader();
    };

    // get scores
    useEffect(() => {
        loadScores();
    }, []);


    return (
        <View style={styles.container}>
            {loaderVisible ? <Loader /> : null}
            {popupMessageVisible ? <PopupMessage /> : null}
            {isIOS() ? <MainMenu /> : null}
            <ScrollView 
                contentContainerStyle={styles.contentContainer} 
                showsVerticalScrollIndicator={false}
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                }
            >
                <View style={styles.header}>
                    <TouchableOpacity style={styles.aboutus} onPress={() => { showModal(), setScreen('KnowledgeCheck') }}>
                        <Image source={require('../../assets/KnowledgeCheck/tabler_exclamation-circle.png')} />
                    </TouchableOpacity>
                    <Text style={styles.title}>{translate('KnowledgeCheck.title')}</Text>
                </View>
                <View style={styles.cards}>
                    <Card
                        title={translate('KnowledgeCheck.Statues')}
                        desc={translate('KnowledgeCheck.StatuesText')}
                        score={statueScore}
                        img={require('../../assets/KnowledgeCheck/Statue_1.png')}
                    />
                    <Card
                        title={translate('KnowledgeCheck.Monuments')}
                        desc={translate('KnowledgeCheck.MonumentsText')}
                        score={monumentScore}
                        img={require('../../assets/KnowledgeCheck/Statue_2.png')}
                    />
                    <Card
                        title={translate('KnowledgeCheck.Landmarks')}
                        desc={translate('KnowledgeCheck.LandmarksText')}
                        score={landmarkScore}
                        img={require('../../assets/KnowledgeCheck/Statue_3.png')}
                    />
                </View>
            </ScrollView>
        </View>
    );
}