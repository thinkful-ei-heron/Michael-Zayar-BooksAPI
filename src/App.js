import React from 'react';

function App() {
  return (
    <> 
      <header>
        <h1>Google Book Search</h1>
      </header>
      <main className='App'>
        <form>
          <label for='search'>Search: </label>
          <input type='text' name='search' id='search' />
          <button type='submit'>Search</button> 
          {/*dropdown for print type, book type*/}
          {/* print type: all, books, magazines  */}
          {/* book type: Acceptable values are:
"ebooks" - All Google eBooks.
"free-ebooks" - Google eBook with full volume text viewability.
"full" - Public can view entire volume text.
"paid-ebooks" - Google eBook with a price.
"partial" - Public able to see parts of text.*/}
        </form>
        <div class="resultsList /">
          <div class="result /">
            <h2>Henry I</h2>
            <p>Author: C. Warren Hollister</p>
            <p>Price: $50.00</p>
            <p>The resulting volume is one that will be welcomed by students and general readers alike.</p>
            {/* optionally: make this expandable */}
          </div>

        </div>

      </main>
    </>
  );
}

export default App;

/* Components 
<App />
  <Search />




*/
