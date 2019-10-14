import React, { Component } from 'react'
import Book from './Book'
import './ResultsList.css'

export default class ResultsList extends Component {
  static defaultProps = {
    resultsList: [
      {
        id: 'test',
        title: 'Henry I',
        author: 'C. Warren Hollister',
        price: 50,
        summary: 'The resulting volume is one that will be welcomed by students and general readers alike.',
        image: 'https://images.dog.ceo/breeds/bulldog-english/jager-2.jpg',
        forSale: true
      },
      {
        id: 'test2',
        title: 'Henry VIII',
        author: 'Alison Weir',
        price: 149.99,
        summary: 'This is a triumph of historical writing which will appeal equally to the general reader and the serious historian.',
        image: 'https://images.dog.ceo/breeds/dachshund/dachshund-1018409_640.jpg',
        forSale: false
      }
    ]
  }
  render() {
    if(this.props.resultsList.length > 0){
      return (
        <div className="results-list">
          {this.props.resultsList.map(result => {
            return <Book
              key={result.id}
              book={result}
              />
          })}
        </div>
      )
    } else {
      return (
        <div className="results-list">
          <p className="error">0 results found</p>
        </div>
      )
    }
  }
}
