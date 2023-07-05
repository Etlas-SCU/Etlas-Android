import { Page, Swipper } from "./Styles";
import { View, Text, TouchableOpacity } from "react-native";
import { Image } from 'expo-image';
import { goPage } from "../../Helpers/Navigator";
import { memo } from "react";
import { blurhash } from "../../AppStyles";


function ToursCard({ Tour, screen }) {

    const { title: Title, description: Description, images: Img } = Tour;
    const isPage = (screen != 'Home');

    // choose the first image of images
    const imageUrl = Img[0].image_url;

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
                contentFit='cover'
                placeholder={blurhash}
            />
            <View style={isPage ? Page.ToursCardText : Swipper.ToursCardText}>
                <Text style={isPage ? Page.ToursCardTitle : Swipper.ToursCardTitle} numberOfLines={1}>{Title}</Text>
                <Text style={isPage ? Page.ToursCardDesc : Swipper.ToursCardDesc} numberOfLines={2}>{Description}</Text>
            </View>
        </TouchableOpacity>
    )
}


export default memo(ToursCard);