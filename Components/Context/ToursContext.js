import React, { createContext, useState } from "react";
const ToursContext = createContext();


const ToursProvider = ({ children }) => {

    // Tours page
    const [toursPage, setToursPage] = useState(1);

    // Tours
    const [tours, setTours] = useState([]);

    // update Tours
    const updateTours = async (data) => {
        setTours([...tours, ...data]);
    }

    // get Tours
    const getTours = async () => {
        return [...tours];
    }

    // remove Tours
    const removeTours = async () => {
        setTours([]);
    }

    // update ToursPage
    const updateToursPage = async (page) => {
        setToursPage(page ? page : toursPage + 1);
    }

    return (
        <ToursContext.Provider
            value={{
                toursPage, setToursPage,
                tours, setTours,
                updateTours, getTours, removeTours, updateToursPage
            }}
        >
            {children}
        </ToursContext.Provider>
    )
}

export { ToursContext, ToursProvider };
