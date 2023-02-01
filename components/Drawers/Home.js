import React from "react";
import { View, StyleSheet, Button, SafeAreaView } from "react-native";
import SafeViewAndroid from "../../components/SafeViewAndroid";
import "react-native-gesture-handler";
import {
  createDrawerNavigator,
  DrawerItem,
  DrawerContentScrollView,
} from "@react-navigation/drawer";

import Font from "../../hooks/font";
import Home from "../../screens/home";

const Drawer = createDrawerNavigator();

function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
      <View style={styles.container}>
        <Home navigation={navigation} />
      </View>
    </SafeAreaView>
  );
}

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <View style={{ alignItems: "center" }}>
        <Font size={22}>My Asset</Font>
      </View>
      <DrawerItem
        label="Asset"
        onPress={() => props.navigation.toggleDrawer()}
        option={{ headerShown: true }}
      />
      <DrawerItem
        label="Profile"
        onPress={() => props.navigation.toggleDrawer()}
        inactiveTintColor="red"
        inactiveBackgroundColor="#eee"
        activeBackgroundColor="#992"
      />
      <Button
        title="Plans"
        onPress={() => {
          props.navigation.navigate("Test");
        }}
      />
       <Button
        title="Home"
        onPress={() => {
          props.navigation.navigate("Test");
        }}
      />
       <Button
        title="Account"
        onPress={() => {
          props.navigation.navigate("Test");
        }}
      />
      
       <Button
        title="Wallet"
        onPress={() => {
          props.navigation.navigate("Test");
        }}
      />
       <Button
        title="Settings"
        onPress={() => {
          props.navigation.navigate("Test");
        }}
      />
       <Button
        title="LogOut"
        onPress={() => {
          props.navigation.navigate("Test");
        }}
      />
    </DrawerContentScrollView>
  );
}

function HomeDrawer() {
  return (
    <Drawer.Navigator
      screenOptions={{
        title: "Awesome App!!",
        headerShown: false,
        gestureEnabled: true,
        headerTitle: "Test",
      }}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      drawerStyle={{
        backgroundColor: "#fff",
        width: 300,
      }}
    >
      <Drawer.Screen name="Home" component={HomeScreen} />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6F6F9",
  },
});

export default HomeDrawer;
