import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default class GoalItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TouchableOpacity onPress={this.props.handleTap}>
        <View style={styles.listItem}>
          <Text>{this.props.value}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    borderColor: "black",
    borderWidth: 1,
    backgroundColor: "grey",
    marginVertical: 10,
  },
});
