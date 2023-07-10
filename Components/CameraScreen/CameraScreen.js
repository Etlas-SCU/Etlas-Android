import React, { useState, useEffect, useRef, useContext } from "react";
import { View, TouchableOpacity, Text, Image } from "react-native";
import { styles } from "./Styles";
import { Camera } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import PopupMessage from '../PopupMessage/PopupMessage'
import { translate } from "../../Localization";
import { Entypo } from "@expo/vector-icons";
import { colors } from "../../AppStyles";
import { goBack, goPage } from "../../Helpers/Navigator";
import { useIsFocused } from '@react-navigation/native';
import { setStatusBarStyle } from "expo-status-bar";
import { UserContext } from "../Context/Context";
import SvgMaker from "../SvgMaker/SvgMaker";
import { LeftArrow } from "../../assets/SVG/Icons";
import Backend from "../../Helpers/Backend";
import Loader from "../Loader/Loader";
import { manipulateAsync } from 'expo-image-manipulator';
import * as ImagePicker from 'expo-image-picker';
import { Animated, Easing } from 'react-native';


export default function CameraScreen({ }) {

    // Initialize state variables
    const [hasCameraPermission, setHasCameraPermission] = useState(null);
    const [image, setImage] = useState(null);
    const [cameraWidth, setCameraWidth] = useState(styles.camera.width);
    const [cameraHeight, setCameraHeight] = useState(styles.camera.height);
    const [type, setType] = useState(Camera.Constants.Type.back);
    const [flash, setFlash] = useState(Camera.Constants.FlashMode.off);
    const [mirrorStyle, setmirrorStyle] = useState({});
    const cameraRef = useRef(null);

    // state for the gallery permission and the stored image
    const [hasGelleryPermission, setHasGalleryPermission] = useState(null);

    const [loading, setLoading] = useState(false);
    const fadeAnim = useState(new Animated.Value(1))[0];

    // use user context
    const { popupMessageVisible, showPopupMessage } = useContext(UserContext);

    // for loader
    const { showLoader, hideLoader, loaderVisible } = useContext(UserContext);

    // check if the currenpage is focused
    const isFocused = useIsFocused();

    if (isFocused) {
        setStatusBarStyle('light');
    }

    // make animation for take picture button
    const handlePress = () => {
        setLoading(true);
        startAnimation();
        // Simulate an asynchronous action, e.g., an API call
        setTimeout(() => {
            setLoading(false);
            fadeAnim.setValue(1);
        }, 3000); // Replace this with your actual asynchronous action
    };

    // make animation for take picture button
    const startAnimation = () => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(fadeAnim, {
                    toValue: 0.2,
                    duration: 500,
                    easing: Easing.linear,
                    useNativeDriver: true,
                }),
                Animated.timing(fadeAnim, {
                    toValue: 1,
                    duration: 500,
                    easing: Easing.linear,
                    useNativeDriver: true,
                }),
            ]),
        ).start();
    };

    // stop animation for take picture button
    useEffect(() => {
        return () => {
            fadeAnim.stopAnimation();
        };
    }, []);

    // Request camera and media library permissions on component mount
    useEffect(() => {
        (async () => {
            MediaLibrary.requestPermissionsAsync();
            const { status } = await Camera.requestCameraPermissionsAsync();
            setHasCameraPermission(status === "granted");
        })();
    }, []);

    // if the camera is focused
    useEffect(() => {
        if (isFocused && hasCameraPermission === false) {
            showPopupMessage('Error', translate('Scan.ErrorAcces'));
        }
    }, [isFocused]);

    // Take a picture with the camera and set the image state variable to the picture URI
    const takePicture = async () => {
        if (cameraRef) {
            if (hasCameraPermission === false) {
                showPopupMessage('Error', translate('Scan.ErrorAcces'));
                return;
            }
            try {
                // make the button fading
                handlePress();

                // option of the picture
                const options = {
                    quality: 1,
                    base64: true,
                    skipProcessing: false,
                    isImageMirror: true,
                    ratio: '1:1', // set aspect ratio
                }
                // cameraRef.current.pausePreview();
                const data = await cameraRef.current.takePictureAsync(options);
                setImage(data.uri);
                setCameraHeight(data.height);
                setCameraWidth(data.width);
            } catch (e) {
                cameraRef.current.resumePreview();
                console.log(e);
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
                if (Backend.isDetectFailure(data.Detection)) {
                    showPopupMessage('Error', data.Detection);
                } else {
                    // go to the monument page
                    goPage('MonumentDetails', null, { Monument: data.Monument });
                }
                // make the camera resume again
                setImage(null);
                cameraRef.current.resumePreview();
            } catch (e) {
                console.log(e);
            }
        }
    }

    // Toggle the flash
    const flashClick = async () => {
        if (hasCameraPermission === false) {
            showPopupMessage('Error', translate('Scan.ErrorAcces'));
            return;
        }
        if (flash == Camera.Constants.FlashMode.off)
            setFlash(Camera.Constants.FlashMode.on);
        else
            setFlash(Camera.Constants.FlashMode.off);
    }

    // Toggle the camera
    const CameraClick = async () => {
        if (hasCameraPermission === false) {
            showPopupMessage('Error', translate('Scan.ErrorAcces'));
            return;
        }
        if (type == Camera.Constants.Type.back) {
            setType(Camera.Constants.Type.front);
            setmirrorStyle({ transform: [{ scaleX: -1 }] });
        }
        else {
            setType(Camera.Constants.Type.back);
            setmirrorStyle({});
        }
    }

    // Save the current image to the media library
    const saveImage = async () => {
        if (image) {
            try {
                await MediaLibrary.createAssetAsync(image);
                showPopupMessage('Success', translate('Scan.saved'));
            } catch (e) {
                showPopupMessage('Error', translate('Scan.ErrorSave'));
            }
        }
    }

    // pick image from gallery
    const pickImage = async () => {
        // ask for gallery permission
        if (hasGelleryPermission === null) {
            (async () => {
                const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
                setHasGalleryPermission(status === 'granted');
            })();
        }

        // if the user doesn't have permission
        if (hasGelleryPermission === false) {
            showPopupMessage('Error', translate('messages.storageError'));
            return;
        }

        // No permissions request is necessary for launching the image library
        const { assets, canceled } = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1,
            base64: true,
            allowsMultipleSelection: false,
        });

        // if the user didn't cancel the process
        if (!canceled) {
            // pause the camera
            cameraRef.current.pausePreview();

            // show loader
            showLoader(translate('messages.upload_pic_detect'));

            // compress the image
            const compressedImage = await compressImage(assets[0].uri);

            const { data } = await Backend.detectMonumentsFromImageURL(compressedImage);

            // hide loader
            hideLoader();

            // check if the image detected
            if (data.status === "No monuments detected") {
                showPopupMessage('Error', data.status);
            } else {
                showPopupMessage('Success', data.status);
            }

            // resume the camera again
            setImage(null);
            cameraRef.current.resumePreview();
        }

    };

    return (
        <View style={styles.container}>
            {loaderVisible ? <Loader /> : null}
            {popupMessageVisible ? <PopupMessage /> : null}
            {
                !image ?
                    <View style={styles.topBar}>
                        <TouchableOpacity onPress={flashClick}>
                            <Entypo name="flash" size={30} style={[styles.flash, { color: flash == Camera.Constants.FlashMode.off ? colors.White : colors.Yellow }]} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={goBack}>
                            <SvgMaker Svg={LeftArrow} />
                        </TouchableOpacity>
                    </View>
                    :
                    <View style={styles.topBar}>
                        <TouchableOpacity onPress={saveImage}>
                            <Entypo name="download" size={30} style={styles.icon} />
                            <Text style={styles.buttonTxt}>{translate('Scan.save')}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={goBack}>
                            <SvgMaker Svg={LeftArrow} />
                        </TouchableOpacity>
                    </View>
            }
            {
                !image ?
                    <Camera
                        style={styles.camera}
                        type={type}
                        flashMode={flash ? Camera.Constants.FlashMode.torch : Camera.Constants.FlashMode.off}
                        ref={cameraRef}
                        shouldRasterizeIOS={true}
                        ratio='1:1'
                        zoom={0}
                        autoFocus={Camera.Constants.AutoFocus.on}
                        whiteBalance={Camera.Constants.WhiteBalance.auto}
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
                        <TouchableOpacity onPress={pickImage}>
                            <Entypo name="images" size={30} style={styles.icon} />
                        </TouchableOpacity>
                        <Animated.View style={[styles.buttonContent, { opacity: fadeAnim }]} >
                            <TouchableOpacity
                                style={styles.button}
                                onPress={takePicture}
                                disabled={loading}
                            />
                        </Animated.View>
                        <TouchableOpacity onPress={CameraClick}>
                            <Entypo name="retweet" size={30} style={styles.icon} />
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