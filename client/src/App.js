import HomeScreen from './screens/HomeScreen.js';
import ProductScreen from './screens/ProductScreen.js';
import {BrowserRouter, Route} from 'react-router-dom';
import CartScreen from './screens/CartScreen.js';

function App() {
  return (
    <BrowserRouter>
    <div className="grid-container">
    <header className="row">
        <div>
            <a className="brand" href="/">IWant</a>
        </div>
        <div>
            <a href="/cart">Cart</a>
            <a href="/signin">Sign in</a>
        </div>
    </header>
    <main>
      <Route path='/cart/:id?' component={CartScreen}></Route>
      <Route path='/product/:id' component={ProductScreen}></Route>
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
