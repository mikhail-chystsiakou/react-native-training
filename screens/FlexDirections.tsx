import {useState } from "react";
import { StyleSheet, View, Text, Button, TouchableOpacity } from "react-native";

const FlexDirectionBasics = () => {
    const [selectedLayout, setSelectedLayout] = useState({
        flexDirection: "row",
        direction: "ltr",
        justifyContent: "flex-start"
    });

    const buttonGroups = {
        flexDirection: ["row", "column", "row-reverse", "column-reverse"],
        direction: ["ltr", "rtl"],
        justifyContent: ["flex-start", "flex-end", "center", "space-between"]
    }

    return (
        <PreviewLayout
            label = "Flex Demo"
            buttonGroups = {buttonGroups}
            // layoutOptions = {["row", "column", "row-reverse", "column-reverse"]}
            selectedLayout = {selectedLayout}
            setSelectedLayout = {setSelectedLayout}
        >
            <View style={[Styles.previewItem, {backgroundColor: "powderblue"}]}></View>
            <View style={[Styles.previewItem, {backgroundColor: "skyblue"}]}></View>
            <View style={[Styles.previewItem, {backgroundColor: "steelblue"}]}></View>
        </PreviewLayout>
    )
}

const PreviewLayout = ({
    label, buttonGroups, selectedLayout, setSelectedLayout, children
}) => (
    <View style={Styles.container}>
        <Text style={Styles.label}>{label}</Text>
        {Object.keys(buttonGroups).map(groupName => (
            <ButtonGroup
                groupName={groupName}
                groupOptions={buttonGroups[groupName]}
                selectedLayout={selectedLayout}
                setSelectedLayout={setSelectedLayout}
            />
        ))}
        <View style={[Styles.previewContainer, selectedLayout]}>
            {children}
        </View>
    </View>
    );

const ButtonGroup = ({
    groupName, groupOptions, selectedLayout, setSelectedLayout
}) => (
    <View style={Styles.buttonGroup}>
        <Text style={Styles.buttonGroupLabel}>{groupName}</Text>
        {groupOptions.map((option) => (
            <TouchableOpacity
                key={option}
                onPress={() => setSelectedLayout(s => (
                    {...s, [groupName]: option}
                ))}
                style={[
                    Styles.button, 
                    selectedLayout[groupName] === option && Styles.selectedButton
                ]}>
                    <Text style={[
                        Styles.buttonLabel, 
                        selectedLayout[groupName] === option && Styles.selectedButtonLabel
                    ]}>
                        {option}
                    </Text>
            </TouchableOpacity>
        ))}
    </View>
)

const Styles = StyleSheet.create({
    container: { 
        padding: 10, 
        flex: 1, 
        backgroundColor: "white" 
    },
    label: {
        textAlign: "center",
        fontSize: 20,
    },
    buttonGroup: {
        flexWrap: "wrap",
        flexDirection: "row"
    },
    buttonGroupLabel: {
        alignSelf: "center",
        flexBasis: "100%",
        paddingVertical: 6,
        textAlign: "center",
        fontSize: 16,
    },
    button: {
        paddingHorizontal: 20,
        paddingVertical: 6,
        borderRadius: 4,
        backgroundColor: "#FDF5E6",
        textAlign: "center",
        marginVertical: 3,
        marginHorizontal: "1%",
        minWidth: "48%",
        flexGrow: 1,
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


export default FlexDirectionBasics;