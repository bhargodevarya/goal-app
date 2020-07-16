import React, { Component } from "react";
import { View, TextInput, Button} from 'react-native'

export default class GoalInput extends Component {
  render() {
    return (
      <View style={{ paddingTop: "30px" }}>
        <TextInput
          placeHolder="Course Goal"
          style={{ borderColor: "black" }}
          onChangeText={this.props.handleTextUpdate}
          value={this.props.enteredText}
        ></TextInput>
        <Button title="Add" onPress={this.props.addGoal}></Button>
      </View>
    );
  }
}