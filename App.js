import { useState } from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import GoalItem from './Components/GoalItem';
import GoalInput from './Components/GoalInput';

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);

  function addGoalHandler(enteredText) {
    setCourseGoals(currentCourseGoals => [...courseGoals, { Text: enteredText, id: Math.random().toString() }]);

  }

  function deleteGoalHandler(id) {
    console.log("DELETE");
    setCourseGoals(currentCourseGoals => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });

  }

  function startAddGoalHandler() {
    setModalIsVisible(true);
  }

  return (
    <View style={styles.appContainer}>

      <Button
        title='Add New Goal'
        color="#5e0acc"
        onPress={startAddGoalHandler}
      />

      <GoalInput
        visible={modalIsVisible}
        func={addGoalHandler}
      />

      <View style={styles.goalsContainer}>

        <FlatList
          data={courseGoals}
          renderItem={itemData => {
            return (
              <GoalItem
                text={itemData.item.Text}
                id={itemData.item.id}
                onDeleteItem={deleteGoalHandler}
              />
            );
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
        />

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
    paddingTop: 50,
    paddingHorizontal: 16
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 8,
  },
  goalsContainer: {
    flex: 5
  },
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#5e08cc',
  },
  goalText: {
    color: 'white',
    fontSize: 16,
  }
});
