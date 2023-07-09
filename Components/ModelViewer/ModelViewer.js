import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { GLView } from 'expo-gl';
import { Renderer, THREE } from 'expo-three';
import ExpoTHREE from 'expo-three';


const ModelViewer = ({ textureURL, modelURL }) => {
    // Create a scene
    let scene = new THREE.Scene();

    const load3DModel = async () => {
        // Load texture
        const texture = await ExpoTHREE.loadAsync(textureURL);

        // Load object
        const object = await ExpoTHREE.loadAsync(modelURL);

        // Create a material with the texture
        const material = new THREE.MeshBasicMaterial({ map: texture });

        // Create a mesh using the object and material
        const mesh = new THREE.Mesh(object, material);

        console.log(mesh);

        // Add the mesh to the scene
        scene.add(mesh);
    };

    const onContextCreate = async (gl) => {
        const renderer = new Renderer({ gl });
        renderer.setSize(gl.drawingBufferWidth, gl.drawingBufferHeight);

        // Load the 3D model
        await load3DModel();

        // Render the scene
        const render = () => {
            renderer.render(scene, camera);
            gl.endFrameEXP();
            requestAnimationFrame(render);
        };

        render();
    };

    useEffect(() => {
        load3DModel();
    }, []);

    return (
        <View style={styles.container}>
            <GLView style={styles.glView} onContextCreate={onContextCreate} />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    glView: {
        flex: 1,
    },
});

export default ModelViewer;
