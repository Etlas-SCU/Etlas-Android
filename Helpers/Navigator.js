import { CommonActions } from "@react-navigation/native";
import { setStatusBarStyle } from "expo-status-bar";
import Backend from "./Backend";
let navigationRef;

export const getDarkPages = () => {
    const darkStatusBarPages = [
        'favourites',
        'bestScore',
        'editProfile',
        'favMonumentsPage',
        'favArticlesPage',
        'Settings',
        'TermsConditions',
        'LanguageSelection'
    ];
    return darkStatusBarPages;
}

// Set the navigation reference
export function setNavigationRef(ref) {
    navigationRef = ref;
}


// set variables
function setBackendVariables(params) {
    // set the article
    if (params?.Article)
        Backend.setArticle(params.Article);

    // set the tour
    if (params?.Tour)
        Backend.setTour(params.Tour);

    // set the monument
    if (params?.Monument)
        Backend.setMonument(params.Monument);

    // set the favourite monument
    if (params?.favArticle)
        Backend.setFavArticle(params.favArticle);

    // set the favourite monument
    if (params?.favMonument)
        Backend.setFavMonument(params.favMonument);

    // set the last game
    if (params?.lastGame)
        Backend.setLastGame(params.lastGame);

    // set email
    if (params?.email)
        Backend.setEmail(params.email);
}

// Navigate to the next page
export function goPage(nextPage, prevPage, params) {
    // set the backend variables
    setBackendVariables(params);

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
export function goBack() {
    navigationRef?.dispatch(CommonActions.goBack(null));
    const currentPage = getCurrentRouteName();
    if (getDarkPages().includes(currentPage))
        setStatusBarStyle('dark');
    else
        setStatusBarStyle('light');
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

// Get the name of the last page of Stack
export function getLastStackRouteName() {
    const lastRoute = navigationRef?.getState();
    return lastRoute?.routes[lastRoute?.routes.length - 1]?.name;
}

// Get the name of the last page of Tab
export function getLastTabRouteName() {
    const lastRoute = navigationRef?.getState();
    return lastRoute?.routes[lastRoute?.routes.length - 1]?.state?.routes[0]?.name;
}

// Get the parameter of the current screen
export function getCurrentScreenParam() {
    const currentRoute = navigationRef?.getCurrentRoute();
    return currentRoute?.params;
}


// Go to page and reset stack
export function goPageResetStack(nextPage, params) {
    // set the backend variables
    setBackendVariables(params);

    // navigate to the next page
    navigationRef?.dispatch(
        CommonActions.reset({
            index: 0,
            routes: [
                { name: nextPage, params: params },
            ],
        })
    );

    // set status bar color
    if (getDarkPages().includes(nextPage))
        setStatusBarStyle('dark');
    else
        setStatusBarStyle('light');
}

// refresh the current page
export function refreshPage() {
    navigationRef?.dispatch(
        CommonActions.setParams({
            refresh: true,
        })
    );
}