import React, {Component} from 'react'

export default class DrawerMenu extends Component {
  render() {
    return (
      <div className="mdl-layout__drawer">
        <span className="mdl-layout-title">Title</span>
        <nav className="mdl-navigation">
          <a className="mdl-navigation__link" href="">Link5</a>
          <a className="mdl-navigation__link" href="">Link6</a>
          <a className="mdl-navigation__link" href="">Link7</a>
          <a className="mdl-navigation__link" href="">Link8</a>
        </nav>
      </div>
    )
  }
}