import React from "react"
import { View, Text, Button, StyleSheet } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import { addItem } from "../store/cartSlice"

const products = [
  { id: 1, name: "Apple", price: 2 },
  { id: 2, name: "Banana", price: 1 },
  { id: 3, name: "Orange", price: 3 },
]

export function ProductList() {
  const dispatch = useDispatch()
  const cartItems = useSelector((state) => state.cart.items)

  const handleAdd = (product) => {
    dispatch(addItem(product))
  }

  const isInCart = (id) => {
    return cartItems.some((item) => item.id === id)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Products</Text>

      {products.map((p) => {
        const added = isInCart(p.id)

        return (
          <View key={p.id} style={styles.row}>
            <View style={styles.info}>
              <Text style={styles.name}>{p.name}</Text>
              <Text style={styles.price}>RM {p.price}</Text>
            </View>

            <Button
              title={added ? "Added" : "Add"}
              onPress={() => handleAdd(p)}
              disabled={added}
            />
          </View>
        )
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
    backgroundColor: "#fff",
  },
  heading: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 8,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  info: {
    flexDirection: "column",
  },
  name: {
    fontSize: 16,
  },
  price: {
    fontSize: 14,
    color: "#555",
  },
})
