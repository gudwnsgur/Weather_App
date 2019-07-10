import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar} from 'react-native';
import Weather from "./Weather";

const API_KEY = "c77340d3b6d75a628d1c4651ae060b11";


export default class App extends Component {
  state = {
    isLoaded : false,
    error : null,
    temperature : null,
    name : null
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition( position =>
    {
      this._getWeather(position.coords.latitude, position.coords.longitude)
    },
    error => {
      this.setState({
        error:error
      });
    });
  }
  _getWeather = (lat, long) => {
    fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}`) 
    .then(response => response.json())
    .then(json => {
      this.setState({
        temperature : json.main.temp,
        name : json.weather[0].main,
        isLoaded : true
      });
    }); 
  };

  render() {
    const { isLoaded, error, temperature, name} = this.state;
    return (
     <View style={styles.container}>
      <StatusBar hidden={true}/>
       { isLoaded ? ( <Weather weatherName={name} temp={Math.floor(temperature-273.15)}/> ) : (
        <View style={styles.Loading}>
          <Text style={styles.LoadingText}>
            Getting weather information
          </Text>
        </View>
       ) }
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
    backgroundColor : '#FCF6AA',
    justifyContent : 'flex-end',
    paddingLeft : 25
  },
  LoadingText : {
    fontSize : 35,
    marginBottom : 24
  }
});


/* react-native is only platform which can build design apps with flexbox 
   default flexDirection of react-native is column, not row */
