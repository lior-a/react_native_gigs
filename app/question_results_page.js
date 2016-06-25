// todo: remove this stub and replace with Server API
let data = {
  title: "My title",
  Pin_code: 1234,
  options: [
    {
      id: 1,
      title: "option 1",
      votes: 0,
      voters_obj: [
        {
          Phone: 23456789,
          Name: "Israel Israeli",
          Voted: true
        },
        {
          Phone: 23456789,
          Name: "Israel Israeli"
        }
      ]
    },
    {
      id: 2,
      title: "option 2",
      votes: 2
    },
    {
      id: 3,
      title: "option 3",
      votes: 0
    }
  ]
}

import React, { Component } from 'react';
import {Text, View, StyleSheet, TextInput} from 'react-native';
import { Button, Subheader, List } from 'react-native-material-design';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';

var radio_props = [
  {label: '[Jolie]', value: 0 },
  {label: '[Berners Tavern]', value: 1 },
  {label: '[The Blue Rooster]', value: 2 },
  {label: '[Sosharu]', value: 3 }
];

export default class QuestionPage extends Component {

  goToInitialPage() {
    this.props.navigator.push({
      id: 'initialPage'
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Subheader text="[Where We should go out and eat?]"/>
        <View style={styles.basicPage}>
          {data.options.map(option => (
            <Text key={option.id}>
                {option.title} with {option.votes} votes
            </Text>
          ))}

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
