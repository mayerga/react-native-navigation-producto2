import React from 'react';
import {View, Text, SafeAreaView, Button, TouchableOpacity, StyleSheet, Dimensions} from 'react-native';
import { useNavigation } from '@react-navigation/native';

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

    //comentado porque ya no deberia ser necesario
    /*const renderItem = ({ item }) => (
        <Item title={item.data().nombre} description={item.data().detalle} completado={item.data().completado}/>
      );*/

    return(
        <SafeAreaView style={{flex: 1}}>
            <View style={styles.containerMain}>
                <View>
                    <Text>Hola</Text>
                </View>
                <Text>This is the Second screen</Text>

                <FlatList
                    data={retos}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => navigation.navigate("DetalleReto", item)}>
                            <View style={styles.item}>        
                                <Text>{item.data().nombre}</Text>
                                <Text>{item.data().detalle}</Text>
                                <Text>{item.data().completado}</Text>     
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