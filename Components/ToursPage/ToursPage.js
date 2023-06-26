import { useState, useContext } from "react";
import { styles } from "./Styles";
import { View, ScrollView, Text, TouchableOpacity, Image, TextInput, Modal, FlatList } from "react-native";
import { translate } from "../../Localization";
import { colors } from "../../AppStyles";
import ToursCard from "../ToursCard/ToursCard";
import { UserContext } from "../Context/Context";
import MainMenu from "../MainMenu/MainMenu";
import { isIOS } from "../../AppStyles";
import Backend from "../../Backend/Backend";
import { goBack } from "../../Backend/Navigator";


function Filter({ showFilerList, setShowFilterList, sortBy, setSortBy }) {

    const Checked = <Image source={require('../../assets/language_selection/check.png')} style={styles.check} />;

    const optionsList = [
        'Low Rate',
        'High Rate',
        'Name (a-z)',
        'Name (z-a)',
    ];

    const options = optionsList.map((option, idx) => {
        return (
            <TouchableOpacity
                key={idx}
                style={styles.option}
                onPress={() => { setSortBy(option), setShowFilterList(false) }}
            >
                <Text style={styles.optionText}>{option}</Text>
                {option === sortBy ? Checked : null}
            </TouchableOpacity>
        )
    });

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={showFilerList}
        >
            <View style={styles.modalContainer}>
                <Text style={styles.modaltitle}>{translate('ToursPage.sortBy')}</Text>
                <View style={styles.modal}>
                    {options}
                </View>
            </View>
        </Modal>
    )

}


export default function ToursPage({ }) {

    const { showModal, setScreen } = useContext(UserContext);
    const [searchTerm, setSearchTerm] = useState('');
    const [showFilerList, setShowFilterList] = useState(false);
    const [sortBy, setSortBy] = useState('High Rate');

    // get the tours from backend
    const toursList = Backend.getTours().filter((Tour) => {
        return Tour.Title.toLowerCase().includes(searchTerm.toLowerCase());
    });

    // filtered Sort
    SortFunctions = {
        'Low Rate': (a, b) => { return a.Rate - b.Rate },
        'High Rate': (a, b) => { return b.Rate - a.Rate },
        'Name (a-z)': (a, b) => { return a.Title.localeCompare(b.Title) },
        'Name (z-a)': (a, b) => { return b.Title.localeCompare(a.Title) },
    }

    // filtered tours
    const filteredTours = toursList.sort(SortFunctions[sortBy]);

    // render items in flat list
    const renderItem = ({ item }) => (
        <ToursCard Tour={item} screen={'ToursPage'} />
    );

    return (
        <View style={styles.container}>
            {isIOS() ? <MainMenu /> : null}
            {showFilerList ? <Filter showFilerList={showFilerList} setShowFilterList={setShowFilterList} sortBy={sortBy} setSortBy={setSortBy} /> : null}
            <View style={styles.header}>
                <TouchableOpacity style={styles.aboutus} onPress={() => { setScreen('ToursPage'), showModal() }}>
                    <Image source={require('../../assets/KnowledgeCheck/tabler_exclamation-circle.png')} />
                </TouchableOpacity>
                <Text style={styles.title}>{translate('Tours.title')}</Text>
                <TouchableOpacity
                    onPress={goBack}
                    style={styles.closeContainer}
                >
                    <Image source={require('../../assets/Scan/Arr.png')} style={styles.close} />
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
                <TouchableOpacity
                    style={styles.filter}
                    onPress={() => { setShowFilterList(true) }}
                >
                    <Image source={require('../../assets/ArticlesPage/Filter.png')} />
                </TouchableOpacity>
            </View>
            <FlatList
                data={filteredTours}
                renderItem={renderItem}
                keyExtractor={(_, index) => index.toString()}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.contentContainer}
                style={styles.Box}
            />
        </View>
    );
}