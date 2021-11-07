import React, { Component } from "react";
import BottomTabNavigator from "./components/BottomTabNavigator";
import {rajdhani_600SemiBold} from "@expo-google-fonts/rajdhani"
import * as Font from "expo-font"
export default class App extends Component {
  constructor(){
    super()
    this.state={
      fontLoaded:false 
    }
  }
  async loadFonts(){
    await Font.loadAsync({
      rajdhani_600SemiBold:rajdhani_600SemiBold
    })
    this.setState({
      fontLoaded:true
    })
  }
  componentDidMount(){
    this.loadFonts
  }
  render() {
    const{fontLoaded}=this.state
    if(fontLoaded){
      return <BottomTabNavigator />;
    }
    returnNull
  }
}
