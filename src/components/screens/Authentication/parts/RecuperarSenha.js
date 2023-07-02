import React, { useState, useEffect } from 'react';
import {
  TextInput,
  View,
  Text,
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
  Image
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import FlashMessage, { showMessage } from 'react-native-flash-message';

import BotaoRecto from '../../../common/myCommon/BotaoRecto';
import BotaoVoltar from '../../../common/myCommon/BotaoVoltar';
import BotaoRectoDark from '../../../common/myCommon/BotaoRectoDark'
import BotaoVoltarDark from '../../../common/myCommon/VoltarBranco'
import ModoDark from '../style/dark/RecuperarSenhaScreenDark'
import styles from '../style/RecuperarSenhaEstilo';

import { useVerificarNumeroTelefoneQuery } from '../../../../features/user/services/userService';
import { useSendOtpMutation } from '../../../../features/user/services/userService';

const RecuperSenhaScreen = () => {
  const navigation = useNavigation();
  const [darkMode, setDarkMode] = useState(true); //Modo Dark and Ligth

  const [phone, setTelefone] = useState('');

  const { data: user, error, isLoading } = useVerificarNumeroTelefoneQuery(phone);
  const [sendOtp, { isLoading: isSendingOtp }] = useSendOtpMutation();

  useEffect(() => {
    if (error) {
      // showMessage({
      //   message: 'Erro',
      //   description: 'Ocorreu um erro ao verificar o número de telefone.',
      //   type: 'danger',
      // });
    }
  }, [error]);

  const handleBack = () => {
    navigation.navigate('Login');
  };

  const handleRecuperSenha = () => {
    navigation.navigate('OTP');
  };

  const handleConfirmar = () => {
    if (phone.trim() === '') {
      showMessage({
        message: 'Erro',
        description: 'Por favor, insira um número de telefone válido.',
        type: 'danger',
      });
      return;
    }

    verificarExistenciaTelefone();
  };

  const verificarExistenciaTelefone = () => {
    if (isLoading) {
      // Lógica para exibir um indicador de carregamento
    } else if (error) {
      console.error('Ocorreu um erro ao verificar o número de telefone:', error);
    } else {
      console.log(user);
      if (user.user !== null) {
        sendOtp(phone)
          .then(() => {
            showMessage({
              message: 'Sucesso',
              description: 'OTP enviado com sucesso!',
              type: 'success',
            });
            navigation.navigate('OTP', { phoneNumber: phone });
          })
          .catch((error) => {
            showMessage({
              message: 'Erro',
              description: 'Ocorreu um erro ao enviar o OTP.',
              type: 'danger',
            });
            console.error('Ocorreu um erro ao enviar o OTP:', error);
          });
      } else {
        showMessage({
          message: 'Número de telefone não existe',
          type: 'info',
        });
      }
    }
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <SafeAreaView style={darkMode ? ModoDark.container2 : styles.container2}>
      <View style={darkMode ? ModoDark.camada1 : styles.camada1}>
        <View style={darkMode ? ModoDark.camada1 : styles.container}>
          <StatusBar backgroundColor={darkMode ? '#232323' : '#D6001B'} />
          <View style={styles.cabecalho}>
            {darkMode ? (
              <BotaoVoltarDark onPress={handleBack}/> // Importe o componente BotaoVoltarDark corretamente
            ) : (
              <TouchableOpacity style={styles.buttonB} onPress={handleBack}>
                <Image
                  source={require('../../../../assets/icones/voltar_vermelho.png')}
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
            <View>
              <Text style={{ left: 15, color: darkMode ? '#fff': 'red',  marginTop: darkMode ? -25: -38, fontFamily: 'Poppins-Regular', fontSize: 14 }}>Voltar</Text>
            </View>
            <Text style={darkMode ? ModoDark.subtitle : styles.subtitle}>Você Tem Um Problema?</Text>
            <Text style={darkMode ? ModoDark.titulo : styles.titulo}>Não Te Preocupe!</Text>
          </View>
          <View style={styles.form}>
            <TextInput
              style={[styles.input, darkMode && ModoDark.input]}
              onChangeText={setTelefone}
              placeholder="Telefone"
              keyboardType="numeric"
              placeholderTextColor="#999999"
            />
            <View>
              <TouchableOpacity onPress={handleBack}>
                <Text style={[styles.esqueceu, darkMode && ModoDark.esqueceu]}>
                  Sem Problema? Faça Login
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.botaoContainer}>
              {darkMode ? (
                <BotaoRectoDark titulo={'Continuar'} onPress={handleConfirmar} />
              ) : (
                <BotaoRecto titulo={'Continuar'} onPress={handleConfirmar} />
              )}
            </View>
          </View>
        </View>
      </View>
      <FlashMessage position="top" />
    </SafeAreaView>
  );
};

export default RecuperSenhaScreen;
