import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import { styles } from "./Styles";
import Swiper from 'react-native-swiper'
import { colors, responsiveWidth } from "../../AppStyles";
import Stars from "../ToursCard/Stars";
import { goBack } from "../../Backend/Navigator";
import Backend from "../../Backend/Backend";
import SvgMaker from "../SvgMaker/SvgMaker";
import { InvLeftArrowIcon } from "../../assets/SVG/Icons";


export default function TourDetails({ }) {

    let images_src = Array(5).fill(require('../../assets/ImagesToDelete/Tour1.png'));
    const images = images_src.map((src, idx) => (<Image source={src} style={styles.image} key={idx}/>));
    
    // get the parameters needed
    const Tour = Backend.getTour();
    const { Title, Rate, fullDescription } = Tour;


    return (
        <View style={styles.container}>
            <TouchableOpacity 
                onPress={goBack}
                style={styles.backContainer}
            >
                <SvgMaker Svg={InvLeftArrowIcon} style={styles.back}/>
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
                <View style={styles.header}>
                    <Text style={styles.title}>{Title}</Text>
                    <Stars rate={Rate} size={responsiveWidth(20)}/>
                </View>
                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.ScrollContainer}>
                    <Text style={styles.description}>{fullDescription}</Text>
                </ScrollView>
            </View>
        </View>
    )
}
