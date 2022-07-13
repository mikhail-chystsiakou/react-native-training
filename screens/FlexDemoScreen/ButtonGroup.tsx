import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default ({
    groupName, groupOptions, flexProperties, setflexProperties
}) => (
    <View style={Styles.buttonGroup}>
        <Text style={Styles.buttonGroupLabel}>Select value</Text>
        {groupOptions.map((option) => (
            <TouchableOpacity
                key={option}
                onPress={() => setflexProperties((s: FlexPropertiesType) => (
                    {...s, [groupName]: option}
                ))}
                style={[
                    Styles.button, 
                    flexProperties[groupName] === option && Styles.selectedButton
                ]}>
                    <Text style={[
                        Styles.buttonLabel, 
                        flexProperties[groupName] === option && Styles.selectedButtonLabel
                    ]}>
                        {option}
                    </Text>
            </TouchableOpacity>
        ))}
    </View>
)

const Styles = StyleSheet.create({
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
    buttonGroupButton: {
        paddingHorizontal: 20,
        paddingVertical: 6,
        borderRadius: 4,
        backgroundColor: "#FDF5E6",
        textAlign: "center",
        marginVertical: 3,
        marginHorizontal: "1%",
        minWidth: "25%",
        // flexGrow: 1,
    },
    
});
