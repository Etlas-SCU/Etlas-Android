import { useState, useEffect } from 'react';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import { TouchableOpacity, Image } from 'react-native';
import Backend from '../../Backend/Backend';
import { GOOGLE_CLIENT_ID, GOOGLE_ANDROID_ID, GOOGLE_IOS_ID, GOOGLE_WEB_ID } from '@env'
import { makeRedirectUri } from 'expo-auth-session';

export default function GoogleAuth(){
    
    // for google login
    WebBrowser.maybeCompleteAuthSession();
    const [accessToken, setAccessToken] = useState(null);
    const [request, response, promptAsync] = Google.useAuthRequest({
        webClientId: GOOGLE_WEB_ID,
        androidClientId: GOOGLE_ANDROID_ID,
        iosClientId: GOOGLE_IOS_ID,
        expoClientId: GOOGLE_CLIENT_ID,
        responseType: 'token',
        scopes: ['profile', 'email'],
    }, {
        projectNameForProxy: '@7oskaa/Etlas',
    });

    useEffect(() => {
        if (response?.type === 'success') {
            const { authentication } = response;
            setAccessToken(authentication.accessToken);
            Backend.googleSingIn(accessToken);
        }
    }, [response, accessToken]);

    
    return (
        <TouchableOpacity 
            onPress={() => promptAsync()}
            disabled={!request}    
        >
            <Image source={require('../../assets/register/google.png')} />
        </TouchableOpacity>
    )

}