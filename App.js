import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaView } from "react-native";
import { registerRootComponent } from "expo";

import SafeViewAndroid from "./components/SafeViewAndroid";

import SignUp from "./screens/signUp";
import App from "./main";
import CreateAccount from "./screens/createAccount";
import Login from "./screens/login";
import SplashScreen from "./screens/SplashScreen";

//import { getFocusedRouteNameFromRoute } from "@react-navigation/native";

const Stack = createStackNavigator();

// function getHeaderTitle(route) {
//   const routeName = getFocusedRouteNameFromRoute(route) ?? "Home";

//   switch (routeName) {
//     case "Home":
//       return "Home";
//     case "Product":
//       return "Product";
//     case "Transaction":
//       return "Transaction";
//     case "Account":
//       return "My account";
//   }
// }

const Onboard = ({ navigation }) => {
  return (
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
      <SignUp navigation={navigation} />
    </SafeAreaView>
  );
};

// function TestScreen() {
//   return (
//     <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//       <Text>Test Screen</Text>
//     </View>
//   );
// }

function Main() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* <Stack.Screen name="Sign Up" component={Onboard} /> */}
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
        
        />
        <Stack.Screen
          name="Account"
          component={CreateAccount}
         
        />
        <Stack.Screen
          name="Home"
          component={App}
         

          // options={({ route }) => ({
          //   headerTitle: getHeaderTitle(route),
          //   headerShown: getHeaderTitle(route) === "Home" ? false : true,
          //   gestureEnabled: false,
          //   headerBackTitleVisible: false,
          // })}
        />
        <Stack.Screen
          name="Login"
          component={Login}
         
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Main;

registerRootComponent(Main);
