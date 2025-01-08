import { Text , View , Image , Pressable , ImageBackground , StyleSheet, Appearance, SafeAreaView ,Platform  } from "react-native";
import { Link } from "expo-router";
import { Colors } from "@/constants/Colors";
import { ScrollView } from "react-native-gesture-handler";
import { ThemeContext } from "@react-navigation/native";


export default function cart(){
    const colorScheme = Appearance.getColorScheme() //get color scheme or theme from the device app is running on
    
    const theme = colorScheme === 'dark' ? Colors.dark : Colors.light
    
    const styles = createStyles(theme , colorScheme)
    
    const Container = Platform.OS === 'web' ? ScrollView : SafeAreaView

    return(
        <Container style={{flex:1, backgroundColor:theme.background}}>
            <View>
                <Text style={styles.text}>
                    Cart 
                </Text>

            </View>
        
        </Container>
    )

    
}
function createStyles(theme , colorScheme){
    return StyleSheet.create({
        text:{
            color:'white',
            justifyContent:'center',
            fontSize:'25',
            marginTop:15,
            textAlign:'center'
            
        }

    })
}