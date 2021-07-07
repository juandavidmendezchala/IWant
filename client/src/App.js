import HomeScreen from './screens/HomeScreen.js';
import ProductScreen from './screens/ProductScreen.js';
import {BrowserRouter, Route} from 'react-router-dom';
import CartScreen from './screens/CartScreen.js';
import {Link} from 'react-router-dom';
import { useSelector } from 'react-redux';
import SinginScreen from './screens/SigninScreen.js';

function App() {

  const cart = useSelector(state => state.cart);
  const {cartItems} = cart;

  return (
    <BrowserRouter>
    <div className="grid-container">
    <header className="row">
        <div>
            <Link className="brand" to="/">IWant</Link>
        </div>
        <div>
            <Link to="/cart">Cart
            {cartItems.length > 0 && (
              <span className="badge">{cartItems.length}</span>
            )}
            </Link>
            <Link to="/signin">Sign in</Link>
        </div>
    </header>
    <main>
      <Route path='/cart/:id?' component={CartScreen}></Route>
      <Route path='/product/:id' component={ProductScreen}></Route>
      <Route path='/signin' component={SinginScreen}></Route>
      <Route exact path='/' component={HomeScreen}></Route>
    </main>
    <footer className="row center">
        All Rigth Reserved
    </footer>
</div>   
</BrowserRouter>
  );
}

export default App;
