import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import Home from '../screens/Home/Home';
import Splash from '../screens/Splash/Splash';
import About from '../screens/About/About';
import Service from '../screens/Service/Service';
import Work from '../screens/Work/Work';
import ContactMeScreen from '../screens/About/ContactMe';
import ReactNativeWork from '../screens/Work/ReactNativeWork';
import FlutterWork from '../screens/Work/FlutterWork';
import ProjectDetailsScreen from '../screens/Work/ProjectDetailsScreen';

const stack = createNativeStackNavigator();

const Routes = () => {
    return (
        <NavigationContainer>
            <stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Splash'>
                <stack.Screen name='Splash' component={Splash} />
                <stack.Screen name='Home' component={Home} />
                <stack.Screen name='About' component={About} />
                <stack.Screen name='Service' component={Service} />
                <stack.Screen name='Work' component={Work} />
                <stack.Screen name='ContactMe' component={ContactMeScreen} />
                <stack.Screen name='ReactNativeWork' component={ReactNativeWork} />
                <stack.Screen name='FlutterWork' component={FlutterWork} />
                <stack.Screen name='ProjectDetails' component={ProjectDetailsScreen} />
            </stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes

const styles = StyleSheet.create({})