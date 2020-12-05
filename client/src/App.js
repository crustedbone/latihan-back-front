import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import ViewProductComponent from './components/ViewProductComponent';
import UpdateProductComponent from './components/UpdateProductComponent';
import ListProductsComponent from './components/ListProductsComponent';
import CreateProductComponent from './components/CreateProductComponent';

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
        <div className="container">
          <Switch>
            <Route path="/" exact component={ListProductsComponent}></Route>
            <Route path="/products" component={ListProductsComponent}></Route>
            <Route path="/add-product/:id" component={CreateProductComponent}></Route>
            <Route path="/view-product/:id" component={ViewProductComponent}></Route>
            {/* <Route path = "/update-product/:id" component = {UpdateProductComponent}></Route> */}
          </Switch>
        </div>
        <FooterComponent />
      </Router>
    </div>

  );
}

export default App;
