import { View, Text } from 'react-native'
import LoadingDots from "react-native-loading-dots";
import { styles } from './styles';
import { translate } from '../../Localization';

export default function Loader({ text }){
    
    colors = Array(10).fill('#BF8148');

    return (
        <View style={styles.container}>
            <Text style={styles.wait}>{translate('Loader.Wait')}</Text>
            <Text style={styles.txt}>{text}</Text>
            <View style={styles.dotsWrapper}>
                <LoadingDots dots={10} size={10} colors={colors} bounceHeight={5}/>
            </View>
        </View>
    );
}