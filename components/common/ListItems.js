import * as React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import logo from "../../assets/images/robot-dev.png";
import {Tab} from "native-base";

const ListItems = (props)=> {
    const {Img,text,onPress} = props
    return(
        <View style={styles.wrapper} onClick={onPress}>
            <View style={styles.Items}>
                <Image style={styles.ImageStyle} source={Img} />
            </View>
            <Text numberOfLines={2} ellipsizeMode='tail'  style={[props.style, styles.text]} >{text}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    Items: {
        borderWidth: 1,
        width: 120,
        height: 120,
        borderColor: '#000',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        margin:5
    },
    wrapper: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

    },
    text:{
        overflow: 'hidden',
        maxWidth: 100,

        fontFamily: 'space-mono',
        flex:1,
        fontSize:12

    },

    ImageStyle:{width: 50, height: 50}

})
export default ListItems
