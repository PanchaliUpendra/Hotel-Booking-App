import React from "react";
import { ImageBackground, StatusBar, Text, TouchableOpacity, View } from "react-native";
import { OnboardStyles } from "./Onboarding.styles";
import { useNavigation } from "@react-navigation/native";

function Onboarding3() {
    const navigation = useNavigation();
    return (
        <>
            <ImageBackground source={require('../../Images/Onboarding/onboarding3.png')} style={{ flex: 1 }} resizeMode='cover'>
                <StatusBar translucent={true} backgroundColor="transparent" />
                <View style={OnboardStyles.container}>
                    <View style={OnboardStyles.innerContainer}>
                        <Text style={OnboardStyles.headerText}>Discover Your Dream Hotel, Effortlessly</Text>
                        <Text style={OnboardStyles.headerTag}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
                        <View style={OnboardStyles.OnboardingBtnsCon}>
                            <View style={OnboardStyles.OnboardingBtns}></View>
                            <View style={OnboardStyles.OnboardingBtns}></View>
                            <View style={[OnboardStyles.OnboardingBtns, OnboardStyles.activeBtn]}></View>
                        </View>
                        <TouchableOpacity activeOpacity={0.4} onPress={()=>navigation.navigate('Signin')}>
                            <View style={OnboardStyles.ContinueBtn}>
                                <Text style={OnboardStyles.ContinueText}>Continue</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        </>
    );
}

export default Onboarding3;