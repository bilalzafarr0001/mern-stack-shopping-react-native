 import React , {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView } from 'react-native';

const TodoList = () => {
   const [title, setTitle] = useState('Todolist');
   const [text, setText] = useState('');
   const [list, setList] = useState(['Todolist']);


  const addItem = () =>{
    const updatedList= list;
   updatedList.push(text);
   setText('');
  }


  return (
    <View  >
       <Text> Todo list </Text>
    </View> 
  )
}
export default TodoList;
