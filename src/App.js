import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import ScrollToTop from './components/scrollTop';
import RoleBaseRoute from './components/privateRoute/index';
import Home from './pages/home';
import Product from './pages/products/index';
import Order from './pages/order/index';
import ProductShow from './pages/products/show';
import Cart from './pages/cart/index'
import Login from './pages/auth/login2';
import Register from './pages/auth/register';

function App() {
  return (
    <div className='App'>
      <Router>
        <ScrollToTop>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/registration" component={Register} />
            <RoleBaseRoute path="/home" role="user" exact component={Home} />
            <RoleBaseRoute path='/products' role="user" component={Product} />
            <RoleBaseRoute path="/product/:id" role="user" component={ProductShow} />
            <RoleBaseRoute path="/cart" role="user" component={Cart} />
            <RoleBaseRoute path='/order' role="user" component={Order} />
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
