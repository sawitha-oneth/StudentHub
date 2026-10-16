import { Tabs } from "expo-router";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function RootLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'blue' }}>
      <Tabs.Screen
        name="(home)"
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="clock"
        options={{
          title: 'Live Clock',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="clock" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}