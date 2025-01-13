import { Appearance, StyleSheet , Platform , SafeAreaView , ScrollView , FlatList ,View , Text , Image, Alert, TouchableOpacity} from "react-native"; // platform for the device that we are going to use it in
import { Colors } from "@/constants/Colors";
import { MenuItems } from "@/constants/MenuItems";
import menuimages from '@/constants/MenuImages';
import { useState } from "react";


export default function MenuScreen(){

    const [cart , setCart] = useState([]);
    
    const addToCart = (item) =>{
        const isIteminCart = cart.some((cartItem) => cartItem.id === item.id );
        if (isIteminCart){
            Alert.alert('Item already in card. add another item');
        }
        else{
            setCart([...cart,item])
        }
    };



    const colorScheme = Appearance.getColorScheme()


    const theme = colorScheme === 'dark' ? Colors.dark : Colors.light

    const styles = createStyles(theme , colorScheme)

    const Container = Platform.OS === 'web' ? ScrollView : SafeAreaView;

    return(
        <Container style={styles.container}>
            <FlatList
                data={MenuItems}
                keyExtractor={(item) => item.id.toString()}
                showsVerticalScrollIndicator = {false}

                renderItem={({item}) =>(
                    <View style={styles.card}>
                        <View style={styles.textcontainer}>
                            <Text style={styles.title}>{item.coffee_name}</Text>
                            <Text style={styles.price}>{item.price}</Text>
                            <TouchableOpacity style = {styles.addButton} onPress={()=>addToCart(item)}>
                                <Text style={styles.addButtonText}>Add</Text>
                            </TouchableOpacity>
                        </View>
                        <Image source={menuimages[item.id-1]} style={styles.image}/> {/* id-1 because the array starts from 0*/}
                    </View>

                )}>

            </FlatList>


        </Container>
    )
}

function createStyles(theme , colorScheme){
    return StyleSheet.create({
        container:{
            flex:1,
            backgroundColor:theme.background,
            padding:10
        },
        itemContainer:{
            padding:10,
            borderRadius:8,
            backgroundColor:theme.card
        },
        title:{
            fontWeight:'bold',
            fontSize:15,
            color:theme.text,
            marginTop:4
        },
        image:{
            width:180,
            height:180,
            borderRadius:8
        },
        price:{
            fontSize:10,
            color:'white',
            fontWeight:'bold'
            
        },
        card:{
            flexDirection:'row',
            borderRadius: 8,
            padding: 10,
            alignItems :'center',
            elevation: 3,
            shadowColor:'#000',
            borderWidth:3,
            borderColor:'white'
        },
        textcontainer:{
            paddingRight:8,
            flex:1,
        }, 
        addButton:{
            marginTop:10,
            backgroundColor:'red',
            borderRadius:10,
            alignItems:'center',
            width:50,
            height:20
            

        },
        addButtonText:{
            color:'white',
            fontWeight:'bold'
        }

        

    })
}