import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  Button,
} from "react-native";

import GoalItem from './component/GoalItem'
import GoalInput from './component/GoalInput'
/**
 * ScrollView does eager render
 */
export default function App() {
  const [enteredText, setEnteredText] = useState("");
  const [goalList, setGoals] = useState([]);
  const [addMode, setAddMode] = useState(false)

  const handleTextUpdate = (text) => {
    setEnteredText(text);
  };

  const addGoal = () => {
    setGoals((goals) => [...goals, {key: Math.random().toString(), value: enteredText}]);
    setAddMode(false)
  };

  const handleTap = (id) => {
    setGoals(goalList.filter(goal => goal.key !== id))
  } 

  const addGoalHander = () => setAddMode(true)

  return (
    <View style={styles.container}>
      <Button title="Add goal" onPress={addGoalHander}/>
      <GoalInput visible={addMode} handleTextUpdate={handleTextUpdate} addGoal={addGoal} enteredText={enteredText}/>
      
      <FlatList
        data={goalList}
        renderItem={itemList => <GoalItem id={itemList.item.key} value={itemList.item.value} handleTap={handleTap}/>}
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
