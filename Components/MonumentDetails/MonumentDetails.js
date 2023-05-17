import { useState, useEffect } from 'react';
import { View, ScrollView, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from './Styles';
import * as Speech from 'expo-speech';
import { getParams, goBack } from '../../Backend/Navigator';


export default function MonumentDetails({ }) {
    
    // get the data from the route
    const { Monument } = getParams();
    const { Title, HistoricDate, Img, fullDescription } = Monument;


    // get the icons of heart
    const fav = require('../../assets/ArticleDetails/filled.png');
    const notFav = require('../../assets/ArticleDetails/notfilled.png');

    // get sound icon
    const sound = require('../../assets/ArticleDetails/sound.png');

    // get the icons of heart
    const [favIcon, setFavIcon] = useState(notFav);

    // change the icon of heart
    const toggleFav = () => {
        setFavIcon(fav == favIcon ? notFav : fav);
    }

    // get the voices
    const [voices, setVoices] = useState([]);

    // filter voices by language
    async function filterVoices(language, Voices){
        return await Voices.filter(voice => voice.language === language);
    }

    // get the voices
    useEffect(() => {
        Speech.getAvailableVoicesAsync().then(Voices => {
            filterVoices('en', Voices).then(voices => {
                setVoices(voices);
            });
        });
    }, []);

    // read the description
    const read = () => {
        Speech.speak(fullDescription);
    }

    return (
        <View style={styles.container}>
            <View style={styles.UpperBox}>
                <TouchableOpacity 
                    onPress={goBack}
                    style={styles.close}  
                >
                    <Image source={require('../../assets/HighScore/close.png')} style={styles.arrow}/>
                </TouchableOpacity>
                <Image source={Img} style={styles.image} />
                <View style={styles.TitleConainer}>
                    <Text style={styles.title}>{Title}</Text>
                    <Text style={styles.description}>{HistoricDate}</Text>
                </View>
            </View>
            <View style={styles.LowerBox}>
                <View style={styles.line} />
                <View style={styles.iconConainer}>
                    <View style={styles.FavContainer}>
                        <TouchableOpacity  onPress={() => { toggleFav() }}>
                            <Image source={favIcon} style={styles.icon}/>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.SoundContainer}>
                        <TouchableOpacity onPress={() => { read() }}>
                            <Image source={sound} style={styles.icon}/>
                        </TouchableOpacity>
                    </View>
                </View>
                <ScrollView
                    contentContainerStyle={styles.scrollContainer} 
                    showsVerticalScrollIndicator={false}
                >
                    <Text style={styles.fulldescription}>{fullDescription}</Text>
                </ScrollView>
            </View>
        </View>
    );

}