import React, { Component } from 'react';
import {Text, View, StyleSheet, TextInput} from 'react-native';
import { Button } from 'react-native-material-design';

export default class YourPinCode extends Component {

  goToInitialPage() {
    this.props.navigator.push({
      id: 'initialPage'
    })
  }

  gotoQuestionPage() {
    // Go to user's question page
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Your Pin code:
        </Text>
        <View style={styles.basicPage}>
          <Text style={styles.pinCode}>
            4335
          </Text>
          <Text style={styles.aboutPinCode}>
            Description about pin code...
          </Text>
          <Text onPress={this.goToInitialPage.bind(this)} style={styles.goBack}>
            Go Back
          </Text>
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
  basicPage: {
    marginLeft: 20,
    marginRight: 20
  },
  pinCode: {
    marginBottom: 15,
    textAlign: 'center'
  },
  aboutPinCode: {
    borderColor: 'gray',
    marginBottom: 15
  },
  goBack: {
    color: 'blue'
  }
});
