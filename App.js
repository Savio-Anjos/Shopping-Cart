import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import Routes from "./src/routes";
import CardProvider from "./src/contexts/CardContext";

export default function App() {
  return (
    <NavigationContainer>
      <CardProvider>
        <StatusBar backgroundColor="#FAFAFA" barStyle="dark-content" />
        <Routes />
      </CardProvider>
    </NavigationContainer>
  );
}
