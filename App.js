import { View } from 'react-native';
import { styles } from './AppStyles';
import { useFonts } from 'expo-font';
import OnBoarding from "./Components/OnBoarding/OnBoarding";
import LanguageSelection from './Components/LanguageSelection/LanguageSelection'
import { FirstPage } from './Components/Register/FirstPage';
import { SecondPage } from './Components/Register/SecondPage'

export default function App() {

    // get the font from the local fonts
    let [fontsLoaded] = useFonts({
        'CapitalisTypOasis': require('./assets/fonts/CapitalisTypOasis.ttf'),
        'Montserrat-Medium': require('./assets/fonts/Montserrat-Medium.ttf'),
        'Montserrat-Bold': require('./assets/fonts/Montserrat-Bold.ttf'),
        'Montserrat-Regular': require('./assets/fonts/Montserrat-Regular.ttf'),
        'Montserrat-SemiBold': require('./assets/fonts/Montserrat-SemiBold.ttf'),
        'Montserrat-Thin': require('./assets/fonts/Montserrat-Thin.ttf'),
    });

    // if the font not loaded don't appear anything
    if (!fontsLoaded)
        return null

    // if the font loaded, return the components
    return (
        <View style={styles.container}>
            <SecondPage/>
        </View>
    );
}

