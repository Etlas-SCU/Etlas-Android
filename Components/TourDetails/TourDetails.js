import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { Image } from 'expo-image';
import { styles } from "./Styles";
import Swiper from 'react-native-swiper'
import { colors } from "../../AppStyles";
import { goBack } from "../../Helpers/Navigator";
import Backend from "../../Helpers/Backend";
import SvgMaker from "../SvgMaker/SvgMaker";
import { InvLeftArrowIcon } from "../../assets/SVG/Icons";
import { placeholder } from "../../AppStyles";
import { useState } from "react";
import { responsiveWidth } from "../../AppStyles";
import Stars from "../ToursCard/Stars";


const Section = ({ section }) => {
    return (
        <View style={styles.section}>
            <Text style={styles.sectionTitle}>{section.title}</Text>
            <Text style={styles.sectionDescription}>{section.description}</Text>
        </View>
    )
}


export default function TourDetails({ }) {
    // get the parameters needed
    const Tour = Backend.getTour();
    const { title: Title, sections: Sections, images: ImagesUrl, rating: Rate } = Tour;


    const images = ImagesUrl.map((item, idx) => {
        // check if the image is loaded
        const [isImgLoaded, setImgLoaded] = useState(false);
        return (
            <Image
                source={isImgLoaded ? item.image_url : placeholder}
                style={styles.image}
                key={idx}
                contentFit='fill'
                cachePolicy={'memory-disk'}
                priority={'high'}
                onLoadEnd={() => setImgLoaded(true)}
            />
        )
    });

    // get the full description
    const fullDescription = Sections.map((section) => {
        return <Section section={section} key={section.id} />
    });


    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={goBack}
                style={styles.backContainer}
            >
                <SvgMaker Svg={InvLeftArrowIcon} style={styles.back} />
            </TouchableOpacity>
            <Swiper
                showsButtons={false}
                loop={true}
                autoplay={true}
                autoplayTimeout={5}
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
                    <Stars rate={Rate} size={responsiveWidth(20)} style={styles.stars} isPage={false}/>
                </View>
                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.ScrollContainer}>
                    {fullDescription}
                </ScrollView>
            </View>
        </View>
    )
}
