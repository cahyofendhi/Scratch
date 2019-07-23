import React from 'react';
import {
  View, Text, Image, StyleSheet, Dimensions, TouchableOpacity, ImageBackground,
} from 'react-native';
import Sample from '../../component/sample';

const screenWidth = Math.round(Dimensions.get('window').width);

const ItemFeed = (props) => {
  const { data } = props;

  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      <ImageBackground
        style={styles.imageBackground}
        imageStyle={styles.imageRadius}
        source={require('../../assets/sample_food.jpeg')}
      >
        <View style={styles.groupProfile}>
          <Image
            source={require('../../assets/sample_avatar.png')}
            style={styles.avatar}
            resizeMode="cover"
          />

          <View style={styles.groupName}>
            <Text style={styles.profileNameText}>Nisya Sabyan</Text>
            <Text style={styles.timeText}>2h ago</Text>
          </View>

        </View>
      </ImageBackground>

      <View style={styles.contentView}>

        {/* title group */}
        <View style={styles.groupTitle}>
          <Text style={styles.title}>Red Wine and Mint Soufflé</Text>
          <TouchableOpacity>
            <Image
              source={require('../../assets/icon_like.png')}
              style={styles.like}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
        {/* description */}
        <Text style={styles.descriptionText} numberOfLines={2}>
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
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  imageBackground: {
    width: '100%',
    aspectRatio: 2 / 1,
  },
  imageRadius: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  groupProfile: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    padding: 10,
    backgroundColor: 'rgba(233,233,233,0.7)',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignContent: 'center',
  },
  avatar: {
    width: 35,
    height: 35,
  },
  groupName: {
    flexDirection: 'column',
    marginLeft: 10,
    justifyContent: 'center',
  },
  profileNameText: {
    color: 'rgb(3, 15, 9)',
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: 'normal',
    textAlign: 'left',
    backgroundColor: 'transparent',
  },
  timeText: {
    backgroundColor: 'transparent',
    color: 'rgb(118, 118, 118)',
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: 'normal',
    textAlign: 'left',
    letterSpacing: 0.4,
  },
  contentView: {
    padding: 10,
    width: '100%',
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  groupTitle: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    alignItems: 'flex-start',
  },
  like: {
    width: 20,
    height: 20,
    justifyContent: 'flex-end',
  },
  descriptionText: {
    color: 'rgb(168, 168, 168)',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: 'normal',
    textAlign: 'left',
    lineHeight: 22,
    alignSelf: 'stretch',
    paddingTop: 10,
    paddingBottom: 10,
  },
  likeCommentText: {
    color: 'rgb(96, 96, 96)',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: 'normal',
    textAlign: 'left',
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
    justifyContent: 'center',
  },
  saveText: {
    color: 'rgb(48, 190, 118)',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: 'bold',
    textAlign: 'left',
    lineHeight: 18,
    letterSpacing: 0.4,
    backgroundColor: 'transparent',
  },
});

export default ItemFeed;
