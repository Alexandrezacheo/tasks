import React from "react"
import { Text, View, StyleSheet } from "react-native"
import Icon from "react-native-vector-icons/FontAwesome6"

export default props => {
    return (
        <View style={styles.container}>
            <View style={styles.checkContainer}>
                {getCheckView(props.doneAt)}
            </View>
            <View>
                <Text>{props.description}</Text>
                <Text>{props.estimateAt + ""}</Text>
            </View>
        </View>
    )
}

function getCheckView() {

}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        borderColor: "#AAA",
        borderBottomWidth: 1,
        alignItems: "center",
        paddingVertical: 10
    },
    checkContainer: {
        width: "20%",
        alignItems: "center",
        justifyContent: "center"
    },
    pending:{
        height: 25,
        width: 25,
        borderRadius: 13,
        borderWidth: 1,
        borderColor: "#555"
    }

})