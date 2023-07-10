import { View, Text, Modal, TouchableOpacity } from 'react-native'
import { styles } from './styles';
import { translate } from '../../Localization';
import { UserContext } from '../Context/Context';
import { useContext } from 'react';
import { Linking } from 'react-native';


export default function Subscribe({ }) {

    // context of subscribe modal
    const { subscribeModalVisible, hideSubscribeModal } = useContext(UserContext);
    
    // redirect to subscribe page
    const reDirect = async () => {
        const subscribeUrl = 'https://etlas-scu.github.io/pricing';
        await Linking.openURL(subscribeUrl);
    }

    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={subscribeModalVisible}
            onRequestClose={() => hideSubscribeModal}
        >
            <View style={styles.container}>
                <Text style={styles.title}>{translate('Scan.moreScan')}</Text>
                <Text style={styles.ran_out}>{translate('Scan.ran_out')}</Text>
                <Text style={styles.subscribeText}>{translate('Scan.subscribeText')}</Text>
                <TouchableOpacity
                    style={styles.subscribeBtn}
                    onPress={reDirect}
                >
                    <Text style={styles.subscribeBtnText}>{translate('Scan.subscribe')}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.cancelBtn}
                    onPress={hideSubscribeModal}
                >
                    <Text style={styles.cancelBtnText}>{translate('Scan.cancel')}</Text>
                </TouchableOpacity>
            </View>
        </Modal>
    );
}