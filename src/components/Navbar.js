import React, {Component} from 'react'
import './Navbar.css'

export default class Navbar extends Component {
  render(){
    return (
        <header className="mdl-layout__header mdl-layout__header--transparent">
          <div className="mdl-layout__header-row">
            <span className="mdl-layout-title">Title</span>
            <div className="mdl-layout-spacer"></div>
            <nav className="mdl-navigation">
              <button className="mdl-button mdl-js-button mdl-js-ripple-effect white">
                Button1
              </button>
              <button className="mdl-button mdl-js-button mdl-js-ripple-effect white">
                Button2
              </button>
            </nav>
          </div>
        </header>
    )
  }
}