import React from 'react';
import {View, Text, Button} from 'react-native';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import { useNavigation } from '@react-navigation/native';
import Home from './screens/Home';
import Evolucion from './screens/Evolucion';
import NuevoReto from './screens/NuevoReto';
import Perfil from './screens/Perfil';
import Contactar from './screens/Contactar';
import DetalleReto from './screens/DetalleReto';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {

    const navigation = useNavigation();

    return(
        <Stack.Navigator screenOptions={{ headerShown: true}}>
            <Stack.Group>
                <Stack.Screen name="Home" component={Home} options={{
                    title: "Home Screen"}}  />
                <Stack.Screen name="Evolucion" component={Evolucion} options={{
                    headerStyle: {backgroundColor: 'cadetblue'}, headerRight: () => (
                        <Button
                        onPress={() => navigation.navigate("Home")}
                          title="Home"
                          color="black"
                        />
                      ),
                }}/>
                <Stack.Screen name="NuevoReto" component={NuevoReto} options={{
                    headerStyle: {backgroundColor: 'cadetblue'}, headerRight: () => (
                        <Button
                          onPress={() => navigation.navigate("Home")}
                          title="Home"
                          color="black"
                        />
                      ),
                }}/>
                <Stack.Screen name="Perfil" component={Perfil} options={{
                    headerStyle: {backgroundColor: 'cadetblue'}, headerRight: () => (
                        <Button
                          onPress={() => navigation.navigate("Home")}
                          title="Home"
                          color="black"
                        />
                      ),
                }}/>
                <Stack.Screen name="Contactar" component={Contactar} options={{
                    headerStyle: {backgroundColor: 'cadetblue'}, headerRight: () => (
                        <Button
                          onPress={() => navigation.navigate("Home")}
                          title="Home"
                          color="black"
                        />
                      ),
                }}/>
                <Stack.Screen name="DetalleReto" component={DetalleReto(navigation)} options={{
                    headerStyle: {backgroundColor: 'cadetblue'}, headerRight: () => (
                        <Button
                          onPress={() => navigation.navigate("Evolucion")}
                          title="Evolucion"
                          color="black"
                        />
                      ),
                }}/>
            </Stack.Group>
        </Stack.Navigator>
    );
};

export default StackNavigator;