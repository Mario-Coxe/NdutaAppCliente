import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StatusBar, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Modal from 'react-native-modal';
import { TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { styles, modalStyles } from '../../Home/style/MenuSuperiorHomeStyle';
import { stylesDark, modalStylesDark } from '../../Home/style/dark/MenuSuperiorScreenDark';
import { handleTornarMotorista, shareContent, handleAvaliarAppPress, handleSiteNduta, handleSOS } from '../../Home/parts/Functions/functions';
import { handleEditPerfil, handleChat, handleHistorico, handleConfiguracao, handleVoltarHome } from '../../Home/parts/navigationFunctions/navigations';

import ModalSuporte from '../../Home/parts/ModalSuporte';

export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [mensagem, setMensagem] = useState('');

  const openModal = () => {
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  const [isBottomSheetVisible, setIsBottomSheetVisible] = useState(false);

  const openBottomSheet = () => {
    setIsBottomSheetVisible(true);
  };

  const closeBottomSheet = () => {
    setIsBottomSheetVisible(false);
  };

  const navigation = useNavigation();
  const [menuVisible, setMenuVisible] = useState(false);

  const handleMenuItemPress = (item) => {
    console.log(`Pressed ${item}`);

    setMenuVisible(false);
    navigation.navigate(item);
  };


  const [modoEscuro, setModoEscuro] = useState(false); // Estado para controlar o modo escuro

  const alternarModoEscuro = () => {
    setModoEscuro(!modoEscuro);
  };

  return (
    <View style={modoEscuro ? stylesDark.container : styles.container}>
      <StatusBar backgroundColor={modoEscuro ? '#292929' : "white"} barStyle="dark-content" />
      <View style={{ flexDirection: 'row' }}>
        <TouchableWithoutFeedback onPress={() => handleVoltarHome(navigation)} >
          <Image source={require('../../../../assets/icones/voltar.png')}
            style={styles.VoltarImg}
          />
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={handleMenuItemPress.bind(this, 'nduta')}>
          <Image
            source={require('../../../../assets/images/ndutaVermelho.png')}
            style={styles.logo}
          />
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={openBottomSheet}>
          <Icon
            name="sliders" size={30}
            style={styles.icon}
          />
        </TouchableWithoutFeedback>
      </View>
      <Modal isVisible={isBottomSheetVisible} onBackdropPress={closeBottomSheet} style={modalStyles.bottomSheet} animationIn={'slideInRight'} animationOut={'slideOutRight'} animationOutTiming={1000} animationInTiming={1000} overlayOpacity={0.1}>
        <View style={modalStyles.bottomSheetContent}>
          <View style={modalStyles.menuItemsContainer}>
            <Text style={styles.menuTitle}>Menu</Text>
            <TouchableOpacity onPress={() => handleEditPerfil(navigation, setIsBottomSheetVisible)}>
              <Text style={modalStyles.textModal}>Perfil</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleHistorico(navigation, setIsBottomSheetVisible)}>
              <Text style={modalStyles.textModal}>Histórico</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={shareContent}>
              <Text style={modalStyles.textModal}>Convidar Amigo</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleChat(navigation, setIsBottomSheetVisible)}>
              <Text style={modalStyles.textModal}>Chat</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={openModal}>
              <Text style={modalStyles.textModal}>Suporte</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleConfiguracao(navigation, setIsBottomSheetVisible)}>
              <Text style={modalStyles.textModal}>Configuração</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={modalStyles.textModal}>Log Out</Text>
            </TouchableOpacity>
          </View>
          <View style={modalStyles.moreOptionsContainer}>
            <View style={modalStyles.divider} />
            <TouchableOpacity>
              <Text style={modalStyles.facaMaisText}>Faça mais</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleTornarMotorista}>
              <Text style={modalStyles.moreOptionsText}>Seja motorista</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleAvaliarAppPress}>
              <Text style={modalStyles.moreOptionsText}>Avalie a nossa App</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleSiteNduta}>
              <Text style={modalStyles.moreOptionsText}>NDUTAAO.COM</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleSOS}>
              <Text style={modalStyles.moreOptionsText}>SOS Emergência</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <ModalSuporte isModalVisible={isModalVisible} closeModal={closeModal} />
    </View>
  );
}
