import React from "react";
import { KeyboardAvoidingView, Platform, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SignStyles } from "../Signin/Sign.styles";
import { useNavigation } from "@react-navigation/native";

function Signup() {
    const navigation = useNavigation();
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
                            <TextInput placeholder="Enter your name" multiline={false} numberOfLines={1} style={SignStyles.SignInput} />
                        </View>

                        <View style={SignStyles.SignLabelCon}>
                            <Text style={SignStyles.SignLabel}>E-mail</Text>
                            <TextInput placeholder="Enter your email" secureTextEntry={true} multiline={false} numberOfLines={1} style={SignStyles.SignInput} />
                        </View>

                        <View style={SignStyles.SignLabelCon}>
                            <Text style={SignStyles.SignLabel}>Password</Text>
                            <TextInput placeholder="Enter your Password" secureTextEntry={true} multiline={false} numberOfLines={1} style={SignStyles.SignInput} />
                        </View>

                        <View style={SignStyles.SignLabelCon}>
                            <Text style={SignStyles.SignLabel}>Confirm Password</Text>
                            <TextInput placeholder="Enter Confirm Password" secureTextEntry={true} multiline={false} numberOfLines={1} style={SignStyles.SignInput} />
                        </View>

                        <TouchableOpacity activeOpacity={0.6} style={{ width: '100%' }}>
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
        </>
    );
}

export default Signup;