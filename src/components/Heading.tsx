/**
 * This component represents a heading for a screen.
 * @param {HeadingProps} {navType}
 * @returns {JSX.Element}
 */
import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import BigText, { BigTextProps } from './BigText';
import Colors from '../utils/Colors';
import { horizontalScale, verticalScale } from '../utils/Metrices';
import { useNavigation } from '@react-navigation/native';

/**
 * The props for the Heading component.
 */
export type HeadingProps = BigTextProps & {
  navType: 'back' | 'none';
};

/**
 * The Heading component displays a header for a screen.
 * It can include a back button or a title, depending on the `navType`.
 *
 * @param {HeadingProps} {navType}
 * @returns {JSX.Element}
 */
const Heading: React.FC<HeadingProps> = ({ navType }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {navType == 'back' && (
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          style={styles.backButton}>
          <BigText>{'<'}</BigText>
        </TouchableOpacity>
      )}
      <TouchableOpacity activeOpacity={1} style={styles.titleContainer}>
        <BigText>{'Letter Box'}</BigText>
      </TouchableOpacity>
      {navType == 'back' && <TouchableOpacity style={styles.backButtonEmpty}></TouchableOpacity>}
    </View>
  );
};

export default Heading;

// Define a separate stylesheet for styling.
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingVertical: verticalScale(25),
  },
  backButton: {
    width: horizontalScale(50),
    paddingHorizontal: horizontalScale(15),
  },
  backButtonEmpty: {
    width: horizontalScale(50),
    paddingHorizontal: horizontalScale(15),
  },
  titleContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
