import { styles } from "./Styles"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, TouchableOpacity, Platform } from 'react-native';
import KnowledgeCheck from "../KnowledgeCheck/KnowledgeCheck";
import AboutUs from "../AboutUs/AboutUs";
import RecognitionFailed from '../RecognitionFailed/RecognitionFailed'
import CameraScreen from "../CameraScreen/CameraScreen";

export default function MenuBar({ navigation }){

    const Tab = createBottomTabNavigator();

    const Icons = {
        Home: require('../../assets/MenuBar/Home.png'),
        AR: require('../../assets/MenuBar/AR.png'),
        Scan: require('../../assets/MenuBar/Scan.png'),
        KnowledgeCheck: require('../../assets/MenuBar/Knowledge_Check.png'),
        Settings: require('../../assets/MenuBar/Settings.png')
    }

    const Pages = {
        Home: 'KnowledgeCheck',
        AR: 'KnowledgeCheck',
        Scan: 'CameraScreen',
        KnowledgeCheck: 'KnowledgeCheck',
        Settings: 'RecognitionFailed'
    }

    return (
        <Tab.Navigator style={styles.container}
            initialRouteName="Home"
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: styles.menuBar,
                tabBarIcon: () => {
                    let isRightBorder = (route.name == 'Home' || route.name == 'KnowledgeCheck');
                    let isScan = (route.name == 'Scan');
                    let isIos = (Platform.OS == 'ios');
                    return (
                        <TouchableOpacity 
                            style={
                                [styles.menuBarIconsContainer, isRightBorder ? styles.rightBorder : null, isScan ? [styles.Scan, {bottom: isIos ? "25%" : "30%"}] : null]
                            }
                            onPress={() => { navigation.navigate({name: Pages[route.name]}) }}
                        >
                            <Image source={Icons[route.name]} style={ isScan ? styles.ScanIcon : styles.menuBarIcons } />
                        </TouchableOpacity>
                    )
                },
                tabBarHideOnKeyboard: true,
            })}
            
        >
            <Tab.Screen name="Home" component={KnowledgeCheck}/>
            <Tab.Screen name="AR" component={KnowledgeCheck} />
            <Tab.Screen name="Scan" component={CameraScreen} />
            <Tab.Screen name="KnowledgeCheck" component={KnowledgeCheck} />
            <Tab.Screen name="Settings" component={RecognitionFailed} />
            <Tab.Screen name="AboutUs" component={AboutUs} options={{tabBarButton: () => null, tabBarVisible: false }} />
            <Tab.Screen name="RecognitionFailed" component={RecognitionFailed} options={{tabBarButton: () => null, tabBarVisible: false }} />
        </Tab.Navigator>
    )
}