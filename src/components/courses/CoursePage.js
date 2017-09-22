import React, {Component} from 'react'
import {Row, Col} from 'react-bootstrap'

import CourseCard from './CourseCard'

export default class CoursePage extends Component {
  render(){
    return(
      <Row>
        <Col xs={6} md={3}><CourseCard /></Col>
        <Col xs={6} md={3}><CourseCard /></Col>
        <Col xs={6} md={3}><CourseCard /></Col>
        <Col xs={6} md={3}><CourseCard /></Col>
      </Row>
    )
  }
}