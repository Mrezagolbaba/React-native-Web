import React from 'react';

import {
    Text,
    Button,
    StyleSheet,
    ScrollView,
    View,
    Dimensions,
    TextInput,
    Modal,Image,TouchableOpacity
} from 'react-native';
// import Image from "react-native";
import logo from'../../assets/images/robot-dev.png'

var screen = Dimensions.get('window');

const ModalComponent = (props) => {
        const {visible,onRequestClose,name,tagline,abv,description,food,data}=props
    console.log('data',data)
        return (
            // <View style={styles.wrapper}>
                <Modal animationType="slide"
                       transparent={true}
                       visible={visible}
                       onRequestClose={onRequestClose}
                       style={styles.Modal}
                >
                    <View style={styles.ViewItem}>
                        <View style={styles.wrapperButton}>
                            <TouchableOpacity style={styles.closeCard} onPress={onRequestClose}>
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
                                    <Text style={styles.text}>{food}</Text>
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

                    </View>
                </Modal>
            // </View>
        );
}
export default ModalComponent

const styles = StyleSheet.create({

    wrapper: {
        paddingTop: 50,
        flex: 1
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
