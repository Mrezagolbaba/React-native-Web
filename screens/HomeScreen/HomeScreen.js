import React,{useState} from 'react';
import {Platform, StyleSheet, Text, TouchableOpacity, View, FlatList, Button} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import * as WebBrowser from 'expo-web-browser';
import {Container, Tabs, Tab, TabHeading, Icon,ScrollableTab,Row,Content,Grid,ListItem} from 'native-base';
import logo from '../assets/images/robot-dev.png'
import ListItems from '../components/common/ListItems'
import WebModalComponent from '../components/web/WebModalComponent'
import {connect } from 'react-redux'
import {bindActionCreators} from "redux";
import {getArticles} from "../utils/Redux/actions";
import ModalComponent from "../components/Native/ModalComponent";
import Modal from "react-native";

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
    this.props.articlesActions();
  }

  openModal = (event,item) =>{
    event.persist();
    console.log('iteeeeeee',item)
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
    console.log(currentTab,modalVisible,this.props.articles)
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
                    data={this.props.articles}
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
                    data={this.props.articles}
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
                    data={this.props.articles}
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
              <WebModalComponent isVisible={this.state.isModalVisible} onBackdropPress={()=>this.closeModal()}/>
          :
              <ModalComponent data={this.state.modalData&&this.state.modalData} visible={this.state.isModalVisible} onRequestClose={()=>this.closeModal()} />
          }
        </Container>
    );
  }
}



//we can receive some props from redux
const mapStateToProps= (state)=> {

  return {
    articles:state.articleReducer
  }
};
// We can dispatch actions to the reducer and sagas
const mapDispatchToProps= (dispatch)=> {
  return {
    articlesActions:()=>{
      dispatch(getArticles())
    }
  };
};
const HomeScreen= connect(mapStateToProps, mapDispatchToProps)(Home);
export default HomeScreen
HomeScreen.navigationOptions = {
  header: null,
};






const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
  activeSubTabStyle:{
    backgroundColor:'#000',
    color:'#FFF'
  },
  deActiveSubTabStyle:{
    backgroundColor:'#000',
    color:'#888888'
  },
  text:{
    color:'#888888',
    fontSize:16,
    fontWeight:'bold'
  },
  ActiveText:{
    color:'#FFF',
    fontSize:16,
    fontWeight:'bold'
  },
  wrapperItems:{
    paddingLeft:10,
    paddingRight:10
  },
  list: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },

});
