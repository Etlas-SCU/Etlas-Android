import { translate } from '../../Localization'
import { Linking, View, Text, ImageBackground, TouchableOpacity, ScrollView } from 'react-native';
import { styles } from './Styles';
import { goBack } from '../../Helpers/Navigator';
import SvgMaker from '../SvgMaker/SvgMaker';
import { CloseIcon, GoogleIcon, FacebookIcon, TwitterIcon, LogoWhiteIcon } from '../../assets/SVG/Icons';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { useCallback } from 'react';


export default function AboutUs({ }) {
    // get insets of safe area
    const insets = useSafeAreaInsets();

    // facebook url
    const facebookUrl = 'https://www.facebook.com/profile.php?id=100094434254575';
    const twitterUrl = 'https://twitter.com/EtlasScu';
    const googleUrl = 'mailto:team.etlas@gmail.com';

    // open url
    const openUrl = async (url) => {
        await Linking.openURL(url);
    }
    
    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground source={require('../../assets/Backgrounds/AboutUs.png')} style={styles.background}>
                <ScrollView contentContainerStyle={[styles.contentContainer, { marginTop: -insets.top }]} showsVerticalScrollIndicator={false}>
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
                            <TouchableOpacity 
                                activeOpacity={0.8} 
                                style={styles.IconButton}
                                onPress={() => openUrl(googleUrl)}
                            >
                                <SvgMaker Svg={GoogleIcon} style={styles.icon} />
                            </TouchableOpacity>
                            <TouchableOpacity 
                                activeOpacity={0.8} 
                                style={styles.IconButton}
                                onPress={() => openUrl(twitterUrl)}
                            >
                                <SvgMaker Svg={TwitterIcon} style={styles.icon} />
                            </TouchableOpacity>
                            <TouchableOpacity 
                                activeOpacity={0.8} 
                                style={styles.IconButton}
                                onPress={() => openUrl(facebookUrl)}
                            >
                                <SvgMaker Svg={FacebookIcon} style={styles.icon} />
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.findus}>{translate('AboutUs.findus')}</Text>
                    </View>
                </ScrollView>
            </ImageBackground>
        </SafeAreaView>
    );
}