import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import {connect} from 'react-redux';
import {addTodo} from '../actions';
class AddTodo extends Component {
  state = {
    text: '',
  };

  addTodo = text => {
    //redux store
    this.props.dispatch(addTodo(text));
    this.setState({text: ''});
  };

  render() {
    return (
      <View style={{flexDirection: 'row', marginHorizontal: 20}}>
        <TextInput
          onChangeText={text => this.setState({text})}
          value={this.state.text}
          placeholder="Enter todo . . . . . ."
          style={{
            borderWidth: 1,
            borderColor: 'black',
            backgroundColor: '#eaeaea',
            height: 50,
            flex: 1,
            padding: 5,
          }}
        />
        <TouchableOpacity
          
          onPress={() => this.addTodo(this.state.text)}>
          <View
            style={{
              marginStart: 5,
              height: 50,
              width: 50,
              backgroundColor: '#feeaea',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 1,
              borderColor: 'black',
            
            }}>
            <Text style={{fontSize: 25,color:'black'}}>+</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
export default connect()(AddTodo);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
