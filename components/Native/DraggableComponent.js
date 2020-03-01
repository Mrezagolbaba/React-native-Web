import React from 'react';
import Drawer from 'react-native-advance-draggable-view';
import { StyleSheet, View } from 'react-native';

const DraggableComponent = (props) =>{
    const {renderContainerView}=props
    return(

        <Drawer
            initialDrawerSize={0.09}
            refFunc={(c) => {
                this.drawer = c
            }}
            renderContainerView={() => renderContainerView}
            renderDrawerView={() => (
                <View navigation={this.props.navigation} />)}
            renderInitDrawerView={() => (<View style={{
                backgroundColor: 'white',
                height: 66,
            }}>
                {/*<StatusBar hidden={true} />*/}
                <View style={{height:50,backgroundColor:'#000'}} /> //view you can draggable
            </View>)}
        />
    )

}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
    },
    view: {
        flex: 1,
        backgroundColor: 'red',

    },
});
export default DraggableComponent
