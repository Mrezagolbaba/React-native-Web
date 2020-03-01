import * as React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {TabBarIconCafee,TabBarIconRestaurant,TabBarIconSale,TabBarIconSearch} from '../components/common/TabBarIcon';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import LinksScreen from '../screens/LinkScreen/LinksScreen';
import createCSSStyleSheet from "react-native-web/dist/exports/StyleSheet/createCSSStyleSheet";
import {StyleSheet} from "react-native";

const Tab = createMaterialTopTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';


function TopTabNavigator ({ navigation }) {

    navigation.setOptions({headerStyle:styles.headerStyle});
    return (
        <Tab.Navigator
            initialRouteName={INITIAL_ROUTE_NAME}
            tabBarOptions={{
                indicatorStyle: styles.indicator,
                activeTintColor: 'white',
                inactiveTintColor: 'grey',
                activeBackgroundColor:'red',
                style:styles.tabStyle,
                showIcon: true,
                showLabel: false,
            }}
        >

            <Tab.Screen
                name="Cofee"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ focused }) => <TabBarIconCafee focused={focused} name="coffee" />,
                }}
            />
            <Tab.Screen
                name="Resources"
                component={LinksScreen}
                options={{
                    tabBarIcon: ({ focused }) => <TabBarIconRestaurant focused={focused} name="restaurant" />,
                }}
            />
            <Tab.Screen
                name="Disqaunt"
                component={LinksScreen}
                options={{
                    tabBarIcon: ({ focused }) => <TabBarIconSale focused={focused} name="sale" />,
                }}
            />
            <Tab.Screen
                name="search"
                component={LinksScreen}
                options={{
                    tabBarIcon: ({ focused }) => <TabBarIconSearch focused={focused} name="search1" />,
                }}
            />
        </Tab.Navigator>
    );
}
export {
    TopTabNavigator
}


const styles=StyleSheet.create({
    headerStyle:{
        backgroundColor:'#cb1b00',
        borderBottomColor:'#cb1b00'
    },
    indicator:{
        backgroundColor: '#000',
        height: 50,
        borderTopLeftRadius:15,
        borderTopRightRadius:15,
    },
    tabStyle:{
        backgroundColor: '#cb1b00',
        borderTopColor:'#cb1b00'
    }
})

