import { styles } from "./Styles";
import { translate } from "../../Localization";
import { View, Image, Text, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import { colors } from "../../AppStyles";
import { goBack } from "../../Backend/Navigator";
import SvgMaker from "../SvgMaker/SvgMaker";
import { CloseIcon } from "../../assets/SVG/Icons";
import { ContactUs, ContactUsLogo, ContactUsStatue } from "../../assets/SVG/Images";


export default function ContactUS({ }) {

    return (
        <View style={styles.container}>
            <View style={styles.upperBox}>
                <TouchableOpacity 
                    style={styles.closeContainer}
                    onPress={goBack}
                >
                    <SvgMaker Svg={CloseIcon} style={styles.close} />
                </TouchableOpacity>
                <Text style={styles.boxtitle}>{translate('ContactUs.title')}</Text>
                <View style={styles.logoContainer}>
                    <SvgMaker Svg={ContactUsLogo} style={styles.logo} />
                    <SvgMaker Svg={ContactUsStatue} style={styles.statue} />
                </View>
            </View>
            <View style={styles.container} >
                <ScrollView
                    contentContainerStyle={styles.scrollContainer}
                    showsVerticalScrollIndicator={false}
                >
                    <View style={styles.textInputContainer}>
                        <View style={styles.inputContainer}>
                            <Text style={styles.title} >{translate('ContactUs.fullname')}</Text>
                            <TextInput
                                style={styles.input}
                                placeholder={translate('ContactUs.fullname')}
                                placeholderTextColor={colors.Grey}
                            />
                        </View>
                        <View style={styles.inputContainer}>
                            <Text style={styles.title} >{translate('ContactUs.email')}</Text>
                            <TextInput
                                style={styles.input}
                                placeholder={translate('ContactUs.email')}
                                placeholderTextColor={colors.Grey}
                            />
                        </View>
                        <View style={styles.inputContainer}>
                            <Text style={styles.title} >{translate('ContactUs.subject')}</Text>
                            <TextInput
                                style={styles.input}
                                placeholder={translate('ContactUs.subject_input')}
                                placeholderTextColor={colors.Grey}
                            />
                        </View>
                        <View style={styles.inputContainer}>
                            <Text style={styles.title} >{translate('ContactUs.message')}</Text>
                            <TextInput
                                style={styles.input_message}
                                placeholder={translate('ContactUs.write_message')}
                                placeholderTextColor={colors.Grey}
                                multiline={true}
                            />
                        </View>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.submit}>{translate('ContactUs.submit')}</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}