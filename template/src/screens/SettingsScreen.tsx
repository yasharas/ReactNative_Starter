import {Text, View, SafeAreaView, Switch, StyleSheet} from 'react-native';
import MainView from '../components/MainView';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigation/NavParamTypes';
import {Dropdown} from 'react-native-element-dropdown';
import Colors from '../styles/Colors';
import { useState } from 'react';
import DropdownModel from '../models/DropdownModel';
import i18n from '../Localization/Localize';
import globalConfig from '../utils/globalConfig';

type Props = NativeStackScreenProps<RootStackParamList, 'Settings'>;

const SettingsScreen = ({navigation}: Props) => {

  const [selectedLanguage, setSelectedLanguage] = useState(global.appLanguage ?? 'en');

  const settingsList: any = [
    new DropdownModel('English', 'en'),
    new DropdownModel('Espanol', 'es'),
  ];

  function onLanguageChanged(val: string){
    i18n.changeLanguage(val);
    global.appLanguage = val;
  }

  return (
    <MainView
      screenTitle="Settings"
      leftIconPressed={() => navigation.goBack()}>
      <View style={{flex: 1, padding: 10}}>
        <Text>Change Language</Text>
        <Dropdown
        data={settingsList}
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        itemTextStyle={{color: Colors.black}}
        maxHeight={300}
        labelField="name"
        valueField="value"
        placeholder={'Select Language'}
        value={selectedLanguage}
        onChange={item => {
          onLanguageChanged(item.value)
        }}
        />
      </View>
    </MainView>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  dropdown: {
    marginTop: 10,
    marginHorizontal: 20,
    height: 50,
    borderColor: Colors.white,
    backgroundColor: Colors.white,
    borderWidth: 0.5,
    borderRadius: 6,
    paddingHorizontal: 8,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 30,
    height: 30,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
