import { View, Text, TouchableOpacity } from 'react-native'
import { styles } from './Styles'
import Backend from '../../Helpers/Backend';
import { goPage } from '../../Helpers/Navigator';
import { memo, useState, useContext } from 'react';
import SvgMaker from '../SvgMaker/SvgMaker';
import { TrashIcon, ArrowOutwardIcon } from '../../assets/SVG/Icons';
import { Image } from 'expo-image';
import { placeholder } from '../../AppStyles';
import { FavArticlesContext } from '../Context/FavArticlesContext';
import { UserContext } from '../Context/Context';
import PopupMessage from '../PopupMessage/PopupMessage';


function FavArticleCard({ screen, favArticle }) {

    const { article_title: Title, description: Description, date: Date, image_url: Img, id: ID } = favArticle;

    // remove fav articles
    const { removeFavArticle } = useContext(FavArticlesContext);

    // get pop up messages
    const { showPopupMessage, popupMessageVisible } = useContext(UserContext);

    // for image display
    const [isImgLoaded, setIsImgLoaded] = useState(false);

    // remove fav article
    const removeFav = async () => {
        try {
            const { statusCode, data } = await Backend.removeFavArticle(ID);
            if (!Backend.isSuccessfulRequest(statusCode)) {
                const errorMessage = await Backend.getErrorMessage(data).then(response => response);
                showPopupMessage('Error', errorMessage);
                return false;
            }
            removeFavArticle(favArticle);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <TouchableOpacity
            onPress={() => { goPage('favArticleDetails', screen, { favArticle: favArticle }) }}
            style={styles.card}
        >
            {popupMessageVisible ? <PopupMessage /> : null}
            <View style={styles.cardContainer}>
                <View style={styles.cardImgContainer}>
                    <Image
                        source={isImgLoaded ? Img : placeholder}
                        style={styles.cardImg}
                        onLoadEnd={() => setIsImgLoaded(true)}
                        priority={'high'}
                        cachePolicy={'memory-disk'}
                        contentFit='fill'
                    />
                </View>
                <View style={styles.cardTextContainer}>
                    <Text style={styles.cardTitle} numberOfLines={1}>{Title}</Text>
                    <Text style={styles.cardDescription} numberOfLines={2}>{Description}</Text>
                    <Text style={styles.cardDate} numberOfLines={1}>{Date}</Text>
                </View>
                <View style={styles.CardIconsConainer}>
                    <TouchableOpacity
                        style={styles.CardIcon}
                        onPress={() => { goPage('favArticleDetails', screen, { favArticle: favArticle }) }}
                    >
                        <SvgMaker Svg={ArrowOutwardIcon} style={styles.CardIconImg} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.CardIcon}
                        onPress={removeFav}
                    >
                        <SvgMaker Svg={TrashIcon} style={styles.CardIconImg} />
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableOpacity>
    );
}

export default memo(FavArticleCard);