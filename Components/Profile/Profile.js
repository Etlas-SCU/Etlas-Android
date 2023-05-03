import { View, Text, Image, TouchableOpacity, SafeAreaView, ScrollView, ImageBackground} from "react-native";
import { styles } from "./Styles";
import { translate } from "../../Localization";

export default function Profile({ navigation }){
    return(
        <SafeAreaView style={styles.container}>
            <ImageBackground source={require('../../assets/Profile/Background.png')}>
                <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image source={require('../../assets/Profile/Arr.png')} style={styles.close} />
                    </TouchableOpacity>
                    <Text style={styles.title}>{translate('Profile.title')}</Text>
                    <View style={styles.body}>
                        <Image source={require('../../assets/Profile/Profile.png')} style={styles.profile} />
                        <Text style={styles.name}>{translate('Profile.name')}</Text>
                        <Text style={styles.field}>{translate('Profile.email')}</Text>
                        <Text style={styles.info}>{translate('Profile.user_email')}</Text>
                        <Text style={styles.field}>{translate('Profile.phone')}</Text>
                        <Text style={styles.info}>{translate('Profile.user_phone')}</Text>
                        <Text style={styles.field}>{translate('Profile.address')}</Text>
                        <Text style={styles.info}>{translate('Profile.user_address')}</Text>
                    </View>
                </ScrollView>
            </ImageBackground>
        </SafeAreaView>
    )
}