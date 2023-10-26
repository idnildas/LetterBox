import React, { useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  FlatList,
} from 'react-native';

// Custom component imports
import Colors from '../utils/Colors';
import assets from '../assets';
import BigText from '../components/BigText';
import Button from '../components/Button';
import { horizontalScale, moderateScale, verticalScale } from '../utils/Metrices';
import { CommonActions, useNavigation } from '@react-navigation/native';
import Heading from '../components/Heading';

// Redux imports
import { useSelector } from 'react-redux';

/**
 * Ranks component displays the leaderboards.
 * @returns {JSX.Element} The rendered Ranks component.
 */
const Ranks = () => {
  const navigation = useNavigation();
  const pointRedux = useSelector(state => state.pointSlice);
  const [leaders, setLeaders] = useState(pointRedux.leaderList);

  /**
   * Renders a leaderboard tuple.
   * @param {Object} item - The leaderboard item.
   * @param {number} index - The index of the item.
   * @returns {JSX.Element} The rendered leaderboard item.
   */
  const renderTupple = ({ item, index }) => {
    return (
      <View style={styles.rankCard}>
        <Text style={styles.itemText}>{item.rank}</Text>
        <Text style={styles.itemText}>{item.username}</Text>
        <Text style={styles.itemText}>{item.totalPoints}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Heading navType={'back'} />
      <View style={styles.centerView}>
        {renderTupple({
          item: { rank: "Rank", username: "Player", totalPoints: "Points" }
        })}
        <FlatList data={leaders} renderItem={renderTupple} style={styles.listStyle} />
      </View>
    </SafeAreaView>
  );
};

export default Ranks;

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
  listStyle: {
    marginVertical: verticalScale(10)
  },
  rankCard: {
    width: horizontalScale(378),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: horizontalScale(15),
    borderWidth: moderateScale(1),
    borderColor: Colors.lightYellow
  },
  itemText: {
    fontWeight: "200",
    fontSize: moderateScale(20),
    color: Colors.lightYellow
  }
});
