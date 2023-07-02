import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 60,
    margin: 6,
  },
  row: {
    flexDirection: 'row',
    textAlign: 'left',
  },
  title: {
    fontSize: 16,
    textAlign: 'center',
    alignContent: 'center',
    marginTop: -20,
    fontFamily: 'Poppins-Regular',
    color: '#000'
  },
  sms: {
    fontSize: 14,
    textAlign: 'center',
    alignContent: 'center',
  },
  time: {
    textAlign: 'left',
    alignContent: 'flex-end',
    fontFamily: '',
    color: '#000'
  },
  valor: {
    textAlign: 'right',
    marginTop: -42,
    color: '#000',
    fontFamily: 'Poppins-Regular',
    fontSize: 14
  },
});