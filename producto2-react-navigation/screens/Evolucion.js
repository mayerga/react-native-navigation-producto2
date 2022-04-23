import React, {useEffect, useState} from 'react';
import {View, Text, SafeAreaView, TouchableOpacity, StyleSheet, Dimensions, Button, scrollView, FlatList} from 'react-native';
import { useNavigation, useScrollToTop } from '@react-navigation/native';
import { ListItem } from 'react-native-elements';

import { collection, getDocs } from "firebase/firestore";
import { db } from '../utils/Firebase';

const screenHeight= Dimensions.get("screen").height;

const Item = ({ title, description, completado }) => (
    <View style={styles.item}>
      <Text>{title}</Text>
      <Text>{description}</Text>
      <Text>{completado}</Text>
    </View>
  );

const Evolucion = () => {
    
    const [retos, setRetos] = useState({});

    useEffect(() => {
        renderRetos();
    }, []);

    const renderRetos = async () => {
        //retosList = []
        const querySnapshot = await getDocs(collection(db, "retos"));
        setRetos(querySnapshot.docs);

    }

    const navigation = useNavigation();

    const renderItem = ({ item }) => (
        <Item title={item.data().nombre} description={item.data().detalle} completado={item.data().completado}/>
      );


    return(
        <SafeAreaView style={{flex: 1, marginHorizontal: 20}}>
            <View style={styles.containerMain}>
                <View>
                    <Text>Hola</Text>
                </View>
                <Text>This is the Second screen</Text>
                <FlatList
                    data={retos}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />

                
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
        backgroundColor: '#000000',
        
    },
    containerMain: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
      },
})

export default Evolucion;