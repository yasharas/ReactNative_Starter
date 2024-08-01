import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import DashboardScreen from '../screens/DashboardScreen';
import ProfileScreen from '../screens/ProfileScreen';
import { Platform } from 'react-native';

const Tab = createBottomTabNavigator();

/**
 * Home Tab navigator
 * 
 * Contains screens included in the bottom tabs,
 */
export default function MainTabNavigator() {
  return (
    <Tab.Navigator initialRouteName='Dashboard' screenOptions={{
        headerShown: false,
        tabBarStyle: {
            paddingTop: Platform.OS === 'android' ? 10 : 16,
            paddingBottom: Platform.OS === 'android' ? 10 : 24,
            height: Platform.OS === 'android' ? 70 : 80,
          },
    }}>
      <Tab.Screen name="Dashboard" component={DashboardScreen}/>
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
