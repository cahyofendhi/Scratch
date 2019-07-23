import React from 'react';
import {
  View, Text, Image, FlatList, StyleSheet, TouchableOpacity,
} from 'react-native';

import Food1 from '../../assets/sample_food_1.png';

const ItemSearch = props => (
  <TouchableOpacity
    style={styles.itemContent}
    key={props.index}
  >
    <Image
      style={styles.itemImage}
      source={Food1}
      resizeMode="cover"
    />
    <Text style={styles.itemName}>{props.item}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  itemContent: {
    flex: 1,
    flexDirection: 'row',
    paddingBottom: 10,
    paddingTop: 10,
    paddingLeft: 20,
    paddingRight: 20,
    alignItems: 'center',
  },
  itemName: {
    color: 'rgba(3, 15, 9, 1)',
    fontSize: 14,
    marginLeft: 15,
  },
  itemImage: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
  },
});

export default ItemSearch;
