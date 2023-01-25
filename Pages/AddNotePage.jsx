import { React, useState, useContext } from 'react'
import { View, TextInput, StyleSheet, Button, Text } from 'react-native'
import { GlobalContext } from '../Functional Comps/FCGlobalComp';

export default function AddNotePage(props) {
    const [title, onChangeTitle] = useState('Title');
    const [content, onChangeContent] = useState('Content');
    const { AddNote, Categories } = useContext(GlobalContext);
    const { categoryId } = props.route.params;

    const Add = () => {
        if (title !== '') {
            AddNote(title, content, categoryId);
            const category = Categories.filter((item) => item.id === categoryId);
            props.navigation.navigate('Notes', { categoryName: category[0].name, categoryId: category[0].id });
        }
        else{
            alert("Please add title");
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Write your note here:</Text>
            <TextInput
                style={styles.InputTitle}
                onChangeText={onChangeTitle}
                value={title}
            />
            <TextInput
                multiline={true}
                numberOfLines={4}
                style={styles.InputContent}
                onChangeText={onChangeContent}
                value={content}
            />
            <View><Button title='Add' onPress={() => Add()} /></View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 10,
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1
    },
    InputContent: {
        textAlignVertical: 'top',
        height: 100,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10
    },
    InputTitle: {
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10
    },
    title: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
    },
});