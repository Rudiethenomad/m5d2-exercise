//import React from 'react';
import React, { Component } from 'react';
import { Row } from 'react-bootstrap';
import books from './scifi.json';


let myInit = {method: 'GET',
              headers: {
                'Content-Type': 'application/json'
              },
              mode: 'cors',
              cache: 'default' }; 


let myRequest = new Request("./scifi.json", myInit);





class BookList extends Component {
  state = {
        books: []
  }
    

    render(){
        return 
           (
                <>
                <Row>
                    <h1>The Newest and the Greatest</h1>
                </Row>
                <Row>
                    {this.state.books.map(book => 
                    <img src={book.img} style={{width: "200px"}}/>)}
                </Row>
                </>
            )
        }

        componentDidMount = async () => {
            const resp = await fetch(myRequest)
            if(resp.ok){
                const books = await resp.json()
            }
                this.setState({
                    books: books
                })
            }


export default BookList