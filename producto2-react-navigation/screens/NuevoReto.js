import React, {useState} from 'react';
import {View, Text, SafeAreaView, Button, TextInput, StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Firebase from '../utils/firebase';
import { db } from '../utils/Firebase';

const NuevoReto = (props) => {
    
    const navigation = useNavigation();
    const [state, setstate] = useState({
        nombre: '',
        categoria: '',
        detalle: ''
    });

    const handleChangeText = (nombre, value) => {
        setstate({...state, [nombre]: value})
    }

    const saveNewReto = async (props) => {
        if(state.nombre === ''){
            alert('Por favor, añade un nombre')
        } else {
            await db.collection('retos').add({
                nombre: state.nombre,
                categoria: state.categoria,
                detalle: state.detalle
            })
            navigation.navigate('Evolucion');
        }
    }

    return(
        <SafeAreaView style={styles.container}>
            <Text>Pantalla de NUEVO RETO</Text>
            <View style={styles.inputGroup}>
                <TextInput placeholder="Nombre Reto" onChangeText={(value) => handleChangeText('nombre', value)}/>
            </View>
            <View style={styles.inputGroup}>
                <TextInput placeholder="Categoría" onChangeText={(value) => handleChangeText('categoria', value)}/>
            </View>
            <View style={styles.inputGroup}>
                <TextInput placeholder="Detalle" onChangeText={(value) => handleChangeText('detalle', value)}/>
            </View>
            <View>
                <Button title="Add Reto" onPress={() => saveNewReto()}></Button>
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

export default NuevoReto;