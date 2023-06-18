import { View, Text, Modal } from 'react-native'
import LoadingDots from "react-native-loading-dots";
import { styles } from './styles';
import { translate } from '../../Localization';
import { colors } from '../../AppStyles';
import { UserContext } from '../Context/Context';
import { useContext } from 'react';

export default function Loader({ }) {

    const { loaderVisible, hideLoader, loaderMessage } = useContext(UserContext);
    dot_colors = Array(10).fill(colors.Gold);

    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={loaderVisible}
            onRequestClose={() => hideLoader}
        >
            <View style={styles.container}>
                <Text style={styles.wait}>{translate('Loader.Wait')}</Text>
                <Text style={styles.txt}>{loaderMessage}</Text>
                <View style={styles.dotsWrapper}>
                    <LoadingDots dots={10} size={10} colors={dot_colors} bounceHeight={5} />
                </View>
            </View>
        </Modal>
    );
}