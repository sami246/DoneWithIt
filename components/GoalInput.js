import { StyleSheet, Button, View, TextInput, Modal, Image } from 'react-native';
import { useState,  } from 'react';

function GoalInput (props) {

    const [enteredGoalText, setEnteredGoalText] = useState('');

    function goalInputHandler(input){
      setEnteredGoalText(input);
    }

    function addGoalHandler() {
        if (enteredGoalText.length > 0){
            props.onAddGoal(enteredGoalText);
            setEnteredGoalText('');
        }
        else {
            alert("You need to type something as a goal")
        }
    }
  
    return (
        <Modal visible={props.visible} animationType='slide'>
            <View style={styles.inputContainer}>
                <Image style={styles.image} source={require('../assets/images/plus.png')} />
                <TextInput 

                    style={styles.TextInput}
                    selectionColor ='white'
                    placeholder='Add Your Goal'
                    onChangeText={goalInputHandler}
                    value={enteredGoalText}/>
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                    <Button color={'#0D9DED'} title='Add Goal' onPress={addGoalHandler}/>
                        </View>
                    <View style={styles.button}>
                        <Button color={'#0D9DED'} title= 'Cancel' onPress={props.onCancel}/>
                    </View>
                </View>
                
            </View>
        </Modal>
    )
}

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer : {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 16,
      backgroundColor: '#1B6BC8',
    },
    image: {
        width: 100,
        height: 80,
        margin: 20,
        color: 'white'
    },
    TextInput: {
      borderWidth: 1,
      borderColor: '#cccccc',
      width: '100%',
      borderRadius: 6,
      padding: 8,
      backgroundColor: 'white',
      textAlign: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        marginTop: 16
    },
    button:{
        width: '30%',
        marginHorizontal: 8
    }
  });