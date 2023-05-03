import { View, Image, Text, TouchableOpacity, SafeAreaView, ScrollView } from "react-native";
import { styles } from './Styles'
import { translate } from "../../Localization";

function Card({ navigation, title, img, desc, score }){
    return (
        <TouchableOpacity style={styles.body}>
            <View style={styles.bodyContent}>
                <Text style={styles.bodyTitle}>{title}</Text>
                <Text style={styles.bodyText}>{desc}</Text>
                <Text style={styles.bodyScore}>{score}</Text>
            </View>
            <View style={styles.bodyImage}>
                <Image source={img} style={styles.image} />
            </View>
        </TouchableOpacity>
    )
}

export default function KnowledgeCheck({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.contentContainer}>
                <View style={styles.header}>
                    <TouchableOpacity style={styles.aboutus} onPress={() => { navigation.navigate({ name: 'AboutUs' }) }}>
                        <Image source={require('../../assets/KnowledgeCheck/tabler_exclamation-circle.png')} />
                    </TouchableOpacity>
                    <Text style={styles.title}>{translate('KnowledgeCheck.title')}</Text>
                </View>
                <Card 
                    navigation={navigation} 
                    title={translate('KnowledgeCheck.Statues')} 
                    desc={translate('KnowledgeCheck.StatuesText')}
                    score={translate('KnowledgeCheck.StatuesScore')}
                    img={require('../../assets/KnowledgeCheck/Statue_1.png')}
                />
                <Card
                    navigation={navigation}
                    title={translate('KnowledgeCheck.Monuments')}
                    desc={translate('KnowledgeCheck.MonumentsText')}
                    score={translate('KnowledgeCheck.MonumentsScore')}
                    img={require('../../assets/KnowledgeCheck/Statue_2.png')}
                />
                <Card
                    navigation={navigation}
                    title={translate('KnowledgeCheck.Landmarks')}
                    desc={translate('KnowledgeCheck.LandmarksText')}
                    score={translate('KnowledgeCheck.LandmarksScore')}
                    img={require('../../assets/KnowledgeCheck/Statue_3.png')}
                />
            </ScrollView>
        </SafeAreaView>
    );
}