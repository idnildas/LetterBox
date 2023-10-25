import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import BigText, { BigTextProps } from './BigText';
import Colors from '../utils/Colors';
import { horizontalScale, verticalScale } from '../utils/Metrices';
import { useNavigation } from '@react-navigation/native';

export type HeadingProps = BigTextProps & {
  navType: 'back' | 'none';
};

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

// Define a separate stylesheet
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
