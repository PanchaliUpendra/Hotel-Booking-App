import React, { useState } from "react";
import { Image, ScrollView, Text, TextInput, View } from "react-native";
import { BookingStyles } from "./Mybookings.styles";
import { SearchStyles } from "../Search/Search.styles";
import Ionicons from 'react-native-vector-icons/Ionicons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import { Hotels } from "../../Data/Hotels";
import { HomeStyles } from "../Home/Home.styles";

function Mybookings() {
    const [search,setSearch] = useState('');
    return (
        <>
            <View style={BookingStyles.bookingHeadCon}>
                <Text style={BookingStyles.bookingheadText}>My Bookings</Text>
            </View>
            {//add you condition here
                true ?
                    <ScrollView contentContainerStyle={{ flexGrow: 1, backgroundColor: 'white', paddingHorizontal: 15, paddingVertical: 5 }}>
                        <View style={SearchStyles.searchBarCon}>
                            <Ionicons name="search" size={18} color={'grey'} />
                            <TextInput placeholder="Search..." style={{ flex: 1 }} value={search} onChangeText={(text)=>setSearch(text)} />
                        </View>

                        {
                            Hotels.filter((item)=>(item.name.toLowerCase().includes(search.toLowerCase())||item.location.toLowerCase().includes(search.toLowerCase()))).map((htl, idx) => (
                                <View key={idx} style={HomeStyles.recomEachCon}>
                                    <View style={HomeStyles.recomImgName}>
                                        <Image source={htl.image} style={{ width: 60, height: 60, borderRadius: 5, resizeMode: 'cover' }} />
                                        <View>
                                            <Text style={[HomeStyles.popularHtlName, { color: 'black' }]}>{htl.name}</Text>
                                            <Text style={[HomeStyles.popularHtlTag, { color: 'grey',fontWeight:400 }]}><EvilIcons name="location" size={14} color={'black'} />{htl.location}</Text>
                                            <Text style={[HomeStyles.popularpriceText, { color: 'black', marginTop: 7 }]}><Text style={{ color: '#2853AF', fontSize: 14 }}>₹{htl.price}</Text>/day</Text>
                                            <Text style={[HomeStyles.popularHtlTag, { color: 'black',fontWeight:400 }]}>start date:22-10-2025</Text>
                                            <Text style={[HomeStyles.popularHtlTag, { color: 'grey',fontWeight:400 }]}>total days:2 days</Text>
                                            <Text style={[HomeStyles.popularpriceText, { color: 'black', marginTop: 7 }]}>total cost: <Text style={{color:'#2853AF'}}>250/- </Text><Text style={{color:'grey',fontSize:9}}>(includ GST)</Text></Text>
                                        </View>
                                    </View>
                                    <View>
                                        <Text style={[HomeStyles.popularpriceText, { color: 'black', marginTop: 7 }]}><Text style={{ color: '#EDB900', fontSize: 14 }}>★</Text>{htl.rating}</Text>
                                    </View>
                                </View>
                            ))
                        }
                    </ScrollView>
                    :
                    <View style={BookingStyles.emptycon}>
                        <Text style={{color:'black',fontWeight:500}}>You haven't booked any hotel yet</Text>
                    </View>
            }
        </>
    );
}

export default Mybookings;