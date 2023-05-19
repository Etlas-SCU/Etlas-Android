import React, { useState, useEffect, useRef } from "react";
import { View, TouchableOpacity, Text, Image } from "react-native";
import { styles } from "./Styles";
import { Camera } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import PopupMessage from '../PopupMessage/PopupMessage'
import { translate } from "../../Localization";
import { Entypo } from "@expo/vector-icons";
import { colors } from "../../AppStyles";
import { goBack } from "../../Backend/Navigator";
import { useIsFocused } from '@react-navigation/native';
import { setStatusBarStyle } from "expo-status-bar";
import { dimensions } from "../../AppStyles";


export default function CameraScreen({ }) {

    // check if the currenpage is focused
    const isFocused = useIsFocused();
    
    if(isFocused){
        setStatusBarStyle('dark');
    }

    // Initialize state variables
    const [hasCameraPermission, setHasCameraPermission] = useState(null);
    const [image, setImage] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);
    const [flash, setFlash] = useState(Camera.Constants.FlashMode.off);
    const cameraRef = useRef(null);

    // Request camera and media library permissions on component mount
    useEffect(() => {
        (async () => {
            MediaLibrary.requestPermissionsAsync();
            const { status } = await Camera.requestCameraPermissionsAsync();
            setHasCameraPermission(status === "granted");
        })();
    }, []);

    // If camera permission is not granted, show an error message
    if (hasCameraPermission === false) {
        return <PopupMessage state={'Error'} message={translate('Scan.ErroAcces')} />
    }

    // Take a picture with the camera and set the image state variable to the picture URI
    const takePicture = async () => {
        if (cameraRef) {
            try {
                const data = await cameraRef.current.takePictureAsync();
                setImage(data.uri);
            } catch (e) {
                console.log(e);
            }
        }
    };

    // Save the current image to the media library
    const saveImage = async () => {
        if (image) {
            try {
                await MediaLibrary.createAssetAsync(image);
                alert(translate('Scan.saved'));
                setImage(null);
            } catch (e) {
                console.log(e);
            }
        }
    }

    // Toggle the flash
    const flashClick = () => {
        if (flash == Camera.Constants.FlashMode.off)
            setFlash(Camera.Constants.FlashMode.on);
        else
            setFlash(Camera.Constants.FlashMode.off);
    }

    // Toggle the camera
    const CameraClick = () => {
        if (type == Camera.Constants.Type.back)
            setType(Camera.Constants.Type.front);
        else
            setType(Camera.Constants.Type.back);
    }

    // adjust ratio for the camera
    const { width } = dimensions;
    const xFixed = width;
    const yFixed = width * 16 / 9;



    return (
        <View style={styles.container}>
            <View style={styles.topBar}>
                <Text style={styles.title}>{translate('Scan.title')}</Text>
                <TouchableOpacity onPress={goBack}>
                    <Image source={require('../../assets/Scan/Arr.png')} />
                </TouchableOpacity>
            </View>
            {
                !image ?
                    <Camera
                        style={styles.camera}
                        type={type}
                        flashMode={flash ? Camera.Constants.FlashMode.torch : Camera.Constants.FlashMode.off}
                        ref={cameraRef}
                        ratio={{ x: xFixed, y: yFixed }}
                    />
                    :
                    <Image
                        source={{ uri: image }}
                        style={styles.imageCap}
                    />
            }
            {
                !image ?
                    <View style={styles.bottomBar}>
                        <TouchableOpacity onPress={CameraClick}>
                            <Entypo name="retweet" size={30} style={styles.icon} />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={takePicture}
                        />
                        <TouchableOpacity onPress={flashClick}>
                            <Entypo name="flash" size={30} style={[styles.flash, { color: flash == Camera.Constants.FlashMode.off ? colors.White : colors.Yellow }]} />
                        </TouchableOpacity>
                    </View>
                    :
                    <View style={styles.bottomBar}>
                        <TouchableOpacity onPress={() => setImage(null)}>
                            <Entypo name="retweet" size={30} style={styles.icon} />
                            <Text style={styles.buttonTxt}>{translate('Scan.retake')}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={saveImage}>
                            <Entypo name="check" size={30} style={styles.icon} />
                            <Text style={styles.buttonTxt}>{translate('Scan.save')}</Text>
                        </TouchableOpacity>
                    </View>
            }
        </View>
    )
}