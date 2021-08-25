import './App.css';
import Loader from './components/Loader';
import Logo from './components/Logo';
import Background from './components/Background';
import Categories from './components/Categories';
import Products from './components/Products';
import Item from './components/Item';
import ShoppingBagIcon from './components/ShoppingBagIcon';
import SocialMedia from './components/SocialMedia';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import PlaceOrder from './components/PlaceOrder';
import { useCart } from "./cartContext";

export default function App() {
  const { 
    isOrderPlaced,
    loading 
  } = useCart();

  if(loading) return (
    <>
      <Loader />
    </>
  );  
  return (
    <>
      <Logo />
      <Background />
      <ShoppingBagIcon />
      <Categories />
      <Item />
      <Products />
      <SocialMedia />
      <Cart />
      <Checkout />
      {
        isOrderPlaced && <PlaceOrder />
      }
    </>
  );
}