import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Onboarding1 from "../Onboarding/Onboarding1";
import Onboarding2 from "../Onboarding/Onboarding2";
import Onboarding3 from "../Onboarding/Onboarding3";
import Signin from "../Signin/Signin";
import Signup from "../Signup/Signup";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../Home/Home";
import Search from "../Search/Search";
import Mybookings from "../Mybookings/Mybookings";
import Profile from "../Profile/Profile";
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import EachRestaurant from "../EachRestaurant/EachRestaurant";
import { useSelector } from "react-redux";




const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeTabNavigator =()=>(
    <Tab.Navigator screenOptions={{
        tabBarActiveTintColor: '#2853AF',
        tabBarInactiveTintColor: '#666666',
        headerShown:false,
        tabBarStyle:{
            backgroundColor:'white',
            height:60,
            paddingBottom:0,
            paddingTop:3
        },
        tabBarLabelStyle: {
            fontSize: 10,
            fontWeight: '600',
        },
    }}>
        <Tab.Screen name="Home"  component={Home}
        options={{
            tabBarIcon:({focused})=>(
                <FontAwesome6 name="house" size={20} color={focused?'#2854af':'#666666'}/>
            )
        }}/>
        <Tab.Screen name="Search" component={Search}
        options={{
            tabBarIcon:({focused})=>(
                <Ionicons name="search" size={20} color={focused?'#2854af':'#666666'}/>
            )
        }}/>
        <Tab.Screen name="Mybookings" component={Mybookings}
        options={{
            tabBarIcon:({focused})=>(
                <MaterialIcons name="list-alt" size={22} color={focused?'#2854af':'#666666'}/>
            ),
            // headerShown:true,
            // headerStyle:{
            //     height:50,
            //     backgroundColor:'white'
            // },
            // headerTitle:'My Bookings',
            // headerTitleAlign:'center',
            // headerTitleStyle:{
            //     fontSize:14,
            //     fontWeight:500,
            //     marginTop:-30
            // },
            // headerTintColor:'black'
        }}/>
        <Tab.Screen name="Account" component={Profile}
        options={{
            tabBarIcon:({focused})=>(
                <Ionicons name="person" size={22} color={focused?'#2854af':'#666666'}/>
            )
        }}/>
    </Tab.Navigator>
);


function Navigation(){
    const isAuthed = useSelector(state => state.userdata.isAuthed);
    return(
        <>
        <NavigationContainer>
            <Stack.Navigator initialRouteName={isAuthed?'Dashboard':'Onboardingone'} screenOptions={{
                headerShown:false
            }}>
                {/* onboarding screens */}
                {!isAuthed &&
                <>
                <Stack.Screen name="Onboardingone" component={Onboarding1} 
                options={{
                    animation:'slide_from_right'
                }}/>
                <Stack.Screen name="Onboardingtwo" component={Onboarding2}
                options={{
                    animation:'slide_from_right'
                }}/>
                <Stack.Screen name="Onboardingthree" component={Onboarding3}
                options={{
                    animation:'slide_from_right'
                }}/>

                {/* sign pages */}
                <Stack.Screen name="Signin" component={Signin}/>
                <Stack.Screen name="Signup" component={Signup}/>
                </>
}

                {/* tabs */}
                <Stack.Screen name="Dashboard" component={HomeTabNavigator}/>
                <Stack.Screen name="Eachrestaurant" component={EachRestaurant} />
            </Stack.Navigator>
        </NavigationContainer>
        </>
    );
}

export default Navigation;