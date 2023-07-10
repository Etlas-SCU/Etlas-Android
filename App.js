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
import MenuBar from './Components/MenuBar/MenuBar';
import ForgotPasswordFirst from './Components/ForgetPassword/ForgetPasswordFirst';
import ForgotPasswordSecond from './Components/ForgetPassword/ForgetPasswordSecond';
import ForgotPasswordThird from './Components/ForgetPassword/ForgetPasswordThird';
import { StatusBar } from 'expo-status-bar';
import { goPage, setNavigationRef } from './Helpers/Navigator';
import { useEffect, useState } from 'react';
import Backend from './Helpers/Backend';
import MainContext from './Components/Context/MainContext';


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
    const [isTokensChecked, setIsTokensChecked] = useState(false);

    const getAccessToken = async () => {
        try {
            // refresh the token before getting it
            await refresh_the_token();

            // get the access token and refresh token from the local storage
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
            setIsTokensChecked(true);
        } catch (e) {
            console.log(e);
        }
    };

    // get the access token from the local storage
    useEffect(() => {
        getAccessToken();
    }, []);


    // Function to refresh token
    const refresh_the_token = async () => {
        try {
            // get the access token first
            const refreshToken = await AsyncStorage.getItem('refreshToken').then(response => response);

            // if the access token is null, return
            if (!refreshToken)
                return;

            // if the access token is null, return
            const { statusCode, data } = await Backend.refresh_the_token(refreshToken).then(response => response);

            // if the response is not null, set the access token
            if (Backend.isSuccessfulRequest(statusCode)) {
                await AsyncStorage.setItem('accessToken', data.access);
                await AsyncStorage.setItem('refreshToken', data.refresh);
                setAccessToken(data.access);
                setRefreshToken(data.refresh);
                console.log(data.refresh);
            } else {
                await AsyncStorage.removeItem('accessToken');
                await AsyncStorage.removeItem('refreshToken');
                setAccessToken(null);
                setRefreshToken(null);
                goPage('login');
            }
        } catch (e) {
            console.log('Error refereshing:', e);
        }
    };

    // get referesh token
    useEffect(() => {

        // Refresh token every 4 minutes (240,000 milliseconds)
        const refreshInterval = setInterval(refresh_the_token, 240000);

        // Clean up the interval on component unmount
        return () => {
            clearInterval(refreshInterval);
        };
    }, []);


    // if the access token is null, return the login page
    if (!isTokensChecked || !fontsLoaded)
        return null

    // clear async storage
    // AsyncStorage.clear();

    // if the font loaded, return the components
    return (
        <MainContext >
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
                    <Stack.Screen name="emailVerification" component={EmailVerification} />
                </Stack.Navigator>
            </NavigationContainer>
        </MainContext>
    );
}

AppRegistry.registerComponent('App', () => App);