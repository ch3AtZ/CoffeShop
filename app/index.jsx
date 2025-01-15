import { Text, View , StyleSheet , ImageBackground  , Pressable , Image} from 'react-native'
import { Link } from 'expo-router'
import icedcoffeimg from '@/assets/images/icecofee.png'
import cartimage from '@/assets/images/cart/cart.jpg'
import newappimg from '@/assets/images/app_background.avif'
import Cart from './cart'
import MenuScreen from './Menu'
import { CartProvider } from '@/constants/CartProvider'
import { NavigationContainer } from '@react-navigation/native'
import contactimg from '@/assets/images/contact.png'
import Stack from 'expo-router'

const App = () =>{
  return (
    

    <View style={styles.containter}>
      <ImageBackground
      source={newappimg}
      resizeMode='cover' //because we want to cover the whole screen for it 
      style={styles.image}
    >
      <Text style={styles.title}>Coffee Shop</Text>

      <Link href="/ContactUs" style={{marginHorizontal:'auto'}} asChild> 
      <Pressable style={styles.menuButton} >
       <Image source={contactimg} style={styles.cartImg}/>
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
    color:'rgba(0,0,0,100)',
    fontSize:42,
    fontWeight:'bold',
    textAlign:'center',
    backgroundColor:'rgba(0,0,0,0)',
    marginBottom:200,
    justifyContent:'center'

  },
  buttonText:{
    color:'black',
    fontSize:15,
    fontWeight:'bold',
    textAlign:'center',
    padding:4,
  },
  button:{
    height:40,
    borderRadius:20,
    backgroundColor:'rgba(0,0,0,0.5)',
    justifyContent:'center',
    borderWidth:1,
    borderColor:'black',
    marginTop:50,
    width:150
  },
  cartImg:{
    width:'72%',
    height:'72%'
  },
  cartButton:{
    height:50,
    borderRadius:25,
    justifyContent:'center',
    backgroundColor:'white',
    alignItems: 'center',
    width:50,
    
    position:'absolute',
    bottom:40,
    right:20
    

  },
  menuButton:{
    height:50,
    borderRadius:25,
    justifyContent:'center',
    backgroundColor:'white',
    alignItems: 'center',
    width:50,
    
    position:'absolute',
    bottom:40,
    left:20

  }


})

export default App;

