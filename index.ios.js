/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import {
  Navigator,
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import InitialPage from './app/inital_page';
import CreateQuestion from './app/create_question';
import InsertPin from './app/insert_pin';
import YourPinCode from './app/your_pin_code';
import QuestionPage from './app/question_page';
import QuestionResultsPage from './app/question_results_page';

class Test extends Component {
  navigatorRenderScene(route, navigator) {
    _navigator = navigator;
    switch (route.id) {
      case 'initialPage':
        return (<InitialPage navigator={navigator} title="Home page"/>);
      case 'createQuestion':
        return (<CreateQuestion navigator={navigator} title="Create Question"/>);
      case 'insertPin':
        return (<InsertPin navigator={navigator} title="Insert Pin"/>);
      case 'yourPinCode':
        return (<YourPinCode navigator={navigator} title="Your Pin Code is"/>);
      case 'questionPage':
        return (<QuestionPage navigator={navigator} title="Question Page"/>);
      case 'questionResultsPage':
        return (<QuestionResultsPage navigator={navigator} title="Question Results Page"/>);
    }
  }
  render() {
    return (
      <Navigator
        style={styles.navigator}
        initialRoute={{id: 'createQuestion'}} /// <------------- temp - change to: initialPage
        renderScene={this.navigatorRenderScene}/>
    );
  }
}

AppRegistry.registerComponent('Test', () => Test);
const styles = StyleSheet.create({
  navigator: {flex: 1}
});
