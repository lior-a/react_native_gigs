import React, { Component } from 'react';
import {Text, View, StyleSheet, TouchableHighlight} from 'react-native';
import { Button } from 'react-native-material-design';

export default class InitialPage extends Component {

  goToQuestion() {
    this.props.navigator.push({
      id: 'createQuestion'
    })
  }

  goToEnterPin() {
    this.props.navigator.push({
      id: 'insertPin'
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          The decider
        </Text>
        <View>
            <View>
                <Button text='Ask a question' onPress={this.goToQuestion.bind(this)} raised={true} theme="dark" />
            </View>
            <View>
                <Button text='Vote' onPress={this.goToEnterPin.bind(this)} raised={true} theme="dark" />
            </View>
        </View>
      </View>
    )
  };
}


const styles = StyleSheet.create({


  container: {
    flex: 1,
    marginTop: 30
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
