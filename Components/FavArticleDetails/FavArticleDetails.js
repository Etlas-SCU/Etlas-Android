import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { Image } from 'expo-image';
import { styles } from "./Styles";
import { useState, useContext, useEffect, useRef } from "react";
import { goBack } from "../../Helpers/Navigator";
import Backend from "../../Helpers/Backend";
import SvgMaker from "../SvgMaker/SvgMaker";
import { LeftArrow, NonFilledHeartIcon, FilledHeartIcon } from "../../assets/SVG/Icons";
import { formatDate, placeholder } from '../../AppStyles';
import Loader from "../Loader/Loader";
import PopupMessage from "../PopupMessage/PopupMessage";
import { UserContext } from "../Context/Context";
import { translate } from "../../Localization";
import { FavArticlesContext } from "../Context/FavArticlesContext";


const Section = ({ section }) => {
    return (
        <View style={styles.section}>
            <Text style={styles.sectionTitle}>{section.section_title}</Text>
            <Text style={styles.sectionDescription}>{section.description}</Text>
        </View>
    )
}


export default function FavArticleDetails({ }) {
    // refrence of the scroll view
    const scrollViewRef = useRef();

    // get loader functions and states
    const { loaderVisible, showLoader, hideLoader } = useContext(UserContext);

    // get popup functions and states
    const { popupMessageVisible, showPopupMessage } = useContext(UserContext);

    // fav articles functions
    const { addFavArticle, removeFavArticle } = useContext(FavArticlesContext);

    // get the icons of heart
    const fav = FilledHeartIcon;
    const notFav = NonFilledHeartIcon;

    // get the icons of heart
    const [isFav, setIsFav] = useState(false);
    const [isButtonPressed, setIsButtonPressed] = useState(false);

    // get the parameters needed
    const Article = Backend.getFavArticle();
    const { id: ID, article_title: Title, date: Date, image_url: Img, sections: Sections } = Article;

    // getting is the current article favourite or not
    const isFavourite = async () => {
        try {
            showLoader(translate('messages.loadArticle'));
            const { statusCode, data } = await Backend.isFavArticle(ID);
            hideLoader();
            if (!Backend.isSuccessfulRequest(statusCode)) {
                const errorMessage = await Backend.getErrorMessage(data).then(response => response);
                showPopupMessage('Error', errorMessage);
                return false;
            }
            setIsFav(data.is_favorite);
        } catch (error) {
            console.log(error);
        }
    }

    // add the current article to favourites
    const addToFavourites = async () => {
        try {
            setIsButtonPressed(true);
            setIsFav(true);
            const { statusCode, data } = await Backend.addFavArticle(ID);
            setIsButtonPressed(false);
            if (!Backend.isSuccessfulRequest(statusCode)) {
                const errorMessage = await Backend.getErrorMessage(data).then(response => response);
                showPopupMessage('Error', errorMessage);
                setIsFav(false);
                return false;
            }
            addFavArticle(Article);
        } catch (error) {
            console.log(error);
        }
    }

    // remove the current article from favourites
    const removeFromFavourites = async () => {
        try {
            setIsButtonPressed(true);
            setIsFav(false);
            const { statusCode, data } = await Backend.removeFavArticle(ID);
            setIsButtonPressed(false);
            if (!Backend.isSuccessfulRequest(statusCode)) {
                const errorMessage = await Backend.getErrorMessage(data).then(response => response);
                showPopupMessage('Error', errorMessage);
                setIsFav(true);
                return false;
            }
            removeFavArticle(Article);
        } catch (error) {
            console.log(error);
        }
    }

    // add or remove the current article from favourites
    const addOrRemoveFromFavourites = () => {
        if (isButtonPressed) return;
        if (isFav) removeFromFavourites();
        else addToFavourites();
    }

    // get the full description
    const fullDescription = Sections.map((section) => {
        return <Section section={section} key={section.id} />
    });

    // check if the image is loaded
    const [isImgLoaded, setIsImgLoaded] = useState(false);

    // check if the current article is favourite or not
    useEffect(() => {
        isFavourite();
        scrollViewRef.current?.scrollTo({
            y: 0,
            animated: true,
        });
    }, [Article]);

    return (
        <View style={styles.container}>
            {loaderVisible ? <Loader /> : null}
            {popupMessageVisible ? <PopupMessage /> : null}
            <TouchableOpacity
                style={styles.backContainer}
                onPress={goBack}
            >
                <SvgMaker Svg={LeftArrow} style={styles.back} />
            </TouchableOpacity>
            <Image
                source={isImgLoaded ? Img : placeholder}
                style={styles.upperBox}
                cachePolicy={'memory-disk'}
                contentFit='fill'
                priority={'high'}
                onLoadEnd={() => setIsImgLoaded(true)}
            />
            <View style={styles.lowerBox}>
                <View style={styles.upperFields}>
                    <View style={styles.txts}>
                        <Text style={styles.title}>{Title}</Text>
                        <Text style={styles.date}>{formatDate(Date)}</Text>
                    </View>
                    <View style={styles.favouriteConainer}>
                        <View style={styles.fav}>
                            <TouchableOpacity onPress={addOrRemoveFromFavourites} disabled={isButtonPressed}>
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