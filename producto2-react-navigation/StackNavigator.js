import React from 'react';
import {View, Text} from 'react-native';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Home from './screens/Home';
import Evolucion from './screens/Evolucion';
import NuevoReto from './screens/NuevoReto';
import Perfil from './screens/Perfil';
import Contactar from './screens/Contactar';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
    return(
        <Stack.Navigator screenOptions={{ headerShown: true}}>
            <Stack.Group>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Evolucion" component={Evolucion} />
                <Stack.Screen name="NuevoReto" component={NuevoReto} />
                <Stack.Screen name="Perfil" component={Perfil} />
                <Stack.Screen name="Contactar" component={Contactar} />
            </Stack.Group>
        </Stack.Navigator>
    );
};

export default StackNavigator;