import React from 'react';
import { View } from 'react-native';
import LottieView from 'lottie-react-native';
import { Marker } from 'react-native-maps'; // ou qualquer componente de mapa que você esteja usando
export const LottieMarkerDestination = ({ coordinate }) => {


    return (
        <Marker coordinate={coordinate}>
            <View style={{ width: 80, height: 70 }}>
                <LottieView
                    source={require('../../../assets/json/destinationMarker.json')}
                    autoPlay
                    loop
                    style={{ flex: 1 }}
                />
            </View>
        </Marker>
    );
};
