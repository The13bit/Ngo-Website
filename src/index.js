import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'
import { createRoot } from 'react-dom/client';

import './style.css'
import Home from './views/home'
import Contact from './views/contact'
import About from './views/about'
import Donation from './views/donation'
import NotFound from './views/not-found'
import Header from './components/headernew'
import Footer from './components/footer'

const App = () => {
  return (
    <Router>
    <Header/>
      <Switch>
        <Route component={Home} exact path="/Ngo-Website" />
        <Route component={Contact} exact path="/contact" />
        <Route component={About} exact path="/about" />
        <Route component={Donation} exact path="/donation" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
      <Footer/>
    </Router>
  )
}

document.addEventListener("DOMContentLoaded", function() {
  const container = document.getElementById('app');
  if (container) {
    const root = createRoot(container);
    root.render(<App />);
  } else {
    console.error("Element with id 'app' not found");
  }
});
export default App