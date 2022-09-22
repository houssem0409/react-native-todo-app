import React from "react";
import { Keyboard, KeyboardAvoidingView, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native';
import Task from "../../components/Task";
import { Platform } from 'react-native';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getTodosAsync } from "../../redux/todoSlice";
import { useState } from "react";
import { addTodoAsync } from "../../redux/todoSlice";

export const Home = () => {
     const [value , setValue] = useState()
    const taskItems = useSelector((state) => state.todos)
  const dispatch = useDispatch();

  const handleAddClick = () => {
    dispatch(
        addTodoAsync({
          title: value,
        })
      );
  }
  useEffect(() => {
    dispatch(getTodosAsync())
  }, [dispatch])
    return (
      <View style={styles.container}>
        <View style={styles.tasksWrapper}>
  
        <Text style={styles.sectionTitle}>Today's tasks</Text>
        <View style={styles.items} >
          {taskItems.map((item ,index) => (
            <TouchableOpacity key={index} >
  
              <Task props={item}/>
            </TouchableOpacity>
  
          ))}
         
  
        </View>
        </View>
        {/**write a task */}
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}
         style={styles.writeTaskWrapper}>
          <TextInput style={styles.input} placeholder={'write a task'} value={value} onChangeText={value => setValue(value)}/>
          <TouchableOpacity onPress={() => handleAddClick()}  >
            <View style={styles.addWrapper} >
              <Text style={styles.addText}>+</Text>
            </View>
  
          </TouchableOpacity>
         </KeyboardAvoidingView>
      </View>
    );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
   
    },
    tasksWrapper: {
      paddingTop: 80,
      paddingHorizontal: 20,
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: 'bold'
    },
    items: {
      marginTop: 30
  
    },
    writeTaskWrapper: {
      position: 'absolute',
      bottom: 60,
      width : '100%',
      flexDirection: 'row',
      justifyContent: "space-around",
      alignItems: 'center'
  
  
    },
    input: {
      paddingVertical: 15,
      paddingHorizontal: 15,
      backgroundColor: '#FFF',
      borderRadius: 60,
      borderColor: '#C0C0C0',
      borderWidth: 1,
      width: 250,
  
    },
    addWrapper: {
      width: 60,
      height: 60,
      backgroundColor: '#FFF',
      borderRadius: 60,
      justifyContent: 'center',
      alignItems: "center",
      borderColor: '#C0C0C0',
      borderWidth: 1,
    },
    addText:{
      fontSize: 30
    }
  
  
  });