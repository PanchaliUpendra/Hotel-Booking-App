import React from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { ProfileStyles } from "./Profile.styles";
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


function Profile() {
    return (
        <>
            <ScrollView contentContainerStyle={{ flexGrow: 1, backgroundColor: 'white' }}>
                <View style={ProfileStyles.profileCon}>
                    <Text style={ProfileStyles.profileHead}>Profile</Text>

                    {/* profile data */}
                    <View style={ProfileStyles.personData}>
                        <View style={ProfileStyles.personInner}>
                            <Image source={require('../../Images/Profile/profile.png')} style={{ width: 50, height: 50, resizeMode: 'cover' }} />
                            <View>
                                <Text style={ProfileStyles.personName}>panchali upendra</Text>
                                <Text style={ProfileStyles.personEmail}>panchaliupendra@gmail.com</Text>
                            </View>
                        </View>
                        <Feather color={'black'} size={20} name='edit' />
                    </View>

                    {/* settings */}
                    <Text style={ProfileStyles.settingsHead}>Settings</Text>

                    <View style={ProfileStyles.settingsEachCon}>
                        <AntDesign name="wallet" size={20} color='black'/>
                        <Text style={ProfileStyles.settingsEachText}>Your Card</Text>
                    </View>
                    <View style={ProfileStyles.settingsBreakLine}/>

                    <View style={ProfileStyles.settingsEachCon}>
                        <MaterialIcons name="security" size={20} color='black'/>
                        <Text style={ProfileStyles.settingsEachText}>Security</Text>
                    </View>
                    <View style={ProfileStyles.settingsBreakLine}/>


                    <View style={ProfileStyles.settingsEachCon}>
                        <MaterialIcons name="notifications-none" size={20} color='black'/>
                        <Text style={ProfileStyles.settingsEachText}>Notifications</Text>
                    </View>
                    <View style={ProfileStyles.settingsBreakLine}/>


                    <View style={ProfileStyles.settingsEachCon}>
                        <MaterialIcons name="language" size={20} color='black'/>
                        <Text style={ProfileStyles.settingsEachText}>Languages</Text>
                    </View>
                    <View style={ProfileStyles.settingsBreakLine}/>


                    <View style={ProfileStyles.settingsEachCon}>
                        <MaterialIcons name="error-outline" size={20} color='black'/>
                        <Text style={ProfileStyles.settingsEachText}>Help and Support</Text>
                    </View>
                    <View style={ProfileStyles.settingsBreakLine}/>

                    <Text style={ProfileStyles.logout}>Logout</Text>
                </View>
            </ScrollView>
        </>
    );
}

export default Profile;