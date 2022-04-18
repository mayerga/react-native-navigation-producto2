import React from 'react';
import {View, Text, SafeAreaView, Button} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Perfil = () => {

    const navigation = useNavigation();

    return(
        <SafeAreaView>
            <Text>Pantalla de Perfil</Text>
        </SafeAreaView>
    )
}

export default Perfil;