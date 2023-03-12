import { StyleSheet, View, ImageBackground } from 'react-native';

const SplashScreen = () => {
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../assets/splash/Splash.png')} resizeMode="stretch" style={styles.image}/>
        </View>
    );
}  

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    image: {
        flex: 1,
        justifyContent: "center",
    }
});

export default SplashScreen;