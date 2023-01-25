import React from 'react';
import { useState, createContext } from 'react';
import { format } from 'date-fns';

export const GlobalContext = createContext();

export default function FCGlobalComp(props) {

    const [Categories, setCategories] = useState([
        { id: 1, name: "Personal" },
        { id: 2, name: "Work" },
        { id: 3, name: "Ideas" },
    ]);

    const AddCategory = (Cname) => {
        let newItem = { id: Categories.length + 1, name: Cname };
        setCategories([...Categories, newItem]);
    }

    const [Notes, setNotes] = useState([
        { id: 1, date: "23/01/23", title: "note 1", content: "my content1", categoryId: 1 },
        { id: 2, date: "22/01/23", title: "note 2", content: "my content2", categoryId: 1 },
        { id: 3, date: "21/01/23", title: "note 3", content: "my content3", categoryId: 1 },
    ]);

    const [NotesCounter, setNotesCounter] = useState(Notes.length + 1);

    const AddNote = (title, content, categoryId) => {
        const currentDate = new Date();
        const date = format(currentDate, 'dd/MM/yy');

        let newItem = { id: NotesCounter, date: date, title: title, content: content, categoryId: categoryId };
        setNotes([...Notes, newItem]);
        setNotesCounter(NotesCounter + 1);
    }

    const RemoveNote = (id) => {
        setNotes(Notes.filter(note => note.id !== id));
    }

    return (
        <GlobalContext.Provider value={{ Categories, AddCategory, Notes, AddNote, RemoveNote }}>
            {props.children}
        </GlobalContext.Provider>
    )
}