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
    right: 120,
  },
  titulo: {
    left: 50,
    fontSize: 24,
    color: '#D6001B',
    fontFamily: 'Poppins-Bold'

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
    fontFamily: 'Poppins-Regular',
    
  },
  botaoContainer: {
    alignItems: 'center',
    marginTop: 0,
    bottom: 90,
    height: 50,
    fontSize: 14
  },
  subtitle: {
    left: 33,
    fontSize: 14,
    color: '#000',
    fontFamily: 'Poppins-SemiBold',
    marginTop: 35
  },
  container2: {
    backgroundColor: '#D6001B',
    width: '100%',
    height: '100%',
    color: '#000'
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
    color: '#000'
  },
  containerB: {
    flex: 1,
    width: '40%',
    paddingHorizontal: 10,
    marginBottom: 40,
  },
  buttonB: {
    alignItems: 'center',
   
    padding: 10,
    fontSize: 50,
    borderTopLeftRadius: 50,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    left: -20,
    marginBottom: 3
  }

});
