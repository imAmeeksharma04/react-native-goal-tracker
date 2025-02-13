import { StyleSheet, TextInput, Button, View, Modal } from "react-native";
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



    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.textInput}
                    placeholder='Your course goal'
                    onChangeText={goalInputHandler}
                    value={enteredText}
                />
                <View style={styles.buttonContainer}>

                    <View style={styles.button}>
                        <Button
                            title='Add Goal'
                            onPress={onAddGoal}
                        />
                    </View>

                    <View style={styles.button}>
                        <Button title='Cancel' />
                    </View>

                </View>

            </View>
        </Modal>
    );
}

export default GoalInput;

const styles = StyleSheet.create({

    inputContainer: {
        flex: 1,
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#cccccc',
        width: '100%',
        padding: 8,
    },
    buttonContainer: {
        marginTop: 16,
        flexDirection: "row",
    },
    button: {
        width: 100,
        marginHorizontal: 8,
    }
});