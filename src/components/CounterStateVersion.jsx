import  { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const CounterStateVersion = () => {
  // 1) Local state for the counter
  // Declaring a local state
  // variable name is count // getter
  // to change the variable the method setCount
  // The 0 refers to the initial value of the counter
  const [count, setCount] = useState(0);

  // 2) Handler functions
  // const increment = () => ..... (Declaring function with arrow notation)
  
  const increment = () => setCount(count + 1); // set the variable counter setCount to (count +1)
 // count = count+ 1 -> Value will change but UI will not be refreshed
 // If we want the UI to be refreshed to use the setter
 
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  // 3) Render UI
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Counter (useState)</Text>
      {/* Retrieve the value and update it in UI using {count} */}
      <Text style={styles.count}>Count: {count}</Text>

      <View style={styles.buttonRow}>
      {/* onPress when the button is pressed call the increment */}
        <Button title="Increment" onPress={()=>setCount(count+1)} />
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

export default CounterStateVersion;
