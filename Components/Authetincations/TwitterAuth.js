import { TouchableOpacity, Image } from 'react-native'


export default function TwitterAuth(){
    return(
        <TouchableOpacity>
            <Image source={require('../../assets/register/twitter.png')} />
        </TouchableOpacity>
    )
}