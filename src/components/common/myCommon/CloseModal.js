import React, { useRef, useState } from 'react';
import { TouchableOpacity, Animated, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const CloseButton = ({ onPress }) => {
  const animation = useRef(new Animated.Value(0)).current;

  const startAnimation = () => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      onPress(); // Chama a função de fechamento do modal
    });
  };

  const rotateInterpolation = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '45deg'],
  });

  const scaleInterpolation = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0],
  });

  const animatedStyle = {
    transform: [
      { rotate: rotateInterpolation },
      { scale: scaleInterpolation },
    ],
  };

  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={startAnimation}>
      <Animated.View style={[styles.button, animatedStyle]}>
        <Icon name="close" size={24} color="white" />
      </Animated.View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
    width: 40,
    height: 40,
    borderRadius: 25,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
  },
});

export default CloseButton;
