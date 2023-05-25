import { TouchableOpacity, Image } from 'react-native'
import { useState, useEffect } from 'react';
import Backend from '../../Backend/Backend';
import * as Facebook from 'expo-auth-session/providers/facebook';
import * as WebBrowser from 'expo-web-browser';
import Constants from 'expo-constants';


export default function FacebookAuth() {

    const EXPO_REDIRECT_PARAMS = { useProxy: true, projectNameForProxy: '@7oskaa/Etlas' };
    const REDIRECT_PARAMS = (Constants.appOwnership == 'expo' ? EXPO_REDIRECT_PARAMS : {});

    // to open the web browser
    useEffect(() => {
        WebBrowser.maybeCompleteAuthSession();
    }, []);


    // to store the access token
    const [accessToken, setAccessToken] = useState(null);
    
    //  to get access token
    const [request, response, promptAsync] = Facebook.useAuthRequest({
        clientId: process.env.FACEBOOK_APP_ID,
    }, REDIRECT_PARAMS);

    
    // to get the access token
    useEffect(() => {
        if (response?.type === 'success' && response.authentication) {
            const { authentication } = response;
            setAccessToken(authentication.accessToken);
        }
    }, [response]);


    // to login with facebook by access token
    useEffect(() => {
        if (accessToken) {
            Backend.facebookSignIn(accessToken);
        }
    }, [accessToken]);


    // handle the press on the facebook button
    const handlePress = async () => {
        try {
            await promptAsync(REDIRECT_PARAMS);
        }catch(e){
            console.debug(e);
        }
    }

    
    return (
        <TouchableOpacity
            onPress={handlePress}
            disabled={!request}
        >
            <Image source={require('../../assets/register/facebook.png')} />
        </TouchableOpacity>
    )
}