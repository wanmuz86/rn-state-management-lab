import React from "react"
import { View, Text, Button, StyleSheet } from "react-native"
import { useSelector, useDispatch } from "react-redux"
import { removeItem, clearCart } from "./store/cartSlice"

export function CartView() {
  const dispatch = useDispatch()
  const items = useSelector((state) => state.cart.items)

  const total = items.reduce((sum, item) => sum + item.price, 0)

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Cart</Text>

      {items.length === 0 && (
        <Text style={styles.empty}>Your cart is empty.</Text>
      )}

      {items.map((item) => (
        <View key={item.id} style={styles.row}>
          <View>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.price}>RM {item.price}</Text>
          </View>
          <Button
            title="Remove"
            onPress={() => dispatch(removeItem(item.id))}
          />
        </View>
      ))}

      {items.length > 0 && (
        <>
          <Text style={styles.total}>Total: RM {total}</Text>
          <Button title="Clear Cart" onPress={() => dispatch(clearCart())} />
        </>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 12,
    backgroundColor: "#fff",
  },
  heading: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 8,
  },
  empty: {
    fontSize: 14,
    color: "#777",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  name: {
    fontSize: 16,
  },
  price: {
    fontSize: 14,
    color: "#555",
  },
  total: {
    marginTop: 8,
    marginBottom: 8,
    fontSize: 16,
    fontWeight: "600",
  },
})
