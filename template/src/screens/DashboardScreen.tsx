import {Text, View,  Button} from 'react-native';
import {NativeStackScreenProps} from 'react-native-screens/lib/typescript/native-stack/types';
import {RootStackParamList} from '../navigation/NavParamTypes';

type Props = NativeStackScreenProps<RootStackParamList, 'Dashboard'>;

const DashboardScreen: React.FC<Props> = ({navigation}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Welcome To Dashboard</Text>
      <Button
        title="Navigate"
        onPress={() => navigation.navigate('ScreenTwo')}></Button>
    </View>
  );
};

export default DashboardScreen;
