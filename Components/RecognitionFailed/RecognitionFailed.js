import { View, Image, Text, TouchableOpacity, ScrollView, SafeAreaView } from "react-native";
import { styles } from './Styles'
import { translate } from "../../Localization";


export default function KnowledgeCheck({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
                <TouchableOpacity style={styles.aboutus} onPress={() => { navigation.navigate({ name: 'AboutUs' }) }}>
                    <Image source={require('../../assets/KnowledgeCheck/tabler_exclamation-circle.png')} />
                </TouchableOpacity>
                <View style={styles.body}>
                    <Image source={require('../../assets/RecognizedFailed/Sad.png')} style={styles.sad} />
                    <Text style={styles.title}>{translate('RecognitionFailed.title')}</Text>
                    <Text style={styles.text}>{translate('RecognitionFailed.text')}</Text>
                    <TouchableOpacity style={styles.button} onPress={() => { navigation.navigate({ name: 'Home' }) }}>
                        <Text style={styles.button_text}>{translate('RecognitionFailed.retry')}</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}