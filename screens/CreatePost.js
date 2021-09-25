import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class CreatePost extends Component {
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                <Text>Creator of App: Fahmeeda M. 👩🏻</Text>
                <Text>❤   Hope you like it!  ❤</Text>
            </View>
        )
    }
}