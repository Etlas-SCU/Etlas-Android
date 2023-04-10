import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { RNCamera } from 'react-native-camera';

const CameraScreen = () => {
  const [photo, setPhoto] = useState(null);

  const takePicture = async (camera) => {
    const options = { quality: 0.5, base64: true };
    const data = await camera.takePictureAsync(options);
    setPhoto(data.uri);
  };

  return (
    <View style={{ flex: 1 }}>
      <RNCamera
        style={{ flex: 1 }}
        type={RNCamera.Constants.Type.back}
        captureAudio={false}
      >
        {({ camera, status }) => {
          if (status !== 'READY') return <View />;
          return (
            <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center' }}>
              {photo ? (
                <TouchableOpacity
                  style={{ backgroundColor: 'white', padding: 10, borderRadius: 5 }}
                  onPress={() => setPhoto(null)}
                >
                  <Text style={{ fontSize: 18 }}>Retake Photo</Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  style={{ backgroundColor: 'white', padding: 10, borderRadius: 5 }}
                  onPress={() => takePicture(camera)}
                >
                  <Text style={{ fontSize: 18 }}>Take Photo</Text>
                </TouchableOpacity>
              )}
            </View>
          );
        }}
      </RNCamera>
      {photo && (
        <View style={{ position: 'absolute', bottom: 50 }}>
          <Text style={{ color: 'white', fontSize: 20 }}>Photo taken:</Text>
          <Image source={{ uri: photo }} style={{ width: 200, height: 200, marginTop: 10 }} />
        </View>
      )}
    </View>
  );
};

export default CameraScreen;
