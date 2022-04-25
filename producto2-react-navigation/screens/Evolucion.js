import React, {useEffect, useState} from 'react';
import {View, Text, SafeAreaView, TouchableOpacity, StyleSheet, Dimensions, Button, scrollView, FlatList} from 'react-native';
import { useNavigation, useScrollToTop } from '@react-navigation/native';
import { ListItem } from 'react-native-elements';

import { collection, getDocs } from "firebase/firestore";
import { db } from '../utils/Firebase';

const screenHeight= Dimensions.get("screen").height;

const Evolucion = () => {
    
    const navigation = useNavigation();
//Comentado porque no se deberia ser necesario
/*const Item = ({ title, description, completado }) => (
    <TouchableOpacity onPress={pulsar}>
        <View style={styles.item}>        
            <Text>{title}</Text>
            <Text>{description}</Text>
            <Text>{completado}</Text>     
        </View>
    </TouchableOpacity>
  );*/
    
    const [retos, setRetos] = useState({});

    useEffect(() => {
        renderRetos();
    }, []);

    const renderRetos = async () => {
        //retosList = []
        const querySnapshot = await getDocs(collection(db, "retos"));
        setRetos(querySnapshot.docs);
    }

    //comentado porque ya no deberia ser necesario
    /*const renderItem = ({ item }) => (
        <Item title={item.data().nombre} description={item.data().detalle} completado={item.data().completado}/>
      );*/

    return(
        <SafeAreaView style={{flex: 1}}>
            <View style={styles.containerMain}>
                <FlatList
                    data={retos}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => navigation.navigate("DetalleReto", item)}>
                            <View style={styles.item}>        
                                <Text style={styles.textoBoxes}>{item.data().nombre}</Text>
                                <Text style={styles.textoBoxes2}>{item.data().detalle}</Text>
                                <Text style={styles.textoBoxes2}>{item.data().completado}</Text>     
                            </View>
                        </TouchableOpacity>
                    )}
                    keyExtractor={item => item.id}
                />

                
                {/* Botón para agregar tarea */}
                <View style={styles.addButtonLocator}>
                    <TouchableOpacity style = {styles.addButton}
                    onPress={() => navigation.navigate("NuevoReto", item)}>

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
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        backgroundColor: 'darkcyan',
        borderRadius: 30
    },
    textoBoxes:{
        flex: 1,
        padding: 2,
        fontWeight: 'bold',
        fontSize: 18,
        color: 'white'
    },
    textoBoxes2:{
        flex: 1,
        padding: 2,
        fontWeight: 'bold',
        fontSize: 15,
        color: 'white'
    }
})

export default Evolucion;