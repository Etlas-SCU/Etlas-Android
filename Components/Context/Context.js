import React, { createContext, useState } from "react";
const UserContext = createContext();


const UserProvider  = ({ children }) => {

    // for the main menu screen
    const [ modalVisible, setModalVisible ] = useState(false);

    // hide the main menu
    const hideModal = () => setModalVisible(false);
    
    // show the main menu
    const showModal = () => setModalVisible(true);


    return (
        <UserContext.Provider value={{ modalVisible, hideModal, showModal }}>
            {children}
        </UserContext.Provider>
    )
}

export { UserContext, UserProvider };
