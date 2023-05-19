import { useState, useContext } from "react";
import { View, Text, Image, TextInput, TouchableOpacity, ScrollView, SafeAreaView } from "react-native";
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


function Section({ title, children, pageName }) {
    return (
        <View styles={styles.Box}>
            <View style={styles.boxHeader}>
                <Text style={styles.boxTitle}>{title}</Text>
                <Image style={styles.new_image} source={require('../../assets/HomePage/New.png')} />
                <TouchableOpacity style={styles.see_all} onPress={() => { goPage(pageName, 'Home') }}>
                    <Text style={styles.see_all_text}>{translate('Home.see_all')}</Text>
                </TouchableOpacity>
            </View>
            <SafeAreaView style={styles.swipper} >
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} nestedScrollEnabled={true}>
                    {children}
                </ScrollView>
            </SafeAreaView>
        </View>
    )
}

export default function HomePage({ }) {

    // check if the currenpage is focused
    const isFocused = useIsFocused();

    if(isFocused){
        setStatusBarStyle('light');
    }


    const { modalVisible, showModal, setScreen } = useContext(UserContext);
    const [searchTerm, setSearchTerm] = useState('');

    // getting the toursList and ArticlesList from Backend.js
    const ToursList = Backend.getTours().filter((Tour) => {
        return Tour.Title.toLowerCase().includes(searchTerm.toLowerCase());
    });
    const ArticlesList = Backend.getArticles().filter((Article) => {
        return Article.Title.toLowerCase().includes(searchTerm.toLowerCase());
    });

    // mapping the toursList and ArticlesList to jsx elements
    const Tours = ToursList.map((Tour, idx) => <ToursCard Tour={Tour} key={idx} screen={'Home'} />);
    const Articles = ArticlesList.map((Article, idx) => <ArticleCard article={Article} key={idx} screen={'Home'} />);


    return (
        <View style={styles.container}>
            {modalVisible ? <MainMenu /> : null}
            <ScrollView contentContainerStyle={styles.contentContainer} showsVerticalScrollIndicator={false}>
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
                    children={Tours}
                />
                <Section
                    title={translate('Home.article')}
                    pageName='ArticlesPage'
                    children={Articles}
                />
            </ScrollView>
        </View>
    )
}