import { useState, useEffect } from 'react';
import * as WebBrowser from 'expo-web-browser';
import { makeRedirectUri, useAuthRequest } from 'expo-auth-session';
import { TouchableOpacity, Image, Platform } from 'react-native';
import Backend from '../../Backend/Backend';
import { TWITTER_CLIENT_ID, TWITTER_CLIENT_SECRET, TWITTER_BEARER_TOKEN } from '@env'


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
        clientSecret: TWITTER_CLIENT_SECRET,
        redirectUri: makeRedirectUri({
            scheme: 'com.etlas',
            useProxy,
        }),
        usePKCE: true,
    }, discovery);
    
    useEffect(() => {
        if (response?.type === 'success') {
            const { authentication } = response;
            setAccessToken(authentication.accessToken);
            Backend.facebookSingIn(accessToken);
            console.log(response.authentication.accessToken)
        }
    }, [response, accessToken]);


    return (
        <TouchableOpacity 
            onPress={() => promptAsync({ useProxy })}
            disabled={!request}
        >
            <Image source={require('../../assets/register/twitter.png')} />
        </TouchableOpacity>
    )

}