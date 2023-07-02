import { StyleSheet } from 'react-native';

const estilo = StyleSheet.create({
  GrupoBotao: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  GrupoBotaoColuna: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 0,
    marginVertical: 10,
  },
  BotaoEsquerdo: {
    flexDirection: 'column',
    justifyContent: 'center', // Alteração feita aqui
    backgroundColor: 'white',
    width: 150,
    height: 100, // Aumentei a altura para acomodar a imagem e o texto
    padding: 10,
    borderRadius: 15,
    elevation: 3,
    borderColor: '#D6001B',
    margin: 15,
    marginBottom: 29,
    marginLeft: 10,
  },
  img: {
    height: 40, // Altura reduzida para acomodar a imagem
    width: 40, // Largura reduzida para acomodar a imagem
  },
  texto: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#000',
    alignSelf: 'center',
  },
  modalContainer: {
    backgroundColor: '#fff',
    width: '100%',
    height: '34%',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    elevation: 4,
    borderColor: '#fff',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: -20,
  },
  selectedItem: {
    backgroundColor: '#D6001B',
    color: '#fff',
  },
  selectedText: {
    color: '#fff',
  },
});

export default { estilo };
