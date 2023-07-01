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
    const isGreater = async (new_score, old_score) => {
        const new_score_split = new_score.split('/');
        const old_score_split = old_score.split('/');
        return parseInt(new_score_split[0]) > parseInt(old_score_split[0]);
    }

    // adjust score
    const adjustScore = async (new_score, old_score) => {
        const new_score_split = new_score.split('/');
        const old_score_split = old_score.split('/');
        return `${parseInt(new_score_split[0])}/${parseInt(old_score_split[1])}`;
    };

    // update score
    const updateScore = async (score, type) => {
        switch (type) {
            case 'Landmarks':
                if (await isGreater(score, landmarkScore)) {
                    setLandmarkScore(await adjustScore(score, landmarkScore));
                }
                break;
            case 'Monuments':
                if (await isGreater(score, monumentScore)) {
                    setMonumentScore(await adjustScore(score, monumentScore));
                }
                break;
            case 'Statues':
                if (await isGreater(score, statueScore)) {
                    setStatueScore(await adjustScore(score, statueScore));
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