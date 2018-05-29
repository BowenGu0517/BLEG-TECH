import React, { Component } from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom'


import './App.css';
import Header from './Header/header.js';
import Menu from './Header/Menu.js';
import Footer from './Footer/footer.js';
import Home from './Home/Home.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Header />
            <section  id="content" >
              <Switch>
                <Route exact path='/' component={Home} />
                <Route render={ ()=>{ return <p>Not Found</p> }}  />
              </Switch>
            </section>
            <Footer />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
