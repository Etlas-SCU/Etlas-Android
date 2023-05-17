import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { styles } from "./Styles";
import { translate } from "../../Localization";
import { Avatar } from "@react-native-material/core";
import { responsiveWidth } from "../../AppStyles";
import Backend from "../../Backend/Backend";
import { goBack } from "../../Backend/Navigator";


export default function Profile({ }) {

    // get the User Information
    const { name, img, phone, address, email } = Backend.getUser();

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
                <View style={styles.upperBox}>
                    <TouchableOpacity onPress={goBack}>
                        <Image source={require('../../assets/Profile/Arr.png')} style={styles.close} />
                    </TouchableOpacity>
                    <Text style={styles.title}>{translate('Profile.title')}</Text>
                </View>
                <View style={styles.WhiteBody}>
                    <View style={styles.body}>
                        <Avatar
                            image={img}
                            size={responsiveWidth(248.15)}
                            imageStyle={styles.profilePic}
                            style={styles.profile}
                        />
                        <Text style={styles.name}>{name}</Text>
                        <View style={styles.infoBox}>
                            <View style={styles.Box}>
                                <Text style={styles.field}>{translate('Profile.email')}</Text>
                                <Text style={styles.info}>{email}</Text>
                            </View>
                            <View style={styles.Box}>
                                <Text style={styles.field}>{translate('Profile.phone')}</Text>
                                <Text style={styles.info}>{phone}</Text>
                            </View>
                            <View style={styles.Box}>
                                <Text style={styles.field}>{translate('Profile.address')}</Text>
                                <Text style={styles.info}>{address}</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}