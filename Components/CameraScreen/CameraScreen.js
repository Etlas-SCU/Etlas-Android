import React, { useState, useEffect, useRef, useContext } from "react";
import { View, TouchableOpacity, Text, Image } from "react-native";
import { styles } from "./Styles";
import { Camera } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import PopupMessage from '../PopupMessage/PopupMessage'
import { translate } from "../../Localization";
import { Entypo } from "@expo/vector-icons";
import { colors, dimensions } from "../../AppStyles";
import { goBack } from "../../Backend/Navigator";
import { useIsFocused } from '@react-navigation/native';
import { setStatusBarStyle } from "expo-status-bar";
import { UserContext } from "../Context/Context";
import SvgMaker from "../SvgMaker/SvgMaker";
import { LeftArrow } from "../../assets/SVG/Icons";


export default function CameraScreen({ }) {

    // use user context
    const { popupMessageVisible, showPopupMessage } = useContext(UserContext);

    // check if the currenpage is focused
    const isFocused = useIsFocused();

    if (isFocused) {
        setStatusBarStyle('light');
    }

    // Initialize state variables
    const [hasCameraPermission, setHasCameraPermission] = useState(null);
    const [image, setImage] = useState(null);
    const [cameraWidth, setCameraWidth] = useState(dimensions.fullWidth);
    const [cameraHeight, setCameraHeight] = useState(dimensions.fullHeight);
    const [type, setType] = useState(Camera.Constants.Type.back);
    const [flash, setFlash] = useState(Camera.Constants.FlashMode.off);
    const [mirrorStyle, setmirrorStyle] = useState({});
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
        showPopupMessage('Error', translate('Scan.ErrorAcces'));
        goBack();
    }

    // Take a picture with the camera and set the image state variable to the picture URI
    const takePicture = async () => {
        if (cameraRef) {
            try {
                const options = {
                    quality: 1,
                    base64: true,
                    skipProcessing: false,
                    isImageMirror: true,
                }
                const data = await cameraRef.current.takePictureAsync(options);
                setImage(data.uri);
                setCameraHeight(data.height);
                setCameraWidth(data.width);
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
                showPopupMessage('Success', translate('Scan.saved'));
                setImage(null);
            } catch (e) {
                showPopupMessage('Error', translate('Scan.ErrorSave'));
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
        if (type == Camera.Constants.Type.back) {
            setType(Camera.Constants.Type.front);
            setmirrorStyle({ transform: [{ scaleX: -1 }] });
        }
        else {
            setType(Camera.Constants.Type.back);
            setmirrorStyle({});
        }
    }

    return (
        <View style={styles.container}>
            {popupMessageVisible ? <PopupMessage /> : null}
            <View style={styles.topBar}>
                <Text style={styles.title}>{translate('Scan.title')}</Text>
                <TouchableOpacity onPress={goBack}>
                    <SvgMaker Svg={LeftArrow} />
                </TouchableOpacity>
            </View>
            {
                !image ?
                    <Camera
                        style={styles.camera}
                        type={type}
                        flashMode={flash ? Camera.Constants.FlashMode.torch : Camera.Constants.FlashMode.off}
                        ref={cameraRef}
                        shouldRasterizeIOS={true}
                        useCamera2Api={true}
                    />
                    :
                    <Image
                        source={{ uri: image }}
                        style={[styles.imageCap, mirrorStyle]}
                        width={cameraWidth}
                        height={cameraHeight}
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