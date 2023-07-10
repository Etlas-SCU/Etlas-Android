import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { styles } from './Styles'
import { translate } from "../../Localization";
import { UserContext } from "../Context/Context";
import { useContext } from "react";
import MainMenu from "../MainMenu/MainMenu";
import { isIOS } from "../../AppStyles";
import { goPage } from "../../Helpers/Navigator";
import { useIsFocused } from "@react-navigation/native";
import { setStatusBarStyle } from "expo-status-bar";
import { UserDataContext } from "../Context/DataContext";
import SvgMaker from "../SvgMaker/SvgMaker";
import { MenuIcon } from "../../assets/SVG/Icons";
import { StatueImage, LandmarkImage, MonumentImage } from '../../assets/SVG/Images';
import { useSafeAreaInsets, SafeAreaView } from "react-native-safe-area-context";


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
                <SvgMaker Svg={img} style={styles.image} />
            </View>
        </TouchableOpacity>
    )
}

export default function KnowledgeCheck({ }) {
    const insets = useSafeAreaInsets();


    // check if the currenpage is focused
    const isFocused = useIsFocused();

    if (isFocused) {
        setStatusBarStyle('light');
    }

    // main menu
    const { showModal, setScreen } = useContext(UserContext);

    const { landmarkScore, monumentScore, statueScore } = useContext(UserDataContext);

    return (
        <SafeAreaView style={styles.container}>
            {isIOS() ? <MainMenu /> : null}
            <ScrollView
                contentContainerStyle={[styles.contentContainer, { marginTop: -insets.top }]}
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.header}>
                    <TouchableOpacity style={styles.aboutus} onPress={() => { showModal(), setScreen('KnowledgeCheck') }}>
                        <SvgMaker Svg={MenuIcon} />
                    </TouchableOpacity>
                    <Text style={styles.title}>{translate('KnowledgeCheck.title')}</Text>
                </View>
                <View style={styles.cards}>
                    <Card
                        title={translate('KnowledgeCheck.Statues')}
                        desc={translate('KnowledgeCheck.StatuesText')}
                        score={statueScore}
                        img={StatueImage}
                    />
                    <Card
                        title={translate('KnowledgeCheck.Monuments')}
                        desc={translate('KnowledgeCheck.MonumentsText')}
                        score={monumentScore}
                        img={MonumentImage}
                    />
                    <Card
                        title={translate('KnowledgeCheck.Landmarks')}
                        desc={translate('KnowledgeCheck.LandmarksText')}
                        score={landmarkScore}
                        img={LandmarkImage}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}