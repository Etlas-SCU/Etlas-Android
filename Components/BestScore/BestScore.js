import { styles } from './Styles'
import { translate } from "../../Localization";
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';

export default function KnowledgeCheck({ navigation }){
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../assets/HighScore/HighScore.png')} resizeMode='cover' style={styles.image}>
                <View style={styles.header}>
                    <Text style={styles.title}>{translate('BestScore.title')}</Text>
                </View>
                <View style={styles.ScoreBox}>
                    <Text style={styles.score}>{translate('BestScore.score')}</Text>
                    <Text style={styles.scoreTxt}>{translate('BestScore.text')}</Text>
                    <View style={styles.line}/>
                    <Text style={styles.bestScore}>{translate('BestScore.title')}</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <Text style={styles.ask}>{translate('BestScore.ask')}</Text>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>{translate('BestScore.playnow')}</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    );
}