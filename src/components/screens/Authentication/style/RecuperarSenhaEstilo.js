import { StyleSheet } from 'react-native';
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
    marginTop: 10,
    right: 125,
  },
  titulo: {
    left: 65,
    fontSize: 24,
    color: '#D6001B',
    marginBottom: -15,
    fontFamily: 'Poppins-Bold'
  },
  BtnVoltar: {
    right: 100
  },
  form: {
    paddingHorizontal: 20,
    top: 20,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: '#F4F8FB',
    fontSize: 14,
    color: '#000',
    fontFamily: 'Poppins-Regular'
  },
  botaoContainer: {
    alignItems: 'center',
    marginTop: 1,
    bottom: 30,
    height: 50,
    fontSize: 14
  },
  subtitle: {
    left: 45,
    fontSize: 14,
    color: '#000',
    marginTop: 30,
    fontFamily: 'Poppins-SemiBold'
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
  esqueceu: {
    marginTop: 25,
    color: 'black',
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
     marginBottom: 20
  },

  containerB: {
    flex: 1,
    width: '40%',
    paddingHorizontal: 10,
    marginBottom: 40,
  },
  buttonB: {
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
    fontSize: 50,
    borderTopLeftRadius: 50,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    left: -20,
    marginBottom: 3
  },
});
