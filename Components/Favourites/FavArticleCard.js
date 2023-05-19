import { View, Image, Text, TouchableOpacity } from 'react-native'
import { styles } from './Styles'
import Backend from '../../Backend/Backend';
import { goPage } from '../../Backend/Navigator';


export default function FavArticleCard({ screen, favArticle }) {

    const { Title, Description, Date, Img, ID } = favArticle;

    return (
        <TouchableOpacity
            onPress={() => { goPage('ArticleDetails', screen, { favArticle: favArticle }) }}
            style={styles.card}
        >
            <View style={styles.cardContainer}>
                <View style={styles.cardImgContainer}>
                    <Image source={Img} style={styles.cardImg} />
                </View>
                <View style={styles.cardTextContainer}>
                    <Text style={styles.cardTitle} numberOfLines={1}>{Title}</Text>
                    <Text style={styles.cardDescription} numberOfLines={2}>{Description}</Text>
                    <Text style={styles.cardDate} numberOfLines={1}>{Date}</Text>
                </View>
                <View style={styles.CardIconsConainer}>
                    <TouchableOpacity
                        style={styles.CardIcon}
                        onPress={() => { goPage('ArticleDetails', screen, { favArticle: favArticle }) }}
                    >
                        <Image source={require('../../assets/Favourites/Arrow.png')} style={styles.CardIconImg} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.CardIcon}
                        onPress={() => { Backend.removeFavArticle(ID) }}
                    >
                        <Image source={require('../../assets/Favourites/Trash.png')} style={styles.CardIconImg} />
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableOpacity>
    );
}