import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { Switch } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import BotaoVoltar from '../../common/myCommon/BotaoVoltar';
import Separador from "../../common/myCommon/separador";
import Barra from "../../common/myCommon/barraDeEstado";

//img
import closeIcone from '../../../assets/icones/closeIcone.png';
import darkModoIcone from '../../../assets/icones/darkModeIcone.png';
import editIcone from '../../../assets/icones/editIcone.png';
import avancar from '../../../assets/icones/avancar.png';


const ToggleButton = () => {
  const dispatch = useDispatch();
  const dark = useSelector((state) => state.dark);
  const [isEnabled, setIsEnabled] = useState(false);
  const [isToggled, setIsToggled] = useState(null);
  const navigation = useNavigation();

  const toggleSwitch = () => {
    dispatch(darkValue());
  };

  const handlNavigate = (Screen) => {
    navigation.navigate(Screen);
  };

  const voltar = () => {
    navigation.goBack();
  };

  useEffect(() => {
    setInterval(() => {
      loadToggleValue();
    }, 1);
  }, []);

  useEffect(() => {
    saveToggleValue();
  }, [isToggled]);

  const loadToggleValue = async () => {
    try {
      const value = await AsyncStorage.getItem("toggleValue");
      if (value !== null) {
        setIsToggled(JSON.parse(value));
      }
    } catch (error) {
      console.error("Error loading toggle value", error);
    }
  };

  const saveToggleValue = async () => {
    try {
      if (dark !== null && dark !== undefined) {
        await AsyncStorage.setItem("toggleValue", JSON.stringify(dark));
      } else {
        await AsyncStorage.removeItem("toggleValue");
      }
    } catch (error) {
      console.error("Error saving toggle value", error);
    }
  };

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <View style={[styles.container, { backgroundColor: "white" }]}>
      <View style={styles.header}>
        <BotaoVoltar onPress={voltar} style={{ marginRight: 10 }} />
        <Text style={styles.headerText}>Voltar</Text>
      </View>

      <Barra />

      <View style={[styles.camada1, { backgroundColor: "#fff" }, { shadowColor: "#000" }]}>
        <TouchableOpacity style={styles.configContent} onPress={() => handlNavigate('editarPerfil')}>
          <Image source={editIcone} style={styles.icon} />
          <Text style={[styles.configText, { color: 'black' }]}>Editar Perfil</Text>
          <Image source={avancar} style={styles.arrowIcon} />
        </TouchableOpacity>

        <View style={styles.separador}><Separador /></View>

        <TouchableOpacity style={styles.configContent}>
          <Image source={darkModoIcone} style={styles.icon} />
          <Text style={[styles.configText, { color: 'black' }]}>Modo Escuro</Text>
          <Switch
            trackColor={{ false: '#767577', true: '#D6001B' }}
            thumbColor={'#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
          // value={dark}
          />
        </TouchableOpacity>
        <View style={styles.separador}><Separador /></View>
        <TouchableOpacity style={styles.configContent} onPress={() => handlNavigate('CloseAccount')}>
          <Image source={closeIcone} style={styles.icon} />
          <Text style={[styles.configText, { color: 'black' }]}>Fechar Conta</Text>
          <Image source={avancar} style={styles.arrowIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",

  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    // marginTop: -350,
    marginTop: windowHeight * 0.001 - 220,
    right: 60
  },
  headerText: {
    fontSize: 14,
    marginLeft: 5,
    // right: 230,
    right: 200,
    marginTop: -38,
    color: 'red',
    fontFamily: 'Poppins-Regular'
  },
  camada1: {
    width: windowWidth * 0.96,
    height: windowHeight * 0.35,
    borderRadius: 15,
    elevation: 34,
  },
  configContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: windowHeight * 0.03,
  },
  separador: {
    alignSelf: 'flex-end',
    marginTop: windowHeight * 0.02,
    width: windowWidth * 0.84,
  },
  icon: {
    width: 35,
    height: 35,
  },
  configText: {
    fontSize: 16,
    top: 10,
    left: 13,
  },
  arrowIcon: {
    width: 20,
    height: 20,
    right: 12,
    top: 8,
  },
});

export default ToggleButton;
