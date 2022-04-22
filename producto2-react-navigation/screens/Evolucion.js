import React, {useEffect, useState} from 'react';
import {View, Text, SafeAreaView, TouchableOpacity, StyleSheet, Dimensions, Button, scrollView} from 'react-native';
import { useNavigation, useScrollToTop } from '@react-navigation/native';
import NuevoReto from '../screens/NuevoReto';
import Firebase from '../utils/Firebase';
import { querySnapshot } from 'firebase/firestore';
import { setStatusBarNetworkActivityIndicatorVisible } from 'expo-status-bar';

const screenHeight= Dimensions.get("screen").height;

const Evolucion = () => {
    
    const navigation = useNavigation();

    // const [users, setstate] = useState([]);

    // useEffect(() => {
    //     Firebase.db.collection('users').onSnapshot(querySnapshot => {
    //         const users= [];
            
    //         querySnapshot.docs.forEach(doc => {
    //             const {name, email, phone} = doc.data();
    //             users.push({
    //                 id: doc.id,
    //                 name,
    //                 email,
    //                 phone
    //             })
    //         });

    //         setUsers(users)
    //     })
    // }, []);

    return(
        <SafeAreaView style={{flex: 1, marginHorizontal: 20}}>
            <View style={styles.containerMain}>
                <View>
                    <Text>Hola</Text>
                </View>
                <Text>This is the Second screen</Text>


                
                {/* Botón para agregar tarea */}
                <View style={styles.addButtonLocator}>
                    <TouchableOpacity style = {styles.addButton}
                    onPress={() => navigation.navigate("NuevoReto")}>
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