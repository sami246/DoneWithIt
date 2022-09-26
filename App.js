import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { useState } from 'react';

export default function App() {

  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState(["S"]);

  function goalInputHandler(input){
    setEnteredGoalText(input);
  }

  function addGoalHandler(){
    console.log(enteredGoalText);
    // Spread existing course goals with [...] and then add new entered goal
    // Use react function that receives existing state already as it is best practice
    setCourseGoals(currentCourseGoals => [...currentCourseGoals, enteredGoalText]);
    console.log(courseGoals)
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
          <TextInput style={styles.TextInput} placeholder='Your Course Goal' onChangeText={goalInputHandler}/>
          <Button title='Add Goal' onPress={addGoalHandler}/>
      </View>
      <View style={styles.goalsContainer}>
          {courseGoals.map((goal) => 
              <Text key={goal}>{goal}</Text>
          )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1
  },
  inputContainer : {
    flex: 1,
    flexDirection : 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomColor: "#cccccc",
    borderBottomWidth: 1,
  },
  TextInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 8,
  },
  goalsContainer: {
    flex: 5
  }
});
