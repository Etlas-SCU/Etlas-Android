import { TouchableOpacity, Image } from 'react-native'
import { useState, useEffect } from 'react';
import Backend from '../../Backend/Backend';
import * as Facebook from 'expo-auth-session/providers/facebook';
import * as WebBrowser from 'expo-web-browser';


export default function FacebookAuth() {

    // to open the web browser
    useEffect(() => {
        WebBrowser.maybeCompleteAuthSession();
    }, []);


    // to store the access token
    const [accessToken, setAccessToken] = useState(null);
   //  to get access token
    const [request, response, promptAsync] = Facebook.useAuthRequest({
        clientId: process.env.FACEBOOK_APP_ID,
    });

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
            Backend.facebookSingIn(accessToken);
            alert(accessToken);
        }
    }, [accessToken]);

    // handle the press on the facebook button
    const handlePress = async () => {
        try {
            await promptAsync();
        }catch(e){
            alert(e);
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