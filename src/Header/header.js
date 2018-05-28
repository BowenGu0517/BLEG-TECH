import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activedMenu: false
    };
  }
  componentDidMount(){  }


  render(){
    return (
      <header>
        <div className="container">
          <div className="row">
            <div className="col-md-2"  >
              <img src="/static/image/Logo.png1" width="200" height="auto" />
            </div>
            <nav className="col-md" >
              <ul className="nav">
                <li className="nav-link" onClick={ this.ActiveMenu.bind(this, '1111') }>
                  <Link to='/'>Home</Link></li>
                <li className="nav-link" onClick={ this.ActiveMenu.bind(this, 'second') } >
                  <Link to='/roster'>Roster</Link> </li>
                <li className="nav-link" onClick={ this.ActiveMenu.bind(this, '3333') } >
                  <Link to='/schedule'>Schedule</Link></li>
                <li className="nav-link Login" onClick={ this.ActiveMenu.bind(this, '555') } >
                  <Link to='/schedule'>login</Link></li>
              </ul>
            </nav>
          </div>
        </div>
        <Submenu activedMenu={this.state.activedMenu} />
      </header>
    )
  }
  ActiveMenu ( Item ){
    if( this.state.activedMenu === Item ){
      this.setState(  { activedMenu:false } )
    }else{
      this.setState(  { activedMenu:Item } )
    }
  }
}

const Submenu = ({activedMenu}) =>{
  return(
    <div id="Submenu" className={ activedMenu ? 'active'  : ''   } >
      <div className="container">
        <div className="row">
          <div className="col-sm-4" >
            <ul>
              <li><Link to='/'>  {activedMenu} </Link></li>
              <p> sdadsadasd</p>
              <li><Link to='/'> {activedMenu} </Link></li>
              <p> sdadsadasd</p>
            </ul>
          </div>
              <li><Link to='/'>{activedMenu} </Link></li>
              <p> sdadsadasd</p>
              <li><Link to='/'> {activedMenu} </Link></li>
              <p> sdadsadasd</p>
        </div>
      </div>
    </div>
  )
}



export default Header;
