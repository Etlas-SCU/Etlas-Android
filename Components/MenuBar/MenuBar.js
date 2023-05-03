import { styles } from "./Styles"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, Platform, View } from 'react-native';
import KnowledgeCheck from "../KnowledgeCheck/KnowledgeCheck";
import AboutUs from "../AboutUs/AboutUs";
import CameraScreen from "../CameraScreen/CameraScreen";
import Profile from "../Profile/Profile";
import HomePage from "../HomePage/HomePage";
import ArticlesPage from "../ArticlesPage/ArticlesPage";
import ToursPage from "../ToursPage/ToursPage";
import RecognitionFailed from '../RecognitionFailed/RecognitionFailed'
import MainMenu from "../MainMenu/MainMenu";
import BestScore from "../BestScore/BestScore";

export default function MenuBar({ navigation }) {

    const Tab = createBottomTabNavigator();

    const Icons = {
        Home: require('../../assets/MenuBar/Home.png'),
        AR: require('../../assets/MenuBar/AR.png'),
        Scan: require('../../assets/MenuBar/Scan.png'),
        KnowledgeCheck: require('../../assets/MenuBar/Knowledge_Check.png'),
        Settings: require('../../assets/MenuBar/Settings.png')
    }

    return (
        <Tab.Navigator style={styles.container}
            initialRouteName="Home"
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: styles.menuBar,
                tabBarIcon: ({ focused }) => {
                    let isRightBorder = (route.name == 'Home' || route.name == 'KnowledgeCheck');
                    let isScan = (route.name == 'Scan');
                    let isIos = (Platform.OS == 'ios');
                    return (
                        <View style={styles.barContainer}>
                            <View>
                                <Image source={Icons[route.name]} style={isScan ? [styles.ScanIcon, { marginTop: isIos ? "-90%" : "-105%" }] : styles.menuBarIcons} />
                                {focused ? <View style={styles.line} /> : null}
                            </View>
                            {isRightBorder ? <View style={styles.rightBorder} /> : null}
                        </View>
                    )
                },
                tabBarHideOnKeyboard: true,
            })}
        >
            <Tab.Screen name="Home" component={HomePage} />
            <Tab.Screen name="AR" component={Profile} />
            <Tab.Screen name="Scan" component={CameraScreen} options={{ tabBarStyle: { display: 'none' } }} />
            <Tab.Screen name="KnowledgeCheck" component={KnowledgeCheck} />
            <Tab.Screen name="Settings" component={ToursPage} />
            <Tab.Screen name="AboutUs" component={AboutUs} options={{ tabBarButton: () => null, tabBarVisible: false }} />
            <Tab.Screen name="RecognitionFailed" component={RecognitionFailed} options={{ tabBarButton: () => null, tabBarVisible: false }} />
            <Tab.Screen name="Profile" component={Profile} options={{ tabBarButton: () => null, tabBarVisible: false }} />
            <Tab.Screen name="ArticlesPage" component={ArticlesPage} options={{ tabBarButton: () => null, tabBarVisible: false }} />
            <Tab.Screen name="ToursPage" component={ToursPage} options={{ tabBarButton: () => null, tabBarVisible: false }} />
            <Tab.Screen name="mainMenu" component={MainMenu} options={{ tabBarButton: () => null, tabBarVisible: false }} />
            <Tab.Screen name="BestScore" component={BestScore} options={{ tabBarButton: () => null, tabBarVisible: false }} />
        </Tab.Navigator>
    )
}