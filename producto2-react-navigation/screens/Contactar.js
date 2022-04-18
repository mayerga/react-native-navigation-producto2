import React from 'react';
import {View, Text, SafeAreaView, Button} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Contactar = () => {

    const navigation = useNavigation();

    return(
        <SafeAreaView>
            <Text>Pantalla de Contactar</Text>
        </SafeAreaView>
    )
}

export default Contactar;