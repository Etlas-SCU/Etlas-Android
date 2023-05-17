import { View, Image, Text, TouchableOpacity, ScrollView, SafeAreaView } from "react-native";
import { styles } from './Styles'
import { translate } from "../../Localization";
import { UserContext } from "../Context/Context";
import { useContext } from "react";
import MainMenu from "../MainMenu/MainMenu";
import { isIOS } from "../../AppStyles";
import { goPage } from "../../Backend/Navigator";


export default function KnowledgeCheck({ }) {

    const { showModal, setScreen } = useContext(UserContext);

    return (
        <SafeAreaView style={styles.container}>
            {isIOS() ? <MainMenu /> : null}
            <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
                <TouchableOpacity style={styles.aboutus} onPress={() => { showModal(), setScreen('RecognitionFailed') }}>
                    <Image source={require('../../assets/KnowledgeCheck/tabler_exclamation-circle.png')} />
                </TouchableOpacity>
                <View style={styles.body}>
                    <Image source={require('../../assets/RecognizedFailed/Sad.png')} style={styles.sad} />
                    <Text style={styles.title}>{translate('RecognitionFailed.title')}</Text>
                    <Text style={styles.text}>{translate('RecognitionFailed.text')}</Text>
                    <TouchableOpacity style={styles.button} onPress={() => { goPage('Home', 'RecognitionFailed') }}>
                        <Text style={styles.button_text}>{translate('RecognitionFailed.retry')}</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}