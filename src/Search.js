import React, { Component } from 'react'
import './Search.css'

export default class Search extends Component {


  render() {
    return (
      <form id='search-form'>
        <div className='search-top'>
          <label htmlFor='search'>Search: </label>
          <input type='text' name='search' id='search-box' />
          <button type='submit' onClick={(event) => {
            event.preventDefault()
            let book = document.getElementById('search-box').value
            let type = document.getElementById('type-select').value
            let format = document.getElementById('format-select').value
            this.props.fetchBookList(book, type, format)
          }}>Search</button>
        </div>
        {/*dropdown htmlFor print type, book type*/}
        <div className="filters">
          <label htmlFor="type">Publication Type: </label>
          <select name="type" id="type-select">
            <option value="all">All</option>
            <option value="books">Books</option>
            <option value="magazines">Magazines</option>
          </select>
          <label htmlFor="format">Book Type: </label>
          <select name="format" id="format-select">
            <option value="">No Filter</option>
            <option value="ebooks">Google eBooks</option>
            <option value="free-ebooks">Free Google eBooks</option>
            <option value="full">Full text available</option>
            <option value="paid-ebooks">Paid Google eBooks</option>
            <option value="partial">Partial text available</option>
          </select>
        </div>
      {/* print type: all, books, magazines  */}
      {/* book type: Acceptable values are:
"ebooks" - All Google eBooks.
"free-ebooks" - Google eBook with full volume text viewability.
"full" - Public can view entire volume text.
"paid-ebooks" - Google eBook with a price.
"partial" - Public able to see parts of text.*/}
    </form>
    )
  }
}
