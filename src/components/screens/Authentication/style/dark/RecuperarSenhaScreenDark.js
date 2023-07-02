import { StyleSheet } from 'react-native';
export default StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        backgroundColor: '#000000'
    },
    cabecalho: {
        alignItems: 'center',
        marginBottom: 40,
        right: 125,
    },
    titulo: {
        left: 65,
        fontSize: 24,
        color: '#fff',
        marginBottom: -15,
        fontFamily: 'Poppins-Bold'
    },
    BtnVoltar: {
        right: 100,
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
        marginBottom: 20,
        backgroundColor: '#fff',
        fontSize: 14,
        color: '#000',
        fontFamily: 'Poppins-Regular'
    },
    botaoContainer: {
        alignItems: 'center',
        marginTop: 1,
        bottom: 30,
        height: 50,
        fontSize: 14
    },
    subtitle: {
        left: 45,
        fontSize: 14,
        color: '#999999',
        marginTop: 30,
        fontFamily: 'Poppins-SemiBold'
    },
    container2: {
        backgroundColor: '#232323',
        width: '100%',
        height: '100%',
    },
    camada1: {
        backgroundColor: '#000000',
        width: '100%',
        height: '100%',
        position: 'absolute',
        bottom: 0,
        marginBottom: 0,
        borderTopRightRadius: 50,
        borderTopLeftRadius: 50,
    },
    esqueceu: {
        marginTop: 20,
        color: '#fff',
        fontFamily: 'Poppins-Regular',
        fontSize: 14,
        marginBottom: 20

    },


});
