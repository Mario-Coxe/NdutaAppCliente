import { StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    paddingTop: 50,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  cabecalho: {
    // alignItems: 'center',
    // marginBottom: 40,
    // right: 90,

    // alignItems: 'center',
    marginBottom: windowHeight * 0.04,
    right: windowWidth * 0.000001 - 25,
  },
  titulo: {
    fontSize: 24,
    color: '#fff',
    fontFamily: 'Poppins-Bold'
  },
  form: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: '#fff',
    color: '#000',
    fontSize: 16,
  },
  botaoContainer: {
    alignItems: 'center',
    marginTop: -40,
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5
  },
  subtitle: {
    fontSize: 12,
    color: '#999999',
    right: 0,
    fontFamily: 'Poppins-Light'
  },
  container2: {
    backgroundColor: '#232323',
    width: '100%',
    height: '100%',
  },
  camada1: {
   
    width: '100%',
    height: '100%',
    position: 'absolute',
    bottom: 0,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
  },
  esqueceu: {
    marginTop: -215,
    color: '#fff',
    textAlign: 'right',
    left: -18,
    fontSize: 14,
    fontFamily: 'Poppins-Regular'
  },
  error: {
    marginTop: 0,
    color: 'red',
    textAlign: 'left',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '48%',
    height: 40,
    borderRadius: 0,
    backgroundColor: '#4a90e2',

  },
  facebookButton: {
    backgroundColor: '#fff',
  },
  googleButton: {
    backgroundColor: '#fff',
  },
  googleIcon: {
    width: 20,
    height: 20,
    borderRadius: 10,
    overflow: 'hidden',
  },

  buttonText: {
    color: '#0e0872',
    marginLeft: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  entrarCom: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 100
  },

});
