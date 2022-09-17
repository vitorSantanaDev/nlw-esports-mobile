import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home, Game } from "../screens";

const { Navigator, Screen } = createNativeStackNavigator();

export default function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Home" component={Home} />
      <Screen name="Game" component={Game} />
    </Navigator>
  );
}
