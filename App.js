import { Button, StyleSheet, View, FlatList, Text } from 'react-native';
import { useState } from 'react';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
import { StatusBar } from 'expo-status-bar';

export default function App() {

  const [courseGoals, setCourseGoals] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function startAddGoalHandler () {
    setModalIsVisible(true);
  }

  function endAddGoalHandler () {
    setModalIsVisible(false);
  }

  function addGoalHandler(enteredGoalText){
    // Spread existing course goals with [...] and then add new entered goal
    // Use react function that receives existing state already as it is best practice
    setCourseGoals(currentCourseGoals => [...currentCourseGoals, {text: enteredGoalText, id: Math.random().toString() }]);
    console.log(courseGoals)
    endAddGoalHandler();
  }

  function deleteGoalHandler (id){
    setCourseGoals(currentCourseGoals => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    })

  }


  return (
    <>
      <StatusBar style='auto'/>
      
      <View style={styles.appContainer}>
        <Button title='Add New Goal' color='#0D9DED' onPress={startAddGoalHandler}/ >
        <GoalInput onAddGoal={addGoalHandler} visible={modalIsVisible} onCancel={endAddGoalHandler}/>
        <View style={styles.goalsContainer}>
          <FlatList 
              data={courseGoals}
              renderItem={(itemData) => {
                  return <GoalItem text={itemData.item.text} id={itemData.item.id} onDelete={deleteGoalHandler}/>
                }}
              keyExtractor = {(item, index) => {
                return item.id
              }}
          />
        </View>
        {courseGoals.length > 0 && 
        <View style={styles.footer}>
              <Text>Click the Goal to Delete</Text>
        </View>
        }
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1
  },
  goalsContainer: {
    flex: 5
  },
  footer: {
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'flex-end',
    marginBottom: 10
  }
});
