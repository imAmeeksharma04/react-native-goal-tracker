import { StyleSheet, TextInput, Button, View } from "react-native";
import { useState } from 'react';

function GoalInput(props) {
    const [enteredText, setEnteredGoalText] = useState('');

    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
    }

    function onAddGoal() {
        props.func(enteredText);
        setEnteredGoalText('');
    }


    return <View style={styles.inputContainer}>
        <TextInput
            style={styles.textInput}
            placeholder='Your course goal'
            onChangeText={goalInputHandler}
            value={enteredText}
        />

        <Button
            title='Add Goal'
            onPress={onAddGoal}
        />

    </View>;
}

export default GoalInput;

const styles = StyleSheet.create({

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


});