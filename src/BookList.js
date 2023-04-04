//import React from 'react';
import React, { Component } from 'react';
import { Row } from 'react-bootstrap';
import books from "./scifi.json";
import BookListItem from "./BookListItem";
import MyNav from "./MyNav";
import MyFooter from "./MyFooter";
import { Fragment } from 'react';
//import { useState, useEffect } from "react";



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
        return (
           
                
                <Fragment>
                <Row>
                     <MyNav />
                </Row>
                
                <Row>
                    {this.state.books.map((book) => 
                        <BookListItem item={book} />)}
                </Row>
                <Row>
                    <MyFooter />
                </Row>
             </Fragment>
                   ) }
                    
        componentDidMount = async () => {
            const resp = await fetch(myRequest, myInit)
            if(resp.ok){
                const books = await resp.json();
                console.log(books);
            }
                this.setState({
                    books: books
                  
                })
                //useEffect(componentDidMount dependencies);
            }
          
        }
        
        //call after the rendering?
export default BookList;