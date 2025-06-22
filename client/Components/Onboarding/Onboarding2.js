import React from "react";
import { ImageBackground, StatusBar, Text, TouchableOpacity, View } from "react-native";
import { OnboardStyles } from "./Onboarding.styles";

function Onboarding2(){
    return(
        <>
            <ImageBackground source={require('../../Images/Onboarding/onboarding2.png')} style={{ flex: 1 }} resizeMode='cover'>
                        <StatusBar translucent={true} backgroundColor="transparent" />
                        <View style={OnboardStyles.container}>
                            <View style={OnboardStyles.innerContainer}>
                                <Text style={OnboardStyles.headerText}>Book with Ease, Stay with Style</Text>
                                <Text style={OnboardStyles.headerTag}>Semper in cursus magna et eu varius nunc adipiscing. Elementum justo, laoreet id sem . </Text>
                                <View style={OnboardStyles.OnboardingBtnsCon}>
                                    <View style={OnboardStyles.OnboardingBtns}></View>
                                    <View style={[OnboardStyles.OnboardingBtns,OnboardStyles.activeBtn]}></View>
                                    <View style={OnboardStyles.OnboardingBtns}></View>
                                </View>
                                <TouchableOpacity activeOpacity={0.4}>
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

export default Onboarding2;