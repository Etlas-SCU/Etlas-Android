import { useState, useContext } from "react";
import { styles } from "./Styles";
import { View, ScrollView, Text, TouchableOpacity, Image, TextInput } from "react-native";
import { translate } from "../../Localization";
import { colors } from "../../AppStyles";
import MonumentsCard from "../MonumentsCard/MonumentsCard";
import { UserContext } from "../Context/Context";
import MainMenu from "../MainMenu/MainMenu";
import { isIOS } from "../../AppStyles";


export default function ArticlesPage({ navigation }) {

    const [searchTerm, setSearchTerm] = useState('');
    const { showModal, setScreen } = useContext(UserContext);

    const Monument = {
        Title: "Anibus",
        Description: "Know more about Anubis and his powers.",
        Date: "15 Jan 2023",
        Img: require('../../assets/HomePage/monument.png')
    };

    let monumentList = [];
    for (let i = 0; i < 20; i++)
        monumentList.push(Monument);

    const monuments = monumentList.map((monument, idx) => <MonumentsCard monument={monument} key={idx} isPage={true} />);

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
                    {monuments}
                </View>
            </ScrollView>
        </View>
    );
}