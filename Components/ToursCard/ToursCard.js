import { Page, Swipper } from "./Styles";
import { View, Text, TouchableOpacity } from "react-native";
import { Image } from 'expo-image';
import { goPage } from "../../Helpers/Navigator";
import { memo, useState } from "react";
import { placeholder } from "../../AppStyles";
import Stars from "./Stars";
import { responsiveHeight, colors } from "../../AppStyles";


function ToursCard({ Tour, screen }) {

    const { title: Title, description: Description, images: Img, rating: Rate } = Tour;
    const isPage = (screen != 'Home');

    // state for loading
    const [imgLoaded, setImgLoaded] = useState(false);

    // choose the first image of images
    const imageUrl = imgLoaded ? Img[0].image_url : placeholder;

    return (
        <TouchableOpacity
            style={isPage ? Page.ToursCard : Swipper.ToursCard}
            onPress={() => {
                goPage('TourDetails', screen, { Tour: Tour })
            }}
        >
            <Image
                style={isPage ? Page.ToursCardImg : Swipper.ToursCardImg}
                cachePolicy={'memory-disk'}
                priority={'high'}
                source={imageUrl}
                contentFit='fill'
                onLoadEnd={() => setImgLoaded(true)}
            />
            <View style={isPage ? Page.ToursCardText : Swipper.ToursCardText}>
                <Text style={isPage ? Page.ToursCardTitle : Swipper.ToursCardTitle} numberOfLines={1}>{Title}</Text>
                <Text style={isPage ? Page.ToursCardDesc : Swipper.ToursCardDesc} numberOfLines={2}>{Description}</Text>
                <Stars rate={Rate} size={isPage ? responsiveHeight(22) : responsiveHeight(21)} color={colors.Gold} isPage={isPage} />
            </View>
        </TouchableOpacity>
    )
}


export default memo(ToursCard);