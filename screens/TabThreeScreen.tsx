import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function TabThreeScreen() {
    return (
        <View style={[
            styles.container,
            {
                flexDirection: "column"
            }
        ]}>
            <View style={{flex: 1, backgroundColor: "red"}}/>
            <View style={{flex: 2, backgroundColor: "yellow"}}/>
            <View style={{flex: 3, backgroundColor: "green"}}/>
        </View>
        
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
})