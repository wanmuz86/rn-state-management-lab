import React from "react"
import { View, Text, StyleSheet } from "react-native"
import { ProductList } from "./ProductList"
import { CartView } from "./CartView"

export function MainScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Redux Cart Lab (React Native CLI)</Text>
      <ProductList />
      <CartView />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    marginTop: 24,
  },
})
