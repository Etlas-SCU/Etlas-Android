import React, { createContext, useState } from "react";
const UserContext = createContext();


const UserProvider  = ({ children }) => {

    // for the main menu screen
    const [ modalVisible, setModalVisible ] = useState(false);
    const [ screen, setScreen ] = useState('Home');
    // hide the main menu
    const hideModal = () => setModalVisible(false);
    // show the main menu
    const showModal = () => setModalVisible(true);
    
    // for the loader
    const [ loaderVisible, setLoaderVisible ] = useState(false);
    const [ loaderMessage, setLoaderMessage ] = useState('');
    // hide the loader
    const hideLoader = () => { setLoaderVisible(false), setLoaderMessage('') };
    // show the loader
    const showLoader = (message) => { setLoaderVisible(true), setLoaderMessage(message) };

    // for the popupmessages
    const [ messageState, setMessageState ] = useState(null);
    const [ message, setMessage ] = useState('');
    const [ popupMessageVisible, setPopupMessageVisible ] = useState(false);
    // hide the popupmessage
    const hidePopupMessage = () => setPopupMessageVisible(false);

    // show the popupmessage
    const showPopupMessage = (state, message) => {
        setMessageState(state);
        setMessage(message);
        setPopupMessageVisible(true);
        setTimeout(() => {
            hidePopupMessage();
            setMessage('');
            setMessageState(null);
        }, 2000)
    }

    // subscribe modal
    const [ subscribeModalVisible, setSubscribeModalVisible ] = useState(false);

    // show subscribe
    const showSubscribeModal = () => setSubscribeModalVisible(true);

    // hide subscribe
    const hideSubscribeModal = () => setSubscribeModalVisible(false);

    return (
        <UserContext.Provider 
            value={{ 
                modalVisible, hideModal, showModal, 
                loaderVisible, loaderMessage, hideLoader, showLoader,
                popupMessageVisible, messageState, message, hidePopupMessage, showPopupMessage,
                screen, setScreen,
                subscribeModalVisible, showSubscribeModal, hideSubscribeModal
            }}
        >
            {children}
        </UserContext.Provider>
    )
}

export { UserContext, UserProvider };