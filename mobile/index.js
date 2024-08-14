import { registerRootComponent } from 'expo';
import { CartProvider } from './src/utils/CartContext';
import App from './App';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
// Envolvendo o App com o CartProvider dentro de um componente de função
function Root() {
    return (
      <CartProvider>
        <App />
      </CartProvider>
    );
  }
  
  // Registrando o Root como o componente principal
  registerRootComponent(Root);
