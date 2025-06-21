import React from "react";
import {ScrollView, Text, TextInput, TouchableOpacity, View} from 'react-native';
import { SignStyles } from "./Sign.styles";

function Signin(){
    return(
        <>
            <ScrollView contentContainerStyle={{flexGrow:1}}>
                <View style={SignStyles.SignCon}>
                    <Text style={SignStyles.SignHead}>Let’s Sign you in</Text>
                    <Text style={SignStyles.SignHeadTag}>Lorem ipsum dolor sit amet, consectetur</Text>

                    <View style={SignStyles.SignLabelCon}>
                        <Text style={SignStyles.SignLabel}>Email Address</Text>
                        <TextInput placeholder="Enter Your Email Address" multiline={false} numberOfLines={1} style={SignStyles.SignInput}/>
                    </View>

                    <View style={SignStyles.SignLabelCon}>
                        <Text style={SignStyles.SignLabel}>Password</Text>
                        <TextInput placeholder="Enter Your Password"  secureTextEntry={true} multiline={false} numberOfLines={1} style={SignStyles.SignInput}/>
                    </View>

                    <TouchableOpacity activeOpacity={0.6} style={{width:'100%'}}>
                    <View style={SignStyles.SignBtn}> 
                        <Text style={SignStyles.SignBtnText}>Sign In</Text>
                    </View>
                    </TouchableOpacity>

                    <Text style={SignStyles.SignBtnBelowTag}>Don’t have an account? <Text style={{color:'#2853af',textDecorationLine:'underline'}}>Sign Up</Text></Text>

                </View>
            </ScrollView>
        </>
    );
}

export default Signin;