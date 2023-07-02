/* eslint-disable react-native/no-inline-styles */
import React, { useState, useEffect, useRef } from 'react';
import { TextInput, View, Text, StatusBar, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import BotaoRecto from '../../common/myCommon/BotaoRecto';
import styles from './style/OTPScreenEstilo';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
import { useVerifyOtpMutation } from '../../../features/user/services/userService';

import ModoDark from './style/dark/OTPScreenDark'
import BotaoRectoDark from '../../common/myCommon/BotaoRectoDark'

const OtpScreen = () => {

  const otpInputs = useRef([]);
  const [tempoRestante, setTempoRestante] = useState(180);
  const navigation = useNavigation();

  const route = useRoute();
  const phoneNumber = route.params?.phoneNumber || '';
  //numero de telefone do usuario, a ser passado pelo RecuperarSenha
  //console.log(phoneNumber)
  const [verifyOtp, { isLoading: isVerifyingOtp }] = useVerifyOtpMutation();

  //console.log(phoneNumber)

  const handleOtpValueChange = (text, index) => {
    const newOtpValues = [...otpValues];
    newOtpValues[index] = text;

    setOtpValues(newOtpValues);

    // Mover o foco para o próximo TextInput ou para o TextInput anterior
    if (text !== '') {
      const nextIndex = index + 1;
      if (otpInputs.current[nextIndex]) {
        otpInputs.current[nextIndex].focus();
      } else {
        otpInputs.current[index].blur();
      }
    } else {
      const previousIndex = index - 1;
      if (otpInputs.current[previousIndex]) {
        otpInputs.current[previousIndex].focus();
      }
    }
  };

  const handleKeyboardDone = () => {
    otpInputs.current[5]?.blur();
  };


  const [otpValues, setOtpValues] = useState(['', '', '', '', '', '']);

  const handlNovaSenha = async () => {
    const otpValue = otpValues.join(''); // Concatenação dos valores dos TextInput

    try {
      const response = await verifyOtp({
        telefone: phoneNumber, // phoneNumber vindo do parâmetro da rota
        otp: otpValue,
      });

      // Verificar a resposta do servidor
      if (response.data?.status === 1) {
        console.log('OTP verificado com sucesso!');
        navigation.navigate('NovaSenha', { phoneNumber: phoneNumber });
      } else {
        console.error('Código OTP inválido.');
      }
    } catch (error) {
      console.error('Ocorreu um erro ao verificar o OTP:', error);
    }
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTempoRestante(tempo => tempo - 1);
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (tempoRestante === 0) {
      //Tenho de determinar o que vai acontecer
    }
  }, [tempoRestante]);


  const handleVoltar = () => {
    navigation.navigate('RecuperSenha');
  };

  const [modoEscuro, setModoEscuro] = useState(true); // Estado para controlar o modo escuro

  const alternarModoEscuro = () => {
    setModoEscuro(!modoEscuro);
  };

  return (
    <SafeAreaView style={modoEscuro ? ModoDark.container2 : styles.container2}>
      <View style={modoEscuro ? ModoDark.camada1 : styles.camada1}>
        <View style={modoEscuro ? ModoDark.container : styles.container}>
          <StatusBar
            style={styles.status}
            barStyle="light-content"
            backgroundColor={modoEscuro ? '#232323' : "#D6001B"}
          />
          {modoEscuro ? (
            <TouchableOpacity style={styles.buttonB} onPress={handleVoltar}>
              <Image
                source={require('../../../assets/icones/voltarBranco.png')}
                style={{
                  width: '50%',
                  height: 30,
                  justifyContent: 'center',
                  alignItems: 'center',
                  resizeMode: 'contain',
                  right: 0,
                }}
              />
            </TouchableOpacity> // Importe o componente BotaoVoltarDark corretamente
          ) : (
            <TouchableOpacity style={styles.buttonB} onPress={handleVoltar}>
              <Image
                source={require('../../../assets/icones/voltar_vermelho.png')}
                style={{
                  width: '50%',
                  height: 30,
                  justifyContent: 'center',
                  alignItems: 'center',
                  resizeMode: 'contain',
                  right: 0,
                }}
              />
            </TouchableOpacity>
          )}
          <Text style={{ color: modoEscuro ? '#fff' : '#D6001B', marginTop: -25, left: 70, fontFamily: 'Poppins-Regular' }}>Voltar</Text>
          <View style={styles.cabecalho}>
            <Text style={modoEscuro ? ModoDark.titulo : styles.titulo}>Autenticação</Text>
          </View>
          <Text style={modoEscuro ? ModoDark.subtitle : styles.subtitle}>
            Insira o código de 6-dígitos que foi enviado para{'\n'}
            O número <Text style={{ color: modoEscuro ? '#D6C11F' : '#999999' }}>+244 {phoneNumber}.{' '}</Text>
            <Text style={{ color: modoEscuro ? '#999999' : '#D6001B' }}>
              {' '}
              Você inseriu o número {'\n'}Correto?{' '}
            </Text>
          </Text>

          <SafeAreaView style={modoEscuro ? ModoDark.container : styles.container}>
            <View style={{ flexDirection: 'row' }}>
              <View>
                <TextInput
                  ref={ref => otpInputs.current[0] = ref}
                  value={otpValues[0]}
                  onChangeText={(text) => handleOtpValueChange(text, 0)}
                  style={modoEscuro ? ModoDark.input : styles.input}
                  maxLength={1}
                  keyboardType="numeric"
                  returnKeyType="next"
                  onSubmitEditing={() => otpInputs.current[1]?.focus()}
                  blurOnSubmit={false}
                  placeholderTextColor={modoEscuro ? '#000' : '#D6001B'}
                  placeholder='.'
                />
              </View>
              <View>
                <TextInput
                  ref={ref => otpInputs.current[1] = ref}
                  value={otpValues[1]}
                  onChangeText={(text) => handleOtpValueChange(text, 1)}
                  style={modoEscuro ? ModoDark.input : styles.input}
                  maxLength={1}
                  keyboardType="numeric"
                  returnKeyType="next"
                  onSubmitEditing={() => otpInputs.current[1]?.focus()}
                  blurOnSubmit={false}
                  placeholderTextColor={modoEscuro ? '#000' : '#D6001B'}
                  placeholder='.'
                />
              </View>
              <View>
                <TextInput
                  ref={ref => otpInputs.current[2] = ref}
                  value={otpValues[2]}
                  onChangeText={(text) => handleOtpValueChange(text, 2)}
                  style={modoEscuro ? ModoDark.input : styles.input}
                  maxLength={1}
                  keyboardType="numeric"
                  returnKeyType="done"
                  onSubmitEditing={() => otpInputs.current[2]?.focus()}
                  placeholderTextColor={modoEscuro ? '#000' : '#D6001B'}
                  placeholder='.'
                />
              </View>
              <View>
                <TextInput
                  ref={ref => otpInputs.current[3] = ref}
                  value={otpValues[3]}
                  onChangeText={(text) => handleOtpValueChange(text, 3)}
                  style={modoEscuro ? ModoDark.input : styles.input}
                  maxLength={1}
                  keyboardType="numeric"
                  returnKeyType="done"
                  onSubmitEditing={() => otpInputs.current[3]?.focus()}
                  placeholderTextColor={modoEscuro ? '#000' : '#D6001B'}
                  placeholder='.'
                />
              </View>
              <View>
                <TextInput
                  ref={ref => otpInputs.current[4] = ref}
                  value={otpValues[4]}
                  onChangeText={(text) => handleOtpValueChange(text, 4)}
                  style={modoEscuro ? ModoDark.input : styles.input}
                  maxLength={1}
                  keyboardType="numeric"
                  returnKeyType="done"
                  onSubmitEditing={() => otpInputs.current[4]?.focus()}
                  placeholderTextColor={modoEscuro ? '#000' : '#D6001B'}
                  placeholder='.'
                />
              </View>
              <View>
                <TextInput
                  ref={ref => otpInputs.current[5] = ref}
                  value={otpValues[5]}
                  onChangeText={(text) => handleOtpValueChange(text, 5)}
                  style={modoEscuro ? ModoDark.input : styles.input}
                  maxLength={1}
                  keyboardType="numeric"
                  returnKeyType="done"
                  onSubmitEditing={() => otpInputs.current[5]?.focus()}
                  placeholderTextColor={modoEscuro ? '#000' : '#D6001B'}
                  placeholder='.'
                />
              </View>
            </View>
            <View>
              <Text style={modoEscuro ? ModoDark.Reenviarcodigo : styles.Reenviarcodigo}>
                Reenvie o código em{' '}
                <Text style={{ color: modoEscuro ? "#D6C11F" : 'red' }}>
                  {tempoRestante} {tempoRestante === 1 ? 'segundo' : 'segundos'}
                </Text>
              </Text>
            </View>
            <View style={styles.botaoContainer}>
              {modoEscuro ? (
                <BotaoRectoDark titulo={'Confirmar'} onPress={handlNovaSenha} />
              ) : (
                <BotaoRecto titulo={'Confirmar'} onPress={handlNovaSenha} />
              )}
            </View>
          </SafeAreaView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default OtpScreen;
