import { useState } from "react";
import { StyleSheet, View, Text, Button, TouchableOpacity } from "react-native";
import ButtonGroup from "./ButtonGroup"


export default ({children}) => {
    const [selectedButtonGroup, setSelectedButtonGroup] = useState("flexDirection");
    const [flexProperties, setflexProperties] = useState({
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
        <View style={FlexDemoStyles.container}>
            <Text style={FlexDemoStyles.containerLabel}>Select property</Text>
                
            <View style={FlexDemoStyles.flexPropertyContainer}>
                {Object.keys(buttonGroups).map(buttonGroup => (
                    <TouchableOpacity
                        style={[
                            FlexDemoStyles.flexPropertyButton,
                            buttonGroup === selectedButtonGroup && FlexDemoStyles.selectedButton
                        ]}
                        onPress={()=>{setSelectedButtonGroup(buttonGroup)}}
                    >
                        <Text style={[
                            FlexDemoStyles.flexProperyButtonLabel,
                            buttonGroup === selectedButtonGroup && FlexDemoStyles.selectedButtonLabel
                            ]}>
                                {buttonGroup}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>

            <ButtonGroup
                groupName={selectedButtonGroup}
                groupOptions={buttonGroups[selectedButtonGroup]}
                flexProperties={flexProperties}
                setflexProperties={setflexProperties}
            />
            <View style={[FlexDemoStyles.itemsContainer, flexProperties]}>
                {children}
            </View>
        </View>
    )
};

const FlexDemoStyles = StyleSheet.create({
    container: {
        padding: 10, 
        flex: 1, 
        backgroundColor: "white",
        flexDirection: "column",
    },
    containerLabel: {
        textAlign: "center", 
        fontSize: 16,
    },
    flexPropertyContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
    },
    flexPropertyButton: {
        margin: 3,
        paddingVertical: 6,
        minWidth: "48%",
        flexGrow: 1,
        borderRadius: 4,
        backgroundColor: "#FDF5E6",
        textAlign: "center",
    },
    selectedButton: {
        backgroundColor: "#FF7F50",
    },
    flexProperyButtonLabel: {
        fontSize: 12,
        fontWeight: "600",
        color: "#FF7F50"
    },
    selectedButtonLabel: {
        fontWeight: "700",
        color: "white"
    },
    itemsContainer: {
        flexGrow: 1,
        marginTop: 8,
        backgroundColor: "aliceblue",
    },
})
