import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ListViewDemo from './components/ListViewDemo';
import FormDemo from './components/FormDemo';
import Home from './components/Home';
import Navbar from './components/Navbar';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <>
      <Navbar />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            options={{headerShown: false}}
            component={Home}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="Form"
            component={FormDemo}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="ECommerce"
            component={ListViewDemo}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
