import React from 'react';
import Search from './Search';
import ResultsList from './ResultsList';
import slugify from 'slugify';
import './App.css';

class App extends React.Component {

  state = {}

  handleErrors = (error) => {
    console.log(error);
  }

  parseBookData = (data) => {
  //Takes the json object from the query and parses the list of book information to fit resultsList
    console.dir(data);
    if (data.totalItems === 0) {
      return []
    }
    let resultsList = data.items.map(item => {
      let forSale = item.saleInfo.saleability === "FOR_SALE";

      return {
        id: item.id,
        title: item.volumeInfo.title,
        author: item.volumeInfo.authors,
        summary: item.volumeInfo.description,
        image: item.volumeInfo.imageLinks.smallThumbnail,
        price: forSale ? item.saleInfo.listPrice.amount : null,
        forSale
      }
    })
    return resultsList
  }

  checkResponse = (response) => {
    console.dir(response)
    if   (response.ok) {
      return response
    }  else {
      throw new Error('foo')
    }
  }


  fetchBookList = (book, printType = 'all', filterBy = '') => {
    let _book = slugify(book);
    let _printType = slugify(printType);
    let _filterBy = slugify(filterBy);
    const url = `https://www.googleapis.com/books/v1/volumes?q=${_book}&printType=${_printType}${filterBy ? '&filter=' + _filterBy : ''}`
    // &printType=${_printType}`
    fetch(url).then(response => this.checkResponse(response))
      .then(response => response.json())
      .then(data => this.parseBookData(data))
      .then(bookListData => this.setState({
        resultsList: bookListData
      }))
      .catch(error => this.handleErrors(error))
  }

  render() {
    return (
      <>
        <header>
          <h1>Google Book Search</h1>
        </header>
        <main className='App'>
          <Search fetchBookList={this.fetchBookList}/>
          <ResultsList resultsList={this.state.resultsList}/>

        </main>
      </>
    );
  }
}

export default App;

/* Components
<App /> <-- state storage, header, event handlers
  <Search /> <--search form, params: event handler
  <ResultsList /> <--displays results, params: results, event handler (for optional goal)
    <Book /> <--params: book info (title, author, price, summary)




*/

/*
results structuring:
resultsList = [
  {
    id: foo,
    title,
    author,
    price,
    summary,
    image: srcUrl
  }

]
*/
