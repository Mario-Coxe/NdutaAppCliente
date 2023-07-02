import React from 'react';
import { View } from 'react-native';
import LottieView from 'lottie-react-native';
import { Marker } from 'react-native-maps'; // ou qualquer componente de mapa que você esteja usando
export const MarkerDark = ({ coordinate }) => {
    return (
        <Marker coordinate={coordinate}>
            <View style={{ width: 100, height: 120, marginHorizontal: 0, marginVertical: 0, marginTop: -10 }}>
                <LottieView
                    source={require('../../../assets/json/MarkerDark.json')}
                    autoPlay
                    loop
                    style={{ flex: 1 }}
                />
            </View>
        </Marker>
    );
};
