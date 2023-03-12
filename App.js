import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import OnBoarding from "./Components/OnBoarding/OnBoarding";
import LanguageSelection from './Components/LanguageSelection/LanguageSelection'

export default function App() {
  return (
    <View style={styles.container}>
      <LanguageSelection />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
