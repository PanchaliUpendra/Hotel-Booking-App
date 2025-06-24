import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { RestStyles } from "./EachRestaurant.styles";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Hotels } from "../../Data/Hotels";
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';

function EachRestaurant() {
    const route = useRoute();
    const { id } = route.params;
    const navigation = useNavigation();

    function findHotel(id){
        const result = Hotels.find(item=>item.id===id);
        return result?true:false;
    }

    return (
        <>
            {
                findHotel(id)?
                Hotels.filter(item => item.id === id).map((htl, idx) => (
                    <View key={idx} style={RestStyles.eachResCon}>
                        <ScrollView contentContainerStyle={{ flexGrow: 1, backgroundColor: 'white' }}>
                            <Image source={htl.image} style={RestStyles.eachImgCon}/>
                            <View style={RestStyles.eachResContent}>
                                <View>
                                    <Text style={RestStyles.hotelName}>{htl.name}</Text>
                                    <Text style={RestStyles.hotelLocation}><Entypo name="location-pin" color={'#2853AF'} size={18}/>{htl.location}, <Text style={{ color: '#EDB900', fontSize: 14}}>★</Text><Text style={{color:'black'}}>{htl.rating}</Text></Text>
                                </View>
                            </View>
                        </ScrollView>
                        {/* price */}
                        <View style={RestStyles.priceCon}>
                            <View>
                                <Text style={RestStyles.priceHead}>price</Text>
                                <Text style={RestStyles.priceText}>₹200/night</Text>
                            </View>
                            <TouchableOpacity activeOpacity={0.4}>
                            <View style={RestStyles.bookingNowBtn}>
                                <Text style={[RestStyles.priceText,{color:'white',fontSize:14}]}>Booking Now</Text>
                            </View>
                            </TouchableOpacity>
                        </View>
                    {/* back button */}
                    <TouchableOpacity activeOpacity={0.4} onPress={()=>navigation.goBack()} style={RestStyles.backbutton}>
                    <View >
                        <Feather name="chevron-left" size={20} color={'white'}/>
                    </View>
                    </TouchableOpacity>
                    </View>
                )):
                <View style={{flex:1,backgroundColor:'white',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
                    <Text style={{fontWeight:500}}>Loading...</Text>
                </View>
            }

        </>
    );
}

export default EachRestaurant;