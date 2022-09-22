import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native'
import { useDispatch } from 'react-redux';
import { toggleCompleteAsync, deleteTodoAsync } from '../redux/todoSlice';
import CheckBox from 'expo-checkbox';
const Task = ({ props }) => {

    const dispatch = useDispatch();


    const handleCompleteClick = () => {
        dispatch(toggleCompleteAsync({ id: props._id, title: props.title, completed: !props.completed }))
    }

    const handleDelete = () => {
        dispatch(deleteTodoAsync({ id: props._id }))
    }

    return (
        <View style={styles.items}>
            <View>
                <Button
                    onPress={() => handleDelete()}
                    title="Delete"
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"
                />
            </View>
            <View style={styles.itemLeft}>
                <View style={styles.square}></View>
                <Text style={styles.itemText}>{props.title}</Text>
            </View>
            <View>
                <CheckBox 
                 disabled={false}
                 value={props.completed}
                 onValueChange={() => handleCompleteClick()}
                />
            </View>


        </View>
    )
}

const styles = StyleSheet.create({
    items: {
        backgroundColor: '#FFF',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20

    },
    itemLeft: {

        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap'

    },
    square: {
        width: 24,
        height: 24,
        backgroundColor: '#55BCF6',
        opacity: 0.4,
        borderRadius: 5,
        marginRight: 15

    },
    itemText: {
        maxWidth: '80%'

    },
    circular: {
        width: 12,
        height: 12,
        borderColor: '#55BCF6',
        borderWidth: 2,
        borderRadius: 5,

    }

});
export default Task