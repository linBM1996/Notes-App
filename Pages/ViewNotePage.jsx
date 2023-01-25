import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function ViewNotePage(props) {

    const { date, title, content } = props.route.params;

    return (
        <View style={styles.container}>
            <Text style={styles.dateText}>{date}</Text>
            <Text style={styles.titleText}>{title}</Text>
            <Text style={styles.contentText}>{content}</Text>
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