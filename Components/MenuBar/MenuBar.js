import { styles } from "./Styles"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, View, Keyboard } from 'react-native';
import KnowledgeCheck from "../KnowledgeCheck/KnowledgeCheck";
import AboutUs from "../AboutUs/AboutUs";
import CameraScreen from "../CameraScreen/CameraScreen";
import Profile from "../Profile/Profile";
import HomePage from "../HomePage/HomePage";
import ArticlesPage from "../ArticlesPage/ArticlesPage";
import ToursPage from "../ToursPage/ToursPage";
import RecognitionFailed from '../RecognitionFailed/RecognitionFailed'
import MainMenu from "../MainMenu/MainMenu";
import ContactUS from "../ContactUS/ContactUS";
import TourDetails from "../TourDetails/TourDetails";
import Settings from "../SettingsPage/SettingsPage";
import LanguageSelection from "../LanguageSelection/LanguageSelection";
import TermsConditions from "../TermsConditions/TermsConditions";
import ArticleDetails from "../ArticleDetails/ArticleDetails";
import KnowledgeGame from "../KnowledgeCheck/KnowledgeGame/KnowledgeGame";
import MonumentDetails from "../MonumentDetails/MonumentDetails";
import FavMonumentsPage from "../FavouritePage/FavMonumentsPage";
import FavArticlesPage from "../FavouritePage/FavArticlesPage";
import Favourites from "../Favourites/Favourites";
import BestScore from '../BestScore/BestScore';
import EditProfile from '../EditProfile/EditProfile';
import { useState } from "react";


export default function MenuBar({ }) {

    const Tab = createBottomTabNavigator();

    const Icons = {
        Home: require('../../assets/MenuBar/Home.png'),
        AR: require('../../assets/MenuBar/AR.png'),
        Scan: require('../../assets/MenuBar/Scan.png'),
        KnowledgeCheck: require('../../assets/MenuBar/Knowledge_Check.png'),
        Settings: require('../../assets/MenuBar/Settings.png')
    }


    // to hide tab bar when keyboard is opened
    const [isKeyboardShown, setIsKeybaordShown] = useState(false);

    // when keyboard showed
    Keyboard.addListener('keyboardDidShow', () => {
        setIsKeybaordShown(true);
    });

    // when keyboard hidden
    Keyboard.addListener('keyboardDidHide', () => {
        setIsKeybaordShown(false);
    });


    return (
        <Tab.Navigator
            style={styles.container}
            initialRouteName={'Home'}
            backBehavior={'history'}
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: [styles.menuBar, isKeyboardShown ? styles.keyboardView : null],
                lazy: true,
                tabBarIcon: ({ focused }) => {
                    // for menu bar border
                    const isRightBorder = (route.name == 'Home' || route.name == 'KnowledgeCheck');

                    // for scan icon
                    const isScan = (route.name == 'Scan');

                    return (
                        <View style={styles.barContainer}>
                            <View style={isScan ? styles.Scan : null}>
                                <Image source={Icons[route.name]} style={isScan ? styles.ScanIcon : styles.menuBarIcons} />
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
            <Tab.Screen name="AR" component={FavMonumentsPage} initialParams={{ prevPage: 'Home' }}
                listeners={{
                    tabPress: e => {
                        // Prevent default action
                        e.preventDefault();
                    }
                }}
            />
            <Tab.Screen name="Scan" component={CameraScreen} options={{ tabBarStyle: { display: 'none' } }} />
            <Tab.Screen name="KnowledgeCheck" component={KnowledgeCheck} />
            <Tab.Screen name="Settings" component={Settings} />
            <Tab.Screen name="AboutUs" component={AboutUs} options={{ tabBarButton: () => null, tabBarVisible: false }} />
            <Tab.Screen name="RecognitionFailed" component={RecognitionFailed} options={{ tabBarButton: () => null, tabBarVisible: false }} />
            <Tab.Screen name="Profile" component={Profile} options={{ tabBarButton: () => null, tabBarVisible: false }} />
            <Tab.Screen name="ArticlesPage" component={ArticlesPage} options={{ tabBarButton: () => null, tabBarVisible: false }} />
            <Tab.Screen name="ToursPage" component={ToursPage} options={{ tabBarButton: () => null, tabBarVisible: false }} />
            <Tab.Screen name="mainMenu" component={MainMenu} options={{ tabBarButton: () => null, tabBarVisible: false }} />
            <Tab.Screen name="ContactUS" component={ContactUS} options={{ tabBarButton: () => null, tabBarVisible: false }} />
            <Tab.Screen name="TourDetails" component={TourDetails} options={{ tabBarButton: () => null, tabBarVisible: false }} />
            <Tab.Screen name="TermsConditions" component={TermsConditions} options={{ tabBarButton: () => null, tabBarVisible: false }} />
            <Tab.Screen name="ArticleDetails" component={ArticleDetails} options={{ tabBarButton: () => null, tabBarVisible: false }} />
            <Tab.Screen name="KnowledgeGame" component={KnowledgeGame} options={{ tabBarButton: () => null, tabBarVisible: false }} />
            <Tab.Screen name="MonumentDetails" component={MonumentDetails} options={{ tabBarButton: () => null, tabBarVisible: false }} />
            <Tab.Screen name="LanguageSelection" component={LanguageSelection} options={{ tabBarButton: () => null, tabBarVisible: false }} />
            <Tab.Screen name="favMonumentsPage" component={FavMonumentsPage} options={{ tabBarButton: () => null, tabBarVisible: false, tabBarStyle: { display: 'none' } }} />
            <Tab.Screen name="favArticlesPage" component={FavArticlesPage} options={{ tabBarButton: () => null, tabBarVisible: false, tabBarStyle: { display: 'none' } }} />
            <Tab.Screen name="favourites" component={Favourites} options={{ tabBarButton: () => null, tabBarVisible: false, tabBarStyle: { display: 'none' } }} />
            <Tab.Screen name="bestScore" component={BestScore} options={{ tabBarButton: () => null, tabBarVisible: false, tabBarStyle: { display: 'none' } }} />
            <Tab.Screen name="editProfile" component={EditProfile} options={{ tabBarButton: () => null, tabBarVisible: false, tabBarStyle: { display: 'none' } }} />
        </Tab.Navigator>
    )
}