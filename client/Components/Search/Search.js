import React, { useState } from "react";
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SearchStyles } from "./Search.styles";
import { Hotels } from "../../Data/Hotels";
import { HomeStyles } from "../Home/Home.styles";
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from "@react-navigation/native";

function Search() {
    const navigation = useNavigation();
    const [search,setSearch] = useState('');
    return (
        <>
            <View style={{backgroundColor:'white',paddingHorizontal:10,paddingVertical:10}}>
            <View style={SearchStyles.searchBarCon}>
                <Ionicons name="search" size={18} color={'grey'} />
                <TextInput placeholder="Search..." style={{flex:1}} value={search} onChangeText={(text)=>setSearch(text)}/>
            </View>
            </View>
            <ScrollView contentContainerStyle={{ flexGrow: 1, backgroundColor: 'white' }}>
                {
                    Hotels.filter((item)=>(item.name.toLowerCase().includes(search.toLowerCase())||item.location.toLowerCase().includes(search.toLowerCase()))).map((htl, idx) => (
                        <TouchableOpacity activeOpacity={0.8} key={idx} onPress={()=>navigation.navigate('Eachrestaurant',{id:htl.id})}>
                        <View style={HomeStyles.bestTopCon}>
                            <Image source={htl.image} style={{ width: '100%', height: 170, resizeMode: 'cover', borderRadius: 10 }} />
                            <View style={HomeStyles.bestHotelNameCon}>
                                <View>
                                    <Text style={[HomeStyles.popularHtlName, { color: 'black' }]}>{htl.name}</Text>
                                    <Text style={[HomeStyles.popularHtlTag, { color: 'grey' }]}><EvilIcons name="location" size={14} color={'black'} />{htl.location}</Text>
                                    <Text style={HomeStyles.bedsText}>{htl.rooms} rooms , {htl.bathrooms} bathrooms</Text>
                                </View>
                                <View>
                                    <Text style={[HomeStyles.popularHtlName, { color: '#2853AF' }]}>₹{htl.price}/-</Text>
                                    <Text style={[HomeStyles.popularHtlTag, { color: 'grey', fontWeight: 400 }]}>Per Night</Text>
                                </View>
                            </View>
                        </View>
                        </TouchableOpacity>
                    ))
                }
            </ScrollView>
        </>
    );
}

export default Search;