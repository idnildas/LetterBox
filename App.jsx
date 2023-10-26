/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useState } from 'react';
import {
  StatusBar,
  Text,
  View,
} from 'react-native';
import Colors from './src/utils/Colors';
import Constants from './src/utils/Constants';
import { horizontalScale, moderateScale, verticalScale } from './src/utils/Metrices';
import LottieView from 'lottie-react-native';
import assets from './src/assets';
import Nav from './src/Nav';
import { asyncstorageMultiGet } from './src/utils/AsyncstorageFunction';
import { updateUserPoint } from './src/redux/features/pointSlice';
import { useDispatch } from 'react-redux';

/**
 * The main component for the entire app.
 *
 * @returns {JSX.Element} The rendered app.
 */
const App = () => {
  const [isSplash, setSplash] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    getAsyncData();
  }, []);

  /**
   * Fetches async data from storage and updates the Redux store.
   */
  const getAsyncData = async () => {
    await asyncstorageMultiGet(["points"])
      .then(response => {
        console.log("Points fetched: ", response[0][1]);
        dispatch(updateUserPoint(JSON.parse(response[0][1])));
      });

    setTimeout(() => {
      setSplash(false);
    }, 1000);
  }

  if (isSplash) {
    return (
      <View style={{ flex: 1, backgroundColor: Colors.purple, justifyContent: "center", alignItems: "center" }}>
        <StatusBar backgroundColor={"transparent"} translucent />
        <LottieView source={assets.splashLottie} autoPlay loop={false} style={{ width: horizontalScale(428), height: verticalScale(350) }} />
      </View>
    )
  }
  else {
    return (
      <Nav />
    )
  }
}

export default App;
