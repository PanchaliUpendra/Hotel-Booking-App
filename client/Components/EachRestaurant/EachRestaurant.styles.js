import { StyleSheet } from "react-native";

export const RestStyles = StyleSheet.create({
    eachResCon: {
        flex: 1,
        backgroundColor: 'white',
        position: 'relative'
    },
    eachImgCon: {
        width: '100%',
        height: 230,
        backgroundColor: 'black',
        opacity:0.9
    },
    eachResContent: {
        flex: 1,
        backgroundColor: 'white',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        marginTop: -10,
        padding:15
    },
    hotelName:{
        fontSize:15,
        fontWeight:500,
        color:'black',
        textTransform:'capitalize'
    },
    hotelLocation:{
        fontSize:13,
        color:'#9CA4AB',
        fontWeight:400
    },
    //restaurant
    priceCon: {
        position: 'absolute',
        bottom: 0,
        height: 70,
        width: '100%',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        backgroundColor:'white',
        //shadow
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.39,
        shadowRadius: 8.30,
        elevation: 13,

        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        paddingLeft:15,
        paddingRight:20
    },
    priceHead:{
        color:'#A7AEC1',
        fontSize:12,
        textTransform:'capitalize',
        fontWeight:400
    },
    priceText:{
        fontSize:15,
        color:'black',
        fontWeight:500,
    },
    bookingNowBtn:{
        height:40,
        paddingHorizontal:30,
        borderRadius:10,
        backgroundColor:'#2853AF',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center'
    },
    backbutton:{
        height:40,
        width:40,
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:'50%',
        backgroundColor:'rgba(0,0,0,0.5)',
        position:'absolute',
        left:10,
        top:10
    },
    //common facilitites
    comCon:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        gap:25,
        // justifyContent:'center'
    },
    comConEach:{
        width:45,
        height:45,
        borderRadius:'50%',
        backgroundColor:'#E8F2FF',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center'
    },
    comConEachInner:{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center'
    },
    comConText:{
        fontSize:11,
        color:'grey',
        textTransform:'capitalize'
    },
    description:{
        fontSize:14,
        fontWeight:400,
        color:'#A3A3A3',
        lineHeight:20
    }
});