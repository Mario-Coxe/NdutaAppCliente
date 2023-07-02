import { StyleSheet, Dimensions } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

export default StyleSheet.create({
  buttonTextRegistrar: {
    fontSize: 14,
    fontFamily: "Poppins-SemiBold",
    elevation: 30,
    color: '#000',
  },
  buttonTextAcessar: {
    fontSize: 14,
    fontFamily: "Poppins-SemiBold",
    elevation: 30,
    color: '#000'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  imageContainer: {
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    top: 0,
    left: 0,
    right: 0,
    elevation: 10,
    top: 70
  },
  image: {
    width: wp('200%'),
    height: hp('30%'),
    resizeMode: 'contain',
    margin: 30,
    marginTop: 0,
  },
  textContainer: {
    marginTop: 50,
    alignItems: 'center',
    fontFamily: "Poppins-Regular",
    top: 39
  },
  title: {
    fontSize: 24,
    color: '#fff',
    margin: 30,
    bottom: hp('5%'),
    fontFamily: "Poppins-Bold",
  },
  subtitle: {
    fontSize: 14,
    marginTop: 30,
    marginBottom: 45,
    textAlign: 'center',
    color: '#fff',
    bottom: hp('10%'),
    fontFamily: "Poppins-Regular",
    width: 300
  },
  selectedIdiomaText: {
    backgroundColor: '#504e17',
    right: 50,
    padding: 4,
    color: 'white',
    height: 24,
    borderRadius: 10,
    fontSize: 12,
    justifyContent: 'center',
  },
  buttonsContainer: {
    width: '90%',
    flexDirection: 'column',
    marginTop: 20,
    marginBottom: 0,
    margin: 1,
    justifyContent: 'center',
    elevation: 5,
    bottom: hp('14%')
  },
  buttonContainer: {
    width: '100%',
    height: '35%',
    bottom: windowHeight * 0.04
  },
  button: {
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D6C11F'
  },
  buttonRegistrar: {
    height: 50,
    borderRadius: 10,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderColor: '#fff',
    backgroundColor: '#fff'
  },
  idiomaContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 55,
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    marginBottom: -10,
    textAlign: 'center',
    right: -12,
  },
  idiomaText: {
    color: "#fff",
    fontSize: 14,
    fontFamily: "Poppins-Regular",
    left: 25,
    justifyContent: 'center'
  },
  modalContainer: {
    flex: 1,
    backgroundColor: '#292929',
    justifyContent: 'flex-end',
    height: '100%',
  },
  modalContent: {
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 20,
    height: '25%',
    width: '100%'
  },
  modalButton: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 50,
    bottom: 25
  },
  modalButtonText: {
    fontSize: 14,
    color: '#fff',
    bottom: 30,
    fontFamily: 'Poppins'
  },
  modalButtonTextDark: {
    fontSize: 14,
    color: '#fff',
    bottom: 30,
    fontFamily: 'Poppins'
  },
  circuloEstadosDark: {
    fontFamily: 'Poppins-Regular',
    alignSelf: 'center',
    left: 27,
    width: 50,
    height: 50,
    paddingHorizontal: 18,
    paddingVertical: 13,
    fontSize: 20,
    borderRadius: 100,
    fontFamily: 'Poppins-Bold',
    color: '#000',
    bottom: 45,
    backgroundColor: '#fff'
  },
  modalCirculoLetra: {
    fontFamily: 'Poppins-Regular',
    alignSelf: 'center',
    left: 27,
    width: 50,
    height: 50,
    paddingHorizontal: 18,
    paddingVertical: 13,
    fontSize: 20,
    borderRadius: 100,
    fontFamily: 'Poppins-Bold',
    color: '#000',
    bottom: 45,
    backgroundColor: '#fff'
  },
  containerModal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    padding: 10,
    width: '100%',
    marginBottom: windowHeight * 0.35,
  },
  text: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'Poppins-Regular',
    alignSelf: 'center',
  },
  bottomSheet: {
    justifyContent: 'flex-end',
    margin: 0,
    height: windowHeight * 0.1,
  },
  bottomSheetContent: {
    backgroundColor: '#292929',
    padding: 16,
    borderTopLeftRadius: windowWidth * 0.1,
    borderTopRightRadius: windowWidth * 0.1,
    height: 205,
  },
  bottomSheetText: {
    fontSize: 18,
    marginBottom: 16,
    color: 'black',
  },
  modalTitle: {}
});
