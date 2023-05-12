import { useState, useEffect } from 'react';
import * as WebBrowser from 'expo-web-browser';
import * as Facebook from 'expo-auth-session/providers/facebook';
import { TouchableOpacity, Image } from 'react-native';
import Backend from '../../Backend/Backend';
import { FACEBOOK_CLIENT_ID } from '@env'


export default function FacebookAuth(){
    
    // for facebook login
    WebBrowser.maybeCompleteAuthSession();
    const [accessToken, setAccessToken] = useState(null);
    const [request, response, promptAsync] = Facebook.useAuthRequest({
        clientId: FACEBOOK_CLIENT_ID,
    });
    
    useEffect(() => {
        if (response?.type === 'success' && response.authentication) {
            const { authentication } = response;
            setAccessToken(authentication.accessToken);
            Backend.facebookSingIn(accessToken);
        }
    }, [response, accessToken]);


    return (
        <TouchableOpacity 
            onPress={() => promptAsync()}
            disabled={!request}
        >
            <Image source={require('../../assets/register/facebook.png')} />
        </TouchableOpacity>
    )

}