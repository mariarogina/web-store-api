import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Products from './components/Products';
import ProductDetails from './components/ProductDetails';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import ProductFetcher from './components/ProductFetcher';
import ProductDetailsFetcher from './components/ProductDetailsFetcher';

import { Redirect, Route,Switch } from 'react-router';
import './index.css';

function App() {
  return (
    <>
    <Header/>
    <Switch>
    <Route exact path="/" component={Home}/>
    <Route exact path="/about" component={About}/>
    <Route exact path="/contact" component={Contact}/>
    <Route exact path="/products" component={ProductFetcher}/>
    <Route exact path="/cart" component={Cart}/>
    <Route exact path="/products/:id" component={ProductDetailsFetcher}/>
    <Route exact path="/checkout" component={Checkout}/>
    <Redirect exact path="/"/>
    </Switch>
    <Footer/>


    </>
  );
}

export default App;
