import React, { useState } from "react";
import { Alert, KeyboardAvoidingView, Platform, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SignStyles } from "./Sign.styles";
import { CommonActions, useNavigation } from "@react-navigation/native";
import { API_URL } from "../../Data/Hotels";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch } from "react-redux";
import { storeUserData } from "../../Reduxstates/Userdata";
import Displayloading from "../Common/Displayloading";

function Signin() {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const [showloading, setShowloading] = useState(false);
    const [userData, setUserdata] = useState({
        email: '',
        password: ''
    });

    async function handleLogin() {
        setShowloading(true);
        try {
            if (userData.email !== '' && userData.password !== '') {
                const abortCon = new AbortController();
                const abortTime = setTimeout(() => abortCon.abort(), 10000);
                const response = await fetch(`${API_URL}/users/userlogin`, {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        ...userData
                    }),
                    signal: abortCon.signal
                });
                clearTimeout(abortTime);
                const resData = await response.json();
                if (resData.success) {
                    await AsyncStorage.setItem('token', resData.token);
                    dispatch(storeUserData({
                        isAuthed: true,
                        uid: resData.user.user_id,
                        name: resData.user.user_name,
                        email: resData.user.user_email,
                    }));
                    navigation.dispatch(
                        CommonActions.reset({
                            index: 0,
                            routes: [{ name: 'Dashboard' }], // Replace 'Home' with your target screen name
                        })
                    );
                } else {
                    Alert.alert(resData.message);
                }
            } else {
                Alert.alert('Please fill the Require fields!!');
            }
        } catch (err) {
            console.log(err.message);
            Alert.alert(err.message);
        } finally {
            setShowloading(false);
        }
    }
    return (
        <>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'} // adjust for platform
                style={{ flex: 1, backgroundColor: 'white' }}
            >
                <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                    <View style={SignStyles.SignCon}>
                        <Text style={SignStyles.SignHead}>Let’s Sign you in</Text>
                        <Text style={SignStyles.SignHeadTag}>Lorem ipsum dolor sit amet, consectetur</Text>

                        <View style={SignStyles.SignLabelCon}>
                            <Text style={SignStyles.SignLabel}>Email Address</Text>
                            <TextInput placeholder="Enter Your Email Address" multiline={false} numberOfLines={1} style={SignStyles.SignInput}
                                value={userData.email} onChangeText={(text) => setUserdata(prev => ({
                                    ...prev,
                                    email: text
                                }))} />
                        </View>

                        <View style={SignStyles.SignLabelCon}>
                            <Text style={SignStyles.SignLabel}>Password</Text>
                            <TextInput placeholder="Enter Your Password" secureTextEntry={true} multiline={false} numberOfLines={1} style={SignStyles.SignInput}
                                value={userData.password} onChangeText={(text) => setUserdata(prev => ({
                                    ...prev,
                                    password: text
                                }))} />
                        </View>

                        <TouchableOpacity activeOpacity={0.6} style={{ width: '100%' }} onPress={() => handleLogin()}>
                            <View style={SignStyles.SignBtn}>
                                <Text style={SignStyles.SignBtnText}>Sign In</Text>
                            </View>
                        </TouchableOpacity>

                        <Text style={SignStyles.SignBtnBelowTag}>Don’t have an account? <Text style={{ color: '#2853af', textDecorationLine: 'underline' }} onPress={() => navigation.navigate('Signup')}>Sign Up</Text></Text>

                    </View>
                </ScrollView>
                <View style={SignStyles.guestmode}>
                    <TouchableOpacity activeOpacity={0.4} onPress={() => navigation.navigate('Dashboard', { screen: 'Home' })}>
                        <Text style={SignStyles.guestModeText}>Try Guest Mode!!</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
            {showloading && <Displayloading />}
        </>

    );
}

export default Signin;