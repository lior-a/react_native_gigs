import React, { Component } from 'react';
import {Text, View, StyleSheet, TextInput} from 'react-native';
import { Button } from 'react-native-material-design';

export default class CreateQuestion extends Component {

  submitQuestion() {
    // submit question goes here
    console.log(this.state);
  }

  handlerQuestion() {
    this.state.question
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Write your question
        </Text>
        <View style={styles.basicPage}>
          <TextInput
              style={styles.basicInput}
              placeholder="Write your question here"
              onChangeText={(text) => this.setState({text})}
            />
          <TextInput
              style={styles.basicInput}
              placeholder="Option 1"
              onChangeText={(option_1) => this.setState({option_1})}
            />
          <TextInput
              style={styles.basicInput}
              placeholder="Option 2"
              onChangeText={(option_2) => this.setState({option_2})}
            />
          <TextInput
              style={styles.basicInput}
              placeholder="Option 3"
              onChangeText={(option_3) => this.setState({option_3})}
            />
          <TextInput
              style={styles.basicInput}
              placeholder="Option 4"
              onChangeText={(option_4) => this.setState({option_4})}
            />

            <Button text='Submit Question' onPress={this.submitQuestion.bind(this)} raised={true} theme="dark" />
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
  basicInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15
  }
});
