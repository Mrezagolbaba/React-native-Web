import * as React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import logo from "../assets/images/robot-dev.png";
import {Tab} from "native-base";

const ListItems = (props)=> {
    const {Img,text,onPress} = props
    return(
        <View style={styles.wrapper} onPress={onPress}>
            <View style={styles.Items}>
                <Image style={{width: 50, height: 50}} source={Img} />
            </View>
            <Text  style={[props.style, { fontFamily: 'space-mono' }]} >{text}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    Items: {
        borderWidth: 1,
        width: 100,
        height: 100,
        borderColor: '#000',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    },
    wrapper: {
        display: 'flex',
    }
})
export default ListItems
