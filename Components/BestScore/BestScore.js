import { styles } from './Styles'
import { translate } from "../../Localization";
import { View, Text, ImageBackground, TouchableOpacity, ScrollView, Image } from 'react-native';
import Backend from '../../Backend/Backend';
import { goBack, goPage } from '../../Backend/Navigator';


export default function BestScore({ }) {

    // get the bestScore from Backend
    const bestScore = Backend.getBestScore();

    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../assets/HighScore/HighScore.png')} resizeMode='cover' style={styles.image}>
                <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
                    <View style={styles.header}>
                        <Text style={styles.title}>{translate('BestScore.title')}</Text>
                        <TouchableOpacity 
                            onPress={goBack} 
                            style={styles.closeContainer}
                        >
                            <Image source={require('../../assets/Profile/Arr.png')} style={styles.close}/>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.ScoreBox}>
                        <Text style={styles.score}>{bestScore}</Text>
                        <Text style={styles.scoreTxt}>{translate('BestScore.text')}</Text>
                        <View style={styles.line} />
                        <Text style={styles.bestScore}>{translate('BestScore.title')}</Text>
                    </View>
                    <View style={styles.buttonContainer}>
                        <Text style={styles.ask}>{translate('BestScore.ask')}</Text>
                        <TouchableOpacity style={styles.button} onPress={() => { goPage('KnowledgeCheck', 'bestScore') }}>
                            <Text style={styles.buttonText}>{translate('BestScore.playnow')}</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </ImageBackground>
        </View>
    );
}