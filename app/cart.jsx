import React from "react";
import { Text, View, FlatList, Image, StyleSheet } from "react-native";
import { useCart } from "@/constants/CartProvider";
import { TouchableOpacity } from "react-native";
export default function Cart() {
    const { cart, removeFromCart } = useCart();

    if (cart.length === 0) {
        return (
            <View style={styles.container}>
                <Text style={styles.emptyText}>Your cart is empty!</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={cart}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.card}>
                        <Image source={item.image} style={styles.image} />
                        <View style={styles.textContainer}>
                            <Text style={styles.title}>{item.coffee_name}</Text>
                            <Text style={styles.price}>{item.price}</Text>
                            <TouchableOpacity onPress={() => removeFromCart(item.id)}>
                                <Text style={styles.removeButton}>Remove</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: "#fff",
    },
    emptyText: {
        fontSize: 18,
        textAlign: "center",
        marginTop: 50,
        color: "#aaa",
    },
    card: {
        flexDirection: "row",
        marginBottom: 16,
        padding: 8,
        backgroundColor: "#f9f9f9",
        borderRadius: 8,
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 8,
    },
    textContainer: {
        marginLeft: 16,
        flex: 1,
    },
    title: {
        fontSize: 16,
        fontWeight: "bold",
    },
    price: {
        color: "#888",
    },
    removeButton: {
        color: "red",
        marginTop: 8,
    },
});
