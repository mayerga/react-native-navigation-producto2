import React from 'react';
import {View, Text, SafeAreaView, Button} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const NuevoReto = () => {
    
    const navigation = useNavigation();

    return(
        <SafeAreaView>
            <Text>Pantalla de NUEVO RETO</Text>
        </SafeAreaView>
    )
}

export default NuevoReto;