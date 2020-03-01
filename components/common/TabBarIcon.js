import * as React from 'react';
import { AntDesign,MaterialCommunityIcons,MaterialIcons,FontAwesome } from '@expo/vector-icons';

import Colors from '../../constants/Colors';
import {Platform} from "react-native-web";
const Size = Platform.OS==='we'?30:20
export const TabBarIconSearch =(props) => {
  return (
    <AntDesign
      name={props.name}
      size={Size}
      style={{ marginBottom: -3 }}
      color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
    />
  );
}
export const TabBarIconCafee =(props) => {
  return (
    <FontAwesome
      name={props.name}
      size={Size}
      style={{ marginBottom: -3 }}
      color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
    />
  );
}
export const TabBarIconRestaurant =(props) => {
  return (
    <MaterialIcons
      name={props.name}
      size={Size}
      style={{ marginBottom: -3 }}
      color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
    />
  );
}
export const TabBarIconSale =(props) => {
  return (
    <MaterialCommunityIcons
      name={props.name}
      size={Size}
      style={{ marginBottom: -3 }}
      color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
    />
  );
}
