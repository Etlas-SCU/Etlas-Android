import { View, Image, Text, TouchableOpacity } from "react-native";
import { styles } from './Styles'
import { translate } from "../../Localization";

export default function KnowledgeCheck({ navigation }){
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.aboutus} onPress={() => { navigation.navigate({name: 'AboutUs'})}}>
                    <Image source={require('../../assets/KnowledgeCheck/tabler_exclamation-circle.png')} />
                </TouchableOpacity>
                <Text style={styles.title}>{translate('KnowledgeCheck.title')}</Text>
            </View>
            <View style={styles.body}>
                <View style={styles.bodyContent}>
                    <Text style={styles.bodyTitle}>{translate('KnowledgeCheck.Statues')}</Text>
                    <Text style={styles.bodyText}>{translate('KnowledgeCheck.StatuesText')}</Text>
                    <Text style={styles.bodyScore}>{translate('KnowledgeCheck.StatuesScore')}</Text>
                </View>
                <View style={styles.bodyImage}>
                    <Image source={require('../../assets/KnowledgeCheck/Statue_1.png')} style={styles.image}/>
                </View>
            </View>
            <View style={styles.body}>
                <View style={styles.bodyContent}>
                    <Text style={styles.bodyTitle}>{translate('KnowledgeCheck.Monuments')}</Text>
                    <Text style={styles.bodyText}>{translate('KnowledgeCheck.MonumentsText')}</Text>
                    <Text style={styles.bodyScore}>{translate('KnowledgeCheck.MonumentsScore')}</Text>
                </View>
                <View style={styles.bodyImage}>
                    <Image source={require('../../assets/KnowledgeCheck/Statue_2.png')} style={styles.image}/>
                </View>
            </View>
            <View style={styles.body}>
                <View style={styles.bodyContent}>
                    <Text style={styles.bodyTitle}>{translate('KnowledgeCheck.Landmarks')}</Text>
                    <Text style={styles.bodyText}>{translate('KnowledgeCheck.LandmarksText')}</Text>
                    <Text style={styles.bodyScore}>{translate('KnowledgeCheck.LandmarksScore')}</Text>
                </View>
                <View style={styles.bodyImage}>
                    <Image source={require('../../assets/KnowledgeCheck/Statue_3.png')} style={styles.image}/>
                </View>
            </View>
        </View>
    );
}