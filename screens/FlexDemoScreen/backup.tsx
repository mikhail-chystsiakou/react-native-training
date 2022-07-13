import { useState, FC } from "react";
import { StyleSheet, View, Text, Button, TouchableOpacity } from "react-native";

const FlexDirectionBasics = () => {
    return (
        <FlexDemo label="Flex Demo">
            <View style={[Styles.previewItem, {backgroundColor: "powderblue"}]}></View>
            <View style={[Styles.previewItem, {backgroundColor: "skyblue"}]}></View>
            <View style={[Styles.previewItem, {backgroundColor: "steelblue"}]}></View>
        </FlexDemo>
    )
}

type FlexDemoPropsType = {
    label: string;
    children: React.ReactNode;
};

type FlexPropertiesType = {
    flexDirection: string,
    direction: string,
    justifyContent: string
}

type buttonGroupsType = {
    flexDirection: Array<string>,
    direction: Array<string>,
    justifyContent: Array<string>
}

const FlexDemo:FC<FlexDemoPropsType> = ({
    label, children
}) => {
    const [selectedButtonGroup, setSelectedButtonGroup] = useState("flexDirection");
    const [flexProperties, setflexProperties] = useState({
        flexDirection: "row",
        direction: "ltr",
        justifyContent: "flex-start"
    });

    const buttonGroups: buttonGroupsType = {
        flexDirection: ["row", "column", "row-reverse", "column-reverse"],
        direction: ["ltr", "rtl"],
        justifyContent: ["flex-start", "flex-end", "center", "space-between"]
    }    

    return (
        <View style={FlexDemoStyles.flexDemoContainer}>
            <Text style={FlexDemoStyles.flexDemoLabel}>{label}</Text>

            <View style={FlexDemoStyles.buttonGroupSelection}>
                <Text style={{textAlign: "center", fontSize: "20"}}>Flex Property</Text>
                {Object.keys(buttonGroups).map(buttonGroup => (
                    <TouchableOpacity
                        style={[
                            Styles.buttonGroupButton,
                            buttonGroup === selectedButtonGroup && Styles.selectedButton
                        ]}
                        onPress={()=>{setSelectedButtonGroup(buttonGroup)}}
                    >
                        <Text style={[
                            Styles.buttonLabel,
                            buttonGroup === selectedButtonGroup && Styles.selectedButtonLabel
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
            <View style={[Styles.previewContainer, flexProperties]}>
                {children}
            </View>
        </View>
    )
};

type ButtonGroupPropsType = {
    groupName: string;
    groupOptions: Array<string>;
    flexProperties: FlexPropertiesType;
    setflexProperties: ((f: (s: FlexPropertiesType) => void) => void);
};

const ButtonGroup: FC<ButtonGroupPropsType> = ({
    groupName, groupOptions, flexProperties, setflexProperties
}) => (
    <View style={Styles.buttonGroup}>
        <Text style={Styles.buttonGroupLabel}>{groupName}</Text>
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

const FlexDemoStyles = StyleSheet.create({
    flexDemoContainer: { 
        padding: 10, 
        flex: 1, 
        backgroundColor: "white" 
    },
    flexDemoLabel: {
        textAlign: "center",
        fontSize: 20,
    },
})    
});


export default FlexDirectionBasics;