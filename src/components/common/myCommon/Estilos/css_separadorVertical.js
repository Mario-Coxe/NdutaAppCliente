import {StyleSheet} from 'react-native';
import { dark } from '../../../screens/Authentication/SplashScreen';
const backgroundColor=dark?'white':'gray'
export const estilo = StyleSheet.create({
  separador: {
    height: 80,
    width: '1%',
    alignItems: 'center',
    backgroundColor:backgroundColor,
  },
});
