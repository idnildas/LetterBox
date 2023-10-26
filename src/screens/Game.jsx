import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';

// Custom component imports
import Colors from '../utils/Colors';
import Heading from '../components/Heading';
import Button from '../components/Button';

// Utility function imports
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../utils/Metrices';

// Redux imports
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';

/**
 * Game component handles the game interface.
 * @returns {JSX.Element} The rendered Game component.
 */
const Game = () => {
  const navigation = useNavigation();
  const wordRedux = useSelector(state => state.wordSlice.selected);

  /**
   * Shuffles the letters of a word.
   * @param {string} word - The word to shuffle.
   * @returns {string[]} The shuffled word as an array.
   */
  const shuffleWord = word => {
    const wordArray = word.split('');

    // Fisher-Yates shuffle algorithm to shuffle the array
    for (let i = wordArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];
    }

    return wordArray;
  };

  const [letters, setLetters] = useState(shuffleWord(wordRedux.word));
  const [word, setWord] = useState(
    Array.from({ length: wordRedux.word.length }, () => '')
  );
  const [letterIndices, setLetterIndices] = useState(
    Array.from({ length: wordRedux.word.length }, () => -1)
  );

  /**
   * Pushes a string into an empty position in the word.
   * @param {string} str - The string to push.
   * @param {number} letterIndex - The index of the letter.
   * @returns {boolean} `true` if the string was pushed successfully, `false` if no empty position is available.
   */
  const pushStringIntoEmptyPosition = (str, letterIndex) => {
    const index = word.indexOf('');
    if (index !== -1) {
      word[index] = str;
      setWord(old => [...word]);

      letterIndices[index] = letterIndex;
      setLetterIndices(old => [...letterIndices]);

      if (letterIndex !== -1) {
        setLetters(letters => {
          const updatedLetters = [...letters];
          updatedLetters[letterIndex] = '';
          return updatedLetters;
        });
      }

      return true; // String pushed successfully
    } else {
      return false; // No empty position available
    }
  };

  /**
   * Removes the last added letter and puts it back into the letters array in the correct position.
   */
  const removeLastAdded = () => {
    let last = -1;
    for (let i = word.length - 1; i >= 0; i--) {
      if (word[i] !== '') {
        last = i;
        break;
      }
    }
    if (last !== -1) {
      const letter = word[last];
      const position = letterIndices[last];
      letters[position] = letter;
      setLetters(old => [...letters]);

      word[last] = '';
      letterIndices[last] = -1;
      setWord(old => [...word]);
      setLetterIndices(old => [...letterIndices]);
    }
  };

  /**
   * Calculates the point based on word length and complexity.
   * @returns {number} The total points for the word.
   */
  const getPoint = () => {
    let basePoints = 10;
    let lengthBonus = Math.floor((word.length - 3) * 2);

    const rareLetters = { q: 5, x: 5, z: 5, p: 1, s: 1, y: 1 };
    let complexityPoints = 0;

    complexityPoints += lengthBonus;

    for (let i = 0; i < word.length; i++) {
      const letter = word[i].toLowerCase();
      if (rareLetters[letter]) {
        complexityPoints += rareLetters[letter];
      }
    }

    let totalPoints = basePoints + lengthBonus + complexityPoints;
    return totalPoints;
  };

  /**
   * Evaluates the word and navigates to the result screen.
   */
  const evaluate = () => {
    if (word.join('') === wordRedux.word) {
      const point = getPoint();
      navigation.navigate('Result', { data: 1, points: point });
    } else {
      navigation.navigate('Result', { data: 0, points: 0 });
    }
  };

  /**
   * Renders a word item.
   * @param {string} item - The letter.
   * @param {number} index - The index of the letter.
   * @returns {JSX.Element} The rendered word item.
   */
  const renderWord = (item, index) => {
    return (
      <TouchableOpacity style={styles.wordItem}>
        <Text style={styles.wordText}>{item.toUpperCase()}</Text>
      </TouchableOpacity>
    );
  };

  /**
   * Renders a letter item.
   * @param {string} item - The letter.
   * @param {number} index - The index of the letter.
   * @returns {JSX.Element} The rendered letter item.
   */
  const renderLetters = (item, index) => {
    return (
      <TouchableOpacity
        onPress={() => pushStringIntoEmptyPosition(item, index)}
        style={styles.letters}>
        <Text style={{ color: Colors.darkPurple }}>{item.toUpperCase()}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Heading />
      <View style={styles.centerView}>
        <View style={styles.wordView}>{word.map(renderWord)}</View>
        <TouchableOpacity onPress={removeLastAdded}>
          <Text style={styles.deleteText}>{'<- DELETE'}</Text>
        </TouchableOpacity>
        <Text style={styles.hintView}>{`${'Hint: '}${wordRedux.hint}`}</Text>
        <View style={styles.lettersList}>{letters.map(renderLetters)}</View>
      </View>
      <Button
        onPress={() => {
          navigation.navigate('Result', { data: 0 });
        }}>
        SKIP
      </Button>
      <Button
        onPress={() => {
          evaluate();
        }}>
        SUBMIT
      </Button>
    </SafeAreaView>
  );
};

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
  wordView: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginVertical: verticalScale(20),
  },
  wordItem: {
    borderWidth: moderateScale(1),
    borderColor: Colors.yellow,
    width: horizontalScale(35),
    aspectRatio: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: horizontalScale(5),
  },
  wordText: {
    color: Colors.darkYellow,
  },
  hintView: {
    width: horizontalScale(334),
    flexShrink: 0,
    flexGrow: 0,
    marginVertical: verticalScale(20),
    textAlign: 'center',
    textAlignVertical: 'center',
    color: Colors.darkYellow,
    borderWidth: moderateScale(1),
    borderColor: Colors.darkYellow,
    borderRadius: moderateScale(4),
    padding: moderateScale(5),
  },
  lettersList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    flex: 1,
    marginBottom: verticalScale(50),
  },
  letters: {
    backgroundColor: Colors.yellow,
    width: horizontalScale(45),
    aspectRatio: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: horizontalScale(12),
  },
  deleteText: {
    fontWeight: 'bold',
    fontSize: moderateScale(15),
    color: Colors.darkYellow,
    padding: moderateScale(10),
  },
});

export default Game;
