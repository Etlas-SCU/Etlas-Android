import { styles } from "./Styles"
import { colors } from "../../AppStyles";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from "../Login/Login";
import { Easing, Image, TouchableOpacity, Platform } from 'react-native';


export default function MenuBar(){

    const Tab = createBottomTabNavigator();

    // animation config
    const timingConfig = {
        animation: 'timing',
        config: {
            duration: 500,
            easing: Easing.linear,
        },
    };      


    const Icons = {
        Home: require('../../assets/MenuBar/Home.png'),
        AR: require('../../assets/MenuBar/AR.png'),
        Scan: require('../../assets/MenuBar/Scan.png'),
        KnowledgeCheck: require('../../assets/MenuBar/Knowledge_Check.png'),
        Settings: require('../../assets/MenuBar/Settings.png')
    }

    return (
        <Tab.Navigator style={styles.container}
            initialRouteName="login"
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: styles.menuBar,
                tabBarIcon: () => {
                    let isRightBorder = route.name == 'Home' || route.name == 'KnowledgeCheck';
                    let isScan = route.name == 'Scan';
                    let isIos = Platform.OS == 'ios';
                    return (
                        <TouchableOpacity style={
                                [styles.menuBarIconsContainer, isRightBorder ? styles.rightBorder : null, isScan ? [styles.Scan, {bottom: isIos ? "25%" : "30%"}] : null]
                            }
                        >
                            <Image source={Icons[route.name]} style={ isScan ? styles.ScanIcon : styles.menuBarIcons } />
                        </TouchableOpacity>
                    )
                },
                tabBarHideOnKeyboard: true,
            })}
            
        >
            <Tab.Screen name="Home" component={Login} />
            <Tab.Screen name="AR" component={Login} />
            <Tab.Screen name="Scan" component={Login} />
            <Tab.Screen name="KnowledgeCheck" component={Login} />
            <Tab.Screen name="Settings" component={Login} />
        </Tab.Navigator>
    )
}