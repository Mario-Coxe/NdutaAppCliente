import React, { useState } from 'react';
import {
  View,
  Image,
  Text,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import styles, { ModalStyles } from './style/BemVindoEstilo';
import { Dimensions } from 'react-native';
import { setMostrarVisible } from '../../../features/common/CommonAction';
import Modal from 'react-native-modal';

import ModoDark from './style/dark/BemVindoScreen';



const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const BemVindoScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [isBottomSheetVisible, setIsBottomSheetVisible] = useState(false);

  const openBottomSheet = () => {
    setIsBottomSheetVisible(true);
  };

  const closeBottomSheet = () => {
    setIsBottomSheetVisible(false);
  };

  const circuloEstadosDark = [
    { backgroundColor: '#D6C11F', color: '#fff' },
    { backgroundColor: '#D6C11F', color: '#fff' },
    { backgroundColor: '#D6C11F', color: '#fff' }
  ];


  const [circuloEstados, setCirculoEstados] = useState([
    { backgroundColor: '#fff', color: '#D6001B' },
    { backgroundColor: '#fff', color: '#D6001B' },
    { backgroundColor: '#fff', color: '#D6001B' }
  ]);

  const handleClick = (index) => {
    const newCirculoEstados = [...circuloEstados];
    newCirculoEstados[index] = modoEscuro ? { ...circuloEstadosDark[index] } : { backgroundColor: '#D6001B', color: '#fff' };
    setCirculoEstados(newCirculoEstados);

    setTimeout(() => {
      newCirculoEstados[index] = modoEscuro ? { ...circuloEstadosDark[index] } : { backgroundColor: '#fff', color: '#D6001B' };
      setCirculoEstados(newCirculoEstados);
      setIsBottomSheetVisible(false);
    }, 500);
  };



  const [MostrarTelaLogin, setMostrarTelaLogin] = useState(false);
  const [ModalVisible, setModalVisible] = useState(false);
  const [modoEscuro, setModoEscuro] = useState(true); // Estado para controlar o modo escuro

  const alternarModoEscuro = () => {
    setModoEscuro(!modoEscuro);
  };

  const handleRegistrationClick = () => {
    navigation.navigate('Registration');
  };

  const handleLoginClick = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={[styles.container, modoEscuro && ModoDark.container]}>
      <StatusBar barStyle={modoEscuro ? 'light-content' : 'dark-content'} backgroundColor={modoEscuro ? '#000' : '#D6001B'} />

      <View style={styles.imageContainer}>
        <Image
          source={require('../../../assets/images/splash2.png')}
          style={styles.image}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Seja BemVindo!</Text>
        <View style={styles.subtitleContainer}>
          <Text style={styles.subtitle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
          </Text>
        </View>

      </View>
      <View style={styles.buttonsContainer}>
        <View style={[styles.buttonContainer, { marginBottom: -45 }]}>
          <TouchableOpacity
            style={[styles.buttonRegistrar, modoEscuro && ModoDark.buttonRegistrar]}
            onPress={handleRegistrationClick}
          >
            <Text style={[styles.buttonTextRegistrar, modoEscuro && ModoDark.buttonTextRegistrar]}>Registrar</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={[styles.button, modoEscuro && ModoDark.button]}
          onPress={handleLoginClick}
        >
          <Text style={[styles.buttonTextAcessar, modoEscuro && ModoDark.buttonTextAcessar]}>Acessar</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.idiomaContainer}>
        <TouchableOpacity onPress={openBottomSheet} style={{ width: 50 }}>
          <Text style={[styles.idiomaText, modoEscuro && ModoDark.idiomaText]}>Idioma</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={openBottomSheet}>
          <Text style={[styles.selectedIdiomaText, modoEscuro && ModoDark.selectedIdiomaText]}>Português</Text>
        </TouchableOpacity>
      </View>

      <Modal isVisible={isBottomSheetVisible} onBackdropPress={closeBottomSheet} style={[ModalStyles.bottomSheet, modoEscuro && ModoDark.bottomSheet]} backdropOpacity={0.0}>
        <View style={[ModalStyles.bottomSheetContent, modoEscuro && ModoDark.bottomSheetContent]}>
          <Text style={{ alignSelf: 'center', fontFamily: 'Poppins-Light', fontSize: 14, color: modoEscuro ? 'white' : 'white' }}>Selecione Um Idioma</Text>
          <View style={[styles.modalContent]}>
            <View style={{ flexDirection: 'row', alignContent: 'space-around', right: 45, top: 60, fontFamily: 'Poppins-Regular' }}>
              <View>
                <TouchableOpacity onPress={() => handleClick(0)}>
                  <Text style={[styles.modalCirculoLetra, circuloEstados[0], modoEscuro && ModoDark.modalCirculoLetra]}>P</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.modalButton, modoEscuro && ModoDark.modalButton]}>
                  <Text style={[styles.modalButtonText, modoEscuro && ModoDark.modalButtonText]}>Português</Text>
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity onPress={() => handleClick(1)}>
                  <Text style={[styles.modalCirculoLetra, circuloEstados[1], modoEscuro && ModoDark.modalCirculoLetra]}>E</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.modalButton, modoEscuro && ModoDark.modalButton]}>
                  <Text style={[styles.modalButtonText, modoEscuro && ModoDark.modalButtonText]}>Inglês</Text>
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity onPress={() => handleClick(2)}>
                  <Text style={[styles.modalCirculoLetra, circuloEstados[2], modoEscuro && ModoDark.modalCirculoLetra]}>F</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.modalButton, modoEscuro && ModoDark.modalButton]}>
                  <Text style={[styles.modalButtonText, modoEscuro && ModoDark.modalButtonText]}>Francês</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Modal>

    </View>
  );
};

export default BemVindoScreen;
