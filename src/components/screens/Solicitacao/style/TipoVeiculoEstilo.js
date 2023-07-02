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
        marginVertical: 10
    },
    BotaoEsquerdo: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        width: 150,
        height: 40,
        padding: 10,
        borderRadius: 15,
        elevation: 3,
        borderColor: '#D6001B',
        margin: 15,
        marginBottom: 29,
        marginLeft: 10
    },
    img: {
        marginTop: -55,
        height: 80,
        width: 120,
    },
    texto: {
        fontSize: 14,
        fontFamily: 'Poppins-Regular',
        color: '#000',
        marginTop: -20,
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
        marginBottom: -20
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
