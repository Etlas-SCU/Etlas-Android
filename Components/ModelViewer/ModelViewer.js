import { View, StyleSheet, PanResponder } from 'react-native';
import ExpoTHREE, { THREE, Renderer, TextureLoader, loadObjAsync, loadTextureAsync } from 'expo-three';
import React, { useEffect, useRef } from 'react';
import { GLView } from 'expo-gl';

export default function ModelViewer() {
    const rendererRef = useRef(null);
    const sceneRef = useRef(null);
    const cameraRef = useRef(null);
    const cubeRef = useRef(null);
    const panResponderRef = useRef(
        PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onPanResponderMove: (_, gestureState) => {
                const cube = cubeRef.current;
                cube.rotation.x += gestureState.dy * 0.0005; // Adjust the rotation factor to control the speed
                cube.rotation.y += gestureState.dx * 0.0005; // Adjust the rotation factor to control the speed
                rendererRef.current.render(sceneRef.current, cameraRef.current);
            },
        })
    );

    const onContextCreate = async (gl) => {
        const { drawingBufferWidth: width, drawingBufferHeight: height } = gl;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
        camera.position.z = 5;

        const renderer = new Renderer({ gl });
        renderer.setSize(width, height);
        renderer.setClearColor(0xffffff);

        const texture = await ExpoTHREE.loadAsync(require('./texture.png'));
        const textureLoader = new TextureLoader();
        const loadedTexture = textureLoader.load(require('./texture.png'));

        // const modelAsset = require('./nefertiti_HQ2.obj.obj'); // Replace with the actual path to your 3D model file

        const model = await ExpoTHREE.loadObjAsync({
            asset: modelAsset,
            onAssetRequested: (asset) => asset,
        });


        scene.add(model);

        rendererRef.current = renderer;
        sceneRef.current = scene;
        cameraRef.current = camera;
        cubeRef.current = model;

        const animate = () => {
            requestAnimationFrame(animate);
            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;
            renderer.render(scene, camera);
            gl.endFrameEXP();
        };

        animate();
    };

    return (
        <View style={styles.container}>
            <GLView
                style={{ flex: 1 }}
                onContextCreate={onContextCreate}
                {...panResponderRef.current.panHandlers}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
