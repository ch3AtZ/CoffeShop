import { Text, View , StyleSheet , ImageBackground  , Pressable , Image} from 'react-native'
import { Link } from 'expo-router'
import icedcoffeimg from '@/assets/images/icecofee.png'
import cartimage from '@/assets/images/cart/cart.jpg'




const App = () =>{
  return (

    <View style={styles.containter}>
      <ImageBackground
      source={icedcoffeimg}
      resizeMode='cover' //because we want to cover the whole screen for it 
      style={styles.image}
    >
      
      
      <Text style={styles.title}>Coffee Shop</Text>

      <Link href="/ContactUs" style={{marginHorizontal:'auto'}} asChild> 
      <Pressable style={styles.button} >
       <Text style={styles.buttonText}>Contact Us</Text>
      </Pressable>     
      </Link>

      <Link href={"/Menu"} style={{marginHorizontal:'auto'}}asChild>
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Menu</Text>
      </Pressable> 
      </Link>

      <Link href={"/cart"} style={{marginHorizontal:'auto'}}asChild>
      <Pressable style={styles.cartButton}>
        <Image source={cartimage} style={styles.cartImg}/>
      </Pressable> 
      </Link>
      
      </ImageBackground>
    </View>
  
  )
}

const styles = StyleSheet.create({
  containter:{
    flex:1 , 
    flexDirection: 'column',

  },
  image:{
    width:'100%',
    height:'100%',
    flex:1,
    resizeMode:'cover',
    justifyContent:'center',
  },
  title:{
    color:'blue',
    fontSize:42,
    fontWeight:'bold',
    textAlign:'center',
    backgroundColor:'rgba(0,0,0,0)',
    marginBottom:200,
    justifyContent:'center'

  },
  buttonText:{
    color:'white',
    fontSize:15,
    fontWeight:'bold',
    textAlign:'center',
    padding:4,
  },
  button:{
    height:60,
    borderRadius:20,
    backgroundColor:'red',
    justifyContent:'center'
  },
  cartImg:{
    width:'72%',
    height:'72%',
  },
  cartButton:{
    height:50,
    borderRadius:25,
    justifyContent:'center',
    backgroundColor:'white',
    alignItems: 'center',
    width:50,
    marginTop:150,
    marginRight:100


  }



})

export default App;

