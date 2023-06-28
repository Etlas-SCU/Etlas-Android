import { useState, useEffect, useContext, useRef } from 'react';
import { View, ScrollView, Text, Image, TouchableOpacity, AppState } from 'react-native';
import { styles } from './Styles';
import * as Speech from 'expo-speech';
import { goBack } from '../../Backend/Navigator';
import Loader from '../Loader/Loader';
import { UserContext } from '../Context/Context';
import { isIOS } from '../../AppStyles';
import Backend from '../../Backend/Backend';
import { useIsFocused } from '@react-navigation/native';
import SvgMaker from '../SvgMaker/SvgMaker';
import { CloseIcon, FilledHeartIcon, NonFilledHeartIcon, PauseIcon, StopIcon, PlayIcon, SoundIcon } from '../../assets/SVG/Icons';


export default function MonumentDetails({ }) {

    // get the app state
    const appState = useRef(AppState.currentState);
    const [appStateVisible, setAppStateVisible] = useState(appState.current);

    // check if the screen is focused or not
    const isFocused = useIsFocused();

    // get the data from the route
    const Monument = Backend.getMonument();
    const { Title, HistoricDate, Img, fullDescription } = Monument;
    const { loaderVisible, showLoader, hideLoader } = useContext(UserContext);
    const [speechState, setSpeechState] = useState('end');
    const [speechIcon, setSpeechIcon] = useState('sound');

    // get the icons of heart
    const fav = FilledHeartIcon;
    const notFav = NonFilledHeartIcon;

    // get the needed icons
    const sound = SoundIcon;
    const pause = PauseIcon;
    const resume = PlayIcon;
    const stop = StopIcon;

    // get the icons of heart
    const [isFav, setIsFav] = useState(false);

    // change the icon of heart
    const toggleFav = () => {
        setIsFav(!isFav);
    }

    // get the voices
    const [voices, setVoices] = useState([]);

    // filter voices by language
    async function filterVoices(language, Voices) {
        return await Voices.filter(voice => voice.language === language);
    }

    // get the voices
    useEffect(() => {
        showLoader();
        async function getVoices() {
            await Speech.getAvailableVoicesAsync().then(Voices => {
                filterVoices('en', Voices).then(voices => {
                    setVoices(voices);
                }).then(hideLoader(), setSpeechIcon('sound'), setSpeechState('end'), Stop());
            });
        }
        getVoices();
    }, [Monument]);


    // get the app state for stop the sound
    useEffect(() => {
        const subscription = AppState.addEventListener('change', nextAppState => {
            appState.current = nextAppState;
            setAppStateVisible(appState.current);
            if (appState.current !== 'active') {
                StopSound();
            }
        });
        return () => {
            subscription.remove();
        };
    }, []);

    // get the screen state for stop the sound
    useEffect(() => {
        if (!isFocused) {
            StopSound();
        }
    }, [isFocused]);


    // read the description
    const Read = async () => {
        const options = {
            language: 'en',
            volume: 1,
            onDone: () => {
                setSpeechState('end');
                setSpeechIcon('sound');
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

    // const Stop sound
    const StopSound = async () => {
        if (isIOS()) {
            Pause();
            setSpeechState('pause');
            setSpeechIcon('resume');
        } else {
            Stop();
            setSpeechState('end');
            setSpeechIcon('sound');
        }
    }

    // control the speech
    const speechControl = () => {
        if (isIOS()) {
            if (speechState === 'end') {
                Read();
                setSpeechState('play');
                setSpeechIcon('pause');
            } else if (speechState === 'play') {
                Pause();
                setSpeechState('pause');
                setSpeechIcon('resume');
            } else if (speechState === 'pause') {
                Resume();
                setSpeechState('play');
                setSpeechIcon('pause');
            }
        } else {
            if (speechState === 'end') {
                Read();
                setSpeechState('play');
                setSpeechIcon('stop');
            } else if (speechState === 'play') {
                Stop();
                setSpeechState('end');
                setSpeechIcon('sound');
            }
        }
    }

    const getIcon = () => {
        switch (speechIcon) {
            case 'sound':
                return sound;
            case 'pause':
                return pause;
            case 'resume':
                return resume;
            case 'stop':
                return stop;
            default:
                return sound;
        }
    }

    return (
        <View style={styles.container}>
            {loaderVisible ? <Loader message={'Please Wait while get Monument Details and voices'} /> : null}
            <View style={styles.UpperBox}>
                <TouchableOpacity
                    onPress={goBack}
                    style={styles.close}
                >
                    <SvgMaker Svg={CloseIcon} style={styles.arrow} />
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
                        <TouchableOpacity onPress={() => { toggleFav() }}>
                            <SvgMaker Svg={isFav ? fav : notFav} style={styles.icon} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.SoundContainer}>
                        <TouchableOpacity onPress={speechControl}>
                            <SvgMaker Svg={getIcon()} style={styles.speechIcon} />
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