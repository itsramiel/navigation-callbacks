import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import Profile from "../screens/Profile";
import { NavigationType } from "./types";

const { Navigator, Screen } = createNativeStackNavigator<NavigationType>();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen name="Home" component={Home} />
        <Screen name="Profile" component={Profile} />
      </Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
