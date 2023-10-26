import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';

// Custom component imports
import Heading from '../components/Heading';
import Button from '../components/Button';

// Utility function imports
import Colors from '../utils/Colors';
import { horizontalScale, moderateScale, verticalScale } from '../utils/Metrices';

// Redux imports
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { updateSelectedWord } from '../redux/features/wordSlice';

/**
 * Home component displays categories for the game.
 * @returns {JSX.Element}
 */
const Home = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const homeRedux = useSelector(state => state.homeSlice);

  /**
   * Renders the category cards.
   * @param {object} item - The category data.
   * @param {number} index - The index of the category.
   * @returns {JSX.Element}
   */
  const renderCards = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          dispatch(updateSelectedWord({ categoryId: item.id }));
          navigation.navigate('Game', { data: item });
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
        <FlatList data={homeRedux.list} renderItem={renderCards} />
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

export default Home;
