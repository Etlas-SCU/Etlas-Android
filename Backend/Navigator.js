import { CommonActions } from "@react-navigation/native";
let navigationRef;

// Set the navigation reference
export function setNavigationRef(ref) {
    navigationRef = ref;
}

// Navigate to the next page
export function goPage(nextPage, prevPage, params) {
    navigationRef?.dispatch(
      CommonActions.navigate(nextPage, {
        prevPage: prevPage,
        ...params,
      })
    );
}

// Go back to the previous page
export function goBack(){
    const currentRoute = navigationRef?.getCurrentRoute();
    const prevPage = currentRoute?.params?.prevPage;
    if(prevPage)
        navigationRef?.dispatch(CommonActions.navigate(prevPage));
    else
        navigationRef?.dispatch(CommonActions.goBack());
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