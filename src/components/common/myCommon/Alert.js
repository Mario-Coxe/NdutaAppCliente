import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


const CustomAlert = ({ message, header }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon name="alert-circle" size={24} color="#FFFFFF" />
        <Text style={styles.headerText}>{header}</Text>
      </View>
      <Text style={styles.message}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 8,
    elevation: 4,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  headerText: {
    marginLeft: 8,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  message: {
    fontSize: 14,
    color: '#000000',
  },
});

export { CustomAlert };
