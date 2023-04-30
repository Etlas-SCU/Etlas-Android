import { styles } from "./Styles";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { translate } from "../../Localization";


export default function MonumentsCard({ monument }) {

    const { Title, Description, Date, Img } = monument;

    return (
        <TouchableOpacity style={styles.MonumentsCard}>
            <Image style={styles.MonumentsCardImg} source={Img} />
            <View style={styles.MonumentsCardText}>
                <Text style={styles.MonumentsCardTitle} numberOfLines={1}>{Title}</Text>
                <Text style={styles.MonumentsCardDesc} numberOfLines={2} >{Description}</Text>
                <Text style={styles.MonumentsCardDate}>{Date}</Text>
            </View>
            <View style={styles.line} />
            <TouchableOpacity>
                <Text style={styles.learn}>{translate('Home.learnmore')}</Text>
            </TouchableOpacity>
        </TouchableOpacity>
    )
}