/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
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

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>
          To get started, edit App.js еуеы
        </Text>
        <Text style={styles.instructions}>{instructions}</Text>
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
