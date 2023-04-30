import { styles } from "./Styles";
import { View, Text, Image, TouchableOpacity } from "react-native";
import Stars from "./Stars";
import { colors } from "../../AppStyles";

export default function ToursCard({ tour }) {
    
    const { Title, Description, Rate, Img } = tour;

    return (
        <TouchableOpacity style={styles.ToursCard}>
            <Image style={styles.ToursCardImg} source={Img}/>
            <View style={styles.ToursCardText}>
                <Text style={styles.ToursCardTitle} numberOfLines={1}>{Title}</Text>
                <Text style={styles.ToursCardDesc} numberOfLines={2}>{Description}</Text>
                <Stars rate={Rate} size={24} color={colors.Gold}/>
            </View>
        </TouchableOpacity>
    )
}