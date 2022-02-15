import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import ScrollToTop from './components/scrollTop';
import PrivateRoute from './components/privateRoute';
import Home from './pages/home';
import Product from './pages/products/index';
import Order from './pages/order/index';
import ProductShow from './pages/products/show';
import Cart from './pages/cart/index'

function App() {
  return (
    <div className='App'>
      <Router>
        <ScrollToTop>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/products' component={Product} />
            <Route path="/product" component={ProductShow}/>
            <Route path="/cart" component={Cart}/>
            <PrivateRoute>
              <Route path='/order' component={Order} />
            </PrivateRoute>
          </Switch>
        </ScrollToTop>
      </Router>
    </div>
  );
}

export default App;
