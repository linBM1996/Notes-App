import { React, useContext } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { GlobalContext } from '../Functional Comps/FCGlobalComp';

export default function FCCategory(props) {

    const navigation = useNavigation();
    const { Notes } = useContext(GlobalContext);

    let NotesArr = Notes.filter((note) => note.categoryId === props.id);
    let numOfNotes = NotesArr.length;

    return (
        <View style={styles.card}>
            <Text style={styles.txt}>{props.name}</Text>
            <TouchableOpacity style={styles.pressable} onPress={() => navigation.navigate('Notes', { categoryName: props.name, categoryId: props.id })}>
                <Text style={styles.numOfNotes}>{numOfNotes}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        padding: 10,
        margin: 10,
        backgroundColor: '#fff',
        elevation: 2,
        borderRadius: 5,
        flexDirection: "row",
        justifyContent: 'center',
    },
    txt: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingBottom: 5,
        flex: 11
    },
    numOfNotes: {
        color:'white',
        fontSize: 20,
        fontWeight: 'bold',
        paddingBottom: 5,
        flex: 11
    },
    pressable: {
        marginHorizontal:30,
        borderRadius: 100,
        alignItems: 'center',
        backgroundColor: "#2196F3",
        flex: 1
    }
});

