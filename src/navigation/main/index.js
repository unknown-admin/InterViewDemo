import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens
import Search from '../../screens/search';
import Events from '../../screens/event';
import Favourites from '../../screens/favourite';
import Profile from '../../screens/profile';

const Tab = createBottomTabNavigator();

const MainTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Events"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          const { name } = route;

          if (name === 'Search') {
            iconName = focused ? 'search' : 'search-outline';
          } else if (name === 'Events') {
            iconName = focused ? 'calendar' : 'calendar-outline';
          } else if (name === 'Favourites') {
            iconName = focused ? 'heart' : 'heart-outline';
          } else if (name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'gray',
        tabBarLabelStyle: { paddingBottom: 10, fontSize: 10 },
        tabBarStyle: { display: 'flex' }
      })}
    >
      <Tab.Screen name="Search" component={Search} options={{ headerShown: false }}/>
      <Tab.Screen name="Events" component={Events} options={{ headerShown: false }} />
      <Tab.Screen name="Favourites" component={Favourites} options={{ headerShown: false }} />
      <Tab.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
};

export default MainTabs;
