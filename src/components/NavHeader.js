import React, {Component} from 'react'
import {Row, Col, Navbar, Nav, NavItem} from 'react-bootstrap'
import './NavHeader.css'

export default class NavHeader extends Component {
  render(){
    return (
      <Row>
        <Col md={12}>
          <Navbar collapseOnSelect>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="#">Ivy Group</a>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav>
                <NavItem eventKey={1} href="#">Courses</NavItem>
                <NavItem eventKey={3} href="#">Study</NavItem>
              </Nav>
              <Nav pullRight>
                <NavItem eventKey={1} href="#">Signout</NavItem>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Col>
      </Row>
      
    )
  }
}