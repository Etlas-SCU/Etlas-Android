import { TouchableOpacity, Image } from 'react-native';
import { useState, useEffect, useContext } from 'react';
import Backend from '../../Helpers/Backend';
import * as Google from 'expo-auth-session/providers/google';
import * as WebBrowser from 'expo-web-browser';
import Constants from 'expo-constants';
import Loader from '../Loader/Loader';
import PopupMessage from '../PopupMessage/PopupMessage';
import { UserContext } from '../Context/Context';
import { translate } from '../../Localization';
import { goPageResetStack } from '../../Helpers/Navigator';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SvgMaker from '../SvgMaker/SvgMaker';
import { GoogleIcon } from '../../assets/SVG/Icons';


export default function GoogleAuth() {

    const EXPO_REDIRECT_PARAMS = { useProxy: true, projectNameForProxy: '@7oskaa/Etlas' };
    const REDIRECT_PARAMS = (Constants.appOwnership == 'expo' ? EXPO_REDIRECT_PARAMS : {});

    // popup messages
    const { showPopupMessage, popupMessageVisible } = useContext(UserContext);

    // loader
    const { showLoader, hideLoader, loaderVisible } = useContext(UserContext);

    // to open the web browser
    useEffect(() => {
        WebBrowser.maybeCompleteAuthSession();
    }, []);

    // to store the access token and ID token
    const [idToken, setIdToken] = useState(null);

    // to get access token and ID token
    const [request, response, promptAsync] = Google.useAuthRequest({
        expoClientId: process.env.GOOGLE_CLIENT_ID,
        iosClientId: process.env.GOOGLE_IOS_ID,
        androidClientId: process.env.GOOGLE_ANDROID_ID,
        webClientId: process.env.GOOGLE_WEB_ID,
        scopes: ['profile', 'email']
    }, REDIRECT_PARAMS);

    // to get the access token and ID token
    useEffect(() => {
        if (response?.type === 'success' && response.authentication) {
            const { authentication } = response;
            setIdToken(authentication.idToken);
        }
    }, [response]);

    // to login with Google using the ID token
    useEffect(() => {
        if (idToken) {
            const login_with_google = async () => {
                try {
                    showLoader(translate('messages.googleSign'));
                    const { statusCode, data } = await Backend.googleSignIn(idToken).then(response => response);
                    hideLoader();
                    if (!Backend.isSuccessfulRequest(statusCode)) {
                        const errorMessage = await Backend.getErrorMessage(data).then(response => response);
                        if (statusCode === 401)
                            showPopupMessage('Warning', translate('messages.alreadyExist'));
                        else
                            showPopupMessage('Error', errorMessage);
                        return false;
                    }

                    // store user data to use
                    const user = {
                        email: data.email,
                        full_name: data.full_name,
                    };
                    await AsyncStorage.setItem('user', JSON.stringify(user));

                    // store token to use
                    const { access: accessToken, refresh: refreshToken } = data.tokens;
                    await AsyncStorage.setItem('accessToken', accessToken);
                    await AsyncStorage.setItem('refreshToken', refreshToken);

                    // go to home page
                    goPageResetStack('menuBar');
                } catch (e) {
                    console.log(e);
                }
            }
            login_with_google();
        }
    }, [idToken]);


    // handle the press on the googl button
    const handlePress = async () => {
        try {
            await promptAsync(REDIRECT_PARAMS);
        } catch (e) {
            console.debug(e);
        }
    }

    return (
        <TouchableOpacity
            onPress={handlePress}
            disabled={!request}
        >
            {loaderVisible ? <Loader /> : null}
            {popupMessageVisible ? <PopupMessage /> : null}
            <SvgMaker Svg={GoogleIcon} />
        </TouchableOpacity>
    )
}