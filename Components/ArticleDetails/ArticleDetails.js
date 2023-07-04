import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import { styles } from "./Styles";
import { useState } from "react";
import { goBack, getCurrentScreenParam } from "../../Backend/Navigator";
import Backend from "../../Backend/Backend";
import SvgMaker from "../SvgMaker/SvgMaker";
import { LeftArrow, NonFilledHeartIcon, FilledHeartIcon } from "../../assets/SVG/Icons";
import { formatDate } from '../../AppStyles';
import { placeholder } from "../../AppStyles";


const Section = ({ section }) => {
    return (
        <View style={styles.section}>
            <Text style={styles.sectionTitle}>{section.section_title}</Text>
            <Text style={styles.sectionDescription}>{section.description}</Text>
        </View>
    )
}


export default function ArticleDetails({ }) {

    // get the previous page
    const { prevPage } = getCurrentScreenParam();

    // get the parameters needed
    const Article = (prevPage !== 'favourites' ? Backend.getArticle() : Backend.getFavArticle());
    const { article_title: Title, date: Date, image_url: Img, sections: Sections } = Article;

    // get the icons of heart
    const fav = FilledHeartIcon;
    const notFav = NonFilledHeartIcon;

    // get the icons of heart
    const [isFav, setIsFav] = useState(false);

    // change the icon of heart
    const toggleFav = () => {
        setIsFav(!isFav);
    }

    // get the full description
    const fullDescription = Sections.map((section) => {
        return <Section section={section} key={section.id} />
    });

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.backContainer}
                onPress={goBack}
            >
                <SvgMaker Svg={LeftArrow} style={styles.back} />
            </TouchableOpacity>
            <Image
                source={{ uri: Img }}
                style={styles.upperBox}
                resizeMode='cover'
                defaultSource={placeholder}
            />
            <View style={styles.lowerBox}>
                <View style={styles.upperFields}>
                    <View style={styles.txts}>
                        <Text style={styles.title}>{Title}</Text>
                        <Text style={styles.date}>{formatDate(Date)}</Text>
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
                    {fullDescription}
                </ScrollView>
            </View>
        </View>
    )
}