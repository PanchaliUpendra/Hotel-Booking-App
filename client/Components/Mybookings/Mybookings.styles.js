import { StyleSheet } from "react-native";

export const BookingStyles = StyleSheet.create({
    bookingHeadCon:{
        backgroundColor:'white',
        height:45,
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center'
    },
    bookingheadText:{
        fontSize:14,
        fontWeight:500,
        color:'black',
        textTransform:'capitalize'
    },
    emptycon:{
        flex:1,
        backgroundColor:'white',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center'
    }
});