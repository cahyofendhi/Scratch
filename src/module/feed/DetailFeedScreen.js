import React, { Component } from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Platform,
  Image,
} from 'react-native';
import BasicComponent from '../BaseComponent';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FoodImage from '../../assets/sample_food.jpeg';
import TabDetailScreen from './TabDetailScreen';

const isAndroid = Platform.OS === 'android';
const screenWidth = Dimensions.get('window').width;

class DetailFeed extends BasicComponent {

  state = {
    images: [1, 2, 3, 4, 5, 6, 7],
    parentGalleryWidth : 0.0,
    parentGalleryHeight : 0.0,
  }

  onPageGalleryLayout = (event) => {
    const { width, height } = event.nativeEvent.layout;
    this.setState({
      parentGalleryWidth: width / 3.5,
      parentGalleryHeight: height
    })
  }

  _imageGalleyView = (index) => {
    const { images } = this.state;
    const isLastImage = images.length - 1 == index // check last image or not
    let moreView = null
    if (isLastImage && images.length > 3) { //  if last image and images count more than 3
      moreView = (
        <View style={{...styles.moreImageView}}>
          <Text style={styles.moreImageValue}>{images.length - 3}</Text> 
        </View>
      )
    }
    if (index < 2 || isLastImage ) { // if index less than 2 and last image, add image
      return (
        <TouchableOpacity key={index}>
          <ImageBackground
              key={index}
              source={FoodImage}
              style={{...styles.imageGallery,...{width: this.state.parentGalleryWidth}}}>
                {moreView}
          </ImageBackground>
        </TouchableOpacity>
      )
    } else {
      return null
    }
  }

  render() {
    const { images } = this.state

    const navbar = (
      <View style={styles.navigationBarView}>
        <TouchableOpacity 
          style={styles.backToView}
          onPress={() => this.handleBackButton()}>
          <Ionicons
            name="ios-arrow-back"
            size={25}
            color="white"
          />
          <Text style={styles.backToText}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cookNowView}>
          <Ionicons
            name="ios-play"
            size={25}
            color="white"
          />
          <Text style={styles.cookText}>Cook Now</Text>
        </TouchableOpacity>
      </View>
    );

    const titleView = (
      <Text style={styles.titleView}>
        Engine-Cooked Honey Orange Pancake
      </Text>
    );

    const galleriesView = (
          <View style={styles.galleriesView}
            onLayout={this.onPageGalleryLayout}>
            {
              images.map((item, index) => 
                this._imageGalleyView(index)
              )
            }
          </View>
      )

    return (
      <View style={styles.container}>
        <ImageBackground
          source={FoodImage}
          style={styles.image}>
          <View style={styles.gradientImage}>
            {navbar}
            {titleView}
          </View>

        </ImageBackground>

        {galleriesView}
        <TabDetailScreen/>

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
    height: screenWidth / 1,
    aspectRatio: 1 / 1,
  },

  // navbar
  navigationBarView: {
    paddingTop: isAndroid ? 20 : 50,
    paddingLeft: 20,
    paddingRight: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  backToView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backToText: {
    backgroundColor: 'transparent',
    color: 'white',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: 'normal',
    textAlign: 'left',
    paddingLeft: 15,
    letterSpacing: 0.4,
  },
  cookNowView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'white',
    borderStyle: 'solid',
    paddingLeft: 10,
    paddingRight: 10,
  },
  cookText: {
    backgroundColor: 'transparent',
    color: 'white',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: 'bold',
    textAlign: 'left',
    paddingLeft: 10,
  },
  gradientImage: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(00, 00, 00, 0.35)',
  },
  titleView: {
    position: 'absolute',
    color: 'white',
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: 'bold',
    textAlign: 'left',
    lineHeight: 25,
    padding: 20,
    bottom: 5,
    justifyContent: 'flex-end',
  },

  // galleries
  galleriesView: {
    padding: 15,
    flexDirection: 'row',
  },
  imageGallery: {
    aspectRatio: 1 / 1,
    marginRight: 10
  },
  moreImageView: {
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  moreImageValue: {
    fontSize: 20
  }

});

export default DetailFeed;
