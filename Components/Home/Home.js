import { useState } from "react";
import { View, Text, Image, TextInput, TouchableOpacity, ScrollView, SafeAreaView, FlatList } from "react-native";
import { styles } from "./Styles";
import { translate } from "../../Localization";
import { colors } from "../../AppStyles";
import ToursCard from "./ToursCard";
import MonumentsCard from "./MonumentsCard";


export default function Home({ navigation }) {

    const [searchTerm, setSearchTerm] = useState('');

    const Tour = {
        Title: "Gize tour",
        Description: "where you can visit the pyramids and ride the camels.",
        Rate: "3.5",
        Img: require('../../assets/Home/tour.png')
    };

    const Monument = {
        Title: "Anibus",
        Description: "Know more about Anubis and his powers.",
        Date: "15 Jan 2023",
        Img: require('../../assets/Home/monument.png')
    };

    let toursList = [];
    let monumentList = [];

    for (let i = 0; i < 5; i++)
        toursList.push(Tour), monumentList.push(Monument);

    const tours = toursList.map((tour, idx) => <ToursCard tour={tour} key={idx} />);
    const monuments = monumentList.map((monument, idx) => <MonumentsCard monument={monument} key={idx} />);

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.contentContainer}>
                <View style={styles.header}>
                    <TouchableOpacity style={styles.aboutus} onPress={() => { navigation.navigate({ name: 'AboutUs' }) }}>
                        <Image source={require('../../assets/KnowledgeCheck/tabler_exclamation-circle.png')} />
                    </TouchableOpacity>
                    <Text style={styles.title}>{translate('Home.title')}</Text>
                </View>
                <Image style={styles.logo} source={require('../../assets/Home/e.png')} />
                <Text style={styles.etlas}>{translate('Home.etlas')}</Text>
                <Text style={styles.desc}>{translate('Home.desc')}</Text>
                <TextInput
                    style={styles.SearchForm}
                    placeholder={translate('Home.search')}
                    placeholderTextColor={colors.Grey}
                    onChangeText={(searchTerm) => setSearchTerm(searchTerm)}
                    cursorColor={colors.DarkCyan}
                />
                <View styles={styles.Box}>
                    <View style={styles.boxHeader}>
                        <Text style={styles.boxTitle}>{translate('Home.tours')}</Text>
                        <Image source={require('../../assets/Home/New.png')} />
                        <TouchableOpacity style={styles.see_all}>
                            <Text style={styles.see_all_text}>{translate('Home.see_all')}</Text>
                        </TouchableOpacity>
                    </View>
                    <SafeAreaView style={styles.swipper} >
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} nestedScrollEnabled={true}>
                            {tours}
                        </ScrollView>
                    </SafeAreaView>
                </View>
                <View styles={styles.Box}>
                    <View style={styles.boxHeader}>
                        <Text style={styles.boxTitle}>{translate('Home.tours')}</Text>
                        <Image source={require('../../assets/Home/New.png')} />
                        <TouchableOpacity style={styles.see_all}>
                            <Text style={styles.see_all_text}>{translate('Home.see_all')}</Text>
                        </TouchableOpacity>
                    </View>
                    <SafeAreaView style={styles.swipper}>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} nestedScrollEnabled={true}>
                            {monuments}
                        </ScrollView>
                    </SafeAreaView>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}