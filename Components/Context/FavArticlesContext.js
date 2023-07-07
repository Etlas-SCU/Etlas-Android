import React, { createContext, useState } from "react";
const FavArticlesContext = createContext();


const FavArticlesProvider = ({ children }) => {

    // articles page
    const [favArticlesPage, setFavArticlesPage] = useState(1);

    // articles
    const [favArticles, setFavArticles] = useState([]);

    // update articles
    const updateFavArticles = async (data) => {
        if(!data) return;
        setFavArticles([...favArticles, ...data]);
    }

    // add article to favourite articles
    const addFavArticle = async (article) => {
        setFavArticles([...favArticles, article]);
    }

    // remove article from favourite articles
    const removeFavArticle = async (article) => {
        const newFavArticles = favArticles.filter((favArticle) => {
            return favArticle.id !== article.id;
        });
        setFavArticles(newFavArticles);
    }

    // get articles
    const getFavArticles = async () => {
        return [...favArticles];
    }

    // remove articles
    const removeFavArticles = async () => {
        setFavArticles([]);
    }

    // update articlesPage
    const updateFavArticlesPage = async (page) => {
        setFavArticlesPage(page ? page : favArticlesPage + 1);
    }

    return (
        <FavArticlesContext.Provider
            value={{
                favArticlesPage, setFavArticlesPage,
                favArticles, setFavArticles,
                updateFavArticles, getFavArticles, removeFavArticles, updateFavArticlesPage,
                addFavArticle, removeFavArticle
            }}
        >
            {children}
        </FavArticlesContext.Provider>
    )
}

export { FavArticlesContext, FavArticlesProvider };
