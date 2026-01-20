import React, { useReducer, useEffect } from "react";
import { View, Text, Button, StyleSheet } from "react-native";


// If the state geeting to complicated, we define the structure of the state
// By defining
// The state and it's initial value

// The action on the state


// 1) Initial state
// The state in this component, count , and initialized at 0
const initialState = { count: 0 };

// 2) Reducer function
// All the fuctions/actions that has a change/ impact on the state
function reducer(state, action) {
  console.log("Action received:", action);

  switch (action.type) {

    case "increment":
        // update the state.count
      return { count: state.count + 1 };
    
      // update the value of state
      case "decrement":
      return { count: state.count - 1 };
    
      case "reset":
      return { count: 0 };
    
      default:
      return state;
  }
}

const CounterReducerVersion = () => {
  // 3) useReducer hook
  // Use usereducer hook to define the state and actions on it
  const [state, dispatch] = useReducer(reducer, initialState);

  // 4) Log new state after each change
  useEffect(() => {
    console.log("New state:", state);
  }, [state]);

  // 5) Helper dispatch functions
  // Call the setter by dispatching an action on the state
  const increment = () => dispatch({ type: "increment" });
  const decrement = () => dispatch({ type: "decrement" });
  const reset = () => dispatch({ type: "reset" });

  // 6) Render UI
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Counter (useReducer)</Text>
      {/* Render it on the UI, call it thorugh state.count */}
      <Text style={styles.count}>Count: {state.count}</Text>

      <View style={styles.buttonRow}>
        <Button title="Increment" onPress={increment} />
      </View>
      <View style={styles.buttonRow}>
        <Button title="Decrement" onPress={decrement} />
      </View>
      <View style={styles.buttonRow}>
        <Button title="Reset" onPress={reset} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    marginTop: 16,
    borderTopWidth: 1,
    borderColor: "#ccc",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  count: {
    fontSize: 24,
    marginBottom: 16,
  },
  buttonRow: {
    marginVertical: 4,
  },
});

export default CounterReducerVersion;
