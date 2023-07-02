import React, { useState } from 'react';
import {
  TextInput,
  View,
  Text,
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Image
} from 'react-native';
import { useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormProvider, Controller, useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { authenticate } from '../../../features/authentication/actions/authThunk';
import 'react-native-flash-message';
import { showMessage } from '../../../features/authentication/actions/authThunk';

import BotaoRecto from '../../common/myCommon/BotaoRecto';
import BotaoRectoDark from '../../common/myCommon/BotaoRectoDark';
import styles from './style/LoginEstilo';
import ModoDark from './style/dark/LoginScreenDark';

const LoginScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const isLoading = useSelector(state => state.auth.status);
  const loggedIn = useSelector(state => state.auth.loggedIn);
  const error = useSelector(state => state.auth.error);
  const [errorMessage, setErrorMessage] = useState('');

  const schema = yup.object().shape({
    telefone: yup
      .string()
      .min(9, 'O telefone deve ter pelo menos 9 dígitos.')
      .max(9, 'O telefone deve ter apenas 9 dígitos')
      .required('Por favor, insira seu telefone.'),
    password: yup
      .string()
      .min(5, 'A senha deve ter pelo menos 5 caracteres.')
      .required('Por favor, insira sua senha.'),
  });

  const methods = useForm({
    resolver: yupResolver(schema),
  });

  const handleForgotPasswordClick = () => {
    navigation.navigate('RecuperSenha');
  };

  const onSubmit = async credentials => {
    try {
      dispatch(authenticate(credentials));
      if (loggedIn) {
        navigation.navigate('Home');
      }
    } catch (err) {
      // Chamar a função showMessage onde desejar exibir a mensagem
      showMessage({
        message: 'Erro, Dados não encontrados!',
        type: 'info',
        duration: 3000, // duração em milissegundos, opcional
      });

      console.error('Authentication failed');
      setErrorMessage('Credenciais de acesso incorretas. Por favor, tente novamente.');
    }
  };

  const [modoEscuro, setModoEscuro] = useState(true); // Estado para controlar o modo escuro

  const alternarModoEscuro = () => {
    setModoEscuro(!modoEscuro);
  };

  const inputFields = [
    {
      name: 'telefone',
      placeholder: 'Telefone',
      keyboardType: 'default',
      secureTextEntry: false,
      defaultValue: '952602436',
    },
    {
      name: 'password',
      placeholder: 'Password',
      keyboardType: 'default',
      defaultValue: '123456789',
      secureTextEntry: true,
    },
  ];

  return (
    <SafeAreaView style={[styles.container2, modoEscuro && ModoDark.container2]}>
      <View style={[styles.camada1, modoEscuro && ModoDark.camada1]}>
        <View style={[styles.container, modoEscuro && ModoDark.container]}>
          <StatusBar
            backgroundColor={modoEscuro ? '#232323' : '#D6001B'}
            barStyle={'light-content'}
          />
          <View style={[styles.cabecalho, modoEscuro && ModoDark.cabecalho]}>
            <Text style={[styles.titulo, modoEscuro && ModoDark.titulo]}>Faça Login</Text>
            <Text style={[styles.subtitle, modoEscuro && ModoDark.subtitle]}>Vamos começar</Text>
          </View>
          <FormProvider {...methods}>
            <View style={[styles.form, modoEscuro && ModoDark.form]}>
              {inputFields.map((field, index) => (
                <Controller
                  key={index}
                  control={methods.control}
                  name={field.name}
                  defaultValue={field.defaultValue}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <View>
                      <TextInput
                        style={[styles.input, modoEscuro && ModoDark.input]}
                        keyboardType={field.keyboardType}
                        secureTextEntry={field.secureTextEntry}
                        placeholder={field.placeholder}
                        onBlur={onBlur}
                        onChangeText={value => {
                          onChange(value);
                          setErrorMessage('');
                        }}
                        value={value}
                        placeholderTextColor={modoEscuro ? ModoDark.inputPlaceholderColor : '#999999'}
                      />
                      <ErrorMessage
                        errors={methods.errors}
                        name={field.name}
                        render={({ message }) => (
                          <Text style={[styles.error, modoEscuro && ModoDark.error]}>{message}</Text>
                        )}
                      />
                    </View>
                  )}
                />
              ))}
              {errorMessage !== '' && (
                <Text style={[styles.error, modoEscuro && ModoDark.error]}>{errorMessage}</Text>
              )}
              {error && Object.keys(error).length > 0 && (
                <Text style={[styles.error, modoEscuro && ModoDark.error]}>{error.message}</Text>
              )}
              <View style={[styles.botaoContainer, modoEscuro && ModoDark.botaoContainer]}>
                {modoEscuro ? (
                  <BotaoRectoDark
                    titulo={isLoading ? 'Carregando...' : 'Acessar'}
                    onPress={methods.handleSubmit(onSubmit)}
                  />
                ) : (
                  <BotaoRecto
                    titulo={isLoading ? 'Carregando...' : 'Acessar'}
                    onPress={methods.handleSubmit(onSubmit)}
                  />
                )}
              </View>
              <View style={[styles.entrarCom, modoEscuro && ModoDark.entrarCom]}>
                <Text>
                  <Text style={{ color: modoEscuro ? '#fff' : '#000', marginTop: -10 }}>________________</Text>
                  <Text style={{ color: modoEscuro ? '#fff' : '#000', fontFamily: 'Poppins-Regular', fontSize: 14 }}>Ou continue com</Text>
                  <Text style={{ color: modoEscuro ? '#fff' : '#000', marginTop: -10 }}>________________</Text>
                </Text>
              </View>

              <View style={[styles.buttonContainer, modoEscuro && ModoDark.buttonContainer]}>
                <TouchableOpacity style={[styles.button, styles.googleButton, modoEscuro && ModoDark.googleButton]}>
                  <Image source={require('../../../assets/icones/google.png')} style={styles.googleIcon} />
                  <Text style={styles.buttonText}>Google</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, styles.facebookButton, modoEscuro && ModoDark.facebookButton]}>
                  <Icon name="facebook-f" size={20} color="#406cc8" />
                  <Text style={styles.buttonText}>Facebook</Text>
                </TouchableOpacity>
              </View>
            </View>
          </FormProvider>
          <TouchableWithoutFeedback onPress={handleForgotPasswordClick}>
            <Text style={[styles.esqueceu, modoEscuro && ModoDark.esqueceu]}>Esqueceu sua senha?</Text>
          </TouchableWithoutFeedback>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
