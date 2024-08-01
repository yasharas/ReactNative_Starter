import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainDrawerNavigator from './MainDrawerNavigator';
import {Image, View} from 'react-native';
import ScreenTwo from '../screens/ScreenTwo';
import ScreenThree from '../screens/ScreenThree';

const Stack = createNativeStackNavigator();

/**
 * Main navigator
 *
 * Contains screens included in the drawer menu,
 */
export default function MainStackNavigator(): React.JSX.Element {
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
        <Stack.Screen name="Drawer" component={MainDrawerNavigator} />
        <Stack.Screen name="ScreenTwo" component={ScreenTwo} />
        <Stack.Screen name="ScreenThree" component={ScreenThree} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
