import { Appearance, StyleSheet , Platform , SafeAreaView , ScrollView , FlatList ,View , Text , Image} from "react-native"; // platform for the device that we are going to use it in
import { Colors } from "@/constants/Colors";
import { MenuItems } from "@/constants/MenuItems";
import menuimages from '@/constants/MenuImages';


export default function MenuScreen(){
    const colorScheme = Appearance.getColorScheme()

    const theme = colorScheme === 'dark' ? Colors.dark : Colors.light

    const styles = createStyles(theme , colorScheme)

    const Container = Platform.OS === 'web' ? ScrollView : SafeAreaView;

    return(
        <Container style={styles.container}>
            <FlatList
                data={MenuItems}
                keyExtractor={(item) => item.id.toString()}
                showsVerticalScrollIndicator={false}
                renderItem={({item}) =>(
                    <View>
                        <View>
                            <Text style={styles.title}>{item.coffee_name}</Text>
                            <Text style={styles.price}>{item.price}</Text>
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
            backgroundColor:theme.background
        },
        itemContainer:{
            padding:16,
            borderRadius:8,
            backgroundColor:theme.card
        },
        title:{
            fontSize:15,
            color:theme.text,
            fontWeight:'bold',
            marginTop:4
        },
        image:{
            width:'100%',
            height:200,
            borderRadius:8
        },
        price:{
            fontSize:10,
            color:'white',
            fontWeight:'bold'
        }
        


    })
}