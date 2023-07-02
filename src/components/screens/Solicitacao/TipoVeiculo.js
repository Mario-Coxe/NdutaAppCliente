import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';
import estilo from './style/TipoVeiculoEstilo';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useGetTipoVeiculosAllQuery } from '../../../features/servico/services/servicoService';
import { useSelector } from 'react-redux';
import ItemTipoVeiculo from './parts/ItemTipoVeiculo';
import Mapa from '../Corrida/MapaScreen';
import MenuSuperior from '../Home/parts/MenuSuperiorLoading';

const App = ({ tipoServico }) => {
  const navigation = useNavigation();
  const route = useRoute();
  const servicoId = route.params?.servicoId || 0;

  const [selectedItem, setSelectedItem] = useState(null);
  const token = useSelector(state => state.auth.token);

  const { data: categoriaServico = [] } = useGetTipoVeiculosAllQuery(null, {
    skip: !token,
  });

  const itemSelecionado = tipoVeiculoId => {
    setSelectedItem(tipoVeiculoId);
    navigation.navigate('InserirEndereco', {
      tipoVeiculoId: tipoVeiculoId,
      idServico: servicoId,
    });
  };

  const renderContent = () => {
    const linhas = Math.ceil(categoriaServico.length / 2); // Calcular o número de linhas necessárias

    return (
      <View style={{ flex: 1 }}>
        <MenuSuperior />
        <Mapa />
        <View style={estilo.estilo.modalContainer}>
          <View style={estilo.estilo.GrupoBotao}>
            {/* Mapear as linhas */}
            {[...Array(linhas)].map((_, linhaIndex) => (
              <View key={linhaIndex} style={estilo.estilo.GrupoBotaoLinha}>
                {/* Mapear os itens em cada linha */}
                {categoriaServico
                  .slice(linhaIndex * 2, linhaIndex * 2 + 2) // Pegar os itens da linha atual
                  .map(veiculo => (
                    <ItemTipoVeiculo
                      key={veiculo.id}
                      iconName={veiculo?.icon}
                      text={veiculo?.tipo_veiculo}
                      handlePress={() => itemSelecionado(veiculo.id)}
                      selectedItem={selectedItem}
                    />
                  ))}
              </View>
            ))}
          </View>
        </View>
      </View>
    );
  };

  return <>{renderContent()}</>;
};

export default App;
