import React, { useState } from 'react'
import { Text, View, StyleSheet, ScrollView, List, ImageBackground, TextInput, TouchableOpacity, Button } from 'react-native'
import styles from './TodoStyles'
import { useDispatch, useSelector } from 'react-redux'
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';



const Todo = () => {
    const [word, setWord] = useState("")
    const [editWord, setEditWord] = useState("")
    const [numberEdit, setNumberEdit] = useState(0)
    const data = useSelector(state => state);

    const dispatch = useDispatch();

    const Deleting = (i) => {
        const action = { type: "DELET", payload: i };
        dispatch(action)
    }
    const Add = () => {
        const action = { type: "ADD", payload: word };
        dispatch(action);
        setEditWord("")
    }

    const Edit = (v, i) => {
        setEditWord(v);
        setNumberEdit(i);
    };

    const Save = () => {
        const action = { type: "SAVE", payload: { editWord: word, index: numberEdit } };
        dispatch(action);
        setEditWord("")
    }

    return (
        <View>
            <ImageBackground source={require("../../assets/backi2.jpg")} style={styles.backgroundCard}>
                <ScrollView style={{ paddingLeft: 15, paddingRight: 15 }}>
                    <View style={styles.InputCard}>
                        <TextInput
                            placeholder='Email'
                            style={styles.input}
                            defaultValue={editWord}
                            onChangeText={(val) => setWord(val)}
                        />
                        <TouchableOpacity style={styles.signInBtn2} onPress={() => Add()} >
                            <Text style={styles.signInText2}><Ionicons name='add-circle' size={25} /></Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.signInBtn2} onPress={() => Save()} >
                            <Text style={styles.signInText2}><Entypo name='save' size={25} /></Text>
                        </TouchableOpacity>
                    </View>
                    {
                        data.map((v, i) => {
                            return <View style={!v.edit ? styles.InputCard2 : { display: "none" }} key={i}>
                                <Text style={styles.textWordAdd}>{v.name}</Text>
                                <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
                                    <TouchableOpacity style={styles.signInBtnEdit} >
                                        <Text style={styles.signInText2} onPress={() => Edit(v.name, i)} ><AntDesign name='edit' size={20} /></Text>
                                    </TouchableOpacity><TouchableOpacity style={styles.signInBtnDel} onPress={() => Deleting(i)}>
                                        <Text style={{ color: "white" }}><AntDesign name='delete' size={20} /></Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        })
                    }

                </ScrollView>
            </ImageBackground>
        </View>
    )
}

export default Todo