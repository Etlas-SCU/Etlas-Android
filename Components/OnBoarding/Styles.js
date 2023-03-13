import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#003441',
        Width: "2rem"
    },
    text_box: {
        flexDirection: "row",
    },
    header: {
        fontFamily: 'CapitalisTypOasis',
        color: '#BF8148',
        fontSize: 50,
        textAlign: 'left',
        marginTop: 102,
        marginLeft: 24,
    },
    desc: {
        fontFamily: 'Montserrat-Medium',
        color: '#FFFFFF',
        fontSize: 20,
        textAlign: 'left',
        marginTop: 23,
        marginLeft: 24,
        flexDirection: "row",
        flexWrap: "wrap",
        width: 284
    },
    worry: {
        fontFamily: 'Montserrat-Bold',
        color: '#FFFFFF',
        fontSize: 20,
        textAlign: 'left',
        marginTop: 23,
        marginLeft: 24,
        flexDirection: "row",
        flexWrap: "wrap",
        width: 287
    },
    logoContainer: {
        alignItems: 'flex-end',
    },
    wolf: {
        flex: 1,
        width: "55%",
        height: "65%",
        resizeMode: 'contain',
        position: 'absolute',
        bottom: "-15%",
        marginLeft: "-1%",
        marginTop: 30
    },
    button_container: {
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "flex-end",
        marginRight: "10%",
        marginTop: "5%",
        gap: 15
    },
    sign_buttons: {
        width: 181,
        height: 57,
        borderRadius: 20,
        backgroundColor: '#BF8148',
        justifyContent: "center",
        alignItems: "center",
    },
    button_text: {
        fontFamily: 'Montserrat-Bold',
        color: '#FFFFFF',
        fontSize: 20,
        textAlign: 'center',
    },
    sign_in: {
        backgroundColor: '#BF8148',
    },
    sign_up: {
        backgroundColor: 'transparent',
        borderWidth: 2,
        borderColor: '#BF8148',
    }
});
