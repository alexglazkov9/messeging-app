/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from "react";
import { Platform, StyleSheet, TextInput, View, Button } from "react-native";
import MailCore from "react-native-mailcore";

// MailCore.sendMail({
//   hostname: "smtp.gmail.com",
//   port: 465,
//   username: "<gmail id>",
//   password: "<password>",
//   from: {
//     addressWithDisplayName: "From Label",
//     mailbox: "<from email>"
//   },
//   to: {
//     addressWithDisplayName: "To Label",
//     mailbox: "<to email>"
//   },
//   subject: "Testing RN MailCore" + new Date(),
//   htmlBody: `<h1> How is it going </h1>
//               <p> Test message </p>
//             `
// })
//   .then(result => {
//     alert(result.status);
//   })
//   .catch(error => {
//     alert(error);
//   });

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      from: '',
      password: '',
      to: '',
      message: ''
    };
    this.send = this.send.bind(this);
  }

  send(){
    alert("In");
    MailCore.sendMail({
      hostname: "smtp.gmail.com",
      port: 465,
      username: this.state.from,
      password: this.state.password,
      from: {
        addressWithDisplayName: "From Label",
        mailbox: this.state.from
      },
      to: {
        addressWithDisplayName: "To Label",
        mailbox: this.state.to
      },
      subject: "Testing RN MailCore" + new Date(),
      htmlBody: this.state.message
      })
      .then(result => {
        alert(result.status);
      })
      .catch(error => {
        alert(error);
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <TextInput 
          onChangeText={(text) => this.setState({from: text})}
          value={this.state.from}
          placeholder="From"/>
        <TextInput 
          onChangeText={(text) => this.setState({password: text})}
          value={this.state.password}
          placeholder="Password"/>
        <TextInput 
          onChangeText={(text) => this.setState({to: text})}
          value={this.state.to}
          placeholder="To"/>
        <TextInput 
          onChangeText={(text) => this.setState({message: text})}
          value={this.state.message}
          placeholder="Message"/>
        <Button
          onPress={this.send}
          title="Send">Send</Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
