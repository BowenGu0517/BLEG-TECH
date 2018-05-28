import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }
  componentWillMount(){  }
  componentDidMount(){  }


  render(){
    return (
      <nav >
        <ul className="nav  justify-content-end">
          <li className="nav-link"><Link to='/'>Home</Link></li>
          <li className="nav-link"><Link to='/roster'>Roster</Link></li>
          <li className="nav-link"><Link to='/schedule'>Schedule</Link></li>
          <li className="nav-link Login"><Link to='/schedule'>login</Link></li>
        </ul>
      </nav>
    );
  }
}

export default Header;
