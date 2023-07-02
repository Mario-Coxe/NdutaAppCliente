import { Linking, Platform } from 'react-native';
import Share from 'react-native-share';

export const handleSOS = () => {
  Linking.openURL(`tel:952602436`);
};

export const handleTornarMotorista = () => {
  Linking.openURL('https://www.exemplo.com/TornaMotorista');
};

export const handleSiteNduta = () => {
  Linking.openURL('https://www.exemplo.com/');
};


export const shareContent = async () => {
  try {
    const shareOptions = {
      title: 'Nduta',
      message: 'Faça as melhores corridas com Nduta',
    };

    const result = await Share.open(shareOptions);
    console.log('Conteúdo compartilhado:', result);
  } catch (error) {
    console.log('Erro ao compartilhar:', error);
  }
};

export const handleAvaliarAppPress = () => {
  let playStoreUrl = '';

  if (Platform.OS === 'android') {
    playStoreUrl = 'market://details?id=seu-pacote-do-aplicativo';
  } else if (Platform.OS === 'ios') {
    playStoreUrl = 'itms-apps://itunes.apple.com/app/seu-nome-do-aplicativo/idSEU-ID-DO-APP';
  }

  if (playStoreUrl !== '') {
    Linking.openURL(playStoreUrl);
  }
};


export const logout = () => {

}
