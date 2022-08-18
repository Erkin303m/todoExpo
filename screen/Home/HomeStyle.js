import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    backgroundCard: {
        minHeight: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    input: {
        backgroundColor: "rgba(255,255,255,0.8)",
        margin: 10,
        padding: 10,
        width: 300,
        borderRadius: 5,
        borderBottomColor:"#570ABF",
        borderBottomWidth:2
    },
    signInBtn: {
        backgroundColor: "#570ABF",
        color: "red",
        borderRadius: 10,
        padding: 10,
        width: "50%",
        textAlign:"center",
        flexDirection:"row",
        elevation:5,
        alignItems:"center",
        justifyContent:"center",
    },
    signInText:{
        color: "white"
    },
    cardButton:{
        flexDirection:"row",
        justifyContent:"center",
        margin: 10
    },
    signInBtn2:{
        backgroundColor: "white",
        color: "red",
        borderRadius: 10,
        padding: 10,
        width: "50%",
        textAlign:"center",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        borderColor:"#570ABF",
        borderWidth:2,
        elevation:5
    },
    signInText2:{
        color:"#570ABF"
    }
})


export default styles