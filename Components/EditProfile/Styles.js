import { colors, responsiveHeight, responsiveFontSize, responsiveWidth, fontFamily } from '../../AppStyles'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    background: {
        flex: 1,
    },
    contentContainer: {
        paddingBottom: responsiveHeight(200)
    },
    header: {
        flexDirection: "row",
        marginTop: responsiveHeight(60),
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontFamily: fontFamily.MontserratBold,
        fontSize: responsiveFontSize(18),
        color: colors.DarkCyan,
    },
    close:{
        width: responsiveWidth(32),
        height: responsiveHeight(32),
        right: responsiveWidth(24),
        position: "absolute",
        alignContent: 'center',
        justifyContent: 'center',
    },
    closeIcon: {
        width: responsiveWidth(32),
        height: responsiveHeight(32),
        tintColor: colors.DarkCyan,
        resizeMode: 'contain'
    },
    profileContainer: {
        flex: 1,
        marginTop: responsiveHeight(40),
        marginHorizontal: responsiveWidth(24),
        gap: responsiveHeight(8)
    },
    input_title: {
        color: colors.Gold,
        fontSize: responsiveFontSize(18),
        fontFamily: fontFamily.MontserratSemiBold,
    },
    input: {
        width: responsiveWidth(380),
        height: responsiveHeight(58),
        borderRadius: 20,
        backgroundColor: colors.DarkCyan,
        paddingLeft: responsiveWidth(24),
        fontSize: responsiveFontSize(20),
        fontFamily: fontFamily.MontserratSemiBold,
        overflow: 'hidden',
        textAlign: 'left',
        paddingRight: responsiveWidth(50)
    },
    editable:{
        color: colors.White
    },
    uneditable:{
        color: colors.Grey
    },
    focus: {
        borderWidth: 4,
        borderColor: colors.LightSeaGreen,
    },
    inputContainer: {
        gap: responsiveHeight(13)
    },
    saveButton: {
        width: responsiveWidth(220),
        height: responsiveHeight(57),
        borderRadius: 20,
        backgroundColor: colors.DarkCyan,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: responsiveHeight(147),
    },
    saveButtonText: {
        color: colors.White,
        fontSize: responsiveFontSize(20),
        fontFamily: fontFamily.MontserratBold,
        textAlign: 'center',
        textAlignVertical: 'center'
    },
    inputFieldContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        verticalAlign: 'middle',
        alignContent: 'center'
    },
    editIcon: {
        width: responsiveWidth(16),
        height: responsiveHeight(16),
        alignSelf: 'center',
    },
    EditButton: {
        position: 'absolute',
        right: responsiveWidth(24),
        top: responsiveHeight(20),
        justifyContent: 'center',
        alignItems: 'center',
    },
    changePassword: {
        color: colors.DarkCyan,
        fontFamily: fontFamily.MontserratBold,
        fontSize: responsiveFontSize(14),
        marginTop: responsiveHeight(30),
        textDecorationLine: 'underline'
    }
});