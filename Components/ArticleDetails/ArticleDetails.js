import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import { styles } from "./Styles";
import { useState } from "react";
import { goBack, getCurrentScreenParam } from "../../Backend/Navigator";
import Backend from "../../Backend/Backend";


export default function ArticleDetails({ }) {

    // get the previous page
    const { prevPage } = getCurrentScreenParam();

    // get the parameters needed
    const Article = (prevPage !== 'favourites' ? Backend.getArticle() : Backend.getFavArticle());
    const { Title, Date, Img, fullDescription } = Article;


    // get the icons of heart
    const fav = require('../../assets/ArticleDetails/filled.png');
    const notFav = require('../../assets/ArticleDetails/notfilled.png');

    // get the icons of heart
    const [favIcon, setFavIcon] = useState(notFav);

    // change the icon of heart
    const toggleFav = () => {
        setFavIcon(fav == favIcon ? notFav : fav);
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.backContainer}
                onPress={goBack}
            >
                <Image source={require('../../assets/Scan/Arr.png')} style={styles.back} />
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
                                <Image source={favIcon} style={styles.favIcon} resizeMode="contain" />
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