import React, { Component } from "react";
import { FormLabel, FormInput, Button } from 'react-native-elements';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from "react-native";

const styles = StyleSheet.create({
  root: {
    display: 'flex',
  },
});
export default class Input extends Component {
  constructor() {
    super();
    this.addHandler = this.addHandler.bind(this);
    this.state = {
      text: undefined
    };
  }
  addHandler() {
    if (this.props.onAdd) this.props.onAdd(this.state.text);
    this.setState({
      text: undefined
    });
  }
  render() {
    return (
      <View>
        <FormInput
          placeholder="Enter a destination"
          underlineColorAndroid="transparent"
          onChangeText={text => this.setState({ text })}
          value={this.state.text}
        />
        <Button
          raised
          icon={{name: 'cached'}}
          title='ADD' 
          onPress={this.addHandler} 
        />
      </View>
    );
  }
}
