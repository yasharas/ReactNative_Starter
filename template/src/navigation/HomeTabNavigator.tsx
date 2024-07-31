import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import DashboardScreen from '../screens/DashboardScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();

/**
 * Home Tab navigator
 * 
 * Contains screens included in the bottom tabs,
 */
export default function HomeTabNavigator() {
  return (
    <Tab.Navigator initialRouteName='Dashboard' screenOptions={{
        headerTransparent: true,
        headerTitle: ''
    }}>
      <Tab.Screen name="Dashboard" component={DashboardScreen}/>
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
