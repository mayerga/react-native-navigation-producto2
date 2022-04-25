import React, {useState} from 'react';
import {View, Text, SafeAreaView, Button, TextInput, StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { collection, addDoc, setDoc } from "firebase/firestore";
import { db } from '../utils/Firebase';

const NuevoReto = (props) => {
    
    const navigation = useNavigation();
    const [state, setstate] = useState({
        nombre: '',
        categoria: '',
        detalle: '',
        completado: '',
        periodicidad: '',
        tiempo: ''
    });

    const handleChangeText = (nombre, value) => {
        setstate({...state, [nombre]: value})
    }

    const saveNewReto = async (props) => {
        if(state.nombre === ''){
            alert('Por favor, añade un nombre')
        } else {
            const docRef = await addDoc(collection(db, "retos"), {
                nombre: state.nombre,
                categoria: state.categoria,
                detalle: state.detalle,
                completado: state.completado,
                periodicidad: state.periodicidad,
                tiempo: state.tiempo

            })
            console.log("Document written with ID: ", docRef.id);
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
            <View style={styles.inputGroup}>
                <TextInput placeholder="Completado" onChangeText={(value) => handleChangeText('completado', value)}/>
            </View>
            <View style={styles.inputGroup}>
                <TextInput placeholder="Periodicidad" onChangeText={(value) => handleChangeText('periodicidad', value)}/>
            </View>
            <View style={styles.inputGroup}>
                <TextInput placeholder="Tiempo" onChangeText={(value) => handleChangeText('tiempo', value)}/>
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