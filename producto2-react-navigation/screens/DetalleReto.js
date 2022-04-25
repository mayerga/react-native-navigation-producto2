import React, {useState} from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const DetalleReto = ({route}) => {

    const navigation = useNavigation();
    //console.log(route.params.data().nombre);

    return(
        <SafeAreaView style={styles.containerMain}>
            <View style={styles.item}>
                <Text style={styles.textoBoxes}>Pantalla de detalle del reto { route.params.data().nombre } </Text>
                <Text style={styles.textoBoxes2}> 
                    Nombre: 
                    <Text style={styles.textoBoxes3}>
                        { ' ' +route.params.data().nombre } 
                    </Text>
                </Text>
                <Text style={styles.textoBoxes2}> 
                    Detalle:
                    <Text style={styles.textoBoxes3}>
                        { ' ' +route.params.data().detalle } 
                    </Text>
                </Text>
                <Text style={styles.textoBoxes2}> 
                    Categoria: 
                    <Text style={styles.textoBoxes3}>
                        { ' ' +route.params.data().categoria } 
                    </Text>
                </Text>
                <Text style={styles.textoBoxes2}> 
                    Periodicidad: 
                    <Text style={styles.textoBoxes3}>
                        { ' ' +route.params.data().periodicidad } 
                    </Text>
                </Text>
                <Text style={styles.textoBoxes2}> 
                    Tiempo: 
                    <Text style={styles.textoBoxes3}>
                        { ' ' +route.params.data().tiempo } 
                    </Text>
                </Text>
                <Text style={styles.textoBoxes2}> 
                    Completado: 
                    <Text style={styles.textoBoxes3}>
                        { ' ' +route.params.data().completado } 
                    </Text>
                </Text>
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
        fontWeight: 'bold',
        fontSize: 25,
        paddingBottom: 20,
        color: 'white'
    },
    textoBoxes2:{
        padding: 2,
        fontWeight: 'bold',
        fontSize: 15,
        color: 'white'
    },textoBoxes3:{
        padding: 2,
        fontSize: 15,
        color: 'white'
    }
})

export default DetalleReto;