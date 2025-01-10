import { Colors } from "@/constants/Colors"
import { Text, View , StyleSheet, Appearance, ImageBackground} from "react-native"
import backgroundimg from '@/assets/images/app_background.avif'
import { withDecay } from "react-native-reanimated"
import coffecupimg from '@/assets/images/coffee-cup.png'
const colorScheme = Appearance.getColorScheme
const theme = colorScheme === 'dark' ? Colors.dark : Colors.light

const ShopInfo =  () =>{
  return(
    <View style={styles.container}>
      <ImageBackground source={backgroundimg} style={styles.imgBack}>
        <View style={styles.container}>
        <Text style={styles.textInfo}>Address: 21/9 Ashok Nagar </Text>
        <Text style = {styles.textInfo}>Phone Number: 9667323957</Text>
        <Text style={styles.textInfo}>Email ID: dhruvbharara2@gmail.com</Text>
        </View>
   
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  textInfo:{
    color:'white',
    fontSize:21,
    fontWeight:'bold',
    textAlign:'center',
    justifyContent:'center',
    backgroundColor:'rgba(0,0,0,0.5)'
    
  },            
  container:{
    flex:1,
    justifyContent:'center',
    

  },
  imgBack:{
    width:'100%',
    height:'100%',
    resizeMode:'cover',
    flex:1,

  }
})

export default ShopInfo;