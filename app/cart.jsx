import React from "react";
import { Text, View, FlatList, Image, StyleSheet , Platform , ScrollView , SafeAreaView} from "react-native";
import { useCart } from "@/constants/CartProvider";
import { TouchableOpacity } from "react-native";
import MenuImages from "@/constants/MenuImages";



export default function Cart() {

    const { cart, removeFromCart} = useCart();
    const Container = Platform.OS === "web" ? ScrollView : SafeAreaView;
    if (cart.length === 0) {
        return (
            <View style={styles.container}>
                <Text style={styles.emptyText}>Your cart is empty!</Text>
            </View>
        );
    }
    else{
        return(
            <View style={styles.container}>
                <Text style={styles.emptyText}>The following items are ready to order !</Text>
                <Container style={styles.secContainer}>
                <View style={styles.container}>
                <FlatList
                data={cart}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.card}>
                        <Image source={MenuImages[item.id-1]} style={styles.image} />
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
                <View data={cart} style={styles.ItemCard}>
                    {cart.map((item,index) =>(
                        <View style={styles.itemRow}>
                            <Text style={styles.itemName}>{item.coffee_name}</Text>
                            <Text style={styles.itemPrice}>{item.price}</Text>
                        

                        </View>

                    ) )}
                    
                </View>
                <View style={styles.TotalCard}>
                    <Text style={styles.totaltext1}>Grand Total:</Text>
                    <Text style={styles.totalPrice}>
                        {cart.reduce((sum,item)=>sum+item.price , 0)}
                    </Text>

                </View>
               
              
            
                 </View>

                </Container>
            </View>
        );
    }


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
    secContainer:{
        flex:1,
        padding:10,

    },
    itemName:{
        fontSize:16,
        color:'black'
    },
    itemRow:{
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 5, // Gap between rows
        borderBottomWidth: 0.5,
        borderBottomColor: "#ccc",

    },
    ItemCard:{
        backgroundColor: "#fff", // White card background
        borderRadius: 10,
        padding:10,
    },
    itemPrice:{
        fontSize:12,
        color:'Black',
        
    },
    itemTotal:{
        fontSize:20,
        fontWeight:'bold',

    },
    TotalCard:{
        backgroundColor: "#f9f9f9",
        borderRadius:10,
        padding:10,
        justifyContent:'space-between',
        marginTop:15,
        paddingTop:10,
        flexDirection:'row',
        alignItems:'center'
        
    },
    totaltext1:{
        fontSize:20,
        fontWeight:'bold',
        color:'red'
    },
    totalPrice:{
        fontSize:15,
        fontWeight:'bold',
    },
    

});
