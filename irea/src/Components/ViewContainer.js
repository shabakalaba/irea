import React from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';

export default class ViewContainer extends React.Component {
    render(){
        return(
            <View style={styles.ViewContainer}>
                {this.props.children}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    ViewContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center'
    }
})