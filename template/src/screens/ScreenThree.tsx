import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Text, View, SafeAreaView} from 'react-native';
import {RootStackParamList} from '../navigation/NavParamTypes';
import Navbar from '../components/Navbar';
import MainView from '../components/MainView';
import Colors from '../styles/Colors';

type Props = NativeStackScreenProps<RootStackParamList, 'ScreenThree'>;

const ScreenThree = ({navigation}: Props) => {
  return (
    <MainView
      screenTitle="Screen Three"
      leftIconPressed={() => navigation.goBack()}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: Colors.white}}>
        <Text>This is screen three with view enclosed in Main View</Text>
      </View>
    </MainView>
  );
};

export default ScreenThree;
