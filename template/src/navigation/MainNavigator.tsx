import 'react-native-gesture-handler';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import HomeTabNavigator from './HomeTabNavigator';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from './NavParamTypes';
import DrawerNavigator from './DrawerNavigator';
import {Image, View} from 'react-native';
import ScreenTwo from '../screens/ScreenTwo';
import ScreenThree from '../screens/ScreenThree';

const Stack = createNativeStackNavigator();

/**
 * Main navigator
 *
 * Contains screens included in the drawer menu,
 */
export default function MainNavigator(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Drawer"
        screenOptions={{
          header: () => (
            <View style={{backgroundColor: 'white', height: 60}}></View>
          ),
          headerTitle: '',
        }}>
        <Stack.Screen name="Drawer" component={DrawerNavigator} />
        <Stack.Screen name="ScreenTwo" component={ScreenTwo} />
        <Stack.Screen name="ScreenThree" component={ScreenThree} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
