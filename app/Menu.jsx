import { 
    Appearance, 
    StyleSheet, 
    Platform, 
    SafeAreaView, 
    ScrollView, 
    FlatList, 
    View, 
    Text, 
    Image
  } from "react-native";
  import { Colors } from "@/constants/Colors";
  import { MenuItems } from "@/constants/MenuItems";
  import menuimages from "@/constants/MenuImages";
  import { useCart } from "@/constants/CartProvider";
  import { TouchableOpacity } from "react-native";
  
  export default function MenuScreen() {
      const { addToCart } = useCart();
      const colorScheme = Appearance.getColorScheme();
      const theme = colorScheme === "dark" ? Colors.dark : Colors.light;
      const styles = createStyles(theme);
  
      const Container = Platform.OS === "web" ? ScrollView : SafeAreaView;
  
      return (
          <Container style={styles.container}>
              <FlatList
                  data={MenuItems}
                  keyExtractor={(item) => item.id.toString()}
                  showsVerticalScrollIndicator={false}
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
      );
  }
  
  function createStyles(theme) {
      return StyleSheet.create({
          container: {
              flex: 1,
              backgroundColor: theme.background,
              padding: 10,
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
              marginBottom: 15, // Added margin for separation between cards
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
              color: theme.textSecondary, // Adjusted color for better readability
              fontWeight: "bold",
              marginBottom: 10,
          },
          image: {
              width: 120,
              height: 120,
              borderRadius: 8,
              resizeMode: "cover", // Ensures proper image fitting
          },
          addButton: {
              marginTop: 10,
              backgroundColor: "red",
              borderRadius: 10,
              alignItems: "center",
              width: "auto", // Make the button width dynamic to fit text
              paddingVertical: 5,
              paddingHorizontal: 12,
          },
          addButtonText: {
              color: "white",
              fontWeight: "bold",
          },
      });
  }
  