import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Jobs from "./Pages/Jobs/Jobs";
import Detail from "./Pages/Detail/Detail";
import FavoriteJobs from "./Pages/Favorite/Favorite";

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const JobStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="JobsPage"
        component={Jobs}
        options={{
          headerStyle: { backgroundColor: "orange" },
          headerTitleStyle: { fontWeight: "bold", fontSize: 18 },
          headerTintColor: "black",
        }}
      />
      <Stack.Screen
        name="DetailPage"
        component={Detail}
        options={{
          headerStyle: { backgroundColor: "orange" },
          headerTitleStyle: { fontWeight: "bold", fontSize: 18 },
          headerTintColor: "black",
        }}
      />
    </Stack.Navigator>
  );
};

const Router = () => {
  console.log("buraya geliyorum router");
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="JobsPage">
        <Drawer.Screen
          name="Jobs"
          component={JobStack}
          options={{
            headerStyle: { backgroundColor: "orange" },
            headerTitleStyle: { fontWeight: "bold", fontSize: 18 },
            headerTintColor: "black",
          }}
        />
        <Drawer.Screen
          name="FavoriteJobs"
          component={FavoriteJobs}
          options={{
            headerStyle: { backgroundColor: "orange" },
            headerTitleStyle: { fontWeight: "bold", fontSize: 18 },
            headerTintColor: "black",
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Router;
