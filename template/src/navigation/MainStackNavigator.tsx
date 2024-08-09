import 'react-native-gesture-handler';
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainDrawerNavigator from './MainDrawerNavigator';
import {Image, View} from 'react-native';
import ScreenTwo from '../screens/ScreenTwo';
import ScreenThree from '../screens/ScreenThree';
import MainTabNavigator from './MainTabNavigator';
import SettingsScreen from '../screens/SettingsScreen';
import {useSelector} from 'react-redux';
import {RootState} from '../redux/store';
import {useEffect, useState} from 'react';
import AppConstants from '../constants/AppConstants';

const Stack = createNativeStackNavigator();

/**
 * Main navigator
 *
 * Contains screens included in the drawer menu,
 */
export default function MainStackNavigator(): React.JSX.Element {
  const {appTheme} = useSelector((state: RootState) => state.Settings);
  const [applicationTheme, setApplicationTheme] = useState(DefaultTheme);

  useEffect(() => {
    setApplicationTheme(
      appTheme === AppConstants.dark ? DarkTheme : DefaultTheme,
    );
  }, [appTheme]);

  return (
    <NavigationContainer theme={applicationTheme}>
      <Stack.Navigator
        initialRouteName="Drawer"
        screenOptions={{
          headerShown: false,
          gestureEnabled: false,
        }}>
        <Stack.Screen name="Tabs" component={MainTabNavigator} />
        <Stack.Screen name="ScreenTwo" component={ScreenTwo} />
        <Stack.Screen name="ScreenThree" component={ScreenThree} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
