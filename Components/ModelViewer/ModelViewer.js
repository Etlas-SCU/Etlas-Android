import { View, PanResponder } from 'react-native';
import { GLView } from 'expo-gl';
import { THREE, Renderer, TextureLoader } from 'expo-three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import * as FileSystem from 'expo-file-system';
import { useRef } from 'react';
import { colors, dimensions, responsiveHeight } from '../../AppStyles';


export default function ModelViewer({ modelURL, textureURL, modelName, style }) {

    const Textures = {
        'Ramsis II Bust': require('../../assets/Textures/Ramsis II Bust.jpeg'),
        'Nefrtiti Bust': require('../../assets/Textures/Nefrtiti Bust.png')
    };

    // refrences
    const rendererRef = useRef(null);
    const sceneRef = useRef(null);
    const cameraRef = useRef(null);
    const modelRef = useRef(null);

    const panResponderRef = useRef(
        PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onPanResponderMove: (_, gestureState) => {
                if (modelRef && modelRef.current) {
                    // Rotation
                    const rotationSpeed = 0.0005;
                    modelRef.current.rotation.x += gestureState.dx * rotationSpeed;
                    modelRef.current.rotation.y += gestureState.dy * rotationSpeed;
                }
                if (sceneRef && sceneRef.current && cameraRef && cameraRef.current && rendererRef && rendererRef.current) {
                    rendererRef.current.render(sceneRef.current, cameraRef.current);
                }
            },
        })
    );


    const onContextCreate = async (gl) => {
        const downloadFilesAndRender = async (gl) => {
            const objFileUrl = modelURL; // Replace with the actual URL of the OBJ file
            const textureFileUrl = textureURL; // Replace with the actual URL of the texture file

            // Download the OBJ file
            const objFile = await downloadFile(objFileUrl, 'model.obj');

            // Download the texture file
            const textureFile = await downloadFile(textureFileUrl, 'texture.png');

            // Load and render the model
            const model = await loadModel(objFile, textureFile);
            renderModel(model, gl);
        };

        const downloadFile = async (fileUrl, fileName) => {
            const downloadResumable = FileSystem.createDownloadResumable(
                fileUrl,
                FileSystem.documentDirectory + fileName
            );

            const { uri } = await downloadResumable.downloadAsync();
            return uri;
        };

        const loadModel = async (objFileUri) => {
            const loader = new OBJLoader();
            const objFileData = await FileSystem.readAsStringAsync(objFileUri);

            const texture = new TextureLoader().load(Textures[modelName]);

            const material = new THREE.MeshBasicMaterial({ map: texture });

            const objModel = loader.parse(objFileData);
            objModel.traverse((child) => {
                if (child instanceof THREE.Mesh) {
                    child.material = material;
                }
            });

            return objModel;
        };

        const renderModel = (model, gl) => {
            const width = dimensions.fullWidth;
            const height = responsiveHeight(255);

            const scene = new THREE.Scene();
            const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
            camera.position.z = 0.5;

            const renderer = new Renderer({ gl });
            renderer.setSize(width, height);
            renderer.setClearColor(colors.DarkCyan);


            scene.add(model);

            rendererRef.current = renderer;
            sceneRef.current = scene;
            cameraRef.current = camera;
            modelRef.current = model;

            const animate = () => {
                requestAnimationFrame(animate);
                renderer.render(scene, camera);
                gl.endFrameEXP();
            };

            animate();
        };

        await downloadFilesAndRender(gl);
    }

    return (
        <View style={style}>
            <GLView
                style={{ flex: 1 }}
                onContextCreate={onContextCreate}
                {...panResponderRef.current.panHandlers}
            />
        </View>
    );
}
