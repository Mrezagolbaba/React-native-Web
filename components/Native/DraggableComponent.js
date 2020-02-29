import React from 'react';
import DraggableView from 'draggableview';
import { StyleSheet, View } from 'react-native';

const draggableView = (props) =>{

    return(

        <DraggableView
            style={styles.container}
            backgroundComponent={<View style={styles.view} />}
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
export default draggableView
