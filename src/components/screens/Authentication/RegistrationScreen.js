import React, { useEffect, useState } from 'react';
import { TextInput, View, Text, StatusBar, SafeAreaView, ScrollView, KeyboardAvoidingView, Platform, TouchableOpacity } from 'react-native';
import { CheckBox } from 'react-native-elements';
import styles from './style/RegistroEstilo';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, Controller } from 'react-hook-form';
import { setToken } from '../../../features/authentication/actions/AuthAction';
import { useRegistroMutation } from '../../../features/user/services/userService';
import FlashMessage, { showMessage } from 'react-native-flash-message';

import BotaoVoltar from '../../common/myCommon/BotaoVoltar'
import BotaoRecto from '../../common/myCommon/BotaoRecto';
import BotaoVoltarDark from '../../common/myCommon/BotaoVoltarDark'
import BotaoRectoDark from '../../common/myCommon/BotaoRectoDark';
import stylesDark from './style/dark/RegistroScreenDark';

const RegistrationScreen = () => {
  const dispatch = useDispatch();
  const [registro, { isLoading, isError, data }] = useRegistroMutation();
  const navigation = useNavigation();
  const [checkBoxValue, setCheckBoxValue] = useState(true);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const [modoEscuro, setModoEscuro] = useState(true); // Estado para controlar o modo escuro

  const alternarModoEscuro = () => {
    setModoEscuro(!modoEscuro);
  };

  const schema = yup.object().shape({
    email: yup
      .string()
      .email('Email inválido')
      .required('Email é um campo obrigatório'),
    name: yup.string().required('Nome é um campo obrigatório'),
    phone: yup
      .string()
      .required('Telefone é um campo obrigatório')
      .length(9, 'Telefone deve ter exatamente 9 dígitos'),
    password: yup
      .string()
      .required('Senha é um campo obrigatório')
      .min(8, 'A senha deve ter no mínimo 8 caracteres'),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password')], 'As senhas não correspondem')
      .required('Confirmação de senha é obrigatória'),
  });

  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (formData) => {
    try {
      if (formData.password !== formData.confirmPassword) {
        throw new Error('As senhas não correspondem');
      }

      setShowSuccessMessage(true);
      onPress: () => {
        showMessage({
          message: 'Usuário cadastrado com sucesso',
          type: 'success',
          duration: 3000,
        });
        navigation.navigate('Home');
      }

      const result = await registro(formData).unwrap();
      console.log('Registro ok');

      dispatch(setToken(result.access_token));

    } catch (error) {
      setShowSuccessMessage(false);
      setShowErrorMessage(true);

      showMessage({
        message: 'Erro ao cadastrar usuário, Tente trocar o número ou email',
        type: 'danger',
        duration: 3000,
      });
      console.error('Registro falhou', error);
    }
  };

  const inputFields = [
    {
      name: 'name',
      placeholder: 'Nome Completo',
      keyboardType: 'default',
      secureTextEntry: false,
    },
    {
      name: 'phone',
      placeholder: 'Telefone',
      keyboardType: 'numeric',
      secureTextEntry: false,
    },
    {
      name: 'email',
      placeholder: 'Email',
      keyboardType: 'email-address',
      secureTextEntry: false,
    },
    {
      name: 'password',
      placeholder: 'Senha',
      keyboardType: 'default',
      secureTextEntry: true,
    },
    {
      name: 'confirmPassword',
      placeholder: 'Confirmar Senha',
      keyboardType: 'default',
      secureTextEntry: true,
    },
  ];

  const handleBack = () => {
    navigation.navigate('BemVindoScreen');
  };

  return (
    <SafeAreaView style={modoEscuro ? stylesDark.container2 : styles.container2}>
      <View style={modoEscuro ? stylesDark.camada1 : styles.camada1}>
        <ScrollView>
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={modoEscuro ? stylesDark.container : styles.container}
          >
            <StatusBar
              style={styles.status}
              barStyle="light-content"
              backgroundColor={modoEscuro ? '#232323' : "#D6001B"}
            />
            <View style={{ marginBottom: -43, left: -15 }}>
              {modoEscuro ? (
                <BotaoVoltarDark onPress={handleBack} />
              ) : (
                <BotaoVoltar onPress={handleBack} />
              )}
            </View>

            <View>
              <TouchableOpacity onPress={handleBack}>
                <Text style={{ left: 50, color: modoEscuro ? '#D6C11F' : 'red', marginTop: -31, fontSize: 14, fontFamily: 'Poppins-SemiBold' }}>Voltar</Text>
              </TouchableOpacity>
            </View>
            <View style={modoEscuro ? stylesDark.cabecalho : styles.cabecalho}>
              <Text style={modoEscuro ? stylesDark.titulo : styles.titulo}>Registo</Text>
              <Text style={modoEscuro ? stylesDark.subtitle : styles.subtitle}>Vamos começar</Text>
            </View>
            <View style={modoEscuro ? stylesDark.form : styles.form}>
              {inputFields.map((field, index) => (
                <View key={index}>
                  <Controller
                    control={control}
                    name={field.name}
                    render={({ field: { onChange, onBlur, value } }) => (
                      <TextInput
                        style={modoEscuro ? stylesDark.input : styles.input}
                        keyboardType={field.keyboardType}
                        secureTextEntry={field.secureTextEntry}
                        placeholder={field.placeholder}
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                        placeholderTextColor="#999999"
                      />
                    )}
                  />
                  {errors && errors[field.name] && (
                    <Text style={[styles.error, { color: 'red' }]}>
                      {errors && errors[field.name] && errors[field.name].message}
                    </Text>
                  )}
                </View>
              ))}
              <View style={styles.checkBoxContainer}>
                <View style={styles.checkBoxRow}>
                  <CheckBox
                    checked={checkBoxValue}
                    onPress={() => setCheckBoxValue(!checkBoxValue)}
                    containerStyle={styles.checkBox}
                    checkedColor={modoEscuro ? '#D6C11F' : '#000'}
                  />
                  <Text style={modoEscuro ? stylesDark.checkBoxLabel : styles.checkBoxLabel}>Termos e Condições</Text>
                </View>
                <Text style={modoEscuro ? stylesDark.checkBoxText : styles.checkBoxText}>
                  Ao se registrar em nosso aplicativo, você concorda com nossos termos e condições, incluindo o uso de seus dados pessoais para fornecer nossos serviços.
                </Text>
              </View>
              <View style={styles.botaoContainer}>
                {modoEscuro ? (
                  <BotaoRectoDark
                    titulo={'Confirmar Registo'}
                    onPress={handleSubmit(onSubmit)}
                    fontFamily={'Poppins-SemiBold'}
                  />
                ) : (
                  <BotaoRecto
                    titulo={'Confirmar Registo'}
                    onPress={handleSubmit(onSubmit)}
                    fontFamily={'Poppins-SemiBold'}
                  />
                )}
              </View>
            </View>
          </KeyboardAvoidingView>
        </ScrollView>
      </View>
      {showSuccessMessage && (
        <View>

        </View>
      )}
      <FlashMessage position="top" />
    </SafeAreaView>
  );
};

export default RegistrationScreen;
