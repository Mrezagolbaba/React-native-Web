import React,{useState} from 'react';
import {Platform, StyleSheet, Text, TouchableOpacity, View, FlatList, Button} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import * as WebBrowser from 'expo-web-browser';
import {Container, Tabs, Tab, TabHeading, Icon,ScrollableTab,Row,Content,Grid,ListItem} from 'native-base';
import logo from '../../assets/images/robot-dev.png'
import ListItems from '../../components/common/ListItems'
import WebModalComponent from '../../components/web/WebModalComponent'
import {connect } from 'react-redux'
import {getProducts} from "../../utils/Redux/actions";
import ModalComponent from "../../components/Native/ModalComponent";
import ModalItems from "../../components/web/ModalItems";
import {styles} from './Style'

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      currentTab:0,
      isModalVisible:false,
      sliderValue: 0.3,
      modalData:{}
    }
  }
  componentDidMount() {
    this.props.productsActions();
  }

  openModal = (event,item) =>{
    event.persist();
      this.setState({
        modalData:item
      },()=> this.setState({
        isModalVisible:true
      }))

  }
  closeModal = () =>{
    this.setState({
      isModalVisible:false
    })
  }
  render() {
    const{currentTab,modalVisible}=this.state
    return (
        <Container style={styles.container}>
          <Tabs initialPage={0} onChangeTab={(i) => this.setState({currentTab:i})} tabBarUnderlineStyle={{display: 'none'}}
                // renderTabBar={() => <ScrollableTab tabsContainerStyle={{backgroundColor: '#000'}}/>}
          >
            <Tab heading={<TabHeading
                style={currentTab.i === 0 ? styles.activeSubTabStyle : styles.deActiveSubTabStyle}>
              <Text style={ currentTab.i===0?styles.ActiveText:styles.text}>All</Text></TabHeading>}>
              <View style={styles.wrapperItems}>
                <FlatList
                    data={this.props.Products}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={(event) => this.openModal(event,item)}>
                        <ListItems text={item.name} Img={{uri:item.image_url}} />
                        </TouchableOpacity>
                        )}
                    keyExtractor={item => item.id}
                    numColumns={Platform.OS==='web'?11:3}
                />
              </View>

            </Tab>
            <Tab heading={<TabHeading
                style={currentTab.i === 1 ? styles.activeSubTabStyle : styles.deActiveSubTabStyle}><Text
                style={currentTab.i===1?styles.ActiveText:styles.text}>Pizza</Text></TabHeading>}>
              <View style={styles.wrapperItems}>
                <FlatList
                    data={this.props.Products}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={(event) => this.openModal(event,item)}>
                          <ListItems text={item.name} Img={{uri:item.image_url}} />
                        </TouchableOpacity>
                    )}
                    keyExtractor={item => item.id}
                    numColumns={Platform.OS==='web'?11:3}
                />
              </View>
            </Tab>
            <Tab heading={<TabHeading
                style={currentTab.i === 2 ? styles.activeSubTabStyle : styles.deActiveSubTabStyle}><Text
                style={currentTab.i===2?styles.ActiveText:styles.text}>STEAK</Text></TabHeading>}>
              <View style={styles.wrapperItems}>
                <FlatList
                    data={this.props.Products}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={(event) => this.openModal(event,item)}>
                          <ListItems text={item.name} Img={{uri:item.image_url}} />
                        </TouchableOpacity>
                    )}
                    keyExtractor={item => item.id}
                    numColumns={Platform.OS==='web'?11:3}
                />
              </View>
            </Tab>
          </Tabs>
          {Platform.OS==='web'?
              <ModalItems data={this.state.modalData&&this.state.modalData} isVisible={this.state.isModalVisible} onBackdropPress={()=>this.closeModal()}/>
          :
              <ModalComponent data={this.state.modalData&&this.state.modalData} visible={this.state.isModalVisible} onRequestClose={()=>this.closeModal()} />
          }
          {/*{*/}
          {/*  Platform.OS==='web'?*/}
          {/*    <WebModalComponent data={this.state.modalData&&this.state.modalData} isVisible={this.state.isModalVisible} onBackdropPress={()=>this.closeModal()}/>*/}
          {/*:*/}
          {/*    <ModalComponent data={this.state.modalData&&this.state.modalData} visible={this.state.isModalVisible} onRequestClose={()=>this.closeModal()} />*/}
          {/*}*/}
        </Container>
    );
  }
}



//we can receive some props from redux
const mapStateToProps= (state)=> {

  return {
    Products:state.ProductsReducer
  }
};
// We can dispatch actions to the reducer and sagas
const mapDispatchToProps= (dispatch)=> {
  return {
    productsActions:()=>{
      dispatch(getProducts())
    }
  };
};
const HomeScreen= connect(mapStateToProps, mapDispatchToProps)(Home);
export default HomeScreen
HomeScreen.navigationOptions = {
  header: null,
};

