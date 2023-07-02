import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';
import estilo from '../Home/style/TipoServicoEstilo';
import { useGetServicosAllQuery } from '../../../features/servico/services/servicoService';
import ItemServico from './parts/ItemServico';
import { useNavigation } from '@react-navigation/native';
// Importando todos

const App = () => {
  const navigation = useNavigation();
  const token = useSelector(state => state.auth.token);
  const [selectedItem, setSelectedItem] = useState(null);

  const { data: servicos = [] } = useGetServicosAllQuery(null, {
    skip: !token,
  });

  console.log(servicos);
  const itemSelecionado = servicoId => {
    console.log('Item selected:', servicoId);
    setSelectedItem(servicoId);
    navigation.navigate('TipoVeiculo', { servicoId: servicoId });
  };

  const renderContent = () => {
    return (
      <View style={estilo.estilo.modalContainer}>
        <View style={estilo.estilo.GrupoBotao}>
          <View style={estilo.estilo.GrupoBotaoColuna}>
            {servicos && servicos.length > 0 ? (
              <View style={estilo.estilo.GrupoBotao}>
                <View style={estilo.estilo.GrupoBotaoColuna}>
                  {servicos.slice(2, 4).map((servico, index) => (
                    <View key={index} style={estilo.estilo.BotaoEsquerdo}>
                      <ItemServico
                        iconName={servico?.icon}
                        text={servico?.nome}
                        handlePress={() => itemSelecionado(servico.id)}
                        selectedItem={selectedItem}
                      />
                    </View>
                  ))}
                </View>
                <View style={estilo.estilo.GrupoBotaoColuna}>
                  {servicos.slice(0, 2).map((servico, index) => (
                    <View key={index} style={estilo.estilo.BotaoEsquerdo}>
                      <ItemServico
                        iconName={servico?.icon}
                        text={servico?.nome}
                        handlePress={() => itemSelecionado(servico.id)}
                        selectedItem={selectedItem}
                      />
                    </View>
                  ))}
                </View>
              </View>
            ) : (
              <Text style={estilo.estilo.texto}>Nenhum serviço disponível</Text>
            )}
          </View>
        </View>
      </View>
    );
  };

  return <>{renderContent()}</>;
};

export default App;
