import { View, Text, SafeAreaView, StyleSheet, Image } from 'react-native';
import React, { useEffect } from 'react';
import Colors from '../utils/Colors';
import assets from '../assets';
import BigText from '../components/BigText';
import Button from '../components/Button';
import { horizontalScale, moderateScale, verticalScale } from '../utils/Metrices';
import { CommonActions, useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { addUserPoint } from '../redux/features/pointSlice';

/**
 * Result component displays the game result.
 * @param {object} route - The route object containing navigation data.
 * @returns {JSX.Element} The rendered Result component.
 */
const Result = ({ route }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  
  // Use effect to dispatch an action when the component mounts
  useEffect(() => { 
    dispatch(addUserPoint(route.params?.points ?? 0));
  }, [route]);

  return (
    <SafeAreaView style={styles.container}>
      {route.params.data === 1 ? (
        <View style={styles.centerView}>
          <Image source={assets.resultStar} />
          <BigText>Correct!</BigText>
          <Text style={styles.subText}>
            {'youv’e won'}
            {'\n'}
            <Text style={styles.creditText}>{`${route.params?.points ?? 0} CREDITS`}</Text>
          </Text>
        </View>
      ) : (
        <View style={styles.centerView}>
          <BigText>{"Better Luck\n Next Time!!!"}</BigText>
        </View>
      )}
      <Button onPress={() => {navigation.dispatch(CommonActions.reset({index:0, routes:[{name:"Home"}]}))}}>GO HOME</Button>
    </SafeAreaView>
  );
};

export default Result;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.purple,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: horizontalScale(25),
  },
  subText: {
    color: Colors.darkYellow,
    textAlign: 'center',
    marginVertical: verticalScale(25),
    fontSize: moderateScale(15),
  },
  creditText: {
    fontSize: moderateScale(20),
    lineHeight: verticalScale(35),
  },
});
