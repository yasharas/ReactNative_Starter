import {StyleSheet} from 'react-native';
import Colors from './Colors';
import {fontHeights} from './Fonts';

const Styles = StyleSheet.create({
  mainNavbar: {
    backgroundColor: Colors.primary,
    height: 44,
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: 6,
    paddingVertical: 4,
  },
  navBarTitle: {
    color: Colors.white,
    fontSize: fontHeights.FONT14,
    textAlign: 'center',
  },
  navBarIcon: {
    color: Colors.white,
    fontSize: fontHeights.FONT24,
    textAlign: 'center',
  },
  mainViewContainer: {
    backgroundColor: Colors.white,
    padding: 8,
  },
});

export default Styles;
