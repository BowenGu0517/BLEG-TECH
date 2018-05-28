import React, { Component } from 'react';

import Banner from './Banner.js';
import OurService from './OurService.js'


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }
  componentDidMount(){  }
  render(){
    return (
      <div id="home" >
        <Banner />
        <div id="WhoIsBLEG" >
          <div  className="container">
            <h2> Who is BLEG  </h2>
            <div> BLEG is a team of highly skilled digital product creators, which means we design and develop apps people love. We’re a result-focused company that goes above and beyond for clients and takes the time to understand their business/customers.  </div>
          </div>
        </div>
        <OurService id="OurService" />
        <div  id="ContactUS" >
          <h2> Contact Us </h2>
          <div>
              100% 给您最好的结果! 24/7 support.
                马上联系我们!
           </div>
        </div>


      </div>
    );
  }
}

export default Home;
