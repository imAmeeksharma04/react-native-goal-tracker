import { Text, View, StyleSheet, Pressable } from "react-native";

function GoalItem(props) {
    return (
        <View style={styles.goalItem}>
            <Pressable
                android_ripple={{ color: "#210664" }}
                onPress={props.onDeleteItem.bind(this, props.id)}
                style={({ pressed }) => pressed && styles.pressedItem} //For IOS Styling
            >
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
        backgroundColor: '#5e08cc',
    },
    pressedItem: {
        opacity: 0.5,
    },
    goalText: {
        color: 'white',
        padding: 8,
        fontSize: 16,
    }
});