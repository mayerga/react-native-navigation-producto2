import React from 'react';
import {View, Text, SafeAreaView, Button, TouchableOpacity, StyleSheet, Dimensions} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { collection, getDocs } from "firebase/firestore";
import { db } from '../utils/Firebase';




async function test() {
    const querySnapshot = await getDocs(collection(db, "retos"));
    querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data()}`);
    });
}

const screenHeight= Dimensions.get("screen").height;

const Evolucion = () => {
    
    const navigation = useNavigation();

    test();

    return(
        <SafeAreaView style={{flex: 1}}>
            <View style={styles.containerMain}>
                <View>
                    <Text>Hola</Text>
                </View>
                <Text>This is the Second screen</Text>
                
                {/* Botón para agregar tarea */}
                <View style={styles.addButtonLocator}>
                    <TouchableOpacity style = {styles.addButton}>
                        <Text style={styles.addButtonText}>+</Text>
                    </TouchableOpacity>
                </View>
            
            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    addButton: {
        alignItems: 'center',
        backgroundColor: 950,
        borderRadius: 30,
        height: 60,
        justifyContent: 'center',
        width: 60,
    },
    addButtonLocator: {
        position: 'absolute',
        right: 30,
        top: 550,
    },
    addButtonText:{
        color: 'white',
        fontSize: 25,
        
    },
    containerMain: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default Evolucion;