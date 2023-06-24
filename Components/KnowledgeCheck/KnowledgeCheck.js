import { View, Image, Text, TouchableOpacity, ScrollView, RefreshControl } from "react-native";
import { styles } from './Styles'
import { translate } from "../../Localization";
import { UserContext } from "../Context/Context";
import { useContext } from "react";
import MainMenu from "../MainMenu/MainMenu";
import { isIOS } from "../../AppStyles";
import { goPage } from "../../Backend/Navigator";
import { useIsFocused } from "@react-navigation/native";
import { setStatusBarStyle } from "expo-status-bar";
import PopupMessage from "../PopupMessage/PopupMessage";
import Loader from "../Loader/Loader";
import { UserDataContext } from "../Context/DataContext";


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

    const { landmarkScore, monumentScore, statueScore } = useContext(UserDataContext);

    return (
        <View style={styles.container}>
            {isIOS() ? <MainMenu /> : null}
            <ScrollView 
                contentContainerStyle={styles.contentContainer} 
                showsVerticalScrollIndicator={false}
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