import { View, Text, TouchableOpacityProps, TouchableOpacity, ViewStyle, TextStyle, StyleSheet } from 'react-native'
import React from 'react'
import { horizontalScale, moderateScale, verticalScale } from '../utils/Metrices'
import Colors from '../utils/Colors'

/**
 * Button component with customizable styles.
 * @param {ButtonProps} {buttonStyle, textStyle, children, ...props}
 * @returns {JSX.Element}
 */
type ButtonProps = TouchableOpacityProps & {
    buttonStyle: ViewStyle,
    textStyle: TextStyle
}

const Button: React.FC<ButtonProps> = ({ buttonStyle, textStyle, children, ...props }) => {
    return (
        <TouchableOpacity style={[styles.button, buttonStyle]} {...props}>
            <Text style={[styles.buttonText, textStyle]}>{children}</Text>
        </TouchableOpacity> 
    )
}

export default Button;

/**
 * Styles for the Button component.
 */
const styles = StyleSheet.create({
    button: {
        width: horizontalScale(378),
        backgroundColor: Colors.darkYellow,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: verticalScale(17),
        height: verticalScale(45),
        borderRadius: moderateScale(8),
    },
    buttonText: {
        color: Colors.darkPurple,
        fontSize: moderateScale(14),
        fontWeight: '500',
    },
});
