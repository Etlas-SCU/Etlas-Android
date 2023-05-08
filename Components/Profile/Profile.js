import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { styles } from "./Styles";
import { translate } from "../../Localization";
import { Avatar } from "@react-native-material/core";
import { responsiveWidth } from "../../AppStyles";


export default function Profile({ navigation }) {
    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
                <View style={styles.upperBox}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image source={require('../../assets/Profile/Arr.png')} style={styles.close} />
                    </TouchableOpacity>
                    <Text style={styles.title}>{translate('Profile.title')}</Text>
                </View>
                <View style={styles.WhiteBody}>
                    <View style={styles.body}>
                        <Avatar
                            image={require('../../assets/Profile/Profile.png')}
                            size={responsiveWidth(248.15)}
                            imageStyle={styles.profilePic}
                            style={styles.profile}
                        />
                        <Text style={styles.name}>{translate('Profile.name')}</Text>
                        <View style={styles.infoBox}>
                            <View style={styles.Box}>
                                <Text style={styles.field}>{translate('Profile.email')}</Text>
                                <Text style={styles.info}>{translate('Profile.user_email')}</Text>
                            </View>
                            <View style={styles.Box}>
                                <Text style={styles.field}>{translate('Profile.phone')}</Text>
                                <Text style={styles.info}>{translate('Profile.user_phone')}</Text>
                            </View>
                            <View style={styles.Box}>
                                <Text style={styles.field}>{translate('Profile.address')}</Text>
                                <Text style={styles.info}>{translate('Profile.user_address')}</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}