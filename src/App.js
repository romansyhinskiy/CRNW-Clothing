import React from 'react';
import { Switch, Route } from 'react-router-dom'

import './App.css';
import Header from './components/header/header.component.jsx';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from "./pages/shop/shop.components"
import SignInAndSignOut from "./pages/sign-in-and-sign-out/sign-in-and-sign-out.jsx"



function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route path="/shop" component={ShopPage}/>
        <Route path="/auth" component={SignInAndSignOut}/>
      </Switch>
    </div>
  );
}

export default App;
