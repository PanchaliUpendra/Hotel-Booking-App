import React from "react";
import {ScrollView, Text, TextInput, TouchableOpacity, View} from 'react-native';
import { SignStyles } from "../Signin/Sign.styles";

function Signup(){
    return(
        <>
            <ScrollView contentContainerStyle={{flexGrow:1}}>
                            <View style={SignStyles.SignCon}>
                                <Text style={SignStyles.SignHead}>Create Account</Text>
                                <Text style={SignStyles.SignHeadTag}>Lorem ipsum dolor sit amet, consectetur</Text>
            
                                <View style={SignStyles.SignLabelCon}>
                                    <Text style={SignStyles.SignLabel}>Full Name</Text>
                                    <TextInput placeholder="Enter your name" multiline={false} numberOfLines={1} style={SignStyles.SignInput}/>
                                </View>
            
                                <View style={SignStyles.SignLabelCon}>
                                    <Text style={SignStyles.SignLabel}>E-mail</Text>
                                    <TextInput placeholder="Enter your email"  secureTextEntry={true} multiline={false} numberOfLines={1} style={SignStyles.SignInput}/>
                                </View>

                                <View style={SignStyles.SignLabelCon}>
                                    <Text style={SignStyles.SignLabel}>Password</Text>
                                    <TextInput placeholder="Enter your Password"  secureTextEntry={true} multiline={false} numberOfLines={1} style={SignStyles.SignInput}/>
                                </View>

                                <View style={SignStyles.SignLabelCon}>
                                    <Text style={SignStyles.SignLabel}>Confirm Password</Text>
                                    <TextInput placeholder="Enter Confirm Password"  secureTextEntry={true} multiline={false} numberOfLines={1} style={SignStyles.SignInput}/>
                                </View>
            
                                <TouchableOpacity activeOpacity={0.6} style={{width:'100%'}}>
                                <View style={SignStyles.SignBtn}> 
                                    <Text style={SignStyles.SignBtnText}>Sign Up</Text>
                                </View>
                                </TouchableOpacity>
            
                                <Text style={SignStyles.SignBtnBelowTag}>Already, have an account? <Text style={{color:'#2853af',textDecorationLine:'underline'}}>Sign In</Text></Text>
            
                            </View>
                        </ScrollView>
        </>
    );
}

export default Signup;