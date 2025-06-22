import React from "react";
import { Text, View } from "react-native";
import { SearchStyles } from "./Search.styles";

function Search(){
    return(
        <>
            <View style={SearchStyles.container}>
                <Text style={SearchStyles.soonText}>"We're working on it. Coming soon!"</Text>
            </View>
        </>
    );
}

export default Search;