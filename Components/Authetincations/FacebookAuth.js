import { TouchableOpacity, Image } from 'react-native'


export default function FacebookAuth(){
    return(
        <TouchableOpacity>
            <Image source={require('../../assets/register/facebook.png')} />
        </TouchableOpacity>
    )
}