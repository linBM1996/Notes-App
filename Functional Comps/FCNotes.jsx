import { Icon } from '@rneui/base';
import {React,useContext} from 'react';
import { View,Text, StyleSheet } from 'react-native';
import FCNote from './FCNote';

export default function FCNotes(props) {

    let NotesStr = props.NotesArr.map((note, ind) => {
        return <FCNote id={note.id}
            date={note.date}
            title={note.title}
            content={note.content}
            categoryId={note.categoryId}
            key={note.id}
        />;
    })

    return (
        <View>
            {NotesStr}
        </View>
    )
}
