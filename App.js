import { NavigationContainer } from "@react-navigation/native";
import Navigation from "./Navigation";
import { CartProvider } from "./CartContext";

export default function App() {
  return (
    <CartProvider>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </CartProvider>
  );
}
