import React from "react";
import { KeyboardAvoidingView, Platform, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SignStyles } from "./Sign.styles";
import { useNavigation } from "@react-navigation/native";

function Signin() {
    const navigation = useNavigation();
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
                            <TextInput placeholder="Enter Your Email Address" multiline={false} numberOfLines={1} style={SignStyles.SignInput} />
                        </View>

                        <View style={SignStyles.SignLabelCon}>
                            <Text style={SignStyles.SignLabel}>Password</Text>
                            <TextInput placeholder="Enter Your Password" secureTextEntry={true} multiline={false} numberOfLines={1} style={SignStyles.SignInput} />
                        </View>

                        <TouchableOpacity activeOpacity={0.6} style={{ width: '100%' }}>
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
        </>
    );
}

export default Signin;