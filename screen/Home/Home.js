import React, { useEffect, useState } from 'react'
import { Text, View, StyleSheet, Button, TextInput, ImageBackground, TouchableOpacity } from 'react-native'
import styles from './HomeStyle'





const Home = ({ route, navigation }) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("");
    const [data, setData] = useState([]);
    const [number, setNumber] = useState(0);

    return (
        <View>
            <ImageBackground source={require("../../assets/backi2.jpg")} style={styles.backgroundCard}>
                <View>

                    {/* <TextInput
                        placeholder='Email'
                        value={email}
                        onChangeText={text => setEmail(text)}
                        style={styles.input}
                    />
                    <TextInput
                        placeholder='Password'
                        value={password}
                        onChangeText={text => setPassword(text)}
                        style={styles.input}
                    /> */}
                    <View style={styles.cardButton}>
                        <TouchableOpacity style={styles.signInBtn} onPress={() => navigation.navigate("logIn")} >
                            <Text style={styles.signInText} >Sign In</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.cardButton}>
                        <TouchableOpacity style={styles.signInBtn2} onPress={() => navigation.navigate("signUp")} >
                            <Text style={styles.signInText2} >Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        </View>
    )
}

export default Home