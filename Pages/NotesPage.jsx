import { React, useContext } from 'react'
import { StyleSheet, View, ScrollView, Text, TouchableOpacity } from 'react-native';
import FCNotes from '../Functional Comps/FCNotes';
import { GlobalContext } from '../Functional Comps/FCGlobalComp';
import { Icon } from 'react-native-elements';


export default function NotesPage(props) {
  const { categoryName, categoryId } = props.route.params;
  const { Notes } = useContext(GlobalContext);

  let NotesArr = Notes.filter((note) => note.categoryId === categoryId);

  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <View>
          <Text style={styles.title}>{categoryName}</Text>
          <FCNotes NotesArr={NotesArr} categoryName={categoryName} categoryId={categoryId} />
        </View>
      </ScrollView>
      <TouchableOpacity style={styles.AddBTN} onPress={() => props.navigation.navigate('Add Note', { categoryId: categoryId })}>
        <Icon name='add' color='white' />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  AddBTN: {
    borderRadius: 100,
    backgroundColor: '#2196F3',
    position: 'absolute',
    bottom: 0,
    marginBottom: 20,
    alignSelf: 'center'
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
});