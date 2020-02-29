import React,{Component} from 'react';
import {Image, StyleSheet, Text, TouchableHighlight, View, Button,Dimensions,ScrollView} from 'react-native';
// import Modal from "react-native-modal";
import Modal from "modal-enhanced-react-native-web";
import window from '../constants/Layout'


class WebModalComponent extends Component{
    constructor(props) {
        super(props);
        this.state={
            scrollOffset:''
        }
    }

    _handleOnScroll = event => {
        this.setState({
            scrollOffset: event.nativeEvent.contentOffset.y
        });
    };
    _handleScrollTo = p => {
        if (this.scrollViewRef) {
            this.scrollViewRef.scrollTo(p);
        }
    };
    render(){
        const {isVisible}=this.props
        return(
            <Modal
                isVisible={isVisible}
                onSwipe={() => this.setState({ visibleModal: null })}
                swipeDirection="down"
                scrollTo={this._handleScrollTo}
                scrollOffset={this.state.scrollOffset}
                scrollOffsetMax={400 - 300} // content height - ScrollView height
                style={styles.bottomModal}
            >
                <View style={styles.scrollableModal}>
                    <ScrollView
                        ref={ref => (this.scrollViewRef = ref)}
                        onScroll={this._handleOnScroll}
                        scrollEventThrottle={16}
                    >
                        <View style={styles.scrollableModalContent1}>
                            <Text>Scroll me up</Text>
                        </View>
                        <View style={styles.scrollableModalContent1}>
                            <Text>Scroll me up</Text>
                        </View>
                    </ScrollView>
                </View>
            </Modal>
        )
    }

}
export default WebModalComponent
const styles = StyleSheet.create({
    modalGeneral:{
        height:window.height,
        width:window.width,
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
    },
    scrollableModalContent1: {
        height: 200,
        backgroundColor: "orange",
        alignItems: "center",
        justifyContent: "center"
    },
    modalWrapperView:{
        width:290,
        height:180,
        backgroundColor:'#000',
        borderRadius:10
    },
    scrollableModal: {
        height: 300
    },
    bottomModal: {
        justifyContent: "flex-end",
        margin: 0
    },
})
