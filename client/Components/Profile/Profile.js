import React, { useState } from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { ProfileStyles } from "./Profile.styles";
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useDispatch, useSelector } from "react-redux";
import { CommonActions, useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { clearUserData } from "../../Reduxstates/Userdata";
import Displayloading from "../Common/Displayloading";


function Profile() {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const [showloading, setShowloading] = useState(false);
    const isAuthed = useSelector(state => state.userdata.isAuthed);
    const uid = useSelector(state => state.userdata.uid);
    const name = useSelector(state => state.userdata.name);
    const email = useSelector(state => state.userdata.email);


    function handleLogout() {
        setShowloading(true);
        AsyncStorage.removeItem('token');
        dispatch(clearUserData());


        setTimeout(() => {
            setShowloading(false);
            navigation.dispatch(
                CommonActions.reset({
                    index: 0,
                    routes: [{ name: 'Signin' }], // Replace 'Home' with your target screen name
                })
            );
        }, 3000);

    }

    return (
        <>
            {
                (isAuthed === true && uid !== '') ?
                    <ScrollView contentContainerStyle={{ flexGrow: 1, backgroundColor: 'white' }}>
                        <View style={ProfileStyles.profileCon}>
                            <Text style={ProfileStyles.profileHead}>Profile</Text>

                            {/* profile data */}
                            <View style={ProfileStyles.personData}>
                                <View style={ProfileStyles.personInner}>
                                    <Image source={require('../../Images/Profile/profile.png')} style={{ width: 50, height: 50, resizeMode: 'cover' }} />
                                    <View>
                                        <Text style={ProfileStyles.personName}>{name}</Text>
                                        <Text style={ProfileStyles.personEmail}>{email}</Text>
                                    </View>
                                </View>
                                <Feather color={'black'} size={20} name='edit' />
                            </View>

                            {/* settings */}
                            <Text style={ProfileStyles.settingsHead}>Settings</Text>

                            <View style={ProfileStyles.settingsEachCon}>
                                <AntDesign name="wallet" size={20} color='black' />
                                <Text style={ProfileStyles.settingsEachText}>Your Card</Text>
                            </View>
                            <View style={ProfileStyles.settingsBreakLine} />

                            <View style={ProfileStyles.settingsEachCon}>
                                <MaterialIcons name="security" size={20} color='black' />
                                <Text style={ProfileStyles.settingsEachText}>Security</Text>
                            </View>
                            <View style={ProfileStyles.settingsBreakLine} />


                            <View style={ProfileStyles.settingsEachCon}>
                                <MaterialIcons name="notifications-none" size={20} color='black' />
                                <Text style={ProfileStyles.settingsEachText}>Notifications</Text>
                            </View>
                            <View style={ProfileStyles.settingsBreakLine} />


                            <View style={ProfileStyles.settingsEachCon}>
                                <MaterialIcons name="language" size={20} color='black' />
                                <Text style={ProfileStyles.settingsEachText}>Languages</Text>
                            </View>
                            <View style={ProfileStyles.settingsBreakLine} />


                            <View style={ProfileStyles.settingsEachCon}>
                                <MaterialIcons name="error-outline" size={20} color='black' />
                                <Text style={ProfileStyles.settingsEachText}>Help and Support</Text>
                            </View>
                            <View style={ProfileStyles.settingsBreakLine} />

                            <Text style={ProfileStyles.logout} onPress={() => handleLogout()}>Logout</Text>
                        </View>
                    </ScrollView>
                    :
                    <View style={{
                        flex: 1, backgroundColor: 'white', display: 'flex',
                        flexDirection: 'column', alignItems: 'center', justifyContent: 'center'
                    }}>
                        <Text style={{ fontWeight: 500, color: 'black', textTransform: 'capitalize', fontSize: 14 }}>You haven't Signed In Yet</Text>
                        <Text style={{ fontWeight: 500, color: '#2148c0', fontSize: 15, marginTop: 10, textDecorationLine: 'underline' }} onPress={() => navigation.navigate('Signin')}>Login</Text>
                    </View>
            }
            {showloading && <Displayloading />}
        </>
    );
}

export default Profile;