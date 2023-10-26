/**
 * This component represents big text with custom styling.
 * @param {BigTextProps} {textStyle, children, ...props}
 * @returns {JSX.Element}
 */
import { View, Text, TextProps, TextStyle } from 'react-native';
import React from 'react';
import { moderateScale } from '../utils/Metrices';
import Colors from '../utils/Colors';

/**
 * The props for the BigText component.
 */
export type BigTextProps = TextProps & {
  textStyle?: TextStyle;
};

/**
 * The BigText component displays large text with custom styling.
 *
 * @param {BigTextProps} {textStyle, children, ...props}
 * @returns {JSX.Element}
 */
const BigText: React.FC<BigTextProps> = ({ textStyle, children, ...props }) => {
  return (
    <Text
      style={[
        {
          fontFamily: 'BigelowRules-Regular',
          fontSize: moderateScale(60),
          color: Colors.lightYellow,
        },
        textStyle,
      ]}
      {...props}>
      {children}
    </Text>
  );
};

export default BigText;
