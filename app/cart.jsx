import { Text , View , Image , Pressable , ImageBackground , StyleSheet, Appearance, SafeAreaView  } from "react-native";
import { Link } from "expo-router";
import cartimage from '@/assets/images/cart/cart.png'
import { Colors } from "@/constants/Colors";
import { ScrollView } from "react-native-gesture-handler";

export default function cart(){
    const colorScheme = Appearance.getColorScheme() //get color scheme or theme from the device app is running on
    
    const theme = colorScheme === 'dark' ? Colors.dark : Colors.light
    
    const styles = createStyles(theme , colorScheme)
    
    const Container = Platform.os === 'web' ? ScrollView : SafeAreaView

    return(
        <Container>
            <View>



            </View>
        
        </Container>
    )


}