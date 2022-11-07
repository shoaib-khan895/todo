
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';
import {Provider} from 'react-redux';
import TodoApp from './src/TodoApp';
import store from './src/store';

const App = () => {
  return (
    <Provider store={store}>
      <TodoApp />
    </Provider>
  );
};

const styles = StyleSheet.create({
 
});

export default App;
