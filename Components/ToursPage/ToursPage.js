import { useState, useContext } from "react";
import { styles } from "./Styles";
import { View, Text, TouchableOpacity, TextInput, Modal, FlatList } from "react-native";
import { translate } from "../../Localization";
import { colors } from "../../AppStyles";
import ToursCard from "../ToursCard/ToursCard";
import { UserContext } from "../Context/Context";
import MainMenu from "../MainMenu/MainMenu";
import { isIOS } from "../../AppStyles";
import Backend from "../../Backend/Backend";
import { goBack } from "../../Backend/Navigator";
import SvgMaker from "../SvgMaker/SvgMaker";
import { LeftArrow, MenuIcon, FilterIcon, InvCheckIcon } from "../../assets/SVG/Icons";
import { ToursContext } from "../Context/ToursContext";


function Filter({ showFilerList, setShowFilterList, sortBy, setSortBy }) {

    const Checked = <SvgMaker Svg={InvCheckIcon} style={styles.check} />;

    const optionsList = [
        'Name (a-z)',
        'Name (z-a)',
        'Latest',
        'Oldest',
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
    const [sortBy, setSortBy] = useState('Name (a-z)');

    // get the tours from backend
    const { tours, toursPage, updateTours, updateToursPage } = useContext(ToursContext);

    // get the tours from backend filtered
    const toursList = tours.filter(tour => tour.title.toLowerCase().includes(searchTerm.toLowerCase()));

    // filtered Sort
    SortFunctions = {
        'Name (a-z)': (a, b) => { return a.title.localeCompare(b.title) },
        'Name (z-a)': (a, b) => { return b.title.localeCompare(a.title) },
        'Latest': (a, b) => { return a.id - b.id },
        'Oldest': (a, b) => { return b.id - a.id },
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
                    <SvgMaker Svg={MenuIcon} />
                </TouchableOpacity>
                <Text style={styles.title}>{translate('Tours.title')}</Text>
                <TouchableOpacity
                    onPress={goBack}
                    style={styles.closeContainer}
                >
                    <SvgMaker Svg={LeftArrow} style={styles.close} />
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
                    <SvgMaker Svg={FilterIcon} />
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