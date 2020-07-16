import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
  FlatList,
} from "react-native";

import GoalItem from './component/GoalItem'
/**
 * ScrollView does eager render
 */
export default function App() {
  const [enteredText, setEnteredText] = useState("");
  const [goalList, setGoals] = useState([]);

  const handleTextUpdate = (text) => {
    setEnteredText(text);
  };

  const addGoal = () => {
    setGoals((goals) => [...goals, {key: Math.random().toString(), value: enteredText}]);
  };

  return (
    <View style={styles.container}>
      <View style={{ paddingTop: "30px" }}>
        <TextInput
          placeHolder="Course Goal"
          style={{ borderColor: "black" }}
          onChangeText={handleTextUpdate}
          value={enteredText}
        ></TextInput>
        <Button title="Add" onPress={addGoal}></Button>
      </View>
      <FlatList
        data={goalList}
        renderItem={itemList => <GoalItem value={itemList.item.value}/>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  listItem: {
    padding: 10,
    borderColor: "black",
    borderWidth: 1,
    backgroundColor: "grey",
    marginVertical: 10,
  },
});
