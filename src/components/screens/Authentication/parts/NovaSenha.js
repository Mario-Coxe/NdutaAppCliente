import React, { useState } from 'react';
import { TextInput, View, Text, StatusBar, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useNewPasswordMutation } from '../../../../features/user/services/userService';
import BotaoRecto from '../../../common/myCommon/BotaoRecto';
import BotaoVoltar from '../../../common/myCommon/BotaoVoltar';
import styles from '../style/ConfirmarSenhaEstilo';
import { useRoute } from '@react-navigation/native';

import ModoDark from '../style/dark/NovaSenhaScreenDark'
import BotaoRectoDark from '../../../common/myCommon/BotaoRectoDark'

const NewPasswordScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const phoneNumber = route.params?.phoneNumber || '';

  const [password, setPassword] = useState('');
  const [updatePassword, { isLoading, isError }] = useNewPasswordMutation();

  const handleUpdateClick = () => {
    updatePassword({ password, phone: phoneNumber })
      .unwrap()
      .then((data) => {
        console.log('Dados Actualizado')
        navigation.navigate('Login');
      })
      .catch((error) => {
        console.log('Erro ao actualizar a password:', error);
      });
  };

  const handleBack = () => {
    navigation.navigate('OTP');
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
          <View style={styles.cabecalho}>
            {modoEscuro ? (
              <TouchableOpacity style={styles.buttonB} onPress={handleBack}>
                <Image
                  source={require('../../../../assets/icones/voltarBranco.png')}
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
              <Text style={{ left: 15, color: modoEscuro ? '#fff' : 'red', marginTop: -38, fontWeight: 'bold', fontSize: 14 }}>Voltar</Text>
            </View>
            <Text style={modoEscuro ? ModoDark.subtitle : styles.subtitle}>Redefina a sua senha</Text>
            <Text style={modoEscuro ? ModoDark.titulo : styles.titulo}>Aqui tudo é fácil!</Text>
          </View>
          <View style={styles.form}>
            <TextInput
              style={modoEscuro ? ModoDark.input : styles.input}
              onChangeText={setPassword}
              placeholder="Nova Senha"
              placeholderTextColor="#999999"
              secureTextEntry={true}
            />
            <TextInput
              style={modoEscuro ? ModoDark.input : styles.input}
              onChangeText={setPassword}
              placeholder="Confirmar Senha"
              placeholderTextColor="#999999"
              secureTextEntry={true}
            />
            <View style={styles.botaoContainer}>
              {modoEscuro ? (
                <BotaoRectoDark titulo={'Continuar'} onPress={handleUpdateClick} />
              ) : (
                <BotaoRecto titulo={'Continuar'} onPress={handleUpdateClick} />
              )}
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default NewPasswordScreen;
