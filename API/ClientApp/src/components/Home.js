import React, { Component } from 'react';
import { Button, Row, } from 'reactstrap';

export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
      <div style={{
        position : 'absolute',
           left : '50%',
           top : '50%', 
      }}>
        <Row style={{
          margin : 10,
          }}>
          <Button color="primary">
            Create New
          </Button>
        </Row>

        <Row style={{ 
          margin : 10
          }}>
          <Button color="primary">
            View Document
          </Button>
        </Row>
      </div>
    );
  }
}
