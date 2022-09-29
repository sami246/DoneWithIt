import { StyleSheet, Text, View, Pressable } from 'react-native';

function GoalItem (props) {

    return(       
        <View style={styles.goalItem} key={props.id}>
            <Pressable 
                // android_ripple={{color:'red'}}
                onPress={props.onDelete.bind(this, props.id)} 
                style={({pressed}) => pressed && styles.pressedItem}>
                
                    <Text style={styles.goalText}>{props.text}</Text>
            </Pressable>
        </View>
        
    )

}

export default GoalItem;

const styles = StyleSheet.create({
    goalItem: {
      margin: 8,
      borderRadius: 6,
      backgroundColor: "#0D9DED",
    },
    goalText: {
      padding: 8,
      color: 'white',
    },
    pressedItem: {
        opacity: 0.5,
        backgroundColor: 'red'
    }
  });