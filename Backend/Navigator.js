import { CommonActions } from "@react-navigation/native";
import { setStatusBarStyle } from "expo-status-bar";
import Backend from "./Backend";
let navigationRef;
let statusBarRef;

export const getDarkPages = () => {
    const darkStatusBarPages = [
        'favourites',
        'bestScore',
        'editProfile',
        'favMonumentsPage',
        'favArticlesPage',
        'Settings',
        'TermsConditions'
    ];
    return darkStatusBarPages;
}

// Set the navigation reference
export function setNavigationRef(ref) {
    navigationRef = ref;
}

// set the status bar reference
export function setStatusBarRef(ref) {
    statusBarRef = ref
}


// Navigate to the next page
export function goPage(nextPage, prevPage, params) {
    // set the article
    if(params?.Article)
        Backend.setArticle(params.Article);

    // set the tour
    if(params?.Tour)
        Backend.setTour(params.Tour);

    // set the monument
    if(params?.Monument)
        Backend.setMonument(params.Monument);

    // set the favourite monument
    if(params?.favArticle)
        Backend.setFavArticle(params.favArticle);

    // set the favourite monument
    if(params?.favMonument)
        Backend.setFavMonument(params.favMonument);

    // navigate to the next page
    navigationRef?.dispatch(
      CommonActions.navigate(nextPage, {
        prevPage: prevPage,
        ...params,
      })
    );

    // set status bar color
    if (getDarkPages().includes(nextPage))
        setStatusBarStyle('dark');
    else
        setStatusBarStyle('light');
}

// Go back to the previous page
export function goBack(){
    const currentRoute = navigationRef?.getCurrentRoute();
    const prevPage = currentRoute?.params?.prevPage;
    if(prevPage) {
        if (getDarkPages().includes(prevPage))
            setStatusBarStyle('dark');
        else
            setStatusBarStyle('light');
        navigationRef?.dispatch(CommonActions.navigate(prevPage));
    }
    else {
        navigationRef?.dispatch(CommonActions.goBack());
        const pageName = navigationRef?.getCurrentRoute()?.name;
        if (getDarkPages().includes(pageName))
            setStatusBarRef('dark');
        else
            setStatusBarRef('light');
    }
}

// Get the params of the current page
export function getParams() {
    const currentRoute = navigationRef?.getCurrentRoute();
    return currentRoute?.params;
}

// Get the name of the current page
export function getCurrentRouteName() {
    const currentRoute = navigationRef?.getCurrentRoute();
    return currentRoute?.name;
}

// Get the name of the last page
export function getLastRouteName() {
    const currentRoute = navigationRef?.getCurrentRoute();
    const prevPage = currentRoute?.params?.prevPage;
    return prevPage;
}