import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import Modal from 'react-native-modal';
import { modalStyles } from '../style/MenuSuperiorHomeStyle';

const ModalSuporte = ({ isModalVisible, closeModal }) => {
  const [mensagem, setMensagem] = useState('');

  const handleEnviarMensagem = () => {
    // Lógica para enviar a mensagem

    
    closeModal();
  };

  return (
    <Modal isVisible={isModalVisible} onBackdropPress={closeModal} style={modalStyles.modal}>
      <View style={modalStyles.modalContent}>
        <Text style={modalStyles.title}>Entre em contato com o suporte</Text>
        <TextInput
          style={modalStyles.input}
          placeholder="Digite sua mensagem"
          multiline={true}
        />
        <View style={modalStyles.buttonContainer}>
          <TouchableOpacity style={modalStyles.sendButton} onPress={handleEnviarMensagem}>
            <Text style={modalStyles.sendButtonText}>Enviar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={modalStyles.closeButton} onPress={closeModal}>
            <Text style={modalStyles.closeButtonText}>Fechar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default ModalSuporte;
