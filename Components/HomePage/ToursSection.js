import { useContext, useEffect } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { styles } from "./Styles";
import { translate } from "../../Localization";
import Backend from "../../Backend/Backend";
import { goPage } from "../../Backend/Navigator";
import SvgMaker from "../SvgMaker/SvgMaker";
import { NewIcon } from "../../assets/SVG/Icons";
import { ToursContext } from "../Context/ToursContext";
import ToursCard from "../ToursCard/ToursCard";


function ToursSection({ tourSearchTerm }) {

    // use the context to get the state of the modal
    const { tours, toursPage, updateToursPage, updateTours } = useContext(ToursContext);

    // get Tours from backend
    const getTours = async () => {
        try {
            const { statusCode, data } = await Backend.getTours(toursPage);
            if (Backend.isSuccessfulRequest(statusCode)) {
                updateTours(data.results);
                updateToursPage(toursPage + 1);
            }
        } catch (error) {
            console.log(error);
        }
    }

    // fetch the tours in the first time 
    useEffect(() => {
        getTours();
    }, [])

    // tours after filter
    const ToursList = tours.filter((Tour) => {
        return Tour.title.toLowerCase().includes(tourSearchTerm.toLowerCase());
    });

    // render element to the list
    const renderSectionItem = ({ item }) => {
        return <ToursCard Tour={item} screen={'Home'} />
    }

    // if the section is empty
    if (ToursList.length == 0) {
        return null;
    }

    return (
        <View styles={styles.Box}>
            <View style={styles.boxHeader}>
                <Text style={styles.boxTitle}>{translate('Home.tours')}</Text>
                <SvgMaker Svg={NewIcon} style={styles.new_image} />
                <TouchableOpacity style={styles.see_all} onPress={() => { goPage('ToursPage', 'Home') }}>
                    <Text style={styles.see_all_text}>{translate('Home.see_all')}</Text>
                </TouchableOpacity>
            </View>
            <FlatList
                data={ToursList}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={renderSectionItem}
                keyExtractor={(_, idx) => idx.toString()}
                style={styles.swipper}
                initialNumToRender={5}
                onEndReached={getTours}
                onEndReachedThreshold={0.5}
                key={1}
            />
        </View>
    )
};

export default ToursSection;
