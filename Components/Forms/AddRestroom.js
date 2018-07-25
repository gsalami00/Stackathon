import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'

import React, { Component } from 'react'

export default class AddRestroom extends Component {
  render() {
    return (
      <FormLabel>Name of Establishment</FormLabel>
      <FormInput onChangeText={someFunction}/>
      <FormValidationMessage>Error message</FormValidationMessage>

      <FormLabel>Image URL</FormLabel>
      <FormInput onChangeText={someFunction}/>
      <FormValidationMessage>Error message</FormValidationMessage>

      <FormLabel>Address</FormLabel>
      <FormInput onChangeText={someFunction}/>
      <FormValidationMessage>Error message</FormValidationMessage>

      <FormLabel>Name of Establishment</FormLabel>
      <FormInput onChangeText={someFunction}/>
      <FormValidationMessage>Error message</FormValidationMessage>
    )
  }
}









