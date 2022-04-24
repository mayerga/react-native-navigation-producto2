import React from 'react';
import {View, Text, SafeAreaView, StyleSheet, Button} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function DetalleReto ({ navigation }) {
    console.log(navigation);
    return(
        <SafeAreaView>
            <Text>Pantalla de NUEVO RETO</Text>
            <View>
                <Text>{ navigation.nombre }</Text>
            </View>
            <View>
                <Text>{ navigation.nombre }</Text>
            </View>
            <View>
                <Text>{ navigation.nombre }</Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 35
    },
    inputGroup: {
        // flex: 1,
        padding: 20,
        marginBottom: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc'
    }
})