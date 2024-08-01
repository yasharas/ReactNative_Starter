import {Text, View, SafeAreaView} from 'react-native';
import MainView from '../components/MainView';
import Colors from '../styles/Colors';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigation/NavParamTypes';

type Props = NativeStackScreenProps<RootStackParamList, 'ProfileScreen'>;

const ProfileScreen = ({navigation}: Props) => {
  return (
    <MainView screenTitle="Profile Screen" leftIconVisible={false}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: Colors.white,
        }}>
        <Text>This is the Profile Screen</Text>
      </View>
    </MainView>
  );
};

export default ProfileScreen;
