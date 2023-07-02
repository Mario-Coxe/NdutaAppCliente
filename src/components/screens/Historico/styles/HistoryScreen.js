import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    backgroundColor: '#D6001B',
    width: '100%',
    height: '90%',
  },
  camada1: {
    backgroundColor: 'white',
    width: '100%',
    height: height * 0.85,
    position: 'absolute',
    bottom: 0,
    marginBottom: 0,
    borderTopRightRadius: width * 0.1,
    borderTopLeftRadius: width * 0.1,
    elevation: 12,
  },
  historicoContainer: {
    bottom: height * 0.59,
  },
});
