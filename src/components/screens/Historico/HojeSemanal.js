import React from 'react';
import { View, Text, SafeAreaView, Image, } from 'react-native';
import MyButton from './botao/VerificacaoView';
import Separador from '../../common/myCommon/separador';
import Pagamentos from './Pagamentos';
import { ScrollView } from 'react-native-gesture-handler';
import { LineChart } from 'react-native-chart-kit';
import styles from './styles/HojeSemanal'


const meses = [
  'Janeiro',
  'Fevereiro',
  'Março',
  'Abril',
  'Maio',
  'Junho',
  'Julho',
  'Agosto',
  'Setembro',
  'Outubro',
  'Novembro',
  'Dezembro',
];

const diasDaSemana = [
  'Domingo',
  'Segunda',
  'Terça',
  'Quarta',
  'Quinta',
  'Sexta',
  'Sabado',
];

// Dados do gráfico
const data = {
  labels: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex'], // Dias da semana
  datasets: [
    {
      data: [10, 20, 30, 40, 50], // Valores do gráfico
    },
  ],
};

const hoje = new Date();
const diaDaSemana = diasDaSemana[hoje.getDay()];
const dia = hoje.getUTCDate();
const mes = meses[hoje.getMonth()];
const ano = hoje.getFullYear();

const Historico = () => {
  return (
    <View style={styles.container}>
      <View style={styles.Camada1}>
        <MyButton />
        <Hoje />
      </View>
      <SafeAreaView style={styles.camada2}>
        <ScrollView>
          <Pagamentos />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

// const Semanal = () => (
//   <View>
//     <View style={styles.weekDaysRow}>
//       {diasDaSemana.map((day, index) => (
//         <Text key={index}>{day[0]}</Text>
//       ))}
//     </View>
//     <View style={styles.graphRow}>
//       {diasDaSemana.map((_, index) => (
//         <View
//           key={index}
//           style={[styles.graphBar, index === 4 && styles.graphBarActive]}
//         />
//       ))}
//     </View>
//     <Separador />
//     <Resumo />
//   </View>
// );

const Hoje = () => (
  <View>
    <View style={styles.dateRow}>
      <Text
        style={styles.dateText}>{`${diaDaSemana}, ${dia} ${mes} ${ano}`}</Text>
    </View>
    <View style={styles.balanceRow}>
      <Image source={require('../../../assets/icones/coins.png')} style={styles.imgDolar} />
      <Text style={styles.balanceText}>54,75</Text>
    </View>
    <Resumo />
  </View>
);

const SemanalHistorico = () => (
  <View>
    <View style={styles.dateRow}>
      <Text style={styles.dateText}>{`${diaDaSemana}, ${dia} ${mes} ${ano}`}</Text>
    </View>
    <View style={styles.balanceRow}>
      <Image source={require('../../../assets/icones/coins.png')} style={styles.imgDolar} />
      <Text style={styles.balanceText}>58</Text>
    </View>
    <View style={styles.chartContainer}>
      <LineChart
        data={data}
        width={400}
        height={220}
        chartConfig={{
          backgroundColor: '#DADEE3',
          backgroundGradientFrom: '#DADEE3',
          backgroundGradientTo: '#DADEE3',
          decimalPlaces: 0,
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        }}
        style={styles.chart}
      />
    </View>
    <Resumo />
  </View>
);

const Resumo = () => (
  <View style={styles.summaryRow}>
    <View style={[styles.summaryColumn, styles.borderRight]}>
      <Text style={styles.summaryValue}>15</Text>
      <Text>Viagens</Text>
    </View>
    <View style={[styles.summaryColumn, styles.borderRight]}>
      <Text style={styles.summaryValue}>08:30</Text>
      <Text>Horas Online</Text>
    </View>
    <View style={styles.summaryColumn}>
      <Text style={styles.summaryValue}>3.000</Text>
      <Text>CAsh Trip</Text>
    </View>
  </View>

);

export default Historico;
