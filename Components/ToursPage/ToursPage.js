import { useState, useContext } from "react";
import { styles } from "./Styles";
import { View, ScrollView, Text, TouchableOpacity, Image, TextInput } from "react-native";
import { translate } from "../../Localization";
import { colors } from "../../AppStyles";
import ToursCard from "../ToursCard/ToursCard";
import { UserContext } from "../Context/Context";
import MainMenu from "../MainMenu/MainMenu";
import { isIOS } from "../../AppStyles";
import Backend from "../../Backend/Backend";


export default function ToursPage({ navigation }) {

    const { showModal, setScreen } = useContext(UserContext);
    const [searchTerm, setSearchTerm] = useState('');

    // get the tours from backend
    const toursList = Backend.getTours();

    // filter the tours based on the search term
    const tours = toursList.map((tour, idx) => <ToursCard tour={tour} key={idx} isPage={true} navigation={navigation} />);

    return (
        <View style={styles.container}>
            {isIOS() ? <MainMenu /> : null}
            <ScrollView contentContainerStyle={styles.contentContainer} showsVerticalScrollIndicator={false}>
                <View style={styles.header}>
                    <TouchableOpacity style={styles.aboutus} onPress={() => { showModal(), setScreen('ToursPage')} }>
                        <Image source={require('../../assets/KnowledgeCheck/tabler_exclamation-circle.png')} />
                    </TouchableOpacity>
                    <Text style={styles.title}>{translate('Tours.title')}</Text>
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
                    {tours}
                </View>
            </ScrollView>
        </View>
    );
}