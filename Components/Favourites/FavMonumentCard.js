import { View, Image, Text, TouchableOpacity } from 'react-native'
import { styles } from './Styles'
import Backend from '../../Backend/Backend';


export default function FavMonumentCard({ navigation, Monument }) {

    const { Title, HistoricDate, scannedDate, Img, ID } = Monument;

    return (
        <TouchableOpacity
            onPress={() => { navigation.navigate('MonumentDetails', { Monument: Monument, screen: 'favourites' }) }}
            style={styles.card}
        >
            <View style={styles.cardContainer}>
                <View style={styles.MonumentcardImgContainer}>
                    <Image source={Img} style={styles.MonumentcardImg} />
                </View>
                <View style={styles.MonumentcardTextContainer}>
                    <Text style={styles.MonumentcardTitle} numberOfLines={1}>{Title}</Text>
                    <Text style={styles.MonumentcardDescription} numberOfLines={2}>{HistoricDate}</Text>
                    <Text style={styles.MonumentcardDate} numberOfLines={1}>{scannedDate}</Text>
                </View>
                <View style={styles.CardIconsConainer}>
                    <TouchableOpacity
                        style={styles.CardIcon}
                        onPress={() => { Backend.removeFavMonument(ID) }}
                    >
                        <Image source={require('../../assets/Favourites/Trash.png')} style={styles.CardIconImg} />
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableOpacity>
    );
}