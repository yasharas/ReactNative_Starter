import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeTabNavigator from './HomeTabNavigator';
import SettingsScreen from '../screens/SettingsScreen';
import {SafeAreaView} from 'react-native';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
      <Drawer.Navigator
        initialRouteName="HomeStack"
        screenOptions={{
          headerTransparent: true,
          headerTitle: '',
        }}>
        <Drawer.Screen  name="HomeTab" component={HomeTabNavigator} />
        <Drawer.Screen name="Settings" component={SettingsScreen} />
      </Drawer.Navigator>
  );
}
