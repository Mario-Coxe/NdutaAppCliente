import { StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const stylesDark = StyleSheet.create({
    container: {
        backgroundColor: '#292929',
        width: '100%',
        height: 50,
        elevation: 7,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: '50%',
        height: 30,
        resizeMode: 'contain',
        right: 100,
        color: '#000'
    },
    logoHome: {
        width: '50%',
        height: 30,
        resizeMode: 'contain',
        right: 10,
        color: '#000'
    },
    icon: {
        width: '20%',
        height: 30,
        resizeMode: 'contain',
        position: 'absolute',
        right: -30,
        color: '#fff'
    },
    iconHome: {
        width: '20%',
        height: 30,
        resizeMode: 'contain',
        position: 'absolute',
        right: -120,
        color: '#fff'
    },
    menuTitle: {
        fontSize: windowWidth * 0.04,
        color: '#D6C11F',
        textAlign: 'right',
        marginBottom: windowHeight * 0.06,
        fontFamily: 'Poppins'
    },
    VoltarImg: {
        width: '50%',
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        resizeMode: 'contain',
        right: 60,
    }
});

const modalStylesDark = StyleSheet.create({
    bottomSheet: {
        justifyContent: 'flex-end',
        margin: 0,
    },
    bottomSheetContent: {
        alignSelf: 'flex-end',
        backgroundColor: 'white',
        height: '100%',
        width: '60%',
    },
    menuItemsContainer: {
        padding: windowWidth * 0.05,
        borderBottomColor: '#ccc'
    },
    moreOptionsContainer: {
        padding: windowWidth * 0.05,
        marginTop: windowHeight * 0.3 - windowWidth * 0.05,
    },
    textModal: {
        fontSize: windowWidth * 0.035,
        textAlign: 'right',
        color: 'black',
        marginBottom: windowHeight * 0.02 - 2,
        fontFamily: 'Poppins-Regular'
    },
    divider: {
        borderBottomWidth: 1,
        width: windowWidth * 0.8,
        left: -windowWidth * 0.025,
        borderColor: '#999999'
    },
    facaMaisText: {
        fontSize: windowWidth * 0.035,
        textAlign: 'right',
        color: '#999999',
        marginBottom: windowHeight * 0.01,
        fontFamily: 'Poppins-SemiBold'
    },
    moreOptionsText: {
        textAlign: 'right',
        fontSize: windowWidth * 0.03,
        color: '#999999',
        marginBottom: windowHeight * 0.01,
        fontFamily: 'Poppins-Light'
    },


    modal: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        backgroundColor: 'white',
        borderRadius: 8,
        paddingHorizontal: 20,
        paddingVertical: 30,
        width: '95%',
    },
    title: {
        fontSize: 14,
        marginBottom: 20,
        textAlign: 'center',
        fontFamily: 'Poppins-SemiBold',
        color: '#000'
    },
    input: {
        height: 100,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 4,
        paddingHorizontal: 10,
        marginBottom: 20,
        fontFamily: 'Poppins-Regular'
    },
    sendButton: {
        backgroundColor: '#4CAF50',
        borderRadius: 4,
        padding: 10,
        alignItems: 'center',
        marginBottom: 10,

    },
    sendButtonText: {
        color: 'white',
        fontFamily: 'Poppins-Regular',
        fontSize: 14
    },
    closeButton: {
        backgroundColor: '#D6001B',
        borderRadius: 4,
        padding: 10,
        alignItems: 'center',
    },
    closeButtonText: {
        color: 'white',
        fontFamily: 'Poppins-Regular',
        fontSize: 14
    },
});

export { stylesDark, modalStylesDark};
