import React, { Component } from 'react';

import Card from 'react-bootstrap/Card';

class MyBookCard extends Component {
  render(){
  return (
   
    <Card className="col-md-4">
      <Card.Img variant="top" src={this.props.BookList.img} />
      <Card.Body>
        <Card.Title>{this.props.BookListItem.Title}</Card.Title>
        <Card.Text>
         
        </Card.Text>
       
      </Card.Body>
    </Card>
  );
}
}
export default MyBookCard;