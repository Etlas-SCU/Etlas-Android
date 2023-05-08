import { translate } from '../../Localization'
import { View, Text, Image, ImageBackground, TouchableOpacity, ScrollView } from 'react-native';
import { styles } from './Styles';

export default function AboutUs({ navigation, route }) {

    // get pageName from the parameters passed to the naviagtion
    const { pageName } = route.params;

    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../assets/AboutUs/AboutUs.png')} style={styles.background}>
                <ScrollView contentContainerStyle={styles.contentContainer} showsVerticalScrollIndicator={false}>
                    <TouchableOpacity onPress={() => { navigation.navigate({ name: pageName }) }}>
                        <Image source={require('../../assets/AboutUs/ep_close-bold.png')} style={styles.close} />
                    </TouchableOpacity>
                    <Image style={styles.logo} source={require('../../assets/AboutUs/e.png')} />
                    <Text style={styles.copyright}>{translate('AboutUs.copyright')}</Text>
                    <View style={styles.line} />
                    <Text style={styles.description}>{translate('AboutUs.description')}</Text>
                    <View style={styles.contactus}>
                        <View style={styles.usingAppicons}>
                            <TouchableOpacity style={styles.IconButton}>
                                <Image source={require('../../assets/register/google.png')} style={styles.icon} />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.IconButton}>
                                <Image source={require('../../assets/register/twitter.png')} style={styles.icon} />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.IconButton}>
                                <Image source={require('../../assets/register/facebook.png')} style={styles.icon} />
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.findus}>{translate('AboutUs.findus')}</Text>
                    </View>
                </ScrollView>
            </ImageBackground>
        </View>
    );
}