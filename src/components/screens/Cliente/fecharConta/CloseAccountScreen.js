import React, { useState } from 'react';
import { View, Text, SafeAreaView, StyleSheet, StatusBar, Dimensions, TouchableWithoutFeedback, Image, TouchableOpacity } from 'react-native';
import { Input } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import BotaoRecto from '../../../common/myCommon/BotaoRecto';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const CloseAccountScreen = () => {
  const navigation = useNavigation();
  const [message, setMessage] = useState('');

  const handleInputChange = (text) => {
    setMessage(text);
  };

  const handleVoltarHome = () => {
    navigation.navigate('Home');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#D6001B" />
      <View style={styles.camada1}>
        <TouchableWithoutFeedback onPress={handleVoltarHome}>
          <Image
            source={require('../../../../assets/icones/voltar_vermelho.png')}
            style={{
              width: '50%',
              height: 30,
              justifyContent: 'center',
              alignItems: 'center',
              resizeMode: 'contain',
              right: 60,
            }}
          />
        </TouchableWithoutFeedback>
        <View>
          <TouchableOpacity onPress={handleVoltarHome}>
            <Text style={{ color: 'red', left: 40, marginTop: -25 }}>Voltar</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.header}>
          <View>
          </View>
          <Text style={styles.titulo}>Fechar a Conta</Text>
        </View>
        <View style={styles.inputContainer}>
          <Text style={{ color: "#000", right: -13 }}>Motivo</Text>
          <Input
            placeholder="Porque..."
            value={message}
            onChangeText={handleInputChange}
            inputContainerStyle={styles.input}
          />
        </View>
        <View style={styles.botaoContainer}>
          <BotaoRecto titulo="Confirmar o Pedido" />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D6001B',
  },
  camada1: {
    flex: 1,
    backgroundColor: 'white',
    borderTopRightRadius: windowWidth * 0.1,
    borderTopLeftRadius: windowWidth * 0.1,
    padding: 50,
  },
  header: {
    paddingVertical: windowHeight * 0.08,
    alignItems: 'center',
  },
  titulo: {
    color: '#D6001B',
    fontSize: windowWidth * 0.07,
    fontWeight: 'bold',
    left: -40,
    marginBottom: 20
  },
  inputContainer: {
    marginBottom: 30,
  },
  input: {
    borderBottomColor: 'red',
    borderBottomWidth: 2,
    width: 280,
    fontWeight: 'bold'
  },
  botaoContainer: {
    alignItems: 'center',
    width: 300
  },
});

export default CloseAccountScreen;
