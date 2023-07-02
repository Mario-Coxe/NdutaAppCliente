import React from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import styles from './styles/PagamentosEstilos';
import usePagamentos from './parts/usePagamentos';
import Separador from '../../common/myCommon/separador';

const Pagamentos = () => {
  const { updatedData } = usePagamentos(); // Chama a função usePagamentos para obter os dados atualizados

  const renderItem = ({ item }) => (
    <SafeAreaView>
      <View style={styles.item}>
        <View style={styles.row}>
          <Text style={styles.time}>{item.tempo}</Text>
        </View>
        <Text style={styles.title}>{item.Nome}</Text>
        <Text style={styles.sms}>{item.MetodoPagamento}</Text>
        <Text style={styles.valor}>{item.valor}</Text>
      </View>
      <Separador />
    </SafeAreaView>
  );

  if (updatedData.length === 0) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#D6001B" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={updatedData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default Pagamentos;
