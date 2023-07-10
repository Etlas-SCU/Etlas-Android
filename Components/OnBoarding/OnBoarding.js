import { Text, View, TouchableOpacity, ScrollView } from "react-native";
import { styles } from "./Styles";
import { translate } from '../../Localization';
import { goPage } from "../../Helpers/Navigator";
import SvgMaker from "../SvgMaker/SvgMaker";
import { WolfIcon, EonBoarding } from "../../assets/SVG/Icons";


export default function OnBoarding({ }) {

    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.containerScrolling} automaticallyAdjustContentInsets={true}>
                <Text style={styles.header}>{translate('OnBoarding.title')}</Text>
                <View style={styles.text_box}>
                    <Text style={styles.desc}>{translate('OnBoarding.description')}</Text>
                </View>
                <Text style={styles.worry}>{translate('OnBoarding.worrytext')}</Text>
                <SvgMaker Svg={EonBoarding} style={styles.logoContainer} />
                <View style={styles.button_container}>
                    <TouchableOpacity style={[styles.sign_buttons, styles.sign_in]} onPress={() => { goPage('login', 'onBoarding') }}>
                        <Text style={styles.button_text}>{translate('OnBoarding.signin')}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.sign_buttons, styles.sign_up]} onPress={() => { goPage('firstPage', 'onBoarding') }}>
                        <Text style={styles.button_text}>{translate('OnBoarding.signup')}</Text>
                    </TouchableOpacity>
                </View>
                <SvgMaker style={styles.wolf} Svg={WolfIcon} />
            </ScrollView>
        </View>
    );
}