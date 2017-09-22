import React, {Component} from 'react'
import {Thumbnail, Image, Button} from 'react-bootstrap'

export default class CourseCard extends Component {
  render(){
    return (
      <Thumbnail>
        <Image src='../assets/greenBox.png' responsive/>
        <h3>
          <Image src='../assets/greenBox.png' responsive/>
          Course Title
        </h3>
        <p>Description</p>
        <p>
          <Button bsStyle="primary">Button</Button>&nbsp;
          <Button bsStyle="default">Button</Button>
        </p>
      </Thumbnail>
    )
  }
}