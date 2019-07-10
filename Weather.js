import React, { Component } from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { LinearGradient } from 'expo';
import { Ionicons } from "@expo/vector-icons";
import PropTypes from "prop-types";

/*
export default class Weather extends Component {
    render() {
        return (
        <LinearGradient colors = {['#00C6FB','#005BEA']} style = {styles.container} >
            <View style={styles.upper}>
                <Ionicons color = "white" size={144} name="ios-rainy"/>
                <Text style={styles.temp}>35º</Text>
            </View>
            <View style={styles.lower}>
                <Text style={styles.title}>Raining</Text>
                <Text style={styles.subtitle}>for more info look outside.</Text>
            </View>              
        </LinearGradient>
        );
     }
}
*/

const weatherCases = {
    Rain : {
        colors:['#00C6FB','#005BEA'],
        title : "Raining",
        subtitle : "For more info look outside.",
        icon : 'ios-rainy'
    },
    Clear : {
        colors:['#FEF253','#FF7300'],
        title : "Sunny",
        subtitle : "Go get your body burnt.",
        icon : 'ios-sunny'
    },
    Thunderstorm : {
        colors:['#00ECBC','#007ADF'],
        title : "Thunderstorm",
        subtitle : "Actually, outside of the house",
        icon : 'ios-thunderstorm'
    },
    Clouds : {
        colors:['#D7D2CC','#304352'],
        title : "Clouds",
        subtitle : "I know, fucking boring.",
        icon : 'ios-cloudy'
    },
    Snow : {
        colors:['#7DE2FC','#89B6ES'],
        title : "Snowy",
        subtitle : "Do you want to build a snowman~?",
        icon : 'ios-snow'
    },
    Drizzle : {
        colors:['#89F7FE','#66A6FF'],
        title : "Drizzle",
        subtitle : "it's like rain.",
        icon : 'md-rainy'
    },
    Haze : {
        colors:['#89F7FE','#66A6FF'],
        title : "Haze",
        subtitle : "What's going on?",
        icon : 'ios-cloud-outline'
    }
}

function Weather ({ weatherName, temp }) {
    return (
        <LinearGradient colors = {weatherCases[weatherName].colors} style = {styles.container} >
         <View style={styles.upper}>
             <Ionicons color = "white" size={144} name={weatherCases[weatherName].icon}/>
             <Text style={styles.temp}>{temp}º</Text>
         </View>
         <View style={styles.lower}>
             <Text style={styles.title}>{weatherCases[weatherName].title}</Text>
             <Text style={styles.subtitle}>{weatherCases[weatherName].subtitle}</Text>
         </View>              
        </LinearGradient>
    );
}

Weather.propTypes = {
    temp : PropTypes.number.isRequired,
    weatherName : PropTypes.string.isRequired
};

export default Weather;


const styles = StyleSheet.create ({
    container : {
        flex : 1
    },
    upper : {
        flex : 1,
        alignItems : 'center',
        justifyContent : 'center',
        backgroundColor : "transparent"
    },
    temp : {
        fontSize : 38, 
        backgroundColor : "transparent",
        color : 'white',
        marginBottom : 24,
        marginTop : 10
    },
    lower : {
        flex : 1,
        alignItems : "flex-start",
        justifyContent : "flex-end",
        paddingLeft : 25
    },
    title : {
        fontSize : 30, 
        backgroundColor : "transparent",
        color : 'white',
        marginBottom : 10,
        fontWeight : "300"
    },
    subtitle : {
        fontSize : 24, 
        backgroundColor : "transparent",
        color : 'white',
        marginBottom : 24
    }
});