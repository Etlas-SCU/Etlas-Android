import { styles } from "./Styles";
import { View, Text, TouchableOpacity, ScrollView, useWindowDimensions } from "react-native";
import { translate } from "../../Localization";
import RenderHTML from "react-native-render-html";
import Backend from "../../Helpers/Backend";
import { useEffect, useState, useContext } from "react";
import { UserContext } from "../Context/Context";
import Loader from "../Loader/Loader";
import { goBack } from "../../Helpers/Navigator";
import SvgMaker from "../SvgMaker/SvgMaker";
import { TermsStatue, TermsView } from "../../assets/SVG/Images";
import { InvCloseIcon } from "../../assets/SVG/Icons";


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


export default function TermsConditions({ }) {

    const [Terms, setTerms] = useState('');
    const { loaderVisible, hideLoader, showLoader } = useContext(UserContext);

    // use the context to get the state of the modal
    useEffect(() => {
        async function fetchData() {
            showLoader(translate('TermsConditions.getTerms'));
            const { statusCode, data } = await Backend.getTermsConditions();
            hideLoader();
            if (Backend.isSuccessfulRequest(statusCode)) {
                setTerms(data);
            }
        }
        fetchData();
    }, []);

    return (
        <View style={styles.container}>
            {loaderVisible ? <Loader /> : null}
            <View style={styles.header}>
                <Text style={styles.title}>{translate('TermsConditions.title')}</Text>
                <TouchableOpacity
                    onPress={goBack}
                    style={styles.close}
                >
                    <SvgMaker Svg={InvCloseIcon} style={styles.closeIcon} />
                </TouchableOpacity>
            </View>
            <SvgMaker Svg={TermsStatue} style={styles.statue} />
            <SvgMaker Svg={TermsView} style={styles.pyramids} />
            <View style={styles.DarkConatiner}>
                <Text style={styles.copyright}>{translate('TermsConditions.copyright')}</Text>
                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.contentContainer}>
                    <HTMLView htmlContent={Terms} />
                </ScrollView>
            </View>
        </View>
    );
}