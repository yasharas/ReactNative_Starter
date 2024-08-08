import {
  Text,
  View,
  Button,
  Image,
  StyleSheet,
  SafeAreaView,
  Animated,
  Easing,
  Pressable,
  Modal,
  Platform,
  FlatList,
} from 'react-native';
import {NativeStackScreenProps} from 'react-native-screens/lib/typescript/native-stack/types';
import {RootStackParamList} from '../navigation/NavParamTypes';
import Translate from '../hooks/Translate';
import Colors from '../styles/Colors';
import {fontHeight} from '../styles/Fonts';
import {useEffect, useRef, useState} from 'react';
import Images from '../utils/Images';
import {useDispatch, useSelector} from 'react-redux';
import {HomeSliceActions} from '../redux/slices/HomeSlice';
import {AppDispatch, RootState} from '../redux/store';

type Props = NativeStackScreenProps<RootStackParamList, 'Dashboard'>;

const DashboardScreen: React.FC<Props> = ({navigation}) => {
  const dispatch = useDispatch<AppDispatch>();
  const {sampleData} = useSelector((state: RootState) => state.Home);
  console.log('sample data', sampleData);
  const [visible, setVisible] = useState(false);
  const scale = useRef(new Animated.Value(0)).current;
  const options = [
    {
      title: 'Settings',
      icon: Images.settings,
      action: () => {
        navigation.navigate('Settings');
      },
    },
    {
      title: 'Logout',
      icon: Images.logout,
    },
  ];

  function resizeBox(to: number) {
    to === 1 && setVisible(true);
    Animated.timing(scale, {
      toValue: to,
      useNativeDriver: true,
      duration: 150,
      easing: Easing.linear,
    }).start(() => to === 0 && setVisible(false));
  }

  useEffect(() => {
    dispatch(HomeSliceActions.getSampleDataAction());
  }, []);

  return (
    <View style={{flex: 1}}>
      <SafeAreaView style={styles.topHalf}>
        <Pressable onPress={() => resizeBox(1)}>
          <Image
            source={Images.hamburger}
            style={{
              marginLeft: 10,
              height: 24,
              width: 24,
              tintColor: Colors.black,
              alignSelf: 'flex-start',
            }}
          />
        </Pressable>
        <Modal transparent visible={visible}>
          <SafeAreaView
            style={{flex: 1, backgroundColor: 'transparent'}}
            onTouchStart={() => resizeBox(0)}>
            <Animated.View
              style={[
                styles.popup,
                {
                  opacity: scale.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 1],
                  }),
                },
                {
                  transform: [{scale: scale}],
                },
              ]}>
              {options.map((op, i) => (
                <Pressable key={i} onPress={op.action}>
                  <View
                    style={{
                      flexDirection: 'row',
                      margin: 6,
                      justifyContent: 'start',
                      alignItems: 'center',
                    }}>
                    <Image
                      source={op.icon}
                      style={{
                        height: 24,
                        width: 24,
                        marginLeft: 10,
                        marginRight: 20,
                      }}
                    />
                    <Text
                      style={{
                        marginVertical: 8,
                        fontSize: 16,
                        color: Colors.black,
                      }}>
                      {op.title}
                    </Text>
                  </View>
                </Pressable>
              ))}
            </Animated.View>
          </SafeAreaView>
        </Modal>

        <View style={{flex: 1, justifyContent: 'center'}}>
          <Text
            style={{
              textAlignVertical: 'center',
              textAlign: 'center',
              fontSize: fontHeight.FONT24,
              color: Colors.white,
            }}>
            {Translate('Hello')}
          </Text>
        </View>
      </SafeAreaView>
      <View style={styles.bottomHalf}>
        <View style={{padding: 10}}>
          <Text style={styles.itemTextColor}>Sample List</Text>
        </View>
        <FlatList
          data={sampleData}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <Pressable onPress={() => navigation.navigate('ScreenTwo')}>
              <Item
                title={item.title}
                completed={item.completed}
                id={item.id}
              />
            </Pressable>
          )}
        />
      </View>
    </View>
  );
};
type ItemProps = {title: string; completed: boolean; id: number};

const Item = ({title, completed, id}: ItemProps) => (
  <View style={styles.item}>
    <Text style={styles.itemTextColor}>{id}</Text>
    <Text style={styles.itemTextColor}>{title}</Text>
    <Text style={styles.itemTextColor}>{completed?.toString()}</Text>
  </View>
);

export default DashboardScreen;

const styles = StyleSheet.create({
  topHalf: {
    flex: 0.5,
    backgroundColor: Colors.primary,
  },
  bottomHalf: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  popup: {
    borderRadius: 6,
    borderColor: Colors.white,
    borderWidth: 1,
    shadowColor: Colors.primary,
    shadowOpacity: 0.8,
    shadowRadius: 4,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 10,
    position: 'absolute',
    width: undefined,
    top: Platform.OS === 'ios' ? 80 : 30,
    left: 20,
    justifyContent: 'flex-start',
  },
  item: {
    backgroundColor: Colors.white,
    padding: 6,
    marginVertical: 8,
    marginHorizontal: 10,
    borderRadius: 2,
    shadowColor: Colors.grey,
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 10,
  },
  itemTextColor: {
    color: 'grey',
    fontSize: fontHeight.FONT14,
  },
});
