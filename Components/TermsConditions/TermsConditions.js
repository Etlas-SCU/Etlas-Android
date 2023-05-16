import { styles } from "./Styles";
import { View, Text, Image, TouchableOpacity, ScrollView, useWindowDimensions } from "react-native";
import { translate } from "../../Localization";
import RenderHTML from "react-native-render-html";
import Backend from "../../Backend/Backend";
import { useEffect, useState, useContext } from "react";
import { UserContext } from "../Context/Context";
import Loader from "../Loader/Loader";


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
    [Terms, setTerms] = useState('');
    const { loaderVisible, hideLoader, showLoader } = useContext(UserContext);

    // use the context to get the state of the modal
    useEffect(() => {
        showLoader();
        async function fetchData() {
            const response = await Backend.getTermsConditions();
            setTerms(response);
            hideLoader();
        }
        fetchData();
    }, []);

    return (
        <View style={styles.container}>
            { loaderVisible ? <Loader message={'Please Wait while get Terms and Conditions'}/> : null }
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
                    <HTMLView htmlContent={Terms} />
                </ScrollView>
            </View>
        </View>
    );
}