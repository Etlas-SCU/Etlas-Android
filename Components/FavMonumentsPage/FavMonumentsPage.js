import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { styles } from "./Styles";
import { translate } from "../../Localization";
import Backend from "../../Helpers/Backend";
import FavMonumentCard from "../FavMonumentsCard/FavMonumentCard";
import { goBack } from "../../Helpers/Navigator";
import { useIsFocused } from '@react-navigation/native';
import { setStatusBarStyle } from "expo-status-bar";
import SvgMaker from "../SvgMaker/SvgMaker";
import { InvCloseIcon } from "../../assets/SVG/Icons";
import { useContext } from "react";
import { FavMonumentsContext } from "../Context/FavMonumentsContext";


export default function FavMonumentsPage({ }) {

    // check if the currenpage is focused
    const isFocused = useIsFocused();

    if (isFocused) {
        setStatusBarStyle('dark');
    }

    // get favourite monuments
    const { favMonumentsPage, updateFavMonumentsPage, favMonuments, updateFavMonuments } = useContext(FavMonumentsContext);

    // get monuments from backend
    const getFavMonuments = async () => {
        try {
            const { statusCode, data } = await Backend.getFavourites(favMonumentsPage);
            if (Backend.isSuccessfulRequest(statusCode)) {
                const newFavMonuments = await Backend.getMonumentFromFavourits(data.results);
                updateFavMonuments(newFavMonuments);
                updateFavMonumentsPage(favMonumentsPage + 1);
                console.log("Successfully fetched user's favorite monuments");
            }
        } catch (error) {
            console.log(error);
        }
    }

    // render items in flat list
    const renderItem = ({ item }) => {
        return <FavMonumentCard favMonument={item} />
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>{translate('Favourites.Models')}</Text>
                <TouchableOpacity
                    onPress={goBack}
                    style={styles.close}
                >
                    <SvgMaker Svg={InvCloseIcon} style={styles.arrow} />
                </TouchableOpacity>
            </View>
            <FlatList
                data={favMonuments}
                showsHorizontalScrollIndicator={false}
                renderItem={renderItem}
                keyExtractor={(_, index) => index.toString()}
                initialNumToRender={10}
                contentContainerStyle={styles.contentContainer}
                nestedScrollEnabled={true}
                showsVerticalScrollIndicator={false}
                onEndReached={() => getFavMonuments()}
                onEndReachedThreshold={0.5}
            />
        </View>
    )
}