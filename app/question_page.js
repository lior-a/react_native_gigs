import React, { Component } from 'react';
import {Text, View, StyleSheet, TextInput} from 'react-native';
import { Button, Subheader } from 'react-native-material-design';
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

  submitForm() {
    // Submit user answer
  }

  render() {
    return (
      <View style={styles.container}>
        <Subheader text="[Where We should go out and eat?]"/>
        <View style={styles.basicPage}>
          <RadioForm
            radio_props={radio_props}
            initial={0}
            onPress={(value) => {this.setState({value:value})}}
          />
          <Button text='Submit Answer' onPress={this.submitForm.bind(this)} raised={true} theme="dark" />
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
