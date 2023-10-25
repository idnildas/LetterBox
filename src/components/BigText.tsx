import {View, Text, TextProps, TextStyle} from 'react-native';
import React from 'react';
import {moderateScale} from '../utils/Metrices';
import Colors from '../utils/Colors';

export type BigTextProps = TextProps & {
  textStyle?: TextStyle;
}
const BigText: React.FC<BigTextProps> = ({textStyle, children, ...props}) => {
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
