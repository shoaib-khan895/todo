import {View, Text,StyleSheet} from 'react-native';
import AddTodo from './containers/AddTodo';
import VisibileTodos from './containers/VisibileTodos';

function TodoApp() {

  return (
    <View style={styles.container}>
      <AddTodo />
      <View>
        <VisibileTodos />
      </View>
    </View>
  );
}

export default TodoApp;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor:'pink'
  },
});