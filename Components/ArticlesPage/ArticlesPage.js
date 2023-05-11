import { useState, useContext } from "react";
import { styles } from "./Styles";
import { View, ScrollView, Text, TouchableOpacity, Image, TextInput } from "react-native";
import { translate } from "../../Localization";
import { colors } from "../../AppStyles";
import ArticleCard from "../ArticleCard/ArticleCard";
import { UserContext } from "../Context/Context";
import MainMenu from "../MainMenu/MainMenu";
import { isIOS } from "../../AppStyles";
import Backend from "../../Backend/Backend";


export default function ArticlesPage({ navigation }) {

    const [searchTerm, setSearchTerm] = useState('');
    const { showModal, setScreen } = useContext(UserContext);

    // get the articles from backend
    const ArticlesList = Backend.getArticles();

    // filter the articles based on the search term
    const Articles = ArticlesList.map((article, idx) => <ArticleCard article={article} key={idx} navigation={navigation} screen={'ArticlesPage'}/>);

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