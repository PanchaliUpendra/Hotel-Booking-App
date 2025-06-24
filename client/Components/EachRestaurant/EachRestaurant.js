import React from "react";
import { Alert, Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { RestStyles } from "./EachRestaurant.styles";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Hotels } from "../../Data/Hotels";
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { HomeStyles } from "../Home/Home.styles";
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import { useSelector } from "react-redux";

function EachRestaurant() {
    const route = useRoute();
    const { id } = route.params;
    const navigation = useNavigation();

    const isAuthed = useSelector(state=>state.userdata.isAuthed);

    function findHotel(id) {
        const result = Hotels.find(item => item.id === id);
        return result ? true : false;
    }

    function showLoginAlert(){
        Alert.alert(`Please log in to access this feature.`);
        navigation.navigate('Signin');
    }

    return (
        <>
            {
                findHotel(id) ?
                    Hotels.filter(item => item.id === id).map((htl, idx) => (
                        <View key={idx} style={RestStyles.eachResCon}>
                            <ScrollView contentContainerStyle={{ flexGrow: 1, backgroundColor: 'white', paddingBottom: 80 }}>
                                <Image source={htl.image} style={RestStyles.eachImgCon} />
                                <View style={RestStyles.eachResContent}>
                                    <View>
                                        <Text style={RestStyles.hotelName}>{htl.name}</Text>
                                        <Text style={RestStyles.hotelLocation}><Entypo name="location-pin" color={'#2853AF'} size={18} />{htl.location}, {htl.rooms} rooms, {htl.bathrooms} bathrooms, <Text style={{ color: '#EDB900', fontSize: 14 }}>★</Text><Text style={{ color: 'black' }}>{htl.rating}</Text></Text>
                                    </View>
                                    <Text style={[RestStyles.hotelLocation,{fontSize:13,marginTop:7}]}><Text style={{color:'black'}}>Address:</Text> {htl.address}</Text>

                                    <View style={[HomeStyles.HomeTopicHeader, { paddingLeft: 0, paddingRight: 0 }]}>
                                        <Text style={HomeStyles.HomeTopicTextOne}>Common Facilities</Text>
                                    </View>
                                    <View style={RestStyles.comCon}>
                                        <View style={RestStyles.comConEachInner}>
                                            <View style={RestStyles.comConEach}>
                                                <Entypo name="air" size={20} color={'black'} />
                                            </View>
                                            <Text style={RestStyles.comConText}>Ac</Text>
                                        </View>
                                        <View style={RestStyles.comConEachInner}>
                                            <View style={RestStyles.comConEach}>
                                                <MaterialIcons name="local-restaurant" size={20} color={'black'} />
                                            </View>
                                            <Text style={RestStyles.comConText}>Restaurant</Text>
                                        </View>
                                        <View style={RestStyles.comConEachInner}>
                                            <View style={RestStyles.comConEach}>
                                                <FontAwesome5 name="swimming-pool" size={20} color='black' />
                                            </View>
                                            <Text style={RestStyles.comConText}>Swimming pool</Text>
                                        </View>
                                        <View style={RestStyles.comConEachInner}>
                                            <View style={RestStyles.comConEach}>
                                                <MaterialIcons name="24mp" size={20} color='black' />
                                            </View>
                                            <Text style={RestStyles.comConText}>24 hours</Text>
                                        </View>
                                    </View>

                                    <View style={[HomeStyles.HomeTopicHeader, { paddingLeft: 0, paddingRight: 0 }]}>
                                        <Text style={HomeStyles.HomeTopicTextOne}>Description</Text>
                                    </View>

                                    <Text style={RestStyles.description}>The ideal place for those looking for a luxurious and tranquil holiday experience with stunning sea views.....<Text style={{ color: '#2148c0' }}>Read More</Text></Text>
                                    {/* reviews */}
                                    <View style={[HomeStyles.HomeTopicHeader, { paddingLeft: 0, paddingRight: 0 }]}>
                                        <Text style={HomeStyles.HomeTopicTextOne}>Reviews</Text>
                                    </View>

                                    <View style={[HomeStyles.recomEachCon,{paddingLeft:0,paddingRight:0,flex:1}]}>
                                        <View style={[HomeStyles.recomImgName,{paddingLeft:0,paddingRight:0,flex:1}]}>
                                            <Image source={require('../../Images/Profile/review1.png')} style={{ width: 40, height: 40, borderRadius: 5, resizeMode: 'cover' }} />
                                            <View>
                                                <Text style={[HomeStyles.popularHtlName, { color: 'black' }]}>Kim Borrdy</Text>
                                                <Text style={[HomeStyles.popularHtlTag, { color: '#A7AEC1',marginTop:4,fontWeight:400,width:'60%'}]}>Amazing!  The room is good than the picture. Thanks for amazing experience!</Text>
                                            </View>
                                        </View>
                                        <View>
                                            <Text style={[HomeStyles.popularpriceText, { color: 'black', marginTop: 7 }]}><Text style={{ color: '#EDB900', fontSize: 14 }}>★</Text>4</Text>
                                        </View>
                                    </View>

                                    <View style={[HomeStyles.recomEachCon,{paddingLeft:0,paddingRight:0,flex:1}]}>
                                        <View style={[HomeStyles.recomImgName,{paddingLeft:0,paddingRight:0,flex:1}]}>
                                            <Image source={require('../../Images/Profile/review2.png')} style={{ width: 40, height: 40, borderRadius: 5, resizeMode: 'cover' }} />
                                            <View>
                                                <Text style={[HomeStyles.popularHtlName, { color: 'black' }]}>Mirai Kamazuki</Text>
                                                <Text style={[HomeStyles.popularHtlTag, { color: '#A7AEC1',marginTop:4,fontWeight:400,width:'60%'}]}>The service is on point, and I really like the facilities. Good job!</Text>
                                            </View>
                                        </View>
                                        <View>
                                            <Text style={[HomeStyles.popularpriceText, { color: 'black', marginTop: 7 }]}><Text style={{ color: '#EDB900', fontSize: 14 }}>★</Text>5</Text>
                                        </View>
                                    </View>

                                    {/* recommanded */}
                                    <View style={[HomeStyles.HomeTopicHeader, { paddingLeft: 0, paddingRight: 0 }]}>
                                        <Text style={HomeStyles.HomeTopicTextOne}>Recommendation</Text>
                                        <TouchableOpacity activeOpacity={0.4} onPress={() => navigation.navigate('Dashboard',{screen:'Search'})}>
                                            <Text style={HomeStyles.HomeTopicTextTwo}>See All</Text>
                                        </TouchableOpacity>
                                    </View>

                                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={{ gap: 10 }}>
                                        {
                                            Hotels.map((htl, idx) => (
                                                <TouchableOpacity activeOpacity={0.8} key={idx} onPress={() => navigation.navigate('Eachrestaurant', { id: htl.id })}>
                                                    <View style={[HomeStyles.recomEachCon, { width: 250, borderWidth: 1, borderColor: '#E9EBED' }]}>
                                                        <View style={HomeStyles.recomImgName}>
                                                            <Image source={htl.image} style={{ width: 60, height: 60, borderRadius: 5, resizeMode: 'cover' }} />
                                                            <View>
                                                                <Text style={[HomeStyles.popularHtlName, { color: 'black' }]}>{htl.name}</Text>
                                                                <Text style={[HomeStyles.popularHtlTag, { color: 'black' }]}><EvilIcons name="location" size={14} color={'black'} />{htl.location}</Text>
                                                                <Text style={[HomeStyles.popularpriceText, { color: 'black', marginTop: 7 }]}> <Text style={[HomeStyles.popularpriceText, { color: 'black', marginTop: 7 }]}><Text style={{ color: '#EDB900', fontSize: 14 }}>★</Text>{htl.rating}</Text>  <Text style={{ color: '#2853AF', fontSize: 14 }}>₹{htl.price}</Text> <Text style={{ textDecorationLine: 'line-through', color: '#F41F52' }}>{Number(htl.price) + 1000}</Text></Text>
                                                            </View>
                                                        </View>
                                                    </View>
                                                </TouchableOpacity>
                                            ))
                                        }
                                    </ScrollView>

                                </View>
                            </ScrollView>
                            {/* price */}
                            <View style={RestStyles.priceCon}>
                                <View>
                                    <Text style={RestStyles.priceHead}>price</Text>
                                    <Text style={RestStyles.priceText}><Text style={{color:'#2148c0'}}>₹{htl.price}</Text><Text style={{color:'grey',fontSize:11}}>/night</Text></Text>
                                </View>
                                {
                                    isAuthed?
                                    <TouchableOpacity activeOpacity={0.4}>
                                    <View style={RestStyles.bookingNowBtn}>
                                        <Text style={[RestStyles.priceText, { color: 'white', fontSize: 14 }]}>Booking Now</Text>
                                    </View>
                                </TouchableOpacity>:
                                <TouchableOpacity activeOpacity={0.4} onPress={()=>showLoginAlert()}>
                                    <View style={RestStyles.bookingNowBtn}>
                                        <Text style={[RestStyles.priceText, { color: 'white', fontSize: 14 }]}>Booking Now</Text>
                                    </View>
                                </TouchableOpacity>
                                }
                                
                            </View>
                            {/* back button */}
                            <TouchableOpacity activeOpacity={0.4} onPress={() => navigation.goBack()} style={RestStyles.backbutton}>
                                <View >
                                    <Feather name="chevron-left" size={20} color={'white'} />
                                </View>
                            </TouchableOpacity>
                        </View>
                    )) :
                    <View style={{ flex: 1, backgroundColor: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ fontWeight: 500 }}>Loading...</Text>
                    </View>
            }

        </>
    );
}

export default EachRestaurant;