import { TouchableOpacity, Image } from 'react-native'
import { useState, useEffect, useContext } from 'react';
import Backend from '../../Backend/Backend';
import * as Facebook from 'expo-auth-session/providers/facebook';
import * as WebBrowser from 'expo-web-browser';
import Constants from 'expo-constants';
import Loader from '../Loader/Loader';
import PopupMessage from '../PopupMessage/PopupMessage';
import { UserContext } from '../Context/Context';
import { translate } from '../../Localization';
import { goPageResetStack } from '../../Backend/Navigator';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function FacebookAuth() {

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
    const [authToken, setAuthToken] = useState(null);

    //  to get access token
    const [request, response, promptAsync] = Facebook.useAuthRequest({
        clientId: process.env.FACEBOOK_APP_ID,
        scopes: ['public_profile', 'email']
    }, REDIRECT_PARAMS);


    // to get the access token
    useEffect(() => {
        if (response?.type === 'success' && response.authentication) {
            const { authentication } = response;
            setAuthToken(authentication.accessToken);
        }
    }, [response]);

    // to login with Google using the ID token
    useEffect(() => {
        if (authToken) {
            const login_with_facebook = async () => {
                try {
                    showLoader(translate('messages.facebookSign'));
                    const { statusCode, data } = await Backend.facebookSignIn(authToken).then(response => response);
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
            login_with_facebook();
        }
    }, [authToken]);

    // handle the press on the facebook button
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
            <Image source={require('../../assets/register/facebook.png')} />
        </TouchableOpacity>
    )
}