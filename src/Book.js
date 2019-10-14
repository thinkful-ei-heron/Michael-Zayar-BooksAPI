import React, { Component } from 'react'
import './Book.css'

export default class Book extends Component {
  /*props: obj book {id, title, author, price, summary, image}*/
  formatPriceAsUsd (price) {
    return `$${price.toFixed(2)}`
  }
  render() {
    let book = this.props.book
    return (
      <div className="book /">
        <h2>{book.title}</h2>
        <div className='book-info'>
          <div className='cover-div'>
            <img src={book.image} alt={`cover of ${book.title}`} className='cover' />
          </div>
          <div className='info-div'>
            <p>Author: {book.author}</p>
            <p>Price: {book.forSale ? this.formatPriceAsUsd(book.price): 'not for sale'}</p>
            <p className='summary'>{book.summary}</p>
          </div>

        </div>
        {/* optionally: make this expandable */}
      </div>
    )
  }
}
