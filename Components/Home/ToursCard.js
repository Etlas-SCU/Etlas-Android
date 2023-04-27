import { styles } from "./Styles";
import { View, Text, Image } from "react-native";
import Stars from "./Stars";
import { colors } from "../../AppStyles";

export default function ToursCard({ tour }) {
    
    const { Title, Description, Rate, Img } = tour;

    return (
        <View style={styles.ToursCard}>
            <Image style={styles.ToursCardImg} source={Img}/>
            <View style={styles.ToursCardText}>
                <Text style={styles.ToursCardTitle}>{Title}</Text>
                <Text style={styles.ToursCardDesc}>{Description}</Text>
                <Stars rate={Rate} size={24} color={colors.Gold}/>
            </View>
        </View>
    )
}