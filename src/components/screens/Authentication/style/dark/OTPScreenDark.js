import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    paddingTop: 70,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  cabecalho: {
    alignItems: 'center',
    marginBottom: 40,
    right: 150,
    color: '#000'
  },
  titulo: {
    fontSize: 22,
    fontFamily: 'Poppins-Bold',
    color: '#fff',
    marginTop: 50,
    marginBottom: -20,
    left: 55
  },
  form: {
    paddingHorizontal: 20,
    top: 20,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  input: {
    height: 55,
    width: 55,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 15,
    paddingHorizontal: 10,
    marginBottom: 14,
    backgroundColor: '#fff',
    fontSize: 20,
    color: "#000",
    fontFamily: 'Poppins-Bold',
    left: 25,
    textAlign: 'center'
  
  },
  botaoContainer: {
    alignItems: 'center',
    marginTop: 0,
    bottom: 50,
    height: 1,
  },
  subtitle: {
    fontSize: 14,
    color: '#999999'  ,
    left: 30,
    fontFamily: 'Poppins-Regular',
    
  },
  container2: {
    backgroundColor: '#232323',
    width: '100%',
    height: '100%',
  },
  camada1: {
    backgroundColor: '#000000',
    width: '100%',
    height: "100%",
    position: 'absolute',
    bottom: 0,
    marginBottom: 0,
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
  },
  Reenviarcodigo: {
    marginTop: 40,
    textAlign: "center",
    color: '#fff',
  },
});
