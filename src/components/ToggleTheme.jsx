import React from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
import { useTheme } from "../../context/ThemeContext";

export function ThemeToggleButton() {
    // retrieve the mode (light or dark mode), theme and toggleTheme from the useTheme custom hook
 // {} // object destructuring // [] => array destuctuing / arrangement matters
  const { mode, theme, toggleTheme } = useTheme();

  return (
    <View style={styles.wrapper}>
      <TouchableOpacity
        onPress={toggleTheme}
        style={[styles.button, { backgroundColor: theme.buttonBackground }]}
      >
        <Text style={[styles.text, { color: theme.text }]}>
          Switch to {mode === "dark" ? "Light" : "Dark"} Mode
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 16,
    paddingHorizontal: 20,
  },
  button: {
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  text: {
    fontSize: 16,
    fontWeight: "500",
  },
});
