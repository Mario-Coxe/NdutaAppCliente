import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  cabecalho: {
    alignItems: 'center',
    marginBottom: 40,
    right: 130,
  },
  titulo: {
    fontSize: 24,
    fontFamily: 'Poppins-SemiBold',
    color: '#D6001B',
    left: 20,
    marginTop: 25
  },
  form: {
    paddingHorizontal: 20,
    top: 15,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: '#F4F8FB',
    color: '#000',
    fontSize: 14,
    fontFamily: 'Poppins-Regular'
  },
  botaoContainer: {
    alignItems: 'center',
    marginTop: 100,
    bottom: 30,
    height: 30,
    color: 'red'
  },
  subtitle: {
    fontSize: 14,
    color: '#999999',
    left: 10,
    marginBottom: -30,
    fontFamily: 'Poppins-Regular'
  },
  container2: {
    backgroundColor: '#D6001B',
    width: '100%',
    height: '100%',
  },
  camada1: {
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
    position: 'absolute',
    bottom: 0,
    marginBottom: 0,
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
  },
  errorText: {
    color: 'red',
    marginTop: 5,
  },
  buutonConatiner:{
    width: '100%',
    marginTop: 75,
    marginBottom: 25
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#D6001B',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    height: 50,
    width: '100%',
    marginTop: -50,
  },
  TextButton:{
    fontSize: 14,
    color: "#fff",
    fontFamily: 'Poppins-SemiBold'
  },
  successMessage: {
    color: 'green',
    textAlign: 'center',
    fontSize: 18,
    marginBottom: 30
  },
  successError: {
    color: 'red',
    textAlign: 'center',
    fontSize: 18,
    marginBottom: 30
  },
});
