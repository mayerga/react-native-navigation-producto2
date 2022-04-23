import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {View, Text, Button, TouchableOpacity, StyleSheet, Image} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import firebase from '../utils/firebase';
import {collection, getDocs} from 'firebase/firestore';


const Home = () => {


    const navigation = useNavigation();

    return(
        <SafeAreaView style={StyleSheet.container}>
            <Text style={{ fontSize: 25, marginBottom: 25, fontWeight: 'bold', color: 'dimgrey' }}>#EresElMejor</Text>
            
            {/* <Text>This is home</Text> */}
            {/* <Button onPress={() => navigation.navigate("Second")} title="Go to second screen" /> */}
            <View style={styles.menuContainer}>
                <TouchableOpacity style={styles.bottomItem} onPress={() => navigation.navigate("Evolucion")} title="Evolucion">
                    <View style={styles.bottomItemInner}>
                        <Text style={styles.textoBoxes}>EVOLUCIÓN</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.bottomItem} onPress={() => navigation.navigate("NuevoReto")} title="NuevoReto">
                    <View style={styles.bottomItemInner}>
                        <Text style={styles.textoBoxes}>NUEVO RETO</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.bottomItem} onPress={() => navigation.navigate("Perfil")} title="Perfil">
                    <View style={styles.bottomItemInner}>
                        <Text style={styles.textoBoxes}>PERFIL</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.bottomItem} onPress={() => navigation.navigate("Contactar")} title="Contactar">
                    <View style={styles.bottomItemInner}>
                        <Text style={styles.textoBoxes}>CONTACTAR</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 60,
      alignItems: 'center',
      backgroundColor: 'bisque',
      height: '45%',
    },
    menuContainer: {
        height: '46.5%',
        backgroundColor: '#5C5C5C',
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 5
      },
      bottomItem: {
        width: '50%',
        height: '50%',
        padding: 5,
      },
      bottomItemInner: {
        flex: 1,
        backgroundColor: 'cadetblue',
        borderRadius: 30
      },
      textoBoxes:{
        flex: 1,
        padding: 10,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 18
      }
});

export default Home;