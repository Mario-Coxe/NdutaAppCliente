import React from 'react';
import { View, SafeAreaView, StatusBar, Text } from 'react-native';
import BotaoVoltar from '../../../components/common/myCommon/BotaoVoltar';
import Historico from './HojeSemanal';
import { useNavigation } from '@react-navigation/native';
import styles from './styles/HistoryScreen'

const HistoryScreen = () => {
  const navigation = useNavigation();
  Voltar = () => {
    navigation.navigate('Home');
  }
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={'#D6001B'} />
      <View style={styles.camada1}>
        <BotaoVoltar onPress={Voltar} />
        <View style={styles.historicoContainer}>
          <Historico />
        </View>
      </View>
    </SafeAreaView>
  );
};
export default HistoryScreen;
