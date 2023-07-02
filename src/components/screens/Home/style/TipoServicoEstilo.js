import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const estilo = StyleSheet.create({
    GrupoBotao: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    GrupoBotaoColuna: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    BotaoEsquerdo: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: 'white',
        width: 150,
        padding: 0,
        borderRadius: 10,
        borderColor: '#D6001B',
        margin: 5,
    },

    img: {
        height: 35,
        width: 35,
    },
    texto: {
        fontSize: 16,
        fontFamily: 'Poppins',
        color: '#000',
        marginTop: 10,
        marginBottom: 5, // Ajuste a margem inferior para aproximar os textos dos carros
        right: width * 0.0001
    },
    modalContainer: {
        backgroundColor: '#fff',
        width: '99%',
        height: '30%',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        elevation: 4,
        borderColor: '#fff',
        justifyContent: 'center',
        marginTop: 10,
    },
    selectedItem: {
        backgroundColor: '#D6001B',
    },
    selectedText: {
        color: "#fff"
    }
});

export default { estilo };
