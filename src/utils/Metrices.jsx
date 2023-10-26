/**
 * Description
 * @param {any} 'window'
 * @returns {any}
 */
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const guidelineBaseWidth = 430;
const guidelineBaseHeight = 932;
const [shortDimension, longDimension] = width < height ? [width, height] : [height, width];

/**
 * Description
 * @param {any} size
 * @returns {any}
 */
const horizontalScale = (size) => (shortDimension / guidelineBaseWidth) * size;
/**
 * Description
 * @param {any} size
 * @returns {any}
 */
const verticalScale = (size) => (longDimension / guidelineBaseHeight) * size;
/**
 * Description
 * @param {any} size
 * @param {any} factor=0.5
 * @returns {any}
 */
const moderateScale = (size, factor = 0.5) => size + (horizontalScale(size) - size) * factor;

export { horizontalScale, verticalScale, moderateScale };