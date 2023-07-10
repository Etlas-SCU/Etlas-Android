import React, { createContext, useState } from "react";
const ArticlesContext = createContext();


const ArticlesProvider = ({ children }) => {

    // articles page
    const [articlesPage, setArticlesPage] = useState(1);

    // articles
    const [articles, setArticles] = useState([]);

    // update articles
    const updateArticles = async (data) => {
        setArticles([...articles, ...data]);
    }

    // get articles
    const getArticles = async () => {
        return [...articles];
    }

    // remove articles
    const removeArticles = async () => {
        setArticles([]);
    }

    // update articlesPage
    const updateArticlesPage = async (page) => {
        setArticlesPage(page ? page : articlesPage + 1);
    }

    return (
        <ArticlesContext.Provider
            value={{
                articlesPage, setArticlesPage,
                articles, setArticles,
                updateArticles, getArticles, removeArticles, updateArticlesPage
            }}
        >
            {children}
        </ArticlesContext.Provider>
    )
}

export { ArticlesContext, ArticlesProvider };
