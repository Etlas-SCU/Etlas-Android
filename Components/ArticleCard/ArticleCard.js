import { Page, Swipper } from "./Styles";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { translate } from "../../Localization";
import { goPage } from "../../Backend/Navigator";


export default function ArticleCard({ article, screen }) {

    const { Title, Description, Date, Img } = article;
    const isPage = (screen != 'Home');

    return (
        <TouchableOpacity
            style={isPage ? Page.MonumentsCard : Swipper.MonumentsCard}
            onPress={() => { goPage('ArticleDetails', screen, { Article: article }) }}
        >
            <Image style={isPage ? Page.MonumentsCardImg : Swipper.MonumentsCardImg} source={Img} borderRadius={20} />
            <View style={isPage ? Page.MonumentsCardText : Swipper.MonumentsCardText}>
                <Text style={isPage ? Page.MonumentsCardTitle : Swipper.MonumentsCardTitle} numberOfLines={1}>{Title}</Text>
                <Text style={isPage ? Page.MonumentsCardDesc : Swipper.MonumentsCardDesc} numberOfLines={2} >{Description}</Text>
                <Text style={isPage ? Page.MonumentsCardDate : Swipper.MonumentsCardDate}>{Date}</Text>
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