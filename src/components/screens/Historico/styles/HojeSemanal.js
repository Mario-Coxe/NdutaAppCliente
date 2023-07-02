const { StyleSheet, Dimensions } = require("react-native");

const { width, height } = Dimensions.get('window'); 
export default StyleSheet.create({
    container: {
        flex: 1,
    },
    Camada1: {
        backgroundColor: 'white',
        height: height * 0.3 + 40,
        width: width * 0.9,
        margin: width * 0.05,
        borderRadius: 16,
        bottom: height * 0.20,
        elevation: 5,
    },
    camada2: {
        backgroundColor: 'white',
        height: height * 0.470,
        bottom: height * 0.10,
        marginTop: -70
    },
    dateRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        top: height * 0.03,
        marginVertical: height * 0.015,
    },
    dateText: {
        color: '#999999',
        fontSize: 14,
        fontFamily: 'Poppins-Regular',
        marginBottom: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    balanceRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        margin: width * 0.24,
        bottom: height * 0.12,
        right: width * 0.05,
    },
    balanceText: {
        color: 'black',
        fontSize: 24,
        fontFamily: 'Poppins-SemiBold'
    },
    summaryRow: {
        bottom: height * 0.19,
        flexDirection: 'row',
        justifyContent: 'space-around',
        height: 45,
        marginTop: -height * 0.02,
    },
    summaryColumn: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    summaryValue: {
        color: '#000',
        alignItems: 'center',
        fontFamily: 'Poppins-Bold',
        fontSize: 18
    },
    weekDaysRow: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        bottom: height * 0.1,
        
    },
    graphRow: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        bottom: height * 0.16,
    },
    graphBar: {
        backgroundColor: '#D6001B',
        height: height * 0.01,
        width: width * 0.02,
    },
    graphBarActive: {
        bottom: 0,
    },
    imgDolar: {
        height: 15,
        width: 15,
        marginBottom: 15
    },
    borderRight: {
        borderRightWidth: 1,
        borderRightColor: '#000000',
    },
});
