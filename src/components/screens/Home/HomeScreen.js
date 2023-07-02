import React, { useState, useEffect } from 'react';
import { View, Text, Platform } from 'react-native';
import { request, PERMISSIONS, RESULTS } from 'react-native-permissions';
import MapView, { Marker } from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import MenuSuperior from './parts/MenuSuperiorHome';
import MenuInferior from '../Solicitacao/Servico';
import { LottieMarker } from '../../common/myCommon/Marker';
import { MarkerDark } from '../../common/myCommon/MarkerDark';

import styles from './style/HomeScreenEstilo';
import mapStyle from './style/dark/mapStyles'; // Importe o estilo do mapa

const App = () => {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const requestLocationPermission = async () => {
    try {
      let permission;
      if (Platform.OS === 'android') {
        permission = PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION;
      } else if (Platform.OS === 'ios') {
        permission = PERMISSIONS.IOS.LOCATION_WHEN_IN_USE;
      }

      const result = await request(permission);
      if (result === RESULTS.GRANTED) {
        console.log('Permissão de localização concedida');
      } else {
        console.log('Permissão de localização negada');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  useEffect(() => {
    const getLocation = async () => {
      await requestLocationPermission();
      Geolocation.getCurrentPosition(
        position => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
          setError(null);
          setLoading(false);
        },
        error => {
          setError(error.message);
          setLoading(false);
        },
        { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
      );
    };

    getLocation();
  }, []);


  const [modoEscuro, setModoEscuro] = useState(false); // Estado para controlar o modo escuro

  const alternarModoEscuro = () => {
    setModoEscuro(!modoEscuro);
  };

  return (
    <View style={styles.container}>
      <MenuSuperior />
      {loading ? (
        <View style={styles.loadingContainer}>
          {/* Componente de carregamento */}
        </View>
      ) : (
        <>
          {latitude && longitude ? (
            <MapView
              style={styles.map}
              customMapStyle={modoEscuro ? mapStyle : ''} // Aplica o estilo personalizado ao mapa
              region={{
                latitude: latitude,
                longitude: longitude,
                latitudeDelta: 0.006,
                longitudeDelta: 0.006,
              }}
            >
              {
                modoEscuro ? (
                  <MarkerDark coordinate={{ latitude, longitude }} />
                ) : (
                  <LottieMarker coordinate={{ latitude, longitude }} />
                )
              }
            </MapView>
          ) : (
            <View style={styles.errorContainer}>
              <Text style={styles.errorText}>{error || 'Falha ao obter localização.'}</Text>
            </View>
          )}
          <MenuInferior />
        </>
      )}
    </View>
  );
};

export default App;
