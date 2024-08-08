/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import {LogBox, StyleSheet} from 'react-native';
import i18n from './src/Localization/Localize';
import * as RNLocalize from 'react-native-localize';
import MainStackNavigator from './src/navigation/MainStackNavigator';
import {Provider} from 'react-redux';
import { Store } from './src/redux/Store';

function App(): React.JSX.Element {
  useEffect(() => {
    const locale = RNLocalize.getLocales()[0].languageCode;
    i18n.changeLanguage(locale);
    LogBox.ignoreAllLogs();
  }, []);

  return (
    <Provider store={Store}>
      <MainStackNavigator />
    </Provider>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
