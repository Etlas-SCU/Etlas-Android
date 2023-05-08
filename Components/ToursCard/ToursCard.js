import { Page, Swipper } from "./Styles";
import { View, Text, Image, TouchableOpacity } from "react-native";
import Stars from "./Stars";
import { colors } from "../../AppStyles";
import { responsiveHeight } from "../../AppStyles";
import { useRoute } from '@react-navigation/native';


export default function ToursCard({ navigation, tour, isPage }) {

    const { Title, Description, Rate, Img } = tour;
    const { name: pageName } = useRoute();

    return (
        <TouchableOpacity
            style={isPage ? Page.ToursCard : Swipper.ToursCard}
            onPress={() => {
                navigation.navigate('TourDetails', {
                    Tour: tour,
                    screen: pageName
                })
            }}
        >
            <Image style={isPage ? Page.ToursCardImg : Swipper.ToursCardImg} source={Img} />
            <View style={isPage ? Page.ToursCardText : Swipper.ToursCardText}>
                <Text style={isPage ? Page.ToursCardTitle : Swipper.ToursCardTitle} numberOfLines={1}>{Title}</Text>
                <Text style={isPage ? Page.ToursCardDesc : Swipper.ToursCardDesc} numberOfLines={2}>{Description}</Text>
                <Stars rate={Rate} size={isPage ? responsiveHeight(22) : responsiveHeight(21)} color={colors.Gold} isPage={isPage} />
            </View>
        </TouchableOpacity>
    )
}