import {Button, Pressable, Text, View} from 'react-native';

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
    <View
      style={{
        backgroundColor: 'red',
        height: 60,
        flexDirection: 'row',
        width: '100%',
        alignItems: 'stretch',
        paddingHorizontal: 6,
        paddingVertical: 4,
      }}>
      <View
        style={{
          width: '12%',
          justifyContent: 'center',
          alignItems: 'flex-start',
        }}>
        {leftIconVisible && (
          <Button title="<" onPress={leftIconPressed}></Button>
        )}
      </View>
      <View
        style={{width: '76%', justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{textAlign: 'center'}}>{screenTitle}</Text>
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
