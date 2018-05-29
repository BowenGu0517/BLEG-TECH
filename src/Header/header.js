import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

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
            <div id="Logo" >
              <img src="/static/image/Logo.png1" width="200" height="auto" />
            </div>
            <nav className="col-md"  >
              <ul className="nav justify-content-center ">
                <NavLink exact to='/' activeClassName="active"
                  onClick={ this.ActiveMenu.bind(this, '1111') }> Home</NavLink>
                <NavLink exact to='/Roster' activeClassName="active"
                  onClick={ this.ActiveMenu.bind(this, '432423') }> Roster</NavLink>
                <NavLink exact to='/schedule' activeClassName="active"
                  onClick={this.ActiveMenu.bind(this, '34324')} > Schedule</NavLink>
                <NavLink exact to='/login' activeClassName="active"
                  onClick={ this.ActiveMenu.bind(this, '234234') }> login</NavLink>
              </ul>
            </nav>
            <div id="right">
              <button> Login </button>
            </div>
          </div>
        </div>
        <Submenu activedMenu={this.state.activedMenu}  />
      </header>
    )
  }
  ActiveMenu ( Item ){
     this.state.activedMenu === Item
      ?this.setState({activedMenu:false}) : this.setState({activedMenu:Item})
  }
}

const Submenu = ({activedMenu} ) =>{
  return(
    <div id="Submenu" className={ activedMenu ? 'active'  : '' } >

      <div className="container">
        <div className="row">
          <div className="col-sm-4" >
            <ul>
              <li><NavLink to='/' activeClassName="active" >  {activedMenu} </NavLink></li>
              <p> sdadsadasd</p>
              <li><NavLink to='/'> {activedMenu} </NavLink></li>
              <p> sdadsadasd</p>
            </ul>
          </div>
          <div className="col-sm-4" >
            <ul>
              <li><NavLink to='/'>  {activedMenu} </NavLink></li>
              <p> sdadsadasd</p>
              <li><NavLink to='/'> {activedMenu} </NavLink></li>
              <p> sdadsadasd</p>
            </ul>
          </div>
          <div className="col-sm-3" >
            <ul>
              <li><NavLink to='/'>  {activedMenu} </NavLink></li>
              <p> sdadsadasd</p>
              <li><NavLink to='/'> {activedMenu} </NavLink></li>
              <p> sdadsadasd</p>
            </ul>
          </div>
          <div className="col-sm-1" >
            <i className="material-icons"  onClick={ activedMenu = false }> clear </i>
          </div>
        </div>
      </div>
    </div>
  )
}



export default Header;
