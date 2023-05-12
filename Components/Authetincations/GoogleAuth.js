import { useState, useEffect } from 'react';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import { TouchableOpacity, Image } from 'react-native';
import Backend from '../../Backend/Backend';


export default function GoogleAuth(){
    
    // for google login
    WebBrowser.maybeCompleteAuthSession();
    const [accessToken, setAccessToken] = useState(null);
    const [request, response, promptAsync] = Google.useAuthRequest({
        webClientId: '1088249745241-iq96p5e30qml7c710b5mjqrt9u1gboop.apps.googleusercontent.com',
        androidClientId: 'http://1088249745241-qd26ol7bdbf2vj9241faue2rapddr5bt.apps.googleusercontent.com',
        iosClientId: 'http://1088249745241-9erodbfc7i56dobotbjspcku0iiq3kfd.apps.googleusercontent.com',
        expoClientId: '1088249745241-iq96p5e30qml7c710b5mjqrt9u1gboop.apps.googleusercontent.com',
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
        <TouchableOpacity onPress={() => promptAsync()}>
            <Image source={require('../../assets/register/google.png')} />
        </TouchableOpacity>
    )

}