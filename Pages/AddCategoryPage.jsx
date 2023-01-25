import React from 'react'
import { useContext, useState } from 'react';
import { TextInput, StyleSheet, Text, View } from 'react-native';
import { GlobalContext } from '../Functional Comps/FCGlobalComp';
import { Button } from 'react-native-elements';

export default function AddCategoryPage(props) {

  const [txt, onChangeText] = useState('category name');
  const { Categories, AddCategory } = useContext(GlobalContext);

  const Add = () => {
    let categoryArr = Categories.filter((category) => category.name === txt);
    if (categoryArr.length === 0) {
      AddCategory(txt);
      props.navigation.navigate('Home');
    }
    else {
      alert("category already exists");
    }
  }

  return (
    <View style={styles.card}>
      <Text style={styles.title}>Enter Category Name:</Text>
      <TextInput
        maxLength={20}
        style={styles.input}
        onChangeText={onChangeText}
        value={txt}
      />
      <Button title='Add' onPress={() => Add()} />
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
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 10,
  },
  input: {
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10
  },
});