import React from "react";
import { Modal, View } from "react-native";
import { ActivityIndicator} from 'react-native-paper';

function Displayloading(){
    return(
        <>
            <Modal transparent={true} visible={true} animationType='fade'>
                <View 
                style={{
                    flex:1,backgroundColor:'rgba(0,0,0,0.5)',
                    display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'
                }}
                >
                    <ActivityIndicator animating={true}  color="white"/>
                </View>
            </Modal>
        </>
    )
}

export default Displayloading;