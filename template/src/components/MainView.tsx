import {SafeAreaView, View} from 'react-native';
import Navbar from './Navbar';

export type MainViewProps = {
  children?: any;
  leftIconVisible?: Boolean;
  leftIconPressed: any;
  rightIcon?: React.JSX.Element;
  rightIconPressed?: any;
  screenTitle: string;
  mainView?: React.JSX.Element;
};

const MainView = ({
  children,
  leftIconVisible = true,
  leftIconPressed,
  rightIcon,
  rightIconPressed = () => {},
  screenTitle = 'Add Screen Title',
  mainView,
}: MainViewProps) => {
  return (
    <SafeAreaView style={{flex: 1,}}>
      <Navbar screenTitle={screenTitle} leftIconVisible={leftIconVisible} leftIconPressed={leftIconPressed} />
      {children}
    </SafeAreaView>
  );
};

export default MainView;
