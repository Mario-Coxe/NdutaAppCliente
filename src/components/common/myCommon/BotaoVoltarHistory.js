/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import styles from './Estilos/BotaoVoltarEstilo';

const BotaoVoltarHistory = ({ onPress }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Image
          source={require('../../../assets/icones/voltar_vermelho.png')}
          style={{
            width: '50%',
            height: 30,
            justifyContent: 'center',
            alignItems: 'center',
            resizeMode: 'contain',
            right: 0,
            marginTop: 25
          }}
        />
        <Text style={{color: 'red', marginTop: 22, fontSize: 14}}>Voltar</Text>
      </TouchableOpacity>
    </View>

  );
};

export default BotaoVoltarHistory;
