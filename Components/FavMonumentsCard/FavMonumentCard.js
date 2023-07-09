import { View, Image, Text, TouchableOpacity } from 'react-native'
import { styles } from './Styles'
import Backend from '../../Helpers/Backend';
import { goPage } from '../../Helpers/Navigator';
import { memo, useState, useContext } from 'react';
import SvgMaker from '../SvgMaker/SvgMaker';
import { TrashIcon } from '../../assets/SVG/Icons';
import { formatDate } from '../../AppStyles';
import PopupMessage from '../PopupMessage/PopupMessage';
import { UserContext } from '../Context/Context';
import { FavMonumentsContext } from '../Context/FavMonumentsContext';


function FavMonumentCard({ favMonument }) {

    const { name: Title, updated: scannedDate, id: ID } = favMonument;
    const [isButtonPressed, setIsButtonPressed] = useState(false);

    const HistoricDate = '200 BC | Egypt';
    const Img = require('../../assets/ImagesToDelete/Anubis.png');

    // pop up
    const { showPopupMessage, popupMessageVisible } = useContext(UserContext);

    // remove fav monuments
    const { removeFavMonument } = useContext(FavMonumentsContext);

    // remove favourite
    const removeFromFavourites = async () => {
        try {
            setIsButtonPressed(true);
            const { statusCode, data } = await Backend.removeFavMonument(ID);
            setIsButtonPressed(false);
            if (!Backend.isSuccessfulRequest(statusCode)) {
                const errorMessage = await Backend.getErrorMessage(data);
                showPopupMessage('Error', errorMessage);
                return false;
            }
            removeFavMonument(Monument);
        } catch (error) {
            console.log(error);
        }
    }

    // handle submit
    const handleSubmit = async () => {
        removeFromFavourites();
    }

    return (
        <TouchableOpacity
            onPress={() => { goPage('favMonumentDetails', null, { favMonument: favMonument }) }}
            style={styles.card}
            disabled={isButtonPressed}
        >
            <View style={styles.cardContainer}>
                <View style={styles.MonumentcardImgContainer}>
                    <Image source={Img} style={styles.MonumentcardImg} />
                </View>
                <View style={styles.MonumentcardTextContainer}>
                    <Text style={styles.MonumentcardTitle} numberOfLines={1}>{Title}</Text>
                    <Text style={styles.MonumentcardDescription} numberOfLines={2}>{HistoricDate}</Text>
                    <Text style={styles.MonumentcardDate} numberOfLines={1}>{formatDate(scannedDate)}</Text>
                </View>
                <View style={styles.CardIconsConainer}>
                    <TouchableOpacity
                        style={styles.CardIcon}
                        onPress={handleSubmit}
                        disabled={isButtonPressed}
                    >
                        <SvgMaker Svg={TrashIcon} style={styles.CardIconImg} />
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableOpacity>
    );
}

export default memo(FavMonumentCard);