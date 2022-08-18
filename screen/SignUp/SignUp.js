// import React, { useState } from 'react'
// import { Text, View, ImageBackground, TextInput, TouchableOpacity } from 'react-native'
// import styles from '../Home/HomeStyle'

// const SignUp = ({ navigation }) => {
//     const [email, setEmail] = useState("")
//     const [password, setPassword] = useState("");



//     return (
//         <View>
//             <ImageBackground source={require("../../assets/backi2.jpg")} style={styles.backgroundCard}>
//                 <View>
//                     <TextInput
//                         placeholder='Write your email'
//                         value={email}
//                         onChangeText={text => setEmail(text)}
//                         style={styles.input}
//                     />

//                     <TextInput
//                         placeholder='Write your password'
//                         value={password}
//                         onChangeText={text => setPassword(text)}
//                         style={styles.input}
//                     />

//                     <View style={styles.cardButton}>
//                         <TouchableOpacity style={styles.signInBtn} >
//                             <Text style={styles.signInText}>Create2</Text>
//                         </TouchableOpacity>
//                     </View>


//                 </View>


//             </ImageBackground>
//         </View>
//     )
// }

// export default SignUp



import React, { Component } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ImageBackground } from 'react-native';
class SignUp extends Component {
    state = {
        email: "",
        password: {
            val: "",
            valid: true
        },
        confirmPassword: {
            val: "",
            valid: false
        }
    };
    updateInputState = (key, val) => {
        if (key === "email") {
            this.setState(prevState => {
                return {
                    ...prevState,
                    email: val
                }
            });
        }
        if (key === "password") {
            this.setState(prevState => {
                return {
                    ...prevState,
                    password: {
                        ...prevState.password,
                        val: val
                    },
                    confirmPassword: {
                        ...prevState.confirmPassword,
                        valid: prevState.confirmPassword.val === val
                    }
                }
            });
        }
        if (key === "confirmPassword") {
            this.setState(prevState => {
                return {
                    ...prevState,
                    confirmPassword: {
                        ...prevState.confirmPassword,
                        val: val,
                        valid: val === this.state.password.val
                    }
                }
            });
        }
    };
    signupHandler = () => {
        let url = "https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyDzo8Uo7kjYz5l1WS-AHm_E6nn9yyZ4LiU";

        fetch(url, {
            method: "POST",
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password.val,
                returnSecureToken: true
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .catch(err => {
                console.log(err);
                alert("Authentication failed, please try again!");
            })
            .then(res => res.json())
            .then(parsedRes => {
                console.log(parsedRes);
                if (!parsedRes.idToken) {
                    alert("An error occured, please check your data!");
                } else {
                    // this.props.navigation.navigate('toDo')
                }
            });
    };
    render() {
        return (
            <ImageBackground source={require("../../assets/backi2.jpg")} style={styles.backgroundCard}>
                <View style={styles.contianer}>
                    <View style={styles.headerView}>
                        <Text style={styles.header}>Sign Up</Text>
                    </View>
                    <TextInput
                        placeholder="Email"
                        autoCapitalize="none"
                        value={this.state.email}
                        onChangeText={val => this.updateInputState("email", val)}
                        style={styles.input}
                    />
                    <TextInput
                        placeholder="Password"
                        autoCapitalize="none"
                        value={this.state.password.val}
                        onChangeText={val => this.updateInputState("password", val)}
                        style={styles.input}
                        secureTextEntry
                    />
                    <TextInput
                        placeholder="Confirm password"
                        autoCapitalize="none"
                        value={this.state.confirmPassword.val}
                        onChangeText={val => this.updateInputState("confirmPassword", val)}
                        style={styles.input}
                        secureTextEntry
                    />
                    <View style={styles.button} >
                        <Button title="SignUp" onPress={this.signupHandler} disabled={(this.state.email === "" || !this.state.confirmPassword.valid)} />
                    </View>
                    <Text style={styles.text}>Already have an account? <Text onPress={() => this.props.navigation.navigate('logIn')}
                        style={styles.navigateText}>Login</Text></Text>
                </View>
            </ImageBackground>

        )
    }
}
const styles = StyleSheet.create({
    backgroundCard: {
        minHeight: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    contianer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    headerView: {
        marginBottom: 25
    },
    header: {
        fontWeight: "bold",
        fontSize: 26,
        color: "#1E90FF"
    },
    text: {
        color: "black"
    },
    navigateText: {
        color: "#1E90FF"
    },
    input: {
        backgroundColor: "rgba(255,255,255,0.8)",
        margin: 10,
        padding: 10,
        width: 300,
        borderRadius: 5,
        borderBottomColor: "#570ABF",
        borderBottomWidth: 2
    },
    button: {
        marginTop: 15,
        marginBottom: 15
    }
});
export default SignUp;