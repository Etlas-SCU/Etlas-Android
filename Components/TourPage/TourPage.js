import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import { styles } from "./Styles";
import { translate } from "../../Localization";
import Swiper from "swiper";

export default function TourPage({ navigation }) {
    return (
        <View style={styles.container}>
            <Swiper>
                <View style={styles.slide}>
                    <Image source={require('../../assets/TourPage/Tour1.png')} style={styles.image} />
                </View>
            </Swiper>
        </View>
    )
}
