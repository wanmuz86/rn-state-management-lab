import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useTheme } from "../../context/ThemeContext";

export function Header() {
    // retrieve the mode (light or dark mode) from the useTheme custom hook
    // {} // object destructuring
  const { mode, theme } = useTheme();

  return (
    // set the background, font color bassed on theme
    // bring out the current theme directlyt with {mode}
    <View style={[styles.container, { backgroundColor: theme.headerBackground }]}>
      <Text style={[styles.title, { color: theme.text }]}>
        My App — {mode === "dark" ? "Dark Mode" : "Light Mode"}
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
