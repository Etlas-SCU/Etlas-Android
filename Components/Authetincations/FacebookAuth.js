import { TouchableOpacity, Image } from 'react-native'
import { useState, useEffect } from 'react';
import Backend from '../../Backend/Backend';
import * as AuthSession from 'expo-auth-session';


export default function FacebookAuth() {

    const redirectUri = AuthSession.makeRedirectUri({ useProxy: true });

    const [accessToken, setAccessToken] = useState(null);


    //  to get access token
    const handleLogin = async () => {
        try {
            const result = await AuthSession.startAsync({
                authUrl:
                    `https://www.facebook.com/v13.0/dialog/oauth?client_id=${process.env.FACEBOOK_APP_ID}&redirect_uri=${encodeURIComponent(
                        redirectUri
                    )}&response_type=token&scope=email`,
            });

            if (result.type === 'success') {
                const { access_token } = result.params;

                // You can now use the access token to make API calls or authenticate with your server
                console.log('Facebook access token:', access_token);
                setAccessToken(access_token);
            }
        } catch (error) {
            console.log('Facebook login error:', error);
            alert(e);
        }
    };

    // to login with facebook by access token
    useEffect(() => {
        if (accessToken) {
            Backend.facebookSignIn(accessToken);
            alert(accessToken);
        }
    }, [accessToken]);

    // handle the press on the facebook button
    const handlePress = async () => {
        try {
            await handleLogin();
        }catch(e){
            alert(e);
        }
    }

    return (
        <TouchableOpacity
            onPress={handlePress}
        >
            <Image source={require('../../assets/register/facebook.png')} />
        </TouchableOpacity>
    )
}