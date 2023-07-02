import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Animated, Easing, Dimensions } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import MapaScreen from '../../Corrida/MapaScreen';
import MenuSuperiorLoading from './MenuSuperiorLoading';
import { useGetSolicitacoesAllQuery } from '../../../../features/servico/services/servicoService';
import LottieView from 'lottie-react-native';


const windowWidth = Dimensions.get('window').width;

const Loading = () => {

  const navigation = useNavigation();
  const route = useRoute();
  const solicitacaoId = route.params?.solicitacaoId;
  const [isLoading, setIsLoading] = useState(true);
  const [status, setStatus] = useState('pending');
  const [dotAnimation] = useState(new Animated.Value(0));
  const [activeIndex, setActiveIndex] = useState(0);

  const { data: solicitacoes, isLoading: solicitacoesLoading, isError, error, refetch } = useGetSolicitacoesAllQuery();

  useEffect(() => {
    const interval = setInterval(() => {
      refetch();

      if (isError) {
        console.log('Ocorreu um erro ao buscar as solicitações:', error);
      } else if (!solicitacoesLoading) {
        if (solicitacoes && Array.isArray(solicitacoes.solicitacoes)) {
          const solicitacaoEncontrada = solicitacoes.solicitacoes.find(
            (solicitacao) => solicitacao.id === solicitacaoId
          );

          if (solicitacaoEncontrada) {
            console.log('Solicitação encontrada:', solicitacaoEncontrada);

            if (solicitacaoEncontrada.status === 'pendente') {
              setStatus('pending');
            } else {
              setStatus('accepted');
            }
          } else {
            setStatus('accepted');
          }
        } else {
          console.log('A resposta da API não retornou um array válido de solicitações');
        }
      }
    }, 9000);

    return () => {
      clearInterval(interval);
    };
  }, [isError, solicitacoesLoading, solicitacoes, error, solicitacaoId, refetch]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (status === 'accepted') {
      console.log('solicitacao aceite');
      navigation.navigate('MotoristaScreen', { solicitacaoId });
    }
  }, [status, navigation]);

  const startDotAnimation = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(dotAnimation, {
          toValue: 1,
          duration: 500,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
        Animated.timing(dotAnimation, {
          toValue: 0,
          duration: 500,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
      ])
    ).start();
  };

  useEffect(() => {
    if (isLoading) {
      startDotAnimation();
    }
  }, [isLoading]);

  const renderDots = () => {
    const dots = [0, 1, 2, 3]; // Adicionando um ponto extra

    return (
      <View style={styles.dotsContainer}>
        {dots.map((index) => {
          const isActive = index === activeIndex;
          const dotStyle = isActive ? styles.activeDot : styles.dot;

          return <Animated.View key={index} style={[dotStyle, { opacity: dotAnimation }]} />;
        })}
      </View>
    );
  };


  return (
    <View style={{ flex: 1 }}>
      <MenuSuperiorLoading />
      <MapaScreen />
      {isLoading || status === 'pending' ? (
        <View style={styles.loadingContainer}>
          <Text style={styles.loadingText}>POR FAVOR AGUARDE {'\n'} UM INSTANTE</Text>
          <View style={{  marginBottom: -60, alignItems: 'center' }}>
            <View style={{ width: 400, height: 200 }}>
              <LottieView
                source={require('../../../../assets/json/LoadingDotts.json')}
                autoPlay
                loop
                style={{ flex: 1 }}
              />
            </View>
          </View>

        </View>
      ) : (
        <View style={styles.loadingContainer}>
          <Text style={styles.loadingText}>POR FAVOR AGUARDE {'\n'} UM INSTANTE</Text>
          <View style={{ marginBottom: -60, alignItems: 'center' }}>
            <View style={{ width: 40, height: 40, }}>
              <LottieView
                source={require('../../../../assets/json/LoadingDotts.json')}
                autoPlay
                loop
                style={{ flex: 1 }}
              />
            </View>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 485,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#fff',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderWidth: 1,
    borderColor: 'red',
    alignContent: 'center',
    alignItems: 'center'

  },
  loadingText: {
    fontSize: 24,
    color: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: -90,
    textAlign: 'center',
    // width: windowWidth - 40, // Ajuste a largura do texto
    fontFamily: 'Poppins-Bold'
  },

  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#D6001B',
    marginTop: 10,
    marginLeft: 5
  },
  activeDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#FFF',
    marginTop: 10,


  },
  dotsContainer: {
    flexDirection: 'row',
    marginRight: 20
  },

});

export default Loading;