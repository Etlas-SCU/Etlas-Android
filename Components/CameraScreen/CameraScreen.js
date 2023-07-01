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
import Backend from "../../Backend/Backend";
import Loader from "../Loader/Loader";
import { manipulateAsync } from 'expo-image-manipulator';


export default function CameraScreen({ }) {

    // use user context
    const { popupMessageVisible, showPopupMessage } = useContext(UserContext);

    // for loader
    const { showLoader, hideLoader, loaderVisible } = useContext(UserContext);

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
    const [cameraEnabled, setCameraEnabled] = useState(true);


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
        if (cameraRef && cameraEnabled) {
            try {
                setCameraEnabled(false); // Disable the camera temporarily
                const options = {
                    quality: 1,
                    base64: true,
                    skipProcessing: false,
                    isImageMirror: true,
                    ratio: '1:1', // set aspect ratio
                }
                cameraRef.current.pausePreview();
                const data = await cameraRef.current.takePictureAsync(options);
                setImage(data.uri);
                setCameraHeight(data.height);
                setCameraWidth(data.width);
            } catch (e) {
                console.log(e);
            } finally {
                setCameraEnabled(true);
            }
        }
    };

    // Function to compress the selected image
    const compressImage = async (imageUri) => {
        const compressedImage = await manipulateAsync(
            imageUri,
            [{ resize: { width: 450, height: 450 } }],
            { compress: 1, format: 'jpeg' }
        );
        return compressedImage.uri;
    };

    // Save the current image to the media library
    const uploadImage = async () => {
        if (image) {
            try {
                // compress the image
                const compressedImage = await compressImage(image);

                // upload the image
                showLoader(translate('messages.detect'));
                const { data } = await Backend.detectMonumentsFromImageURL(compressedImage);
                hideLoader();

                // check if the image detected
                if (data.status === "No monuments detected") {
                    showPopupMessage('Error', data.status);
                    setImage(null);
                } else {
                    showPopupMessage('Success', data.status);
                    setImage(null);
                }
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
            {loaderVisible ? <Loader /> : null}
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
                        ratio='1:1'
                        zoom={0}
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
                        <TouchableOpacity onPress={uploadImage}>
                            <Entypo name="arrow-with-circle-up" size={30} style={styles.icon} />
                            <Text style={styles.buttonTxt}>{translate('Scan.upload')}</Text>
                        </TouchableOpacity>
                    </View>
            }
        </View>
    )
}