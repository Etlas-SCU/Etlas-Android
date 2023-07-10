import { Page, Swipper } from "./Styles";
import { View, Text, TouchableOpacity } from "react-native";
import { translate } from "../../Localization";
import { goPage } from "../../Helpers/Navigator";
import { memo, useState } from "react";
import { formatDate } from '../../AppStyles';
import { placeholder } from "../../AppStyles";
import { Image } from 'expo-image';


function ArticleCard({ article, screen }) {

    const { article_title: Title, description: Description, date: Date, image_url: Img } = article;
    const isPage = (screen != 'Home');

    // state for loading
    const [imgLoaded, setImgLoaded] = useState(false);

    return (
        <TouchableOpacity
            style={isPage ? Page.MonumentsCard : Swipper.MonumentsCard}
            onPress={() => { goPage('ArticleDetails', screen, { Article: article }) }}
        >
            <Image
                style={isPage ? Page.MonumentsCardImg : Swipper.MonumentsCardImg}
                borderRadius={20}
                source={imgLoaded ? Img : placeholder}
                contentFit='fill'
                cachePolicy={'memory-disk'}
                priority={'high'}
                onLoadEnd={() => setImgLoaded(true)}
            />
            <View style={isPage ? Page.MonumentsCardText : Swipper.MonumentsCardText}>
                <Text style={isPage ? Page.MonumentsCardTitle : Swipper.MonumentsCardTitle} numberOfLines={1}>{Title}</Text>
                <Text style={isPage ? Page.MonumentsCardDesc : Swipper.MonumentsCardDesc} numberOfLines={2} >{Description}</Text>
                <Text style={isPage ? Page.MonumentsCardDate : Swipper.MonumentsCardDate}>{formatDate(Date)}</Text>
            </View>
            <View style={isPage ? Page.line : Swipper.line} />
            <TouchableOpacity
                onPress={() => { goPage('ArticleDetails', screen, { Article: article }) }}
            >
                <Text style={isPage ? Page.learn : Swipper.learn}>{translate('Home.learnmore')}</Text>
            </TouchableOpacity>
        </TouchableOpacity>
    )
}


export default memo(ArticleCard);