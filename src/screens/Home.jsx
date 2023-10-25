import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Heading from '../components/Heading';
import Colors from '../utils/Colors';
import {horizontalScale, moderateScale, verticalScale} from '../utils/Metrices';
import Button from '../components/Button';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {updateSelectedWord} from '../redux/features/wordSlice';

const Home = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const homeRedux = useSelector(state => state.homeSlice);

  const renderCrds = ({item, index}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          dispatch(updateSelectedWord({categoryId: item.id}));
          navigation.navigate('Game', {data: item});
        }}
        style={styles.card}>
        <Text style={styles.optionText}>{(item.name ?? '').toUpperCase()}</Text>
        <Image source={item.icon} style={styles.optionIcon} />
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView
      style={{
        backgroundColor: Colors.purple,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Heading />
      <View style={styles.centerView}>
        <Text style={styles.subText}>{' ~ make words of ~ '}</Text>
        <FlatList data={homeRedux.list} renderItem={renderCrds} />
      </View>
      <Button
        onPress={() => {
          navigation.navigate('Ranks');
        }}>
        LEADERBOARD
      </Button>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  centerView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  subText: {
    fontWeight: 'bold',
    fontSize: moderateScale(15),
    marginVertical: verticalScale(20),
    color: Colors.darkYellow,
  },
  card: {
    backgroundColor: Colors.lightYellow,
    height: verticalScale(90),
    width: horizontalScale(334),
    borderRadius: moderateScale(8),
    marginBottom: verticalScale(17),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: horizontalScale(15),
  },
  optionText: {
    color: Colors.purple,
    fontSize: moderateScale(30),
    fontWeight: '200',
    flex: 1,
  },
  optionIcon: {
    width: verticalScale(70),
    resizeMode: 'contain',
  },
});
