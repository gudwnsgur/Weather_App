import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ActivityIndicator } from 'react-native';

export default class App extends Component {
  state = {
    isLoaded : false
  }
  render() {
    const { isLoaded } = this.state;
    return (
     <View style={styles.container}>
       {isLoaded ? null : (
        <View style={styles.Loading}>
          <Text style={styles.LoadingText}>
            Getting the weather information
          </Text>
        </View>
       )}
     </View>
  )}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  Loading : {
    flex : 1,
    backgroundColor : '#FDF6AA',
    justifyContent : 'flex-end',
    paddingLeft : 25
  },
  LoadingText : {
    fontSize : 35,
    marginBottom : 100
  }
});


/* react-native is only platform which can build design apps with flexbox 
   default flexDirection of react-native is column, not row */
