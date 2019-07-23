import React from 'react';
import {
  View, Text, Image, Button, StyleSheet, TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Food1 from '../../assets/sample_food_1.png';
import Sample from '../../component/sample';


const ItemSearch = props => (
  <TouchableOpacity
    style={{ ...styles.childContainer, ...{ marginTop: props.index === 0 ? 20 : 5 } }}
    key={props.index}
  >
    <View style={styles.itemContent}>

      <View style={styles.imageContent}>
        <Image
          style={styles.itemImage}
          source={Food1}
          resizeMode="cover"
        />
        <Text style={styles.itemName} numberOfLines={2}>
          {props.item.name}
        </Text>
      </View>

      <TouchableOpacity
        onPress={props.expanded}
        style={{
          justifyContent: 'center',
        }}
      >
        <Ionicons
          name={props.item.isExpanded ? 'ios-arrow-dropup-circle' : 'ios-arrow-dropdown-circle'}
          size={25}
          color="#030F09"
        />
      </TouchableOpacity>

    </View>

    {/* collapsing     */}
    <View style={{ height: props.item.isExpanded ? null : 0, overflow: 'hidden' }}>
      <Text style={styles.descriptionText} numberOfLines={5}>
        {Sample.description}
      </Text>
      {/* like comment group */}
      <View style={styles.groupTitle}>
        <Text style={styles.likeCommentText}>32 likes . 8 comments</Text>
        <TouchableOpacity style={styles.buttonSave}>
          <Text style={styles.saveText}>+  Save</Text>
        </TouchableOpacity>
      </View>
    </View>

  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  childContainer: {
    flexDirection: 'column',
    paddingBottom: 10,
    paddingTop: 10,
    paddingLeft: 15,
    paddingRight: 15,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 10,
    backgroundColor: 'white',
  },
  itemContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemName: {
    flex: 1,
    color: 'rgba(3, 15, 9, 1)',
    fontSize: 14,
    marginLeft: 15,
    paddingRight: 7,
  },
  itemImage: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
  },
  imageContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },

  //   collapse view
  groupTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  descriptionText: {
    color: 'rgb(168, 168, 168)',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: 'normal',
    lineHeight: 22,
    paddingTop: 10,
    paddingBottom: 10,
  },
  likeCommentText: {
    color: 'rgb(96, 96, 96)',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: 'normal',
    lineHeight: 22,
  },
  buttonSave: {
    borderColor: 'rgb(48, 190, 118)',
    borderRadius: 5,
    borderWidth: 1,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5,
    width: 75,
    alignItems: 'center',
  },
  saveText: {
    color: 'rgb(48, 190, 118)',
    fontSize: 14,
    // fontStyle: 'normal',
    // fontWeight: 'bold',
    // lineHeight: 18,
    // letterSpacing: 0.4,
    // backgroundColor: 'transparent',
  },

});

export default ItemSearch;
