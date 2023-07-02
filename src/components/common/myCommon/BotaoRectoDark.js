import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './Estilos/BotaoRectoEstilo';

const BotaoRecto = ({onPress, titulo, textColor = 'white', fontSize = 14, fontFamily = 'Poppins-SemiBold'}) => {
  return (
    <View style={styles.containerDark}>
      <TouchableOpacity style={styles.buttonDark} onPress={onPress}>
        <Text style={{color: textColor, fontSize: fontSize, fontFamily}}>{titulo}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BotaoRecto;
