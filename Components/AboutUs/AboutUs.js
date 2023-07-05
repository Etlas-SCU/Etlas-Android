import { translate } from '../../Localization'
import { View, Text, Image, ImageBackground, TouchableOpacity, ScrollView } from 'react-native';
import { styles } from './Styles';
import { goBack } from '../../Helpers/Navigator';
import SvgMaker from '../SvgMaker/SvgMaker';
import { CloseIcon, GoogleIcon, FacebookIcon, TwitterIcon, LogoWhiteIcon } from '../../assets/SVG/Icons';


export default function AboutUs({ }) {

    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../assets/Backgrounds/AboutUs.png')} style={styles.background}>
                <ScrollView contentContainerStyle={styles.contentContainer} showsVerticalScrollIndicator={false}>
                    <TouchableOpacity
                        onPress={goBack}
                        style={styles.closeContainer}
                    >
                        <SvgMaker Svg={CloseIcon} style={styles.close} />
                    </TouchableOpacity>
                    <SvgMaker Svg={LogoWhiteIcon} style={styles.logo} />
                    <Text style={styles.copyright}>{translate('AboutUs.copyright')}</Text>
                    <View style={styles.line} />
                    <Text style={styles.description}>{translate('AboutUs.description')}</Text>
                    <View style={styles.contactus}>
                        <View style={styles.usingAppicons}>
                            <TouchableOpacity activeOpacity={0.8} style={styles.IconButton}>
                                <SvgMaker Svg={GoogleIcon} style={styles.icon} />
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.8} style={styles.IconButton}>
                                <SvgMaker Svg={TwitterIcon} style={styles.icon} />
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.8} style={styles.IconButton}>
                                <SvgMaker Svg={FacebookIcon} style={styles.icon} />
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.findus}>{translate('AboutUs.findus')}</Text>
                    </View>
                </ScrollView>
            </ImageBackground>
        </View>
    );
}