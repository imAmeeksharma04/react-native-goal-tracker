import { StyleSheet, TextInput, Button, View, Modal, Image } from "react-native";
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
                <Image source={require('../assets/Images/goal.png')} style={styles.image} />
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
                            color="#5e0acc"
                        />
                    </View>

                    <View style={styles.button}>
                        <Button
                            title='Cancel'
                            onPress={props.onCancel}
                            color="#f31282"
                        />
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
        backgroundColor: '#311b6b'
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#e4d0ff',
        backgroundColor: '#e4d0ff',
        color: '#120438',
        borderRadius: 6,
        width: '100%',
        padding: 16,
    },
    buttonContainer: {
        marginTop: 16,
        flexDirection: "row",
    },
    button: {
        width: 100,
        marginHorizontal: 8,
    },
    image: {
        width: 100,
        height: 100,
        margin: 20,
    }
});