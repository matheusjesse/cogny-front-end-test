import { registerRootComponent } from 'expo';
import { CartProvider } from './src/utils/CartContext';
import { Router } from 'expo-router';
// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
// Envolvendo o App com o CartProvider dentro de um componente de função
function Root() {
    return (
      <CartProvider>
        <Router />
      </CartProvider>
    );
  }
  
  // Registrando o Root como o componente principal
  registerRootComponent(Root);
