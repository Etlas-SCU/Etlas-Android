import React, { createContext, useState } from "react";
const UserDataContext = createContext();


const UserDataProvider = ({ children }) => {
    // user data
    const [userData, setUserData] = useState({});

    // update user data
    const updateUserData = (data) => {
        setUserData({
            ...userData,
            ...data
        });
    }

    // get user data
    const getUserData = async () => {
        return { ...userData };
    }

    // remove userdata
    const removeUserData = async () => {
        setUserData({});
    }


    // score of the last game
    const [landmarkScore, setLandmarkScore] = useState('0/0');
    const [monumentScore, setMonumentScore] = useState('0/0');
    const [statueScore, setStatueScore] = useState('0/0');

    // check is greater
    const isGreater = (new_score, old_score) => {
        const new_score_split = new_score.split('/');
        const old_score_split = old_score.split('/');
        return parseInt(new_score_split[0]) > parseInt(old_score_split[0]);
    }

    // update score
    const updateScore = (score, type) => {
        switch (type) {
            case 'Landmarks':
                if (isGreater(score, landmarkScore)) {
                    setLandmarkScore(score);
                }
                break;
            case 'Monuments':
                if (isGreater(score, monumentScore)) {
                    setMonumentScore(score);
                }
                break;
            case 'Statues':
                if (isGreater(score, statueScore)) {
                    setStatueScore(score);
                }
                break;
        }
    }        

    // get monument score
    const getMonumentScore = async () => {
        return monumentScore;
    }

    // get landmark score
    const getLandmarkScore = async () => {
        return landmarkScore;
    }

    // get statue score
    const getStatueScore = async () => {
        return statueScore;
    }


    return (
        <UserDataContext.Provider
            value={{
                userData, updateUserData, getUserData, removeUserData,
                landmarkScore, monumentScore, statueScore,
                getMonumentScore, getLandmarkScore, getStatueScore, updateScore
            }}
        >
            {children}
        </UserDataContext.Provider>
    )
}

export { UserDataContext, UserDataProvider };