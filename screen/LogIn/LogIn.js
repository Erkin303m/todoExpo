import React, { Component } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ImageBackground } from 'react-native';
// import NavigationService from '../Menu/NavigationService';

class LoginScreen extends Component {
    state = {
        email: "",
        password: ""
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
                    password: val
                }
            });
        }
    };
    loginHandler = () => {
        const apiKey = "AIzaSyDzo8Uo7kjYz5l1WS-AHm_E6nn9yyZ4LiU";
        let url =
            "https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=" +
            apiKey;
        fetch(url, {
            method: "POST",
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password,
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
                    // alert("Success");
                    this.props.navigation.navigate('toDo')
                    // NavigationService.navigate('home');
                }
            });
    };
    render() {

        return (
            <ImageBackground source={require("../../assets/backi2.jpg")} style={styles.backgroundCard}>
                <View style={styles.contianer}>
                    <View style={styles.headerView}>
                        <Text style={styles.header}>Login</Text>
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
                        value={this.state.password}
                        onChangeText={val => this.updateInputState("password", val)}
                        style={styles.input}
                        secureTextEntry
                    />
                    <View style={styles.button}>
                        <Button title="Login" onPress={this.loginHandler} style={styles.button} disabled={(this.state.email === "" || this.state.password === "")} />
                    </View>
                    <Text style={styles.text}>Don't have an account? <Text onPress={() => this.props.navigation.navigate('signUp')} style={styles.navigateText}>Sign Up</Text></Text>
                </View>
            </ImageBackground>

        )
    }
}
const styles = StyleSheet.create({
    contianer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    backgroundCard: {
        minHeight: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    headerView: {
        marginBottom: 20
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
export default LoginScreen;