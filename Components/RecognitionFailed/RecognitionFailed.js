import { View, Image, Text, TouchableOpacity, ScrollView, SafeAreaView } from "react-native";
import { styles } from './Styles'
import { translate } from "../../Localization";
import { UserContext } from "../Context/Context";
import { useContext } from "react";
import MainMenu from "../MainMenu/MainMenu";
import { isIOS } from "../../AppStyles";
import { goPage } from "../../Backend/Navigator";
import SvgMaker from "../SvgMaker/SvgMaker";
import { MenuIcon, SadIcon, CloseIcon } from "../../assets/SVG/Icons";


export default function KnowledgeCheck({ }) {

    const { showModal, setScreen } = useContext(UserContext);

    return (
        <SafeAreaView style={styles.container}>
            {isIOS() ? <MainMenu /> : null}
            <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
                <TouchableOpacity style={styles.aboutus} onPress={() => { showModal(), setScreen('RecognitionFailed') }}>
                    <SvgMaker Svg={MenuIcon} style={styles.menu} />
                </TouchableOpacity>
                <View style={styles.body}>
                    <SvgMaker Svg={SadIcon} style={styles.sad} />
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