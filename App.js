import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack'
import OnBoarding from "./Components/OnBoarding/OnBoarding";
import { FirstPage } from './Components/Register/FirstPage';
import { SecondPage } from './Components/Register/SecondPage'
import EmailVerification from './Components/Register/EmailVerification/EmailVerification';
import Login from './Components/Login/Login'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { init } from './Localization';
import { Easing, AppRegistry } from 'react-native';
import { UserProvider } from './Components/Context/Context';
import MenuBar from './Components/MenuBar/MenuBar';
import ForgotPasswordFirst from './Components/ForgetPassword/ForgetPasswordFirst';
import ForgotPasswordSecond from './Components/ForgetPassword/ForgetPasswordSecond';
import ForgotPasswordThird from './Components/ForgetPassword/ForgetPasswordThird';
import BestScore from './Components/BestScore/BestScore';
import EditProfile from './Components/EditProfile/EditProfile';
import { StatusBar } from 'expo-status-bar';
import { setNavigationRef } from './Backend/Navigator';
import { useEffect, useState } from 'react';
import Backend from './Backend/Backend';


// import the screen
const Stack = createStackNavigator();

export default function App() {

    // initialize the language
    init();

    // get the font from the local fonts
    let [fontsLoaded] = useFonts({
        'CapitalisTypOasis': require('./assets/fonts/CapitalisTypOasis.ttf'),
        'Montserrat-Medium': require('./assets/fonts/Montserrat-Medium.ttf'),
        'Montserrat-Bold': require('./assets/fonts/Montserrat-Bold.ttf'),
        'Montserrat-Regular': require('./assets/fonts/Montserrat-Regular.ttf'),
        'Montserrat-SemiBold': require('./assets/fonts/Montserrat-SemiBold.ttf'),
        'Montserrat-Thin': require('./assets/fonts/Montserrat-Thin.ttf'),
        'Montserrat-Light': require('./assets/fonts/Montserrat-Light.ttf'),
        'Montserrat-Black': require('./assets/fonts/Montserrat-Black.ttf'),
        'Poppins-Regular': require('./assets/fonts/Poppins-Regular.ttf'),
        'Poppins-Bold': require('./assets/fonts/Poppins-Bold.ttf'),
        'Poppins-Medium': require('./assets/fonts/Poppins-Medium.ttf'),
        'Poppins-SemiBold': require('./assets/fonts/Poppins-SemiBold.ttf'),
        'Poppins-Thin': require('./assets/fonts/Poppins-Thin.ttf'),
        'Poppins-Light': require('./assets/fonts/Poppins-Light.ttf'),
        'Poppins-Black': require('./assets/fonts/Poppins-Black.ttf'),
    });

    // animation config
    const timingConfig = {
        animation: 'timing',
        config: {
            duration: 500,
            easing: Easing.linear,
        },
    };

    // get the access token from the local storage
    const [accessToken, setAccessToken] = useState(null);
    const [refreshToken, setRefreshToken] = useState(null);
    const [checked, setIsChecked] = useState(false);

    const getAccessToken = async () => {
        try {
            const access = await AsyncStorage.getItem('accessToken').then((accessToken) => {
                if (accessToken !== null) {
                    return accessToken;
                } else {
                    return null;
                }
            });
            const refresh = await AsyncStorage.getItem('refreshToken').then((refreshToken) => {
                if (refreshToken !== null) {
                    return refreshToken;
                } else {
                    return null;
                }
            });
            setAccessToken(access);
            setRefreshToken(refresh);
            setIsChecked(true);
        } catch (e) {
            console.log(e);
        }
    };

    // get the access token from the local storage
    useEffect(() => {
        getAccessToken();
    }, []);


    // get referesh token
    useEffect(() => {
        // Function to refresh token
        const refresh_the_token = async () => {
            try {
                // get the access token first
                const refreshToken = await AsyncStorage.getItem('refreshToken');

                // if the access token is null, return
                const { status, data } = await Backend.refresh_the_token(refreshToken);

                // if the response is not null, set the access token
                if (status === 200) {
                    await AsyncStorage.setItem('accessToken', data.access);
                    await AsyncStorage.setItem('refreshToken', data.refresh);
                    setAccessToken(data.access);
                    setRefreshToken(data.refresh);
                } else {
                    console.log(data);
                }
            } catch (e) {
                console.log('Error refereshing:', e);
            }
        };

        // Refresh token every 4 minutes (240,000 milliseconds)
        const refreshInterval = setInterval(refresh_the_token, 240000);

        // Clean up the interval on component unmount
        return () => {
            clearInterval(refreshInterval);
        };
    }, []);


    // if the access token is null, return the login page
    if (!checked || !fontsLoaded)
        return null

    // clear async storage
    // AsyncStorage.clear();

    // if the font loaded, return the components
    return (
        <UserProvider>
            <StatusBar
                backgroundColor={'transparent'}
                barStyle='light-content'
                style='light'
                translucent={true}
            />
            <NavigationContainer
                ref={navigationRef => {
                    setNavigationRef(navigationRef);
                }}
            >
                <Stack.Navigator
                    screenOptions={{
                        header: () => null,
                        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                        transitionSpec: {
                            open: timingConfig,
                            close: timingConfig,
                        },
                        headerStatusBarHeight: 0,
                    }}
                    initialRouteName={accessToken && refreshToken ? "menuBar" : "onBoarding"}
                >
                    <Stack.Screen name="onBoarding" component={OnBoarding} />
                    <Stack.Screen name="firstPage" component={FirstPage} />
                    <Stack.Screen name="secondPage" component={SecondPage} />
                    <Stack.Screen name="login" component={Login} />
                    <Stack.Screen name="forgotPasswordFirst" component={ForgotPasswordFirst} />
                    <Stack.Screen name="forgotPasswordSecond" component={ForgotPasswordSecond} />
                    <Stack.Screen name="forgotPasswordThird" component={ForgotPasswordThird} />
                    <Stack.Screen name="menuBar" component={MenuBar} />
                    <Stack.Screen name="bestScore" component={BestScore} />
                    <Stack.Screen name="editProfile" component={EditProfile} />
                    <Stack.Screen name="emailVerification" component={EmailVerification} />
                </Stack.Navigator>
            </NavigationContainer>
        </UserProvider>
    );
}

AppRegistry.registerComponent('App', () => App);