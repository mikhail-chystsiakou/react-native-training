import { StyleSheet, View, Text, Button, TouchableOpacity } from "react-native";

import FlexDemo from "./FlexDemo";

export default () => (
    <FlexDemo>
        <View style={[FlexDemoStyles.previewItem, {backgroundColor: "powderblue"}]}></View>
        <View style={[FlexDemoStyles.previewItem, {backgroundColor: "skyblue"}]}></View>
        <View style={[FlexDemoStyles.previewItem, {backgroundColor: "steelblue"}]}></View>
    </FlexDemo>
)

const FlexDemoStyles = StyleSheet.create({
    previewItem: {
        width: 50,
        height: 50
    },
})