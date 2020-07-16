import React, { Component } from "react";
import { View, TextInput, Button, Modal } from "react-native";

export default class GoalInput extends Component {
  render() {
    return (
      <Modal visible={this.props.visible} animationType="slide">
        <View style={{ paddingTop: "30px" }}>
          <TextInput
            placeHolder="Course Goal"
            style={{ borderColor: "black" }}
            onChangeText={this.props.handleTextUpdate}
            value={this.props.enteredText}
          ></TextInput>
          <Button title="Add" onPress={this.props.addGoal}></Button>
        </View>
      </Modal>
    );
  }
}
