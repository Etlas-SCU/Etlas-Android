import { TouchableOpacity, Image } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import { makeRedirectUri, useAuthRequest } from 'expo-auth-session';
import { useEffect, useState } from 'react';


export default function TwitterAuth(){

    const useProxy = Platform.select({ web: false, default: true });

    // to open the web browser
    useEffect(() => {
        WebBrowser.maybeCompleteAuthSession();
    }, []);


    // Endpoint
    const discovery = {
        authorizationEndpoint: 'https://id.twitch.tv/oauth2/authorize',
        tokenEndpoint: 'https://id.twitch.tv/oauth2/token',
        revocationEndpoint: 'https://id.twitch.tv/oauth2/revoke',
    };


    // to store access token
    const [accessToken, setAccessToken] = useState(null);


    // to get access token
    const [request, response, promptAsync] = useAuthRequest(
        {
            clientId: process.env.TWITTER_CLIENT_ID,
            redirectUri: makeRedirectUri({
                scheme: 'com.etlas',
            }),
            usePKCE: true,
            scopes: [
                "tweet.read",
            ]
        },
        discovery
    );

    
    // to get the access token
    useEffect(() => {
        if (response?.type === 'success') {
            const { code } = response.params;
            console.log(code);
            setAccessToken(code);
        }
    }, [response]);


    // to login with twitter by access token
    useEffect(() => {   
        if (accessToken) {
            Backend.twitterSignIn(accessToken);
        }
    }, [accessToken]);


    // handle the press on the twitter button
    const handlePress = async () => {
        try {
            await promptAsync({ useProxy, projectNameForProxy: '@7oskaa/Etlas' });
        }catch(e){
            console.debug(e);
        }
    }

    return(
        <TouchableOpacity
            onPress={handlePress}
            disabled={!request}
        >
            <Image source={require('../../assets/register/twitter.png')} />
        </TouchableOpacity>
    )
}