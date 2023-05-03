import { View, Text } from 'react-native'
import LoadingDots from "react-native-loading-dots";
import { styles } from './styles';
import { translate } from '../../Localization';
import { colors } from '../../AppStyles';

export default function Loader({ message }) {

    colors = Array(10).fill(colors.Gold);

    return (
        <View style={styles.container}>
            <Text style={styles.wait}>{translate('Loader.Wait')}</Text>
            <Text style={styles.txt}>{message}</Text>
            <View style={styles.dotsWrapper}>
                <LoadingDots dots={10} size={10} colors={colors} bounceHeight={5} />
            </View>
        </View>
    );
}