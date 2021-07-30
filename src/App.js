import './App.css';
import Logo from './components/Logo';
import Background from './components/Background';
import Categories from './components/Categories';
import Products from './components/Products';
import Item from './components/Item';
import ShoppingBagIcon from './components/ShoppingBagIcon';
import SocialMedia from './components/SocialMedia';
import Cart from './components/Cart';
import { useCart } from "./cartContext";

export default function App() {
  const { loading } = useCart();

  if(loading) return <></>;  
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
    </>
  );
}