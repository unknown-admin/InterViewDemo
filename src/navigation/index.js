import React, { useState, useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { AppContext } from './appContext';

// Screen
import Login from '../screens/login';

// Tab
import MainTabs from './main';

const Stack = createStackNavigator();

const Navigation = () => {
    const { isLoggedIn  } = useContext(AppContext);
  
    return (
      <NavigationContainer>
        <Stack.Navigator>
          {!isLoggedIn ? (
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            />
          ) : (
            <Stack.Screen
              name="Main"
              component={MainTabs}
              options={{ headerShown: false }}
            />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    );
  };
  
  export default Navigation;