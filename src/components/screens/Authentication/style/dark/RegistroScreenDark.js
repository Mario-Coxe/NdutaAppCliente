import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    paddingTop: hp('5%'),
    borderTopLeftRadius: wp('10%'),
    borderTopRightRadius: wp('10%'),
  },
  cabecalho: {
    marginBottom: hp('5%'),
  },
  titulo: {
    fontSize: 24,
    color: '#D6C11F',
    left: wp('5%'),
    fontFamily: 'Poppins-Bold'
  },
  subtitle: {
    fontSize: 12,
    color: '#999999',
    left: wp('5%'),
    marginBottom: -hp('1.5%'),
    fontFamily: 'Poppins-Regular'
  },
  form: {
    paddingHorizontal: wp('5%'),
    marginTop: hp('1.5%'),
    flex: 1,
  },
  input: {
    height: hp('6.5%'),
    borderWidth: 1,
    borderRadius: wp('2%'),
    paddingHorizontal: wp('2%'),
    marginBottom: hp('1%'),
    backgroundColor: '#fff',
    borderColor: 'white',
    fontSize: wp('3.5%'),
    color: '#000',
    fontFamily: 'Poppins-Regular'
  },
  botaoContainer: {
    alignItems: 'center',
    marginTop: -hp('12%'), // Ajuste o marginTop conforme necessário
    marginBottom: hp('4%'),
  },
  container2: {
    flex: 1,
    backgroundColor: '#232323',
  },
  camada1: {
    flex: 1,
    backgroundColor: '#000000',
    borderTopRightRadius: wp('10%'),
    borderTopLeftRadius: wp('10%'),
  },
  checkBoxContainer: {
    flex: 1,
    alignItems: 'center',
    marginTop: hp('2%'),
    paddingHorizontal: wp('5%'),
  },
  checkBoxRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: hp('5%'),
  },
  checkBox: {
    backgroundColor: 'transparent',
    borderWidth: 0,
    padding: 0,
    margin: 0,
    marginBottom: -60
  },
  checkBoxLabel: {
    marginLeft: -8,
    color: "#fff",
    marginBottom: -60,
    fontFamily: 'Poppins-Regilar',
    fontSize: 14
  },
  checkBoxText: {
    textAlign: 'center',
    color: "#fff",
    fontSize: wp('2.6%'),
    marginTop: 10,
    marginBottom: 10,
    fontFamily: 'Poppins-Light'

  },
  
});
