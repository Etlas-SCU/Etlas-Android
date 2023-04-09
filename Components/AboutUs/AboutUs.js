import { translate } from '../../Localization'
import { View, Text, Image, ImageBackground, TouchableOpacity } from 'react-native';
import { styles } from './Styles';

export default function AboutUs({ navigation }) {
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../assets/AboutUs/AboutUs.png')} style={styles.background}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={require('../../assets/AboutUs/ep_close-bold.png')} style={styles.close}/>
                </TouchableOpacity>
                <Text style={styles.copyright}>{translate('AboutUs.copyright')}</Text>
                <Text style={styles.description}>{translate('AboutUs.description')}</Text>
                <View style={styles.usingAppicons}>
                    <TouchableOpacity>
                        <Image source={require('../../assets/register/google.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={require('../../assets/register/twitter.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={require('../../assets/register/facebook.png')} />
                    </TouchableOpacity>
                </View>
                <Text style={styles.findus}>{translate('AboutUs.findus')}</Text>
            </ImageBackground>
        </View>
    );
}