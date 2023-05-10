import { useState, useContext } from "react";
import { styles } from "./Styles";
import { View, ScrollView, Text, TouchableOpacity, Image, TextInput } from "react-native";
import { translate } from "../../Localization";
import { colors } from "../../AppStyles";
import ArticleCard from "../ArticleCard/ArticleCard";
import { UserContext } from "../Context/Context";
import MainMenu from "../MainMenu/MainMenu";
import { isIOS } from "../../AppStyles";


export default function ArticlesPage({ navigation }) {

    const [searchTerm, setSearchTerm] = useState('');
    const { showModal, setScreen } = useContext(UserContext);

    const Article = {
        Title: "Anubis",
        Description: "Know more about Anubis and his powers.",
        Date: "15 Jan 2023",
        Img: require('../../assets/HomePage/monument.png'),
        fullDescription: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
        has been the industry's standard dummy text ever since the 1500s, when an unknown
        printer took a galley of type and scrambled it to make a type specimen book. It has survived
        not only five centuries, but also the leap into electronic typesetting, remaining essentially
        unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`
    };

    let ArticleList = [];
    for (let i = 0; i < 20; i++)
        ArticleList.push(Article);

    const Articles = ArticleList.map((article, idx) => <ArticleCard article={article} key={idx} navigation={navigation} screen={'ArticlesPage'}/>);

    return (
        <View style={styles.container}>
            {isIOS() ? <MainMenu /> : null}
            <ScrollView contentContainerStyle={styles.contentContainer}>
                <View style={styles.header}>
                    <TouchableOpacity style={styles.aboutus} onPress={() => { showModal(), setScreen('ArticlesPage') }}>
                        <Image source={require('../../assets/KnowledgeCheck/tabler_exclamation-circle.png')} />
                    </TouchableOpacity>
                    <Text style={styles.title}>{translate('Articles.title')}</Text>
                    <TouchableOpacity onPress={() => { navigation.goBack() }}>
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
                    <TouchableOpacity style={styles.filter}>
                        <Image source={require('../../assets/ArticlesPage/Filter.png')} />
                    </TouchableOpacity>
                </View>
                <View style={styles.Box}>
                    {Articles}
                </View>
            </ScrollView>
        </View>
    );
}