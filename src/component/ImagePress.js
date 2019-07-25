import React, { Component } from 'react';
import { Animated, 
         TouchableWithoutFeedback} from 'react-native';

class ImagePress extends Component {

  state = {
    animatePress: new Animated.Value(1)
  }

  animateIn() {
    Animated.timing(this.state.animatePress, {
      toValue: 0.8,
      duration: 200,
    }).start()
  }

  animateOut() {
    Animated.timing(this.state.animatePress, {
      toValue: 1,
      duration: 200
    }).start()
  }

  render() {
    return (
      <TouchableWithoutFeedback 
        onPressIn={() => this.animateIn()}
        onPressOut={ () => this.animateOut()}>

        <Animated.Image
          {...this.props}
          style={[
            {
              transform: [
                {
                  scale: this.state.animatePress
                },
              ],
            },
            this.props.style,
          ]}
        />
      </TouchableWithoutFeedback>
    );
  }
}

export default ImagePress;