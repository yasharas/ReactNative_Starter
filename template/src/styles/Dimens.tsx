import {Dimensions, PixelRatio} from 'react-native';

export var SCREEN_HEIGHT: number = Dimensions.get('window').height;
export var SCREEN_WIDTH: number = Dimensions.get('window').width;

export const windowHeight = (height: number) => {
  var tempHeight: number =
    SCREEN_HEIGHT * parseFloat((height / 667).toString());
  return PixelRatio.roundToNearestPixel(tempHeight);
};

export const windowWidth = (width: number) => {
  var tempWidth: number = SCREEN_WIDTH * parseFloat((width / 480).toString());
  return PixelRatio.roundToNearestPixel(tempWidth);
};
