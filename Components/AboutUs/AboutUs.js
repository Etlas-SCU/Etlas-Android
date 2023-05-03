import { translate } from '../../Localization'
import { View, Text, Image, ImageBackground, TouchableOpacity, ScrollView, SafeAreaView} from 'react-native';
import { styles } from './Styles';

export default function AboutUs({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground source={require('../../assets/AboutUs/AboutUs.png')} style={styles.background}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={require('../../assets/AboutUs/ep_close-bold.png')} style={styles.close} />
                </TouchableOpacity>
                <Text style={styles.copyright}>{translate('AboutUs.copyright')}</Text>
                <View style={styles.line} />
                <Text style={styles.description}>{translate('AboutUs.description')}</Text>
                <View style={styles.contactus}>
                    <View style={styles.usingAppicons}>
                        <TouchableOpacity style={styles.IconButton}>
                            <Image source={require('../../assets/register/google.png')} style={styles.icon}/>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.IconButton}>
                            <Image source={require('../../assets/register/twitter.png')} style={styles.icon}/>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.IconButton}>
                            <Image source={require('../../assets/register/facebook.png')} style={styles.icon}/>
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.findus}>{translate('AboutUs.findus')}</Text>
                </View>
            </ImageBackground>
        </SafeAreaView>
    );
}