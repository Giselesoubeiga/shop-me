import React  from 'react';
import {Switch,Route} from "react-router-dom";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import ProductList  from "./components/ProductList";
import Details  from "./components/Details";
import Cart from "./components/Cart" ;
import Default from "./components/Default";



class MyComponent extends React.Component {
  render(){
    return (
      <React.Fragment>
        <Navbar/>
        <Switch>
        <Route path="/details" component={Details}/>
        <Route path="/cart" component={Cart}/>
        <Route path="/" component={ProductList}/>
        <Route component={Default}/>
        </Switch>

      </React.Fragment>
    );
  }
}

export default MyComponent;



