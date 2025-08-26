import { StyleSheet, useColorScheme } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { Colors } from "../constants/Colors";
import { StatusBar } from "expo-status-bar";

const RootLayout = () => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light; // null veya undefined olursa eğer Colors.light yani sağ taraf seçilir. ?? bu anlama geliyor

  return (
    <>
      <StatusBar value="auto" />
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: theme.navBackground },
          headerTintColor: theme.title,
        }}
      >

        <Stack.Screen name="(auth)" options={{ headerShown: false }} />

        <Stack.Screen name="index" options={{ title: "Home" }} />

      </Stack>
    </>
  );
};

export default RootLayout;

const styles = StyleSheet.create({});
