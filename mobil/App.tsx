import 'react-native-gesture-handler';
import React, { Component } from 'react'
import GirisEkrani from './src/Pages/GirisEkrani';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SeviyeliOyun from './src/Pages/SeviyeliOyun';


interface Props {

}
interface State {

}


export type RootStackParamList = {
  GirisEkrani: undefined;
  SeviyeliOyun: undefined;
}
const RootStack = createStackNavigator<RootStackParamList>();

export default class App extends Component<Props, State> {
  state = {}

  render() {
    return (
      <NavigationContainer>
        <RootStack.Navigator initialRouteName="SeviyeliOyun">
          <RootStack.Screen
            name="GirisEkrani"
            component={GirisEkrani}
            options={{
              title: "Şempanze Hafıza Testi",
              headerTitleStyle: {
                fontSize: 15,
                textAlign: "center",
                // color: "lightblue"
              },
              headerStyle: {
                // backgroundColor: "midnightblue",
                height: 40
              }
            }}
          />
          <RootStack.Screen
            name="SeviyeliOyun"
            component={SeviyeliOyun}
            options={{
              title: "1. Seviye",
              headerTitleStyle: {
                fontSize: 15,
                textAlign: "center",
                // color: "lightblue"
              },
              headerStyle: {
                // backgroundColor: "midnightblue",
                height: 40
              }
            }}
          />
        </RootStack.Navigator>
      </NavigationContainer>
    )
  }
}
