import React from 'react'
import { useContext } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Icon } from '@rneui/themed';
import FCCategories from '../Functional Comps/FCCategories';
import { GlobalContext } from '../Functional Comps/FCGlobalComp';

export default function CategoriesPage(props) {

  const { Categories } = useContext(GlobalContext);

  return (
    <View style={{flex: 1}}>
      <ScrollView>
        <Text style={styles.title}>Categories:</Text>
        <FCCategories CategoriesList={Categories} ></FCCategories>
      </ScrollView>
      <TouchableOpacity style={styles.AddBTN} onPress={() => props.navigation.navigate('Add Category')}>
        <Icon name='add' color='white' />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  AddBTN: {
    borderRadius: 100,
    backgroundColor: '#2196F3',
    position: 'absolute',
    bottom: 0,
    marginBottom: 20,
    alignSelf: 'center'
  },
});