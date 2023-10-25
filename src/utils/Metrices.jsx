import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const guidelineBaseWidth = 430;
const guidelineBaseHeight = 932;
const [shortDimension, longDimension] = width < height ? [width, height] : [height, width];

const horizontalScale = (size) => (shortDimension / guidelineBaseWidth) * size;
const verticalScale = (size) => (longDimension / guidelineBaseHeight) * size;
const moderateScale = (size, factor = 0.5) => size + (horizontalScale(size) - size) * factor;

export { horizontalScale, verticalScale, moderateScale };