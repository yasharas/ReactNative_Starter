import {Text, View, SafeAreaView, Button} from 'react-native';
import Navbar from '../components/Navbar';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigation/NavParamTypes';

type Props = NativeStackScreenProps<RootStackParamList, 'ScreenTwo'>;

const ScreenTwo = ({navigation}: Props) => {
  let rightIconView = <Text>|||</Text>;
  return (
    <SafeAreaView style={{flex: 1}}>
      <Navbar
        screenTitle="Screen Two"
        rightIcon={rightIconView}
        leftIconPressed={() => navigation.goBack()}
      />
     <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>This is Screen Two with Navbar</Text>
        <Button title='Navigate' onPress={() => navigation.navigate('ScreenThree')}></Button>
      </View>
    </SafeAreaView>
  );
};

export default ScreenTwo;
