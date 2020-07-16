import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  View,
  FlatList,
} from "react-native";

import GoalItem from './component/GoalItem'
import GoalInput from './component/GoalInput'
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
      <GoalInput handleTextUpdate={handleTextUpdate} addGoal={addGoal} enteredText={enteredText}/>
      
      <FlatList
        data={goalList}
        renderItem={itemList => <GoalItem value={itemList.item.value} handleTap={() => console.log("tapped")}/>}
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
  }
});
