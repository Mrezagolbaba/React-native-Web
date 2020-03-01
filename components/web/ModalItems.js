import React, { Component } from "react";
import {Text, TouchableOpacity, View, ScrollView, Image} from "react-native";
import {Platform, StyleSheet} from "react-native";


import Modal from 'modal-enhanced-react-native-web';

export default class ModalItems extends Component {
    state = {
        visibleModal: null
    };

    _renderButton = (text, onPress) => (
        <TouchableOpacity onPress={onPress}>
            <View>
                <Text>{text}</Text>
            </View>
        </TouchableOpacity>
    );

    _renderModalContent = (data,onBackdropPress) => (
        <View style={styles.wrapperContent}>
            <View style={styles.ViewItem}>
                <View style={styles.wrapperButton}>
                    <TouchableOpacity style={styles.closeCard} onPress={onBackdropPress}>
                        <Text>close</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.main}>
                    <Text style={styles.textTitle}>{data&&data.name}</Text>
                    <View style={{display:'flex',flexDirection:'row'}}>
                        <View style={{display:'flex',flexDirection:'column',width: '70%'}}>
                            <Text style={styles.text}>{data&&data.tagline}</Text>
                            <Text style={styles.text}>{data&&data.abv}</Text>
                            <Text numberOfLines={2} ellipsizeMode='tail' style={styles.textDescription}>{data&&data.description}</Text>
                            <Text style={styles.text}>{data&&data.food}</Text>
                        </View>
                        <View style={styles.wrapperImage}>
                            <Image source={{uri:data&&data.image_url}} style={styles.ImageCard}/>
                        </View>
                    </View>
                    <View style={styles.wrapperButton}>
                        <TouchableOpacity style={styles.addToCard}>
                            <Text>ADD TO CARD</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                {this._renderButton("Close", () => this.setState({ visibleModal: false }))}
            </View>

        </View>
    );


    render() {
        const {isVisible,onBackdropPress,data}=this.props
        return (
            <View>
                <Modal
                    isVisible={isVisible}
                    onBackdropPress={onBackdropPress}
                >
                    {this._renderModalContent(data,onBackdropPress)}
                </Modal>
            </View>
        );
    }
}
const styles = StyleSheet.create({

    wrapperContent: {
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
    },
    wrapperButton:{
        width:290,
    },
    addToCard:{
        width:125,
        height: 35,
        borderRadius: 10,
        backgroundColor:'#FFF',
        alignItems:'center',
        justifyContent:'center',
        alignSelf:'flex-end',

    },
    wrapperImage:{
        backgroundColor:'#FFF',
        width:80,
        height: 80,
        borderRadius: 10,
        alignItems:'center',
        justifyContent:'center',
    },
    ImageCard:{
        width:50,
        height: 50,
        borderRadius: 5
    },
    closeCard:{
        width:70,
        height: 30,
        borderRadius: 20,
        backgroundColor:'red',
        alignItems:'center',
        justifyContent:'center',
        marginBottom:3

    },
    Modal:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: 'rgba(0,0,0,0.7)'
        // width:290,
        // height:190,
    },
    ViewItem:{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    main: {
        width:320,
        height:200,
        backgroundColor:'#000',
        borderRadius:10,
        padding:5
    },


    textTitle: {
        color: "#fff",
        fontSize: 22
    },
    text: {
        color: "#fff",
        fontSize: 15,
        paddingTop: 5,
        paddingBottom:5


    },
    textDescription: {
        color: "#fff",
        fontSize: 15,
        overflow:'hidden'
    }

});
