import React from 'react';
import {View, Text, SafeAreaView, Button} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Evolucion = () => {
    
    const navigation = useNavigation();

    return(
        <SafeAreaView>
            <Text>This is the Second screen</Text>
        </SafeAreaView>
    )
}

export default Evolucion;