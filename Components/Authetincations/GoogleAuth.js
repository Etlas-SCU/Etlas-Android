import { TouchableOpacity, Image } from 'react-native';
import { useState, useEffect } from 'react';
import Backend from '../../Backend/Backend';
import * as Google from 'expo-auth-session/providers/google';
import * as WebBrowser from 'expo-web-browser';
import Constants from 'expo-constants';


export default function GoogleAuth(){

    const EXPO_REDIRECT_PARAMS = { useProxy: true, projectNameForProxy: '@7oskaa/Etlas' };
    const REDIRECT_PARAMS = (Constants.appOwnership == 'expo' ? EXPO_REDIRECT_PARAMS : {});

    // to open the web browser
    useEffect(() => {
        WebBrowser.maybeCompleteAuthSession();
    }, []);


    // to store the access token
    const [accessToken, setAccessToken] = useState(null);


    // to get access token
    const [request, response, promptAsync] = Google.useAuthRequest({
        expoClientId: process.env.GOOGLE_CLIENT_ID,
        iosClientId: process.env.GOOGLE_IOS_ID,
        androidClientId: process.env.GOOGLE_ANDROID_ID,
    }, REDIRECT_PARAMS);

    
    // to get the access token
    useEffect(() => {
        if (response?.type === 'success' && response.authentication) {
            const { authentication } = response;
            setAccessToken(authentication.accessToken);
        }
    }, [response]);

    
    // to login with googl by access token
    useEffect(() => {
        if (accessToken) {
            Backend.googleSignIn(accessToken);
        }
    }, [accessToken]);


    // handle the press on the googl button
    const handlePress = async () => {
        try {
            await promptAsync(REDIRECT_PARAMS);
        }catch(e){
            console.debug(e);
        }
    }

    return(
        <TouchableOpacity
            onPress={handlePress}
            disabled={!request}
        >
            <Image source={require('../../assets/register/google.png')} />
        </TouchableOpacity>
    )
}