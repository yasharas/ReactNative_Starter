import {Button, Pressable, Text, View} from 'react-native';
import Styles from '../styles/Styles';
import Colors from '../styles/Colors';

export type Props = {
  leftIconVisible?: Boolean;
  leftIconPressed: any;
  rightIcon?: React.JSX.Element;
  rightIconPressed?: any;
  screenTitle: string;
};

const Navbar: React.FC<Props> = ({
  leftIconVisible = true,
  leftIconPressed,
  rightIcon,
  rightIconPressed = () => {},
  screenTitle = 'Add Screen Title',
}) => {
  return (
    <View style={Styles.mainNavbar}>
      <View
        style={{
          width: '12%',
          justifyContent: 'center',
          alignItems: 'flex-start',
        }}>
        {leftIconVisible && (
          <Pressable onPress={leftIconPressed}>
            <Text style={Styles.navBarIcon}>{'<'}</Text>
          </Pressable>
        )}
      </View>
      <View
        style={{width: '76%', justifyContent: 'center', alignItems: 'center'}}>
        <Text style={Styles.navBarTitle}>{screenTitle}</Text>
      </View>
      <Pressable
        style={{width: '12%', justifyContent: 'center', alignItems: 'flex-end'}}
        onPress={rightIconPressed}>
        {rightIcon}
      </Pressable>
    </View>
  );
};

export default Navbar;
