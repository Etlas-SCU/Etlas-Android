import { useState, useContext } from "react";
import { View, Text, Image, TextInput, TouchableOpacity, ScrollView, SafeAreaView } from "react-native";
import { styles } from "./Styles";
import { translate } from "../../Localization";
import { colors } from "../../AppStyles";
import ToursCard from "../ToursCard/ToursCard";
import MonumentsCard from "../MonumentsCard/MonumentsCard";
import MainMenu from "../MainMenu/MainMenu";
import { UserContext } from "../Context/Context";


function Section({ navigation, title, children, pageName }) {
    return (
        <View styles={styles.Box}>
            <View style={styles.boxHeader}>
                <Text style={styles.boxTitle}>{title}</Text>
                <Image style={styles.new_image} source={require('../../assets/HomePage/New.png')} />
                <TouchableOpacity style={styles.see_all} onPress={() => { navigation.navigate(pageName, { screen: 'Home' }) }}>
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

export default function HomePage({ navigation }) {

    const { modalVisible, showModal } = useContext(UserContext);
    const [searchTerm, setSearchTerm] = useState('');

    const Tour = {
        Title: "Gize tour",
        Description: "where you can visit the pyramids and ride the camels.",
        Rate: "3.5",
        Img: require('../../assets/HomePage/tour.png'),
        fullDescription: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`
    };

    const Monument = {
        Title: "Anibus",
        Description: "Know more about Anubis and his powers.",
        Date: "15 Jan 2023",
        Img: require('../../assets/HomePage/monument.png')
    };

    let toursList = [];
    let monumentList = [];

    for (let i = 0; i < 5; i++)
        toursList.push(Tour), monumentList.push(Monument);

    const tours = toursList.map((tour, idx) => <ToursCard tour={tour} key={idx} isPage={false} navigation={navigation} />);
    const monuments = monumentList.map((monument, idx) => <MonumentsCard monument={monument} key={idx} isPage={false} />);

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.contentContainer} showsVerticalScrollIndicator={false}>
                <View style={styles.header}>
                    <TouchableOpacity style={styles.aboutus} onPress={showModal}>
                        <Image source={require('../../assets/KnowledgeCheck/tabler_exclamation-circle.png')} />
                    </TouchableOpacity>
                    <Text style={styles.title}>{translate('Home.title')}</Text>
                </View>
                {modalVisible ? <MainMenu pageName={'Home'} /> : null}
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
                    navigation={navigation}
                    title={translate('Home.tours')}
                    pageName='ToursPage'
                    children={tours}
                />
                <Section
                    navigation={navigation}
                    title={translate('Home.article')}
                    pageName='ArticlesPage'
                    children={monuments}
                />
            </ScrollView>
        </View>
    )
}