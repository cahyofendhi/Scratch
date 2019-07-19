import React, { Component } from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Dimensions,
} from 'react-native';

import FoodImage from '../../assets/sample_food.jpeg';

const screenWidth = Dimensions.get('window').width;

class DetailFeed extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={FoodImage}
          style={styles.image}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  image: {
    width: '100%',
    aspectRatio: 1 / 1,
  },
});

export default DetailFeed;
