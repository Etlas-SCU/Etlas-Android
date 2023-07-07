import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { styles } from "./Styles";
import { translate } from "../../Localization";
import Backend from "../../Helpers/Backend";
import FavMonumentCard from "../FavMonumentsCard/FavMonumentCard";
import { goBack, getParams } from "../../Helpers/Navigator";
import { useIsFocused } from '@react-navigation/native';
import { setStatusBarStyle } from "expo-status-bar";
import SvgMaker from "../SvgMaker/SvgMaker";
import { InvCloseIcon } from "../../assets/SVG/Icons";


export default function FavMonumentsPage({ }) {

    // check if the currenpage is focused
    const isFocused = useIsFocused();

    if (isFocused) {
        setStatusBarStyle('dark');
    }

    // get the monument list from backend
    const MonumentsList = Backend.getFavMonuments();

    // get the screen name from navigator
    const { prevPage } = getParams() ? getParams() : { prevPage: 'Home' };

    // render items in flat list
    const renderItem = ({ item }) => {
        return <FavMonumentCard Monument={item} screen={prevPage} />
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
                data={MonumentsList}
                showsHorizontalScrollIndicator={false}
                renderItem={renderItem}
                keyExtractor={(_, index) => index.toString()}
                initialNumToRender={10}
                contentContainerStyle={styles.contentContainer}
                nestedScrollEnabled={true}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}