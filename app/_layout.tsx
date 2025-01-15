import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';

import { useEffect } from 'react';
import 'react-native-reanimated';
import { Appearance } from 'react-native';
import { CartProvider } from '@/constants/CartProvider';
import { Colors } from '@/constants/Colors';



// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = Appearance.getColorScheme();
  const theme = colorScheme === 'dark' ? Colors.dark : Colors.light;
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <CartProvider>
      <Stack screenOptions={{headerStyle:{backgroundColor:theme.headerBackground} , headerShadowVisible:false , headerTintColor:theme.text}}>
        <Stack.Screen name='index' options = {{headerShown:false , title:'Home'}}></Stack.Screen>
        <Stack.Screen name='ContactUs' options = {{headerShown:false , headerTitle:'Contact Us'}}></Stack.Screen>
        <Stack.Screen name='Menu' options = {{headerShown:false , headerTitle:'Menu'}}></Stack.Screen>
        <Stack.Screen name='cart' options = {{headerShown:false , headerTitle:'Cart'}}></Stack.Screen>

      </Stack>
      </CartProvider>
      
    
  );
}
