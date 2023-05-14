import { TouchableOpacity, Image } from 'react-native'


export default function GoogleAuth(){
    return(
        <TouchableOpacity>
            <Image source={require('../../assets/register/google.png')} />
        </TouchableOpacity>
    )
}