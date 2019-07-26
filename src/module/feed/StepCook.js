import React, { Component } from 'react';
import { SafeAreaView, 
         View, 
         Text, 
         Image,
         ImageBackground,
         StyleSheet,
         StatusBar,
         FlatList,
         TouchableOpacity } from 'react-native';
import StepIndicator from 'react-native-step-indicator';
import Ionicons from 'react-native-vector-icons/Ionicons'
import SampleFood from '../../assets/sample_food.jpeg';
import BaseComponent from '../BaseComponent';
import Sample from '../../component/sample';

const labels = ['Cart', 'Delivery Address', 'Order Summary', 'Payment Method', 'Track'];
const stepIndicatorStyles = {
  stepIndicatorSize: 30,
  currentStepIndicatorSize: 40,
  separatorStrokeWidth: 3,
  currentStepStrokeWidth: 5,
  stepStrokeCurrentColor: '#fe7013',
  separatorFinishedColor: '#fe7013',
  separatorUnFinishedColor: '#aaaaaa',
  stepIndicatorFinishedColor: '#fe7013',
  stepIndicatorUnFinishedColor: '#aaaaaa',
  stepIndicatorCurrentColor: '#ffffff',
  stepIndicatorLabelFontSize: 15,
  currentStepIndicatorLabelFontSize: 15,
  stepIndicatorLabelCurrentColor: '#000000',
  stepIndicatorLabelFinishedColor: '#ffffff',
  stepIndicatorLabelUnFinishedColor: 'rgba(255,255,255,0.5)',
  labelColor: '#666666',
  labelSize: 15,
  currentStepLabelColor: '#fe7013'
}

class StepCook extends BaseComponent {
    
  state = {
      currentPosition: 0,
      data: [1, 2, 3, 4, 5]
  }

  constructor(){
    super();
    this.viewabilityConfig = { itemVisiblePercentThreshold: 40 }
  }

  onViewableItemsChanged = ({ viewableItems, changed }) => {
    const visibleItemsCount = viewableItems.length
    if (visibleItemsCount != 0) {
      this.setState({ currentPosition: viewableItems[visibleItemsCount - 1].index })
    }
  }

  render() {
    const { data } = this.state

    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle={"light-content"} />
        <TouchableOpacity style={styles.backView} onPress={() => this.handleBackButton()}>
          <Ionicons
            name= 'ios-arrow-back'
            size= {24}
            color= 'rgb(118, 118, 118)'
          />
          <Text style={styles.backTitle}>Back to Receipt</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Cooking Mode</Text>
        <Text style={styles.receiptName}>Almond and Saffron Bonbons</Text>
				
        {/* video */}
        <View>
          <Image
            style={styles.image}
            source={SampleFood}
            resizeMode='cover'
          />
        </View>

        {/* step indicator */}
        <View style={styles.stepIndicator}>
          <StepIndicator
              customStyles={stepIndicatorStyles}
              stepCount={data.length}
              direction='vertical'
              currentPosition={this.state.currentPage}
              labels={data.map(item => item.toString())}
            />
          <FlatList
            style={{ flexGrow: 1 }}
            data={data}
            renderItem={({item, index}) => 
              <View 
                key={index}
                style={{
                  paddingVertical: 10,
                }}
              >
                 <Text>{Sample.stepCook}</Text> 
              </View>
            }
            onViewableItemsChanged={this.onViewableItemsChanged}
            viewabilityConfig={this.viewabilityConfig}
          />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
    backgroundColor: 'white',
  },
  backView: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 20,
    paddingTop: 10,
    paddingBottom: 10,
  },
  backTitle: {
    color: 'rgb(118, 118, 118)',
    fontSize: 14,
    paddingLeft: 15
  },
  title: {
    color: "rgb(3, 15, 9)",
    fontSize: 20,
    fontStyle: "normal",
    fontWeight: "bold",
    textAlign: "left",
    lineHeight: 32,
    paddingLeft: 20
  },
  receiptName: {
		color: "rgb(3, 15, 9)",
		fontSize: 20,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
		alignSelf: "flex-start",
		paddingLeft: 20,
		marginTop: 25,
  },
  image: {
    marginTop: 20,
    width: '100%',
    aspectRatio: 2/1
  },

  // step indicator
  stepIndicator: {
    marginVertical: 50,
    paddingHorizontal: 20
  },
})

export default StepCook;
