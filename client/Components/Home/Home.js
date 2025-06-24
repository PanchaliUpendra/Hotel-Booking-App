import React, { useState } from "react";
import { Image, ImageBackground, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { Hotels, HotelNames } from "../../Data/Hotels";
import { HomeStyles } from "./Home.styles";
import Ionicons from 'react-native-vector-icons/Ionicons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from "@react-navigation/native";

function Home() {
    const navigation = useNavigation();
    const [rhotel, setrHotel] = useState('All');
    return (
        <>
            <ScrollView contentContainerStyle={{ flexGrow: 1, backgroundColor: 'white' }}>

                {/* user data */}
                <View style={HomeStyles.profileCon}>
                    <TouchableOpacity activeOpacity={0.4} onPress={()=>navigation.navigate('Account')}>
                    <View style={HomeStyles.profileNameCon}>
                        <Image source={require('../../Images/Profile/profile.png')} style={{ width: 50, height: 50, resizeMode: 'cover' }} />
                        <Text style={HomeStyles.HomeTopicTextOne}>panchali upendra</Text>
                    </View>
                    </TouchableOpacity>
                    <View style={HomeStyles.profileNameCon}>
                        <TouchableOpacity activeOpacity={0.4} onPress={() => navigation.navigate('Search')}>
                            <View style={HomeStyles.profileNotify}>
                                <Ionicons name="search" size={18} color={'black'} />
                            </View>
                        </TouchableOpacity>
                        
                        <TouchableOpacity activeOpacity={0.3} >
                        <View style={HomeStyles.profileNotify}>
                            <MaterialIcons name="notifications-none" size={18} color={'black'} />
                        </View>
                        </TouchableOpacity>
                    </View>
                </View>

                {/* most popular */}
                <View style={HomeStyles.HomeTopicHeader}>
                    <Text style={HomeStyles.HomeTopicTextOne}>most popular</Text>
                    <TouchableOpacity activeOpacity={0.4} onPress={() => navigation.navigate('Search')}>
                        <Text style={HomeStyles.HomeTopicTextTwo}>See All</Text>
                    </TouchableOpacity>
                </View>

                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{
                        paddingHorizontal: 15,
                        paddingVertical: 5,
                    }}
                    style={{
                        maxHeight: 200,
                    }}>
                    {
                        Hotels.filter((item) => item.divided === 'mostpopular').map((htlitem, idx) => (
                            <TouchableOpacity activeOpacity={0.8} key={idx} onPress={()=>navigation.navigate('Eachrestaurant',{id:htlitem.id})}>
                            <ImageBackground  source={htlitem.image} style={HomeStyles.popularEach} >
                                <View style={HomeStyles.popularEachInner}>

                                    <Text style={HomeStyles.popularHtlName}>{htlitem.name}</Text>
                                    <Text style={HomeStyles.popularHtlTag}>{htlitem.location}</Text>
                                    <View style={HomeStyles.popularpriceCon}>
                                        <Text style={HomeStyles.popularpriceText}>₹{htlitem.price}/night</Text>
                                        <Text style={HomeStyles.popularpriceText}><Text style={{ color: '#EDB900', fontSize: 14 }}>★</Text>{htlitem.rating}</Text>
                                    </View>

                                    {/* wishlist */}
                                    <Ionicons size={20} color={'white'} name="heart-circle" style={HomeStyles.popularWishlist} />
                                </View>
                            </ImageBackground>
                            </TouchableOpacity>
                        ))
                    }
                </ScrollView>

                {/* recommended for you */}
                <View style={HomeStyles.HomeTopicHeader}>
                    <Text style={HomeStyles.HomeTopicTextOne}>recommended for you</Text>
                    <TouchableOpacity activeOpacity={0.4} onPress={() => navigation.navigate('Search')}>
                        <Text style={HomeStyles.HomeTopicTextTwo}>See All</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}
                    style={{ maxHeight: 35, backgroundColor: 'white', marginBottom: 10 }}
                    contentContainerStyle={{ paddingHorizontal: 15, gap: 10 }}>
                    {
                        HotelNames.map((htl, idx) => (
                            <TouchableOpacity key={idx} activeOpacity={0.4} onPress={() => setrHotel(htl)}>
                                <View style={rhotel !== htl ? [HomeStyles.recomHtlName] : [HomeStyles.recomHtlName, { backgroundColor: '#2853af' }]}>
                                    <Text style={{ ...HomeStyles.recomhtltext, color: rhotel === htl ? 'white' : '#78828A' }}>{htl}</Text>
                                </View>
                            </TouchableOpacity>
                        ))
                    }
                </ScrollView>
                {
                    Hotels.filter(itm => itm.type === rhotel).length > 0 ?
                        Hotels.filter(itm => itm.type === rhotel).map((htl, idx) => (
                            <View key={idx} style={HomeStyles.recomEachCon}>
                                <View style={HomeStyles.recomImgName}>
                                    <Image source={htl.image} style={{ width: 60, height: 60, borderRadius: 5, resizeMode: 'cover' }} />
                                    <View>
                                        <Text style={[HomeStyles.popularHtlName, { color: 'black' }]}>{htl.name}</Text>
                                        <Text style={[HomeStyles.popularHtlTag, { color: 'black' }]}><EvilIcons name="location" size={14} color={'black'} />{htl.location}</Text>
                                        <Text style={[HomeStyles.popularpriceText, { color: 'black', marginTop: 7 }]}><Text style={{ color: '#2853AF', fontSize: 14 }}>₹{htl.price}</Text>/night</Text>
                                    </View>
                                </View>
                                <View>
                                    <Text style={[HomeStyles.popularpriceText, { color: 'black', marginTop: 7 }]}><Text style={{ color: '#EDB900', fontSize: 14 }}>★</Text>{htl.rating}</Text>
                                </View>
                            </View>
                        )) :
                        Hotels.slice(0, 3).map((htl, idx) => (
                            <View key={idx} style={HomeStyles.recomEachCon}>
                                <View style={HomeStyles.recomImgName}>
                                    <Image source={htl.image} style={{ width: 60, height: 60, borderRadius: 5, resizeMode: 'cover' }} />
                                    <View>
                                        <Text style={[HomeStyles.popularHtlName, { color: 'black' }]}>{htl.name}</Text>
                                        <Text style={[HomeStyles.popularHtlTag, { color: 'black' }]}><EvilIcons name="location" size={14} color={'black'} />{htl.location}</Text>
                                        <Text style={[HomeStyles.popularpriceText, { color: 'black', marginTop: 7 }]}><Text style={{ color: '#2853AF', fontSize: 14 }}>₹{htl.price}</Text>/night</Text>
                                    </View>
                                </View>
                                <View>
                                    <Text style={[HomeStyles.popularpriceText, { color: 'black', marginTop: 7 }]}><Text style={{ color: '#EDB900', fontSize: 14 }}>★</Text>{htl.rating}</Text>
                                </View>
                            </View>
                        ))
                }

                {/* best today */}
                <View style={HomeStyles.HomeTopicHeader}>
                    <Text style={HomeStyles.HomeTopicTextOne}>Best Today🔥</Text>
                    <TouchableOpacity activeOpacity={0.4} onPress={() => navigation.navigate('Search')}>
                        <Text style={HomeStyles.HomeTopicTextTwo}>See All</Text>
                    </TouchableOpacity>
                </View>

                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={{ gap: 10, paddingHorizontal: 15 }}>
                    {
                        Hotels.filter((item) => item.divided === 'besttodaytop').map((htl, idx) => (
                            <View key={idx} style={[HomeStyles.recomEachCon, { width: 250, borderWidth: 1, borderColor: '#E9EBED' }]}>
                                <View style={HomeStyles.recomImgName}>
                                    <Image source={htl.image} style={{ width: 60, height: 60, borderRadius: 5, resizeMode: 'cover' }} />
                                    <View>
                                        <Text style={[HomeStyles.popularHtlName, { color: 'black' }]}>{htl.name}</Text>
                                        <Text style={[HomeStyles.popularHtlTag, { color: 'black' }]}><EvilIcons name="location" size={14} color={'black'} />{htl.location}</Text>
                                        <Text style={[HomeStyles.popularpriceText, { color: 'black', marginTop: 7 }]}> <Text style={[HomeStyles.popularpriceText, { color: 'black', marginTop: 7 }]}><Text style={{ color: '#EDB900', fontSize: 14 }}>★</Text>{htl.rating}</Text>  <Text style={{ color: '#2853AF', fontSize: 14 }}>₹{htl.price}</Text> <Text style={{ textDecorationLine: 'line-through', color: '#F41F52' }}>{Number(htl.price) + 1000}</Text></Text>
                                    </View>
                                </View>
                            </View>
                        ))
                    }
                </ScrollView>

                {
                    Hotels.filter((item) => item.divided === 'besttoday').map((htl, idx) => (
                        <View key={idx} style={HomeStyles.bestTopCon}>
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
                    ))
                }


            </ScrollView>
        </>
    );
}

export default Home;