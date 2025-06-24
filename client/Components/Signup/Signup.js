import React, { useState } from "react";
import { Alert, KeyboardAvoidingView, Platform, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SignStyles } from "../Signin/Sign.styles";
import { useNavigation } from "@react-navigation/native";
import { API_URL } from "../../Data/Hotels";
import Displayloading from "../Common/Displayloading";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch } from "react-redux";
import { storeUserData } from "../../Reduxstates/Userdata";

function Signup() {
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const [showloading , setShowloading] = useState(false);
    const [userData,setUserData] = useState({
        email:'',
        password:'',
        confirmpassword:'',
        name:''
    });

    async function registerUser(){
        setShowloading(true);
        try{
            if(userData.email!=='' && userData.password!=='' && userData.confirmpassword!=='' && userData.password===userData.confirmpassword && userData.name!==''){
            const abortCon = new AbortController();
            const abortTime = setTimeout(()=>abortCon.abort(),10000);
            const response = await fetch(`${API_URL}/users/registeruser`,{
                method:'POST',
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    ...userData
                }),
                signal:abortCon.signal
            });
            clearTimeout(abortTime);
            const resData = await response.json();
            if(resData.success){
                await AsyncStorage.setItem('token',resData.token);
                dispatch(storeUserData({
                    isAuthed: false,
                    uid: resData.user.user_id,
                    name: resData.user.user_name,
                    email: resData.user.user_email,
                }))
                // Alert.alert(resData.message);
            }else{
                Alert.alert(resData.message);
            }
        }else{
            if(userData.password!==userData.confirmpassword){
                Alert.alert('password and confirm password should be same');
            }else{
                Alert.alert('please fill the required fields');
            }
        }
        }catch(err){
            console.log('getting an error while register ing the user',err.message);
            Alert.alert(err.message);
        }finally{
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
                        <Text style={SignStyles.SignHead}>Create Account</Text>
                        <Text style={SignStyles.SignHeadTag}>Lorem ipsum dolor sit amet, consectetur</Text>

                        <View style={SignStyles.SignLabelCon}>
                            <Text style={SignStyles.SignLabel}>Full Name</Text>
                            <TextInput placeholder="Enter your name" multiline={false} numberOfLines={1} style={SignStyles.SignInput}
                            value={userData.name}
                            onChangeText={(text)=>setUserData(prev=>({
                                ...prev,
                                name:text
                            }))}
                            />
                        </View>

                        <View style={SignStyles.SignLabelCon}>
                            <Text style={SignStyles.SignLabel}>E-mail</Text>
                            <TextInput placeholder="Enter your email" secureTextEntry={true} multiline={false} numberOfLines={1} style={SignStyles.SignInput}
                            value={userData.email}
                            onChangeText={(text)=>setUserData(prev=>({
                                ...prev,
                                email:text
                            }))} />
                        </View>

                        <View style={SignStyles.SignLabelCon}>
                            <Text style={SignStyles.SignLabel}>Password</Text>
                            <TextInput placeholder="Enter your Password" secureTextEntry={true} multiline={false} numberOfLines={1} style={SignStyles.SignInput}
                            value={userData.password}
                            onChangeText={(text)=>setUserData(prev=>({
                                ...prev,
                                password:text
                            }))} />
                        </View>

                        <View style={SignStyles.SignLabelCon}>
                            <Text style={SignStyles.SignLabel}>Confirm Password</Text>
                            <TextInput placeholder="Enter Confirm Password" secureTextEntry={true} multiline={false} numberOfLines={1} style={SignStyles.SignInput} 
                            value={userData.confirmpassword}
                            onChangeText={(text)=>setUserData(prev=>({
                                ...prev,
                                confirmpassword:text
                            }))}/>
                        </View>

                        <TouchableOpacity activeOpacity={0.6} style={{ width: '100%' }} onPress={()=>registerUser()}>
                            <View style={SignStyles.SignBtn}>
                                <Text style={SignStyles.SignBtnText}>Sign Up</Text>
                            </View>
                        </TouchableOpacity>

                        <Text style={SignStyles.SignBtnBelowTag}>Already, have an account? <Text style={{ color: '#2853af', textDecorationLine: 'underline' }} onPress={() => navigation.navigate('Signin')}>Sign In</Text></Text>

                    </View>
                </ScrollView>
                <View style={SignStyles.guestmode}>
                    <TouchableOpacity activeOpacity={0.4} onPress={()=>navigation.navigate('Dashboard',{screen:'Home'})}>
                        <Text style={SignStyles.guestModeText}>Try Guest Mode!!</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
            {showloading && <Displayloading/>}
        </>
    );
}

export default Signup;