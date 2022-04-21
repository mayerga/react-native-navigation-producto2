import React from 'react';
import {View, Text, SafeAreaView, Button, TouchableOpacity, StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Evolucion = () => {
    
    const navigation = useNavigation();

    return(
        <SafeAreaView style={{flex: 1}}>
            <View style={styles.containerMain}>
                <View>
                    <Text>Hola</Text>
                </View>
                <Text>This is the Second screen</Text>
                
                <TouchableOpacity style={styles.bottomItem}>
                    <View style={styles.bottomItemInner}>
                        <Text style={styles.textoBoxes}>Nuevo Reto</Text>
                    </View>
                </TouchableOpacity>
            
            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    bottomItem: {
        width: '50%',
        height: '50%',
        padding: 5,
    },
    bottomItemInner: {
        // flex: 1,
        // backgroundColor: 'cadetblue',
        borderRadius: 30,
        // position: 'absolute',
        // bottom:0,
        // justifyContent: 'center',
        // alignItems: 'center',
        // justifyContent: 'flex-end',
        // marginBottom: 36
        width: '100%',
        height: 50,
        backgroundColor: 'cadetblue',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute', //Here is the trick
        bottom: 0, //Here is the trick
    },
    textoBoxes:{
        flex: 1,
        padding: 10,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 18
    },
    containerMain: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }
})

export default Evolucion;