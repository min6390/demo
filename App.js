import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import 'react-native-gesture-handler';
import Route from './Components/Route';
import SignIn from './Components/LoginPACK/SignIn';

class App extends React.Component{
  render() {
    return(
      <Route/>
    );
  }

}
export default App;
