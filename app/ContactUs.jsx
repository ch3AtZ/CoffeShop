import { Colors } from "@/constants/Colors"
import { Text, View , StyleSheet, Appearance} from "react-native"

const colorScheme = Appearance.getColorScheme
const theme = colorScheme === 'dark' ? Colors.dark : Colors.light

const ShopInfo =  () =>{
  return(
    <View style={styles.container}>
      <Text style={styles.textInfo}>Address: 21/9 Ashok Nagar </Text>
      <Text style = {styles.textInfo}>Phone Number: 9667323957</Text>
      <Text style={styles.textInfo}>Email ID: dhruvbharara2@gmail.com</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  textInfo:{
    color:'black',
    fontSize:21,
    fontWeight:'bold',
    textAlign:'center',
    justifyContent:'center',
    backgroundColor:theme.background
    
  },            
  container:{
    flex:1,
    justifyContent:'center'
  } 
})

export default ShopInfo;