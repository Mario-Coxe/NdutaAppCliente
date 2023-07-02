import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const { width } = Dimensions.get('window');


export default function RetalTime() {
    return (
        <View style={{ backgroundColor: 'white', paddingHorizontal: 50, alignItems: 'center' }}>
            <View style={{ height: width * 0.6, justifyContent: 'space-around' }}>

                <View>
                    <Text style={{ color: 'black', fontSize: 22, fontWeight: 'bold' }}>Quanto Tempo</Text>
                    <Text style={{ color: 'black', fontSize: 22, fontWeight: 'bold' }}>Vai Alugar a Viatura</Text>
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                    <Icon name="dot-circle-o" size={30} color="#D6001B" />
                    <View style={{ borderBottomColor: '#000', borderBottomWidth: 1.2, width: 242 }}>

                        <TextInput placeholder='Porque...' placeholderTextColor={'black'} style={{ color: 'black' }} />
                    </View>
                </View>

                <TouchableOpacity style={{ backgroundColor: '#D6001B', alignItems: 'center', justifyContent: 'center', paddingVertical: 13, borderRadius: 8 }}>
                    <Text style={{ color: 'white', fontWeight: 'bold' }}>Continuar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}