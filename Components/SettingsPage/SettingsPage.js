import { styles } from "./Styles";
import { translate } from "../../Localization";
import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import MainMenu from "../MainMenu/MainMenu";
import { UserContext } from "../Context/Context";
import { useContext } from "react";
import { Avatar } from "@react-native-material/core";
import { responsiveHeight } from "../../AppStyles";

export default function Settings({ navigation }) {

    // user user context
    const { modalVisible, showModal } = useContext(UserContext);

    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContainer}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={ showModal } >
                        <Image source={require('../../assets/KnowledgeCheck/tabler_exclamation-circle.png')} style={styles.circle}/>
                    </TouchableOpacity>
                    <Text style={styles.title}>{translate('Settings.title')}</Text>
                    <TouchableOpacity onPress={ showModal } >
                        <Image source={require('../../assets/Settings/logout.png')}/>
                    </TouchableOpacity>
                    
                </View>
                {modalVisible ? <MainMenu pageName={'Settings'} /> : null}
                <View style={styles.avatarBox}>
                    <Avatar
                        image={require('../../assets/Profile/Profile.png')}
                        imageStyle={styles.profilePic}
                        style={styles.profile}
                        size={responsiveHeight(128)}
                    />
                    <Text style={styles.name}>{translate('Settings.name')}</Text>
                </View>
                <TouchableOpacity style={styles.buttonEdit}>
                    <Text style={styles.buttonText}>{translate('Settings.edit')}</Text>
                </TouchableOpacity>
                <View style={styles.Box}>
                    <Text style={styles.Bar}>{translate('Settings.content')}</Text>
                    <TouchableOpacity style={styles.lineBar}>
                        <Image source={require('../../assets/Settings/fav.png')} style={styles.left}/>
                        <Text style={[styles.text, styles.middle]}>{translate('Settings.fav')}</Text>
                        <Image source={require('../../assets/Settings/arrow.png')} style={styles.right}/>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={styles.lineBar}
                        onPress={() => { navigation.navigate('BestScore') }}
                    >
                        <Image source={require('../../assets/Settings/best_score.png')} style={styles.left}/>
                        <Text style={[styles.text, styles.middle]}>{translate('Settings.best_score')}</Text>
                        <Image source={require('../../assets/Settings/arrow.png')} style={styles.right}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.Box}>
                    <Text style={styles.Bar}>{translate('Settings.preferences')}</Text>
                    <TouchableOpacity style={styles.lineBar}>
                        <Image source={require('../../assets/Settings/World.png')} style={styles.left}/>
                        <Text style={[styles.text, styles.middle]}>{translate('Settings.language')}</Text>
                        <Image source={require('../../assets/Settings/arrow.png')} style={styles.right}/>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )

}