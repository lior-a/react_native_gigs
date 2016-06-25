import React, { Component } from 'react';
import {Text, View, StyleSheet} from 'react-native';
import { Button } from 'react-native-material-design';

export default class InsertPin extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Insert Pin
        </Text>
        <View>
            <View>

                <Button text='Pin' raised={true} theme="dark" />
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
  }
});
