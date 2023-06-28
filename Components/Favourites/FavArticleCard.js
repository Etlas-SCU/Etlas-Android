import { View, Image, Text, TouchableOpacity } from 'react-native'
import { styles } from './Styles'
import Backend from '../../Backend/Backend';
import { goPage } from '../../Backend/Navigator';
import { memo } from 'react';
import SvgMaker from '../SvgMaker/SvgMaker';
import { TrashIcon, ArrowOutwardIcon } from '../../assets/SVG/Icons';


function FavArticleCard({ screen, favArticle }) {

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
                        <SvgMaker Svg={ArrowOutwardIcon} style={styles.CardIconImg} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.CardIcon}
                        onPress={() => { Backend.removeFavArticle(ID) }}
                    >
                        <SvgMaker Svg={TrashIcon} style={styles.CardIconImg} />
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableOpacity>
    );
}

export default memo(FavArticleCard);