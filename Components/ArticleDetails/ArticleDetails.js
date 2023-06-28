import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import { styles } from "./Styles";
import { useState } from "react";
import { goBack, getCurrentScreenParam } from "../../Backend/Navigator";
import Backend from "../../Backend/Backend";
import SvgMaker from "../SvgMaker/SvgMaker";
import { LeftArrow, NonFilledHeartIcon, FilledHeartIcon } from "../../assets/SVG/Icons";


export default function ArticleDetails({ }) {

    // get the previous page
    const { prevPage } = getCurrentScreenParam();

    // get the parameters needed
    const Article = (prevPage !== 'favourites' ? Backend.getArticle() : Backend.getFavArticle());
    const { Title, Date, Img, fullDescription } = Article;


    // get the icons of heart
    const fav = FilledHeartIcon;
    const notFav = NonFilledHeartIcon;

    // get the icons of heart
    const [isFav, setIsFav] = useState(false);

    // change the icon of heart
    const toggleFav = () => {
        setIsFav(!isFav);
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.backContainer}
                onPress={goBack}
            >
                <SvgMaker Svg={LeftArrow} style={styles.back} />
            </TouchableOpacity>
            <Image source={Img} style={styles.upperBox} resizeMode='cover' />
            <View style={styles.lowerBox}>
                <View style={styles.upperFields}>
                    <View style={styles.txts}>
                        <Text style={styles.title}>{Title}</Text>
                        <Text style={styles.date}>{Date}</Text>
                    </View>
                    <View style={styles.favouriteConainer}>
                        <View style={styles.fav}>
                            <TouchableOpacity onPress={toggleFav}>
                                <SvgMaker Svg={isFav ? fav : notFav} style={styles.favIcon} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <ScrollView contentContainerStyle={styles.scrollView} showsVerticalScrollIndicator={false}>
                    <Text style={styles.description}>{fullDescription}</Text>
                </ScrollView>
            </View>
        </View>
    )
}