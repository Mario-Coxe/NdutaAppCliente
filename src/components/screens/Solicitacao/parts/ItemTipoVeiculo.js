import React from 'react';
import { TouchableOpacity, View, Text, Image } from 'react-native';
import estilo from '../style/TipoVeiculoEstilo';
import ICONS from '../parts/iconTipoVeiculo';

const ItemTipoVeiculo = ({ iconName, text, handlePress, selectedItem }) => {
  const itemStyle = [
    estilo.estilo.BotaoEsquerdo,
    selectedItem === text ? estilo.estilo.selectedItem : null,
  ];

  return (
    <TouchableOpacity
      style={itemStyle}
      onPress={handlePress}
    >
      <View style={{ alignItems: 'center' }}>
        <Image source={ICONS[iconName]} style={estilo.estilo.img} />
        <Text style={estilo.estilo.texto}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ItemTipoVeiculo;
