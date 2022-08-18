import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    backgroundCard: {
        minHeight: "100%",
        flexDirection: "row",
        justifyContent: "center",
        paddingTop: 150
    },
    InputCard: {
        padding: 5,
        backgroundColor: "#570ABF",
        borderRadius: 10,
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center"
    },
    input: {
        backgroundColor: "rgba(255,255,255,1)",
        margin: 10,
        padding: 10,
        width: "60%",
        borderRadius: 5,
    },
    signInBtn2: {
        backgroundColor: "white",
        color: "red",
        borderRadius: 10,
        textAlign: "center",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        borderColor: "#570ABF",
        borderWidth: 2,
        elevation: 5,
        width: "15%",
        height: 55
    },
    InputCard2: {
        padding: 5,
        backgroundColor: "rgba(255,255,255,0.8)",
        borderRadius: 10,
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 5
    },
    textWordAdd: {
        fontSize: 17,
        fontWeight: "500",
        marginStart:10
    },
    signInBtnEdit:{
        backgroundColor:"yellow",
        padding: 10,
        borderRadius:5,
        marginEnd:10
    },
    signInBtnDel:{
        backgroundColor:"red",
        padding: 10,
        borderRadius:5,
        marginEnd:10
    }
})


export default styles