import {useState } from "react";
import { StyleSheet, View, Text, Button, TouchableOpacity } from "react-native";

const MichFlexDirectionBasics = () => {
    const [selectedLayout, setSelectedLayout] = useState("row");

    return (
        <MichPreviewLayout
            label = "flexDirection"
            layoutOptions = {["row", "column", "row-reverse", "column-reverse"]}
            selectedLayout = {selectedLayout}
            setSelectedLayout = {setSelectedLayout}
        >
            <View style={[michStyles.previewItem, {backgroundColor: "powderblue"}]}></View>
            <View style={[michStyles.previewItem, {backgroundColor: "skyblue"}]}></View>
            <View style={[michStyles.previewItem, {backgroundColor: "steelblue"}]}></View>
        </MichPreviewLayout>
    )
}

const MichPreviewLayout = ({
    label, layoutOptions, selectedLayout, setSelectedLayout, children
}) => (
    <View style={michStyles.container}>
        <Text style={michStyles.label}>{label}</Text>
        <View style={michStyles.buttonContainer}>
            {layoutOptions.map((option) => (
                <TouchableOpacity
                    key={option}
                    onPress={() => setSelectedLayout(option)}
                    style={[
                        michStyles.button, 
                        selectedLayout === option && michStyles.selectedButton
                    ]}>
                        <Text style={[
                            michStyles.buttonLabel, 
                            selectedLayout === option && michStyles.selectedButtonLabel
                        ]}>
                            {option}
                        </Text>
                </TouchableOpacity>
            ))}
        </View>
        <View style={[michStyles.previewContainer, {flexDirection: selectedLayout}]}>
            {children}
        </View>
    </View>
    )

const michStyles = StyleSheet.create({
    container: { 
        padding: 10, 
        flex: 1, 
        backgroundColor: "white" 
    },
    label: {
        textAlign: "center",
        fontSize: 20,
    },
    buttonContainer: {
        flexWrap: "wrap",
        flexDirection: "row"
    },
    button: {
        paddingHorizontal: 20,
        paddingVertical: 6,
        borderRadius: 4,
        backgroundColor: "#FDF5E6",
        textAlign: "center",
        marginVertical: 3,
        marginHorizontal: "1%",
        minWidth: "48%"
    },
    selectedButton: {
        backgroundColor: "#FF7F50",
    },
    buttonLabel: {
        fontSize: 12,
        fontWeight: "600",
        color: "#FF7F50"
    },
    selectedButtonLabel: {
        fontWeight: "700",
        color: "white"
    },
    previewContainer: {
        flexGrow: 1,
        marginTop: 8,
        backgroundColor: "aliceblue",
    },
    previewItem: {
        width: 50,
        height: 50
    },
    
});


export default MichFlexDirectionBasics;