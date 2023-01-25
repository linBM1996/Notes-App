import { React, useContext } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Card, Icon } from '@rneui/base';
import { useNavigation } from '@react-navigation/native';
import { GlobalContext } from './FCGlobalComp';

export default function FCNote(props) {

  const navigation = useNavigation();
  const { RemoveNote } = useContext(GlobalContext);

  const Remove = (id) => {
    RemoveNote(id);
  }

  return (
    <View style={styles.card}>
      <View  style={{flexDirection: "row"}}>
        <Icon name='close' onPress={() => Remove(props.id)}></Icon>
        <Text style={styles.dateText}>{props.date}</Text>
      </View>
      <Text style={styles.titleText}>{props.title}</Text>
      <Text style={styles.contentText}>{props.content}</Text>
      <TouchableOpacity onPress={() => navigation.navigate('View Note', { date: props.date, title: props.title, content: props.content })}>
        <Text style={{ color: '#2196F3' }}>View note</Text>
      </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    margin: 10,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
/*     flexDirection: "row" */
  },
  dateText: {
    fontSize: 14,
    color: 'gray',
    marginBottom: 10,
  },
  titleText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  contentText: {
    fontSize: 16,
  },
});


