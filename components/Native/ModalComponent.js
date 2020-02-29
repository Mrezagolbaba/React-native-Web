import React from 'react';
import Modal from 'react-native-modalbox';
import Slider from 'react-native-slider';

import {
    Text,
    Button,
    StyleSheet,
    ScrollView,
    View,
    Dimensions,
    TextInput
} from 'react-native';

var screen = Dimensions.get('window');

export default class ModalComponent extends React.Component {

    constructor() {
        super();
        this.state = {
            isOpen: false,
            isDisabled: false,
            swipeToClose: true,
            sliderValue: 0.3
        };
    }

    onClose() {
        console.log('Modal just closed');
    }

    onOpen() {
        console.log('Modal just opened');
    }

    onClosingState(state) {
        console.log('the open/close of the swipeToClose just changed');
    }
    render() {
        return (
            <View style={styles.wrapper}>
                <Button title="Position bottom + backdrop + slider" onPress={() => this.refs.modal4.open()} style={styles.btn}/>
                <Modal style={[styles.modal, styles.modal4]} position={"bottom"} ref={"modal4"}>
                    <Text style={styles.text}>Modal on bottom with backdrop</Text>
                    <Slider style={{width: 200}} value={this.state.sliderValue} onValueChange={(value) => this.setState({sliderValue: value})} />
                </Modal>
            </View>
        );
    }

}

const styles = StyleSheet.create({

    wrapper: {
        paddingTop: 50,
        flex: 1
    },

    modal: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    

    modal4: {
        height: 800
    },

    btn: {
        margin: 10,
        backgroundColor: "#3B5998",
        color: "white",
        padding: 10
    },

    btnModal: {
        position: "absolute",
        top: 0,
        right: 0,
        width: 50,
        height: 50,
        backgroundColor: "transparent"
    },

    text: {
        color: "black",
        fontSize: 22
    }

});
