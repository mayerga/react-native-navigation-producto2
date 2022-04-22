import React, {useState} from 'react';
import {View, Text, SafeAreaView, Button, TextInput, StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Firebase from '../utils/firebase';

const NuevoReto = (props) => {
    
    const navigation = useNavigation();
    const [state, setstate] = useState({
        name: '',
        email: '',
        phone: ''
    });

    const handleChangeText = (name, value) => {
        setstate({...state, [name]: value})
    }

    const saveNewReto = async () => {
        if (state.name === ''){
            alert('Please provide a reto')
        } else {
            await Firebase().db.collecion('users').add({
                name: state.name,
                email: state.email,
                phone: state.phone
            })
            props.navigation.navigate('Evolucion');
        }
    }

    return(
        <SafeAreaView style={styles.container}>
            <Text>Pantalla de NUEVO RETO</Text>
            <View style={styles.inputGroup}>
                <TextInput placeholder="Nombre Reto" onChangeText={(value) => handleChangeText('name', value)}/>
            </View>
            <View style={styles.inputGroup}>
                <TextInput placeholder="Categoría" onChangeText={(value) => handleChangeText('email', value)}/>
            </View>
            <View style={styles.inputGroup}>
                <TextInput placeholder="Tiempo" onChangeText={(value) => handleChangeText('phone', value)}/>
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