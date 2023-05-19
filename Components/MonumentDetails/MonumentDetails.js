import { useState, useEffect, useContext } from 'react';
import { View, ScrollView, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from './Styles';
import * as Speech from 'expo-speech';
import { getParams, goBack } from '../../Backend/Navigator';
import Loader from '../Loader/Loader';
import { UserContext } from '../Context/Context';


export default function MonumentDetails({ }) {
    
    // get the data from the route
    const { Monument } = getParams();
    const { Title, HistoricDate, Img, fullDescription } = Monument;
    const { loaderVisible, showLoader, hideLoader } = useContext(UserContext);
    const [speechState, setSpeechState] = useState('end');
    const [speechIcon, setSpeechIcon] = useState(sound);

    // get the icons of heart
    const fav = require('../../assets/ArticleDetails/filled.png');
    const notFav = require('../../assets/ArticleDetails/notfilled.png');

    // get the needed icons
    const sound = require('../../assets/ArticleDetails/sound.png');
    const pause = require('../../assets/ArticleDetails/pause.png');
    const resume = require('../../assets/ArticleDetails/resume.png');

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
        showLoader();
        async function getVoices(){
            await Speech.getAvailableVoicesAsync().then(Voices => {
                filterVoices('en', Voices).then(voices => {
                    setVoices(voices);
                }).then(hideLoader(), setSpeechIcon(sound), setSpeechState('end'), Stop());
            });
        }
        getVoices();
    }, []);

    // read the description
    const Read = async () => {
        const options = {
          language: 'en',
          volume: 1,
          onDone: () => {
            setSpeechState('end');
            setSpeechIcon(sound);
          },
        };
        await Speech.speak(fullDescription, options);
    };  

    // pause the speech
    const Pause = async () => {
        Speech.pause();
    }

    // resume the speech
    const Resume = async () => {
        Speech.resume();
    }

    // stop the speech
    const Stop = async () => {
        Speech.stop();
    }

    // control the speech
    const speechControl = () => {
        if(speechState == 'end'){
            Read();
            setSpeechState('play');
            setSpeechIcon(pause);
        }else if(speechState == 'play'){
            Pause();
            setSpeechState('pause');
            setSpeechIcon(resume);
        }else if(speechState == 'pause'){
            Resume();
            setSpeechState('play');
            setSpeechIcon(pause);
        }
    }

    return (
        <View style={styles.container}>
            { loaderVisible ? <Loader message={'Please Wait while get Monument Details and voices'}/> : null }
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
                        <TouchableOpacity onPress={speechControl}>
                            <Image source={speechIcon} style={styles.speechIcon}/>
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