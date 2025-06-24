import React from "react";
import { ImageBackground, StatusBar, Text, TouchableOpacity, View } from "react-native";
import { OnboardStyles } from "./Onboarding.styles";
import { useNavigation } from "@react-navigation/native";
import { RestStyles } from "../EachRestaurant/EachRestaurant.styles";
import Feather from 'react-native-vector-icons/Feather';

function Onboarding3() {
    const navigation = useNavigation();
    return (
        <>
            <ImageBackground source={require('../../Images/Onboarding/onboarding3.png')} style={{ flex: 1 }} resizeMode='cover'>
                <StatusBar translucent={true} backgroundColor="transparent" />
                <TouchableOpacity activeOpacity={0.4} onPress={() => navigation.goBack()} style={[RestStyles.backbutton,{backgroundColor:'rgba(0,0,0,0.2)'}]}>
                    <View >
                        <Feather name="chevron-left" size={20} color={'white'} />
                    </View>
                </TouchableOpacity>
                <View style={OnboardStyles.container}>
                    <View style={OnboardStyles.innerContainer}>
                        <Text style={OnboardStyles.headerText}>Discover Your Dream Hotel, Effortlessly</Text>
                        <Text style={OnboardStyles.headerTag}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
                        <View style={OnboardStyles.OnboardingBtnsCon}>
                            <View style={OnboardStyles.OnboardingBtns}></View>
                            <View style={OnboardStyles.OnboardingBtns}></View>
                            <View style={[OnboardStyles.OnboardingBtns, OnboardStyles.activeBtn]}></View>
                        </View>
                        <TouchableOpacity activeOpacity={0.4} onPress={() => navigation.navigate('Signin')}>
                            <View style={OnboardStyles.ContinueBtn}>
                                <Text style={OnboardStyles.ContinueText}>Get Started</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        </>
    );
}

export default Onboarding3;