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
import Login from './pages/auth/login';
import Register from './pages/auth/register';

function App() {
  return (
    <div className='App'>
      <Router>
        <ScrollToTop>
          <Switch>
            <Route path="/" component={Login} />
            <Route path="/registration" component={Register} />
            <PrivateRoute>
              <Route path='/home' exact component={Home} />
              <Route path='/products' component={Product} />
              <Route path="/product/:id" component={ProductShow} />
              <Route path="/cart" component={Cart} />
              <Route path='/order' component={Order} />
            </PrivateRoute>
            <Route path="*" component={() => {
              return (
                <h1>404 Page Not Found</h1>
              )
            }} />
          </Switch>
        </ScrollToTop>
      </Router>
    </div>
  );
}

export default App;
