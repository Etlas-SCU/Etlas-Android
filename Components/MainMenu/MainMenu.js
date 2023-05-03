import { View, Text, TouchableOpacity, Modal, ImageBackground, Image } from 'react-native'
import { styles } from './Styles'
import { translate } from '../../Localization'
import { CommonActions } from '@react-navigation/native';
import { useContext } from 'react';
import { UserContext } from '../Context/Context';
import { useNavigation } from '@react-navigation/native';

function Button ({ title, pageNav, closeModal }){
    return (
        <TouchableOpacity style={styles.button} onPress={() => { closeModal(pageNav) }}>
            <Text style={styles.button_text}>{title}</Text>
        </TouchableOpacity>
    )
}

export default function MainMenu({ pageName }) {

    const { modalVisible, hideModal } = useContext(UserContext);
    const navigation = useNavigation();

    const closeModal = (pageName) => {
        hideModal();
        navigation.dispatch(
            CommonActions.reset({
                index: 0,
                routes: [
                    { name: pageName },
                ],
            })
        );
    }

    const buttonsVal = [
        { title: translate('MainMenu.aboutus'), pageNav: "AboutUs" },
        { title: translate('MainMenu.terms'), pageNav: "AboutUs" },
        { title: translate('MainMenu.contactus'), pageNav: "AboutUs" },
    ]

    const buttons = buttonsVal.map((button, idx) => <Button key={idx} title={button.title} pageNav={button.pageNav} closeModal={closeModal}/> );

    return (
        <Modal 
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => closeModal(pageName)}
        >
            <View style={styles.container}>
                <ImageBackground source={require('../../assets/MainMenu/Background.png')} style={styles.background}>
                    <TouchableOpacity onPress={() => closeModal(pageName)}>
                        <Image source={require('../../assets/MainMenu/close.png')} style={styles.close}/>
                    </TouchableOpacity>
                    <Text style={styles.title}>{translate('MainMenu.message')}</Text>
                    <View style={styles.line}/>
                    <View style={styles.buttons}>
                        {buttons}
                    </View>
                    <Text style={styles.copyright}>{translate('MainMenu.copyright')}</Text>
                </ImageBackground>
            </View>
        </Modal>
    )
}