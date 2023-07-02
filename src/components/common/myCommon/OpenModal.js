import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import LottieView from 'lottie-react-native';

export const OpenButton = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
      <LottieView
        source={require('../../../assets/json/Cardrive.json')}
        autoPlay
        loop
        style={styles.lottieContainer}
      />
      {/* <Text style={styles.buttonTitle}>Carros</Text> */}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    zIndex: 10,
    width: 100,
    height: 70,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 10,
    backgroundColor: '#D6001B',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  lottieContainer: {
    width: '90%',
    height: '90%',
  },
  buttonTitle: {
    color: '#DADEE3',
    marginLeft: 5,
  },
});
