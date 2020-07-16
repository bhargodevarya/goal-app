import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default class GoalItem extends Component {

    constructor(props) {
        super(props)
    }
    
    render() {
        return (
                <View style={styles.listItem}>
                  <Text>{this.props.value}</Text>
                </View>
        )
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
