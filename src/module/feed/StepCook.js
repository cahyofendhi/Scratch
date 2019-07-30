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
console.disableYellowBox = true;

const stepIndicatorStyles = {
  stepIndicatorSize: 25,
  currentStepIndicatorSize: 25,
  separatorStrokeWidth: 0,
  currentStepStrokeWidth: 2,
  stepStrokeCurrentColor: 'rgb(48, 190, 118)',
  separatorFinishedColor: 'rgb(48, 190, 118)',
  separatorUnFinishedColor: '#aaaaaa',
  stepIndicatorFinishedColor: 'rgba(48, 190, 118, 1)',
  stepIndicatorUnFinishedColor: 'rgba(48, 190, 118, 0.5)',
  stepIndicatorCurrentColor: '#ffffff',
  stepIndicatorLabelFontSize: 12,
  currentStepIndicatorLabelFontSize: 12,
  stepIndicatorLabelCurrentColor: '#000000',
  stepIndicatorLabelFinishedColor: '#ffffff',
  stepIndicatorLabelUnFinishedColor: 'rgba(255,255,255,0.5)',
  labelColor: '#666666',
  labelSize: 12,
  currentStepLabelColor: 'rgb(48, 190, 118)'
}

class StepCook extends BaseComponent {
    
  state = {
      currentPosition: 0,
      currentPage: 0,
      data: [1, 2, 3, 4, 5]
  }

  constructor(){
    super();
    this.viewabilityConfig = { itemVisiblePercentThreshold: 40 }
  }

  renderPage = rowData => {
    const item = rowData.item
    const index = rowData.index
    return (
      <View style={styles.rowItem} key={index}>
        <Text style={styles.itemTitle}>{item.title}</Text>
        <Text style={styles.body}>{item.body}</Text>
      </View>
    )
  }

  onViewableItemsChanged = ({ viewableItems, changed }) => {
    const visibleItemsCount = viewableItems.length
    if (visibleItemsCount != 0) {
      this.setState({ currentPage: viewableItems[visibleItemsCount - 1].index })
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
        <Text style={styles.stepsText}>Steps</Text>
        <View style={styles.indicatorView}>
          <View style={styles.stepIndicator}>
            <StepIndicator
              customStyles={stepIndicatorStyles}
              stepCount={Sample.data.length}
              direction='vertical'
              currentPosition={this.state.currentPage}
            />
          </View>
          <FlatList
            style={{ flexGrow: 1 }}
            data={Sample.data}
            renderItem={this.renderPage}
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
    flexDirection: 'column',
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

  // step 
  stepsText: {
    color: "rgb(3, 15, 9)",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "bold",
    marginTop: 15,
    marginLeft: 20,
  },
  indicatorView: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    marginTop: 5
  },
  stepIndicator: {
    marginVertical: 50,
    paddingHorizontal: 20
  },
  rowItem: {
    flex: 3,
    paddingVertical: 20
  },
  itemTitle: {
    flex: 1,
    fontSize: 20,
    color: '#333333',
    paddingVertical: 16,
    fontWeight: '600'
  },
  body: {
    flex: 1,
    fontSize: 15,
    color: '#606060',
    lineHeight: 24,
    marginRight: 8
  }
})

export default StepCook;
