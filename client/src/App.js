import HomeScreen from './screens/HomeScreen.js';
import ProductScreen from './screens/ProductScreen.js';
import {BrowserRouter, Route} from 'react-router-dom';
import CartScreen from './screens/CartScreen.js';
import {Link} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import SinginScreen from './screens/SigninScreen.js';
import {signout} from './actions/userActions'
import RegisterScreen from './screens/RegisterScreen.js';
import ShippingAddressScreen from './screens/ShippingAddressScreen.js';
import PaymentMethodScreen from './screens/PaymentMethodScreen.js';
import PlacerOrderScreen from './screens/PlacerOrderScreen.js';

function App() {

  const cart = useSelector(state => state.cart);
  const {cartItems} = cart;
  const userSignin = useSelector(state => state.userSignin);
  const {userInfo} =  userSignin

  const dispatch = useDispatch()

  const signoutHandler = () => {
    dispatch(signout())
  }

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
            {
              userInfo ? (
                <div className="dropdown">
                <Link to='#'>{userInfo.name} <i className="fa fa-caret-down"></i></Link>
                <ul className="dropdown-content">
                  <Link to='#signout' onClick={signoutHandler}>
                    Sign Out
                  </Link>
                </ul>
                </div>
              ) :
              (
                <Link to="/signin">Sign in</Link>
              )
            }
        </div>
    </header>
    <main>
      <Route path='/cart/:id?' component={CartScreen}></Route>
      <Route path='/product/:id' component={ProductScreen}></Route>
      <Route path='/signin' component={SinginScreen}></Route>
      <Route path='/register' component={RegisterScreen}></Route>
      <Route path='/shipping' component={ShippingAddressScreen}></Route>
      <Route path='/payment' component={PaymentMethodScreen}></Route>
      <Route path='/placeholder' component={PlacerOrderScreen}></Route>
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
