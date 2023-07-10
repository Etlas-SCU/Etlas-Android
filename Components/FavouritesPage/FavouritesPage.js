import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./Styles";
import { translate } from "../../Localization";
import { goBack } from "../../Helpers/Navigator";
import SvgMaker from "../SvgMaker/SvgMaker";
import { InvCloseIcon } from "../../assets/SVG/Icons";
import FavArticlesSection from './FavArticlesSection';
import FavMonumentsSection from './FavMonumentsSection';


export default function FavouritesPage({ }) {

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>{translate('Favourites.title')}</Text>
                <TouchableOpacity
                    onPress={goBack}
                    style={styles.close}
                >
                    <SvgMaker Svg={InvCloseIcon} style={styles.arrow} />
                </TouchableOpacity>
            </View>
            <View style={styles.containersContainer}>
                <FavMonumentsSection />
                <FavArticlesSection />
            </View>
        </View>
    )

}