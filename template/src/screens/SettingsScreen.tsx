import {Text, View, SafeAreaView} from 'react-native';
import MainView from '../components/MainView';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigation/NavParamTypes';

type Props = NativeStackScreenProps<RootStackParamList, 'Settings'>;

const SettingsScreen = ({navigation}: Props) => {
  return (
    <MainView
      screenTitle="Settings"
      leftIconVisible={false}
      leftIconPressed={() => navigation.goBack()}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>This is settings with view enclosed in Main View</Text>
      </View>
    </MainView>
  );
};

export default SettingsScreen;
