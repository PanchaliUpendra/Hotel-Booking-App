import React, { useCallback, useEffect, useState } from "react";
import { Image, ScrollView, Text, TextInput, View } from "react-native";
import { BookingStyles } from "./Mybookings.styles";
import { SearchStyles } from "../Search/Search.styles";
import Ionicons from 'react-native-vector-icons/Ionicons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import { API_URL, Hotels } from "../../Data/Hotels";
import { HomeStyles } from "../Home/Home.styles";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";

function Mybookings() {
    const navigation = useNavigation();
    const [search, setSearch] = useState('');
    const [history, setHistory] = useState([]);
    const isAuthed = useSelector(state => state.userdata.isAuthed);
    const uid = useSelector(state => state.userdata.uid);

    //get hotel details
    function handleGetHotelDetails(id,field){
        const hotel = Hotels.find(htl=>htl.id==id);
        return hotel?hotel[field]:'';
    }

    useFocusEffect(
  useCallback(() => {
    if (uid) {
      async function getBookings() {
        try {
          const response = await fetch(`${API_URL}/bookings/getbookings/${uid}`);
          const resData = await response.json();

          if (resData.success) {
            setHistory(resData.bookings);
          } else {
            console.log('Error while fetching bookings');
          }
        } catch (err) {
          console.log('Fetch error:', err.message);
        }
      }

      getBookings();
    }
  }, [uid])
);
    return (
        <>
            <View style={BookingStyles.bookingHeadCon}>
                <Text style={BookingStyles.bookingheadText}>My Bookings</Text>
            </View>
            {//add you condition here
                isAuthed ?
                    <ScrollView contentContainerStyle={{ flexGrow: 1, backgroundColor: 'white', paddingHorizontal: 15, paddingVertical: 5 }}>
                        <View style={SearchStyles.searchBarCon}>
                            <Ionicons name="search" size={18} color={'grey'} />
                            <TextInput placeholder="Search..." style={{ flex: 1 }} value={search} onChangeText={(text) => setSearch(text)} />
                        </View>

                        {
                            history.length > 0 ?
                                history.map((htl, idx) => (
                                    <View key={idx} style={HomeStyles.recomEachCon}>
                                        <View style={HomeStyles.recomImgName}>
                                            <Image source={handleGetHotelDetails(htl.hotel_id,'image')} style={{ width: 60, height: 60, borderRadius: 5, resizeMode: 'cover' }} />
                                            <View>
                                                <Text style={[HomeStyles.popularHtlName, { color: 'black' }]}>{handleGetHotelDetails(htl.hotel_id,'name')}</Text>
                                                <Text style={[HomeStyles.popularHtlTag, { color: 'grey', fontWeight: 400 }]}><EvilIcons name="location" size={14} color={'black'} />{handleGetHotelDetails(htl.hotel_id,'location')}</Text>
                                                <Text style={[HomeStyles.popularpriceText, { color: 'black', marginTop: 7 }]}><Text style={{ color: '#2853AF', fontSize: 14 }}>₹{handleGetHotelDetails(htl.hotel_id,'price')}</Text>/day</Text>
                                                <Text style={[HomeStyles.popularHtlTag, { color: 'black', fontWeight: 400 }]}>start date:{htl.start_date}</Text>
                                                <Text style={[HomeStyles.popularHtlTag, { color: 'grey', fontWeight: 400 }]}>total days:{htl.no_of_days} days</Text>
                                                <Text style={[HomeStyles.popularpriceText, { color: 'black', marginTop: 7 }]}>total cost: <Text style={{ color: '#2853AF' }}>{htl.total_price}/- </Text><Text style={{ color: 'grey', fontSize: 9 }}>(includ GST)</Text></Text>
                                            </View>
                                        </View>
                                        <View>
                                            <Text style={[HomeStyles.popularpriceText, { color: 'black', marginTop: 7 }]}><Text style={{ color: '#EDB900', fontSize: 14 }}>★</Text>{handleGetHotelDetails(htl.hotel_id,'rating')}</Text>
                                        </View>
                                    </View>
                                )) :
                                <View
                                    style={{
                                        flex: 1, backgroundColor: 'white', display: 'flex',
                                        flexDirection: 'column', alignItems: 'center', justifyContent: 'center'
                                    }}>
                                    <Text style={{ fontWeight: 500, color: 'black', textTransform: 'capitalize', fontSize: 14 }}>You haven't booked any hotels yet.</Text>
                                </View>
                        }
                    </ScrollView>
                    :
                    <View style={{
                        flex: 1, backgroundColor: 'white', display: 'flex',
                        flexDirection: 'column', alignItems: 'center', justifyContent: 'center'
                    }}>
                        <Text style={{ fontWeight: 500, color: 'black', textTransform: 'capitalize', fontSize: 14 }}>please log in to access this feature.</Text>
                        <Text style={{ fontWeight: 500, color: '#2148c0', fontSize: 15, marginTop: 10, textDecorationLine: 'underline' }} onPress={() => navigation.navigate('Signin')}>Login</Text>
                    </View>
            }
        </>
    );
}

export default Mybookings;