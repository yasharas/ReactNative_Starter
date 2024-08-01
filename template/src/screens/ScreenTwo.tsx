import {Text, View, SafeAreaView, Image} from 'react-native';
import Navbar from '../components/Navbar';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigation/NavParamTypes';

type Props = NativeStackScreenProps<RootStackParamList, 'ScreenTwo'>;

const ScreenTwo = ({navigation}: Props) => {
  let rightIconView = <Text>|||</Text>;
  return (
    <SafeAreaView>
      <Navbar
        screenTitle="Screen Two"
        rightIcon={rightIconView}
        leftIconPressed={() => navigation.goBack()}
      />
      <View>
        <Text>Welcome To Screen Two</Text>
      </View>
    </SafeAreaView>
  );
};

export default ScreenTwo;
