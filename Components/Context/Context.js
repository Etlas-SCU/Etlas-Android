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
    // hide the loader
    const hideLoader = () => setLoaderVisible(false);
    // show the loader
    const showLoader = () => setLoaderVisible(true);

    // for the popupmessages
    const [ popupMessageVisible, setPopupMessageVisible ] = useState(false);
    // hide the popupmessage
    const hidePopupMessage = () => setPopupMessageVisible(false);
    // show the popupmessage
    const showPopupMessage = () => setPopupMessageVisible(true);

    return (
        <UserContext.Provider 
            value={{ 
                modalVisible, hideModal, showModal, 
                loaderVisible, hideLoader, showLoader,
                popupMessageVisible, hidePopupMessage, showPopupMessage,
                screen, setScreen
            }}
        >
            {children}
        </UserContext.Provider>
    )
}

export { UserContext, UserProvider };
