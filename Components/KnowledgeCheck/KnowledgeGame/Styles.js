import { colors, fontFamily, responsiveFontSize, responsiveHeight, responsiveWidth } from "../../../AppStyles";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.DarkCyan
    },
    ScrollView: {
        paddingBottom: responsiveHeight(200)
    },
    header: {
        flexDirection: 'row',
        marginHorizontal: responsiveWidth(24),
        marginTop: responsiveHeight(60),
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontFamily: fontFamily.MontserratBold,
        fontSize: responsiveFontSize(18),
        color: colors.White,
    },
    backContainer: {
        width: responsiveWidth(32),
        height: responsiveHeight(32),
        position: 'absolute',
        right: responsiveWidth(0),
    },
    back: {
        width: responsiveWidth(32),
        height: responsiveHeight(32),
        tintColor: colors.White,
    },
    image: {
        width: responsiveWidth(381),
        height: responsiveHeight(188),
        alignSelf: 'center',
        marginTop: responsiveHeight(45),
        borderRadius: 20,
        borderColor: colors.White,
        borderWidth: 2,
        resizeMode: 'stretch'
    },
    quesionsBox: {
        marginTop: responsiveHeight(36),
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center'
    },
    question: {
        fontFamily: fontFamily.MontserratBold,
        fontSize: responsiveFontSize(18),
        color: colors.White,
        textAlign: 'center',
        marginHorizontal: responsiveWidth(24)
    },
    choices: {
        marginTop: responsiveHeight(49),
        gap: responsiveHeight(18)
    },
    choice: {
        width: responsiveWidth(330),
        height: responsiveHeight(65),
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    correct: {
        backgroundColor: colors.Green
    },
    wrong: {
        backgroundColor: colors.Red
    },
    initialChoice: {
        backgroundColor: colors.Gold
    },
    diableChoiceColor: {
        backgroundColor: colors.LightSeaGreen
    },
    disabledChoice: {
        width: responsiveWidth(330),
        height: responsiveHeight(65),
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        opacity: 0.5,
    },
    choiceText: {
        fontFamily: fontFamily.MontserratBold,
        fontSize: responsiveFontSize(16),
        color: colors.White,
        textAlign: 'center',
        textAlignVertical: 'center',
        marginHorizontal: responsiveWidth(5)
    },
    bottomContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: responsiveWidth(24),
        marginTop: responsiveHeight(57),
        alignItems: 'center',
    },
    scoreBox: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: responsiveWidth(33),
        width: responsiveWidth(285),
        height: responsiveHeight(57),
        borderColor: colors.White,
        borderWidth: 2,
        borderRadius: 20
    },
    score: {
        fontFamily: fontFamily.MontserratBold,
        fontSize: responsiveFontSize(20),
        color: colors.White,
    },
    HintBox: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: responsiveWidth(0),
        width: responsiveWidth(70.08),
        height: responsiveHeight(74.12),
    },
    hintRemain: {
        backgroundColor: colors.Black,
        borderRadius: 100,
        width: responsiveWidth(25),
        height: responsiveHeight(26),
        justifyContent: 'center',
        position: 'absolute',
        bottom: responsiveHeight(0),
        right: responsiveWidth(0)
    },
    hintText: {
        fontFamily: fontFamily.MontserratBold,
        fontSize: responsiveFontSize(14),
        color: colors.White,
        textAlign: 'center',
        textAlignVertical: 'center'
    },


    // GameFinished
    gameFinishConainer: {
        flex: 1,
        backgroundColor: colors.White,
    },
    gameFinishImage: {
        flex: 1,
    },
    ScoreBox: {
        backgroundColor: colors.DarkCyan,
        width: responsiveWidth(382),
        height: responsiveHeight(380),
        borderRadius: 30,
        marginTop: responsiveHeight(164),
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',   
    },
    finishedScoreText: {
        fontFamily: fontFamily.PoppinsBold,
        fontSize: responsiveFontSize(100),
        color: colors.White,
        textAlign: 'center',
    },
    finishedTotal: {
        fontFamily: fontFamily.PoppinsMedium,
        fontSize: responsiveFontSize(30),
        color: colors.White,
        textAlign: 'center',
        marginTop: responsiveHeight(24),
    },
    button: {
        width: responsiveWidth(217),
        height: responsiveHeight(57),
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: responsiveHeight(102),
        alignSelf: 'center',
        backgroundColor: colors.DarkCyan,
    },
    playAgain: {
        fontFamily: fontFamily.MontserratBold,
        fontSize: responsiveFontSize(18),
        color: colors.White
    }
});