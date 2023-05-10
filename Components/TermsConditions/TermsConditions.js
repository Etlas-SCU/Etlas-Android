import { styles } from "./Styles";
import { View, Text, Image, TouchableOpacity, ScrollView, useWindowDimensions } from "react-native";
import { translate } from "../../Localization";
import RenderHTML from "react-native-render-html";
import { TermsCondition } from "../../assets/locales/Terms";

// to view the HTML text with the styles
const HTMLView = ({ htmlContent }) => {

    const { width } = useWindowDimensions();

    return (
        <RenderHTML
            source={{ html: htmlContent }}
            contentWidth={width}
            baseStyle={styles.HTML}  
        />
    );
};


export default function TermsConditions({ navigation, route }) {

    // get pageName from the parameters passed to the naviagtion
    const { pageName } = route.params;

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>{translate('TermsConditions.title')}</Text>
                <TouchableOpacity 
                    onPress={() => { navigation.navigate({ name: pageName }) }} 
                    style={styles.close}
                >
                    <Image source={require('../../assets/HighScore/close.png')} style={styles.closeIcon}/>
                </TouchableOpacity>
            </View>
            <Image source={require('../../assets/TermsConditions/statue.png')} style={styles.statue}/>
            <Image source={require('../../assets/TermsConditions/pyramids.png')} style={styles.pyramids}/>
            <View style={styles.DarkConatiner}>
                <Text style={styles.copyright}>{translate('TermsConditions.copyright')}</Text>
                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.contentContainer}>
                    <HTMLView htmlContent={TermsCondition} />
                </ScrollView>
            </View>
        </View>
    );
}