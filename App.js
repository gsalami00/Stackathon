import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

//testing importing forms
import SignUp from './Components/Forms/SignUp'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        {/* <Text>Prince made a change</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text> */}
        <SignUp /> 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
