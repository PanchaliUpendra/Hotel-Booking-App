import { StyleSheet } from "react-native";

export const SearchStyles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center'
    },
    soonText:{
        fontSize:16,
        fontWeight:500,
        color:'black'
    },
    searchBarCon:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        borderWidth:1,
        borderColor:'#E9EBED',
        borderRadius:30,
        paddingLeft:10,
        paddingRight:10
    }
});