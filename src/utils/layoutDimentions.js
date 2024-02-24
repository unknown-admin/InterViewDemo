import {Dimensions} from 'react-native';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

const wp = percentage => {
  return (percentage * screenWidth) / 100;
};

const hp = percentage => {
  return (percentage * screenHeight) / 100;
};

const fontSize = percentage => {
  const averageScreenSize = (screenWidth + screenHeight) / 2;
  return (percentage * averageScreenSize) / 100;
};

export {wp, hp, fontSize};
