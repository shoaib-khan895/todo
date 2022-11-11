import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import todos from '../reducers/todo';

const TodoList = ({todos, toggleTodo}) => (
  <View style={{paddingStart: 10,justifyContent:'center',alignItems:'center'}}>
    {todos.map(todo => (
      <TouchableOpacity style={{backgroundColor:'white',marginTop:10,padding:5,borderRadius:5}}
      key={todo.id} onPress={() => toggleTodo(todo.id)}>
        <Text
          style={{
            fontSize: 24,
            textDecorationLine: todo.completed ? 'underline line-through' : 'none',
          }}>
          {todo.text}
        </Text>
      </TouchableOpacity>
    ))}
  </View>
);
export default TodoList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
