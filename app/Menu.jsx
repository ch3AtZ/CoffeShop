import { 
    Appearance, 
    StyleSheet, 
    Platform, 
    SafeAreaView, 
    ScrollView, 
    FlatList, 
    View, 
    Text, 
    Image,
    Pressable
} from "react-native";
import { Colors } from "@/constants/Colors";
import { MenuItems } from "@/constants/MenuItems";
import menuimages from "@/constants/MenuImages";
import { useCart } from "@/constants/CartProvider";
import { TouchableOpacity } from "react-native";
import cartimage from '@/assets/images/cart/cart.jpg'
import { Link } from "expo-router";

  
export default function MenuScreen() {
    const { addToCart } = useCart();
    const {cart} = useCart();
    const colorScheme = Appearance.getColorScheme();
    const theme = colorScheme === "dark" ? Colors.dark : Colors.light;
    const styles = createStyles(theme);
    
    

    const Container = Platform.OS === "web" ? ScrollView : SafeAreaView;

    return (
        <View style={styles.mainContainer}>
            <Container style={styles.container}>
                <FlatList
                    data={MenuItems}
                    keyExtractor={(item) => item.id.toString()}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={styles.flatListContent}
                    renderItem={({ item }) => (
                        <View style={styles.card}>
                            <View style={styles.textContainer}>
                                <Text style={styles.title}>{item.coffee_name}</Text>
                                <Text style={styles.price}>{item.price}</Text>
                                <TouchableOpacity 
                                    style={styles.addButton} 
                                    onPress={() => addToCart(item)}
                                >
                                    <Text style={styles.addButtonText}>Add</Text>
                                </TouchableOpacity>
                            </View>
                            <Image 
                                source={menuimages[item.id - 1]} 
                                style={styles.image} 
                            />
                        </View>
                    )}
                />
            </Container>
            
            <Link href="/cart" asChild>
                <Pressable style={styles.cartButton}>
                    <Image source={cartimage} style={styles.cartImage} />
                    <View style={styles.cartBadge}>
                        <Text style={styles.lencart}>{cart.length}</Text>
                    </View>
                    
                </Pressable>
            </Link>
        </View>
    );
}
  
function createStyles(theme) {
    return StyleSheet.create({
        mainContainer: {
            flex: 1,
            position: 'relative'
        },
        container: {
            flex: 1,
            backgroundColor: theme.background,
            padding: 5,
        },
        flatListContent: {
            paddingBottom: 20, // Reduced padding to minimize empty space
        },
        card: {
            flexDirection: "row",
            borderRadius: 8,
            padding: 10,
            alignItems: "center",
            elevation: 3,
            shadowColor: "#000",
            borderWidth: 3,
            borderColor: "white",
            marginBottom: 10, // Reduced margin between cards
        },
        textContainer: {
            paddingRight: 8,
            flex: 1,
        },
        title: {
            fontWeight: "bold",
            fontSize: 15,
            color: theme.text,
            marginTop: 4,
        },
        price: {
            fontSize: 14,
            color: 'white',
            fontWeight: "bold",
            marginBottom: 10,
        },
        image: {
            width: 120,
            height: 120,
            borderRadius: 8,
            resizeMode: "cover",
        },
        addButton: {
            marginTop: 10,
            backgroundColor: "red",
            borderRadius: 20,
            justifyContent: 'center',
            width: 100,
            height: 40,
            marginLeft: 65
        },
        addButtonText: {
            color: "white",
            fontWeight: "bold",
            marginLeft: 35,
        },
        cartButton: {
            height: 50,
            width: 50,
            borderRadius: 25,
            justifyContent: 'center',
            backgroundColor: 'white',
            alignItems: 'center',
            position: 'absolute',
            bottom: 40, // Moved button closer to bottom
            right: 20,
            elevation: 5,
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
        },
        cartImage: {
            width: 30,
            height: 30,
            resizeMode: 'contain'
        },
        cartBadge: {
            position: 'absolute',
            top: -5, // Position slightly above the cart button
            right: -5, // Position slightly to the right
            backgroundColor: 'red', // Badge background color
            borderRadius: 10, // Make it round
            height: 25, // Set height
            width: 25, // Set width
            justifyContent: 'center', // Center the text
            alignItems: 'center', // Center the text
            zIndex: 1, // Ensure it is above other elements
        },
        lencart: {
            fontWeight: 'bold',
            fontSize: 10, // Adjust size to fit the badge
            color: 'white', // White text color for contrast
        },
    });
}