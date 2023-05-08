import { View, Text, TouchableOpacity, Modal, ImageBackground, Image } from 'react-native'
import { styles } from './Styles'
import { translate } from '../../Localization'
import { useContext } from 'react';
import { UserContext } from '../Context/Context';
import { useNavigation } from '@react-navigation/native';


function Button ({ title, pageNav, hideModal, pageName }){

    // use the navigation
    const navigation = useNavigation();
    
    // navigate to the page
    const ButtonNav = (pageNav) => {
        hideModal();
        navigation.navigate(
            { 
                name: pageNav,
                params: {
                    pageName: pageName
                }   
            },
        );
    }

    return (
        <TouchableOpacity style={styles.button} onPress={() => { ButtonNav(pageNav) }}>
            <Text style={styles.button_text}>{title}</Text>
        </TouchableOpacity>
    )
}

export default function MainMenu({ pageName }) {

    // use the context to get the state of the modal
    const { modalVisible, hideModal } = useContext(UserContext);

    // pages to navigate for each button
    const buttonsVal = [
        { title: translate('MainMenu.aboutus'), pageNav: "AboutUs" },
        { title: translate('MainMenu.terms'), pageNav: "AboutUs" },
        { title: translate('MainMenu.contactus'), pageNav: "ContactUS" },
    ]

    // create the buttons
    const buttons = buttonsVal.map((button, idx) => <Button key={idx} title={button.title} pageNav={button.pageNav} hideModal={hideModal} pageName={pageName}/> );

    return (
        <Modal 
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => hideModal()}
        >
            <View style={styles.container}>
                <ImageBackground source={require('../../assets/MainMenu/Background.png')} style={styles.background} borderRadius={20}>
                    <TouchableOpacity onPress={() => hideModal()}>
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