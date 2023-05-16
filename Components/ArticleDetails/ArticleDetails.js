import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import { styles } from "./Styles";
import { useState } from "react";


export default function ArticleDetails({ navigation, route }) {

    // get the parameters needed
    const { Article, screen } = route.params;
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
                onPress={() => { navigation.navigate(screen) }}
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
