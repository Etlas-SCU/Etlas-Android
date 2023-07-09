import React, { createContext, useState } from "react";
const FavMonumentsContext = createContext();


const FavMonumentsProvider = ({ children }) => {

    // Monuments page
    const [favMonumentsPage, setFavMonumentsPage] = useState(1);

    // Monuments
    const [favMonuments, setFavMonuments] = useState([]);

    // update Monuments
    const updateFavMonuments = async (data) => {
        const newFav = [...favMonuments, ...data];
        setFavMonuments([... new Set(newFav)]);
    }

    // add monument to favourite Monuments
    const addFavMonument = async (monument) => {
        const newFav = [...favMonuments, monument];
        setFavMonuments([... new Set(newFav)]);
    }

    // remove monument from favourite Monuments
    const removeFavMonument = async (monument) => {
        const newFavMonuments = favMonuments.filter((favMonument) => {
            return favMonument.id !== monument.id;
        });
        setFavMonuments(newFavMonuments);
    }

    // get Monuments
    const getFavMonuments = async () => {
        return [...favMonuments];
    }

    // remove Monuments
    const removeFavMonuments = async () => {
        setFavMonuments([]);
    }

    // update MonumentsPage
    const updateFavMonumentsPage = async (page) => {
        setFavMonumentsPage(page ? page : favMonumentsPage + 1);
    }

    return (
        <FavMonumentsContext.Provider
            value={{
                favMonumentsPage, setFavMonumentsPage,
                favMonuments, setFavMonuments,
                updateFavMonuments, getFavMonuments, removeFavMonuments, updateFavMonumentsPage,
                addFavMonument, removeFavMonument
            }}
        >
            {children}
        </FavMonumentsContext.Provider>
    )
}

export { FavMonumentsContext, FavMonumentsProvider };
