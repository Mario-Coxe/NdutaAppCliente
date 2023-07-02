import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');


export default function Mais() {
    return (
        <View style={estilos.container}>
            <View style={estilos.secction}>
                <View>
                    <Text style={estilos.h1}>Estimativa</Text>

                </View>
                <View style={{ flexDirection: 'row', gap: 30 }}>
                    <View style={{ flexDirection: 'row', gap: 12, alignItems: 'center' }}>
                        <Text style={estilos.text}>Dias</Text>
                        <Text style={estilos.text}>14</Text>
                    </View>
                    <View style={{ flexDirection: 'row', gap: 12, alignItems: 'center' }}>
                        <Text style={estilos.text}>Preço</Text>
                        <Text style={{ color: 'black', fontSize: 20, fontWeight: 'bold' }}>96000</Text>
                    </View>
                </View>
                <TouchableOpacity style={estilos.button}>
                    <Text style={{ color: 'white', fontWeight: 'bold' }}>Continuar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const estilos = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        paddingHorizontal: 40
    },
    secction: {
        height: width * 0.6,
        rowGap: 20,
        justifyContent: 'center'
    },
    h1: {
        color: 'black',
        fontSize: 24,
        fontWeight: 'bold'
    },
    text: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 12
    },
    button: {
        backgroundColor: '#D6001B', alignItems: 'center', justifyContent: 'center', paddingVertical: 13, borderRadius: 8
    }

})