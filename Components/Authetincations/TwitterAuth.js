import { useState, useEffect } from 'react';
import * as WebBrowser from 'expo-web-browser';
import { makeRedirectUri, useAuthRequest } from 'expo-auth-session';
import { TouchableOpacity, Image } from 'react-native';
import Backend from '../../Backend/Backend';
import { TWITTER_CLIENT_ID } from '@env'


export default function TwitterAuth(){
    
    // Endpoint
    const discovery = {
        authorizationEndpoint: "https://twitter.com/i/oauth2/authorize",
        tokenEndpoint: "https://twitter.com/i/oauth2/token",
        revocationEndpoint: "https://twitter.com/i/oauth2/revoke",
    };
  
    // for twitter login
    const useProxy = Platform.select({ web: false, default: true });

    // for twitter login
    WebBrowser.maybeCompleteAuthSession();
    const [accessToken, setAccessToken] = useState(null);
    const [request, response, promptAsync] = useAuthRequest({
        clientId: TWITTER_CLIENT_ID,
        redirectUri: makeRedirectUri({
            scheme: 'com.etlas',
            useProxy,
        })
    }, discovery);
    
    useEffect(() => {
        if (response?.type === 'success' && response.authentication) {
            const { authentication } = response;
            setAccessToken(authentication.accessToken);
            Backend.facebookSingIn(accessToken);
        }
    }, [response, accessToken]);


    return (
        <TouchableOpacity onPress={() => promptAsync()}>
            <Image source={require('../../assets/register/twitter.png')} />
        </TouchableOpacity>
    )

}