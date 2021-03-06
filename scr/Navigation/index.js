import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../Screens/Home';
import Splash from '../Screens/Splash';
 
const Stack = createStackNavigator();

Navigation=()=>{
    return (
        <NavigationContainer>
          <Stack.Navigator
          initialRouteName="Splash"
          screenOptions={{
              headerShown:false,
          }}>
            <Stack.Screen name="Splash" component={Splash} />
            <Stack.Screen name="Home" component={Home} />
          </Stack.Navigator>
        </NavigationContainer>
      );
}
export default Navigation;