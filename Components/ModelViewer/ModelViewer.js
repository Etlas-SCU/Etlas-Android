import { View, PanResponder, ActivityIndicator } from 'react-native';
import { GLView } from 'expo-gl';
import { THREE, Renderer, TextureLoader } from 'expo-three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import * as FileSystem from 'expo-file-system';
import { useRef, useState, memo } from 'react';
import { colors } from '../../AppStyles';


// Textures of the statue
const Textures = {
    'Ramsis II Bust': require('../../assets/Textures/Ramsis_II_Bust.jpeg'),
};

const statueData = {
    'Ramsis II Bust': {
        position: { x: 0, y: -1, z: 0 },
        rotation: { x: -1.5, y: 0, z: 0 },
        scale: { x: 1.2, y: 1.2, z: 1.2 },
    },
};


function ModelViewer({ modelURL, textureUrl, modelName, style }) {
    // refrences
    const rendererRef = useRef(null);
    const sceneRef = useRef(null);
    const cameraRef = useRef(null);
    const modelRef = useRef(null);
    const [isLoaded, setIsLoaded] = useState(false);

    const panResponderRef = useRef(
        PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onPanResponderMove: (_, gestureState) => {
                if (modelRef && modelRef.current) {
                    // Rotation
                    const rotationSpeed = 0.0005;
                    modelRef.current.rotateZ(rotationSpeed * gestureState.dx);
                }
                if (sceneRef && sceneRef.current && cameraRef && cameraRef.current && rendererRef && rendererRef.current) {
                    rendererRef.current.render(sceneRef.current, cameraRef.current);
                }
            },
        })
    );


    const onContextCreate = async (gl) => {
        // download the files and render the model
        const downloadFilesAndRender = async (gl) => {
            const objFileUrl = modelURL; // Replace with the actual URL of the OBJ file

            // Download the OBJ file
            const objFile = await downloadFile(objFileUrl, 'model.obj');

            // Load and render the model
            const model = await loadModel(objFile);
            renderModel(model, gl);
        };

        const downloadFile = async (fileUrl, fileName) => {
            const downloadResumable = FileSystem.createDownloadResumable(
                fileUrl,
                FileSystem.documentDirectory + fileName
            );

            // get the uri of the file after download it
            const { uri } = await downloadResumable.downloadAsync();
            return uri;
        };

        const loadModel = async (objFileUri) => {
            const loader = new OBJLoader();

            // load the object file and texture file
            const objFileData = await FileSystem.readAsStringAsync(objFileUri);


            // load the texture
            const texture = new TextureLoader().load(Textures[modelName]);

            // create the material
            const material = new THREE.MeshBasicMaterial({ map: texture });

            // create obj model
            const objModel = loader.parse(objFileData);
            objModel.traverse((child) => {
                if (child instanceof THREE.Mesh) {
                    child.material = material;
                }
            });

            return objModel;
        };

        const renderModel = (model, gl) => {
            const { drawingBufferWidth: width, drawingBufferHeight: height } = gl;

            // create the scene
            const scene = new THREE.Scene();
            const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
            camera.position.z = 3;

            // create the render
            const renderer = new Renderer({ gl });
            renderer.setSize(width, height);
            renderer.setClearColor(colors.DarkCyan);

            // Change position, rotation, and scale using the statueData object
            const { position, rotation, scale } = statueData[modelName];

            model.position.set(position.x, position.y, position.z);
            model.rotation.set(rotation.x, rotation.y, rotation.z);
            model.scale.set(scale.x, scale.y, scale.z);

            // add the statue to the scene
            scene.add(model);

            // asign all references
            rendererRef.current = renderer;
            sceneRef.current = scene;
            cameraRef.current = camera;
            modelRef.current = model;

            // render the scene with animate
            const animate = () => {
                const delta = 0.01;
                requestAnimationFrame(animate);
                model.rotateZ(delta);
                renderer.render(scene, camera);
                setIsLoaded(true);
                gl.endFrameEXP();
            };
            animate();
        };
        try {
            await downloadFilesAndRender(gl);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <View style={style}>
            {!isLoaded && <ActivityIndicator size="large" color={colors.White} />}
            <GLView
                style={{ flex: 1 }}
                onContextCreate={onContextCreate}
                {...panResponderRef.current.panHandlers}
            />
        </View>
    );
}


export default memo(ModelViewer);