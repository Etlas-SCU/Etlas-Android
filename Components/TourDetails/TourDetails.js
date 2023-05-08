import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import { styles } from "./Styles";
import Swiper from 'react-native-swiper'
import { colors, responsiveWidth } from "../../AppStyles";
import Stars from "../ToursCard/Stars";


export default function TourDetails({ navigation, route }) {

    let images_src = Array(5).fill(require('../../assets/TourPage/Tour1.png'));
    const images = images_src.map((src, idx) => (<Image source={src} style={styles.image} key={idx}/>));
    
    // get the parameters needed
    const { Tour, screen } = route.params;
    const { Title, Rate, fullDescription } = Tour;

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => { navigation.navigate(screen) }}>
                <Image source={require('../../assets/Scan/Arr.png')} style={styles.back}/>
            </TouchableOpacity>
            <Swiper
                showsButtons={false}
                loop={true}
                autoplay={true}
                showsPagination={true}
                paginationStyle={styles.pagination}
                containerStyle={styles.Swiper}
                bounces={true}
                dotColor={colors.Grey}
                activeDotColor={colors.Gold}
                dotStyle={styles.dot}
                activeDotStyle={styles.dot}
                automaticallyAdjustContentInsets={true}
            >
                {images}
            </Swiper>
            <View style={styles.container}>
                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.ScrollContainer}>
                    <View style={styles.header}>
                        <Text style={styles.title}>{Title}</Text>
                        <Stars rate={Rate} size={responsiveWidth(20)}/>
                    </View>
                    <Text style={styles.description}>{fullDescription}</Text>
                </ScrollView>
            </View>
        </View>
    )
}