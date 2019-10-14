/////////////////////////// API stuff ///////////////////////////
https://developers.google.com/books/docs/v1/reference/volumes/list


GET https://www.googleapis.com/books/v1/volumes?q={search terms}

filter 	string 	Filter search results.

Acceptable values are:

    "ebooks" - All Google eBooks.
    "free-ebooks" - Google eBook with full volume text viewability.
    "full" - Public can view entire volume text.
    "paid-ebooks" - Google eBook with a price.
    "partial" - Public able to see parts of text.

printType 	string 	Restrict to books or magazines.

Acceptable values are:

    "all" - All volume content types.
    "books" - Just books.
    "magazines" - Just magazines.


Bookshelves.volumes:list
{
  "kind": "books#volumes",
  "totalItems": integer,
  "items": [
    volumes Resource (Bookshelves.volumes)
  ]
}

Bookshelves.volumes
{
  "kind": "books#volume",
  "id": string,
  "etag": string,
  "selfLink": string,
  "volumeInfo": {
    "title": string,
    "subtitle": string,
    "authors": [
      string
    ],
    "publisher": string,
    "publishedDate": string,
    "description": string,
    "industryIdentifiers": [
      {
        "type": string,
        "identifier": string
      }
    ],
    "pageCount": integer,
    "dimensions": {
      "height": string,
      "width": string,
      "thickness": string
    },
    "printType": string,
    "mainCategory": string,
    "categories": [
      string
    ],
    "averageRating": double,
    "ratingsCount": integer,
    "contentVersion": string,
    "imageLinks": {
      "smallThumbnail": string,
      "thumbnail": string,
      "small": string,
      "medium": string,
      "large": string,
      "extraLarge": string
    },
    "language": string,
    "previewLink": string,
    "infoLink": string,
    "canonicalVolumeLink": string
  },
  "userInfo": {
    "review": mylibrary.reviews Resource,
    "readingPosition": mylibrary.readingpositions Resource,
    "isPurchased": boolean,
    "isPreordered": boolean,
    "updated": datetime
  },
  "saleInfo": {
    "country": string,
    "saleability": string,
    "onSaleDate": datetime,
    "isEbook": boolean,
    "listPrice": {
      "amount": double,
      "currencyCode": string
    },
    "retailPrice": {
      "amount": double,
      "currencyCode": string
    },
    "buyLink": string
  },
  "accessInfo": {
    "country": string,
    "viewability": string,
    "embeddable": boolean,
    "publicDomain": boolean,
    "textToSpeechPermission": string,
    "epub": {
      "isAvailable": boolean,
      "downloadLink": string,
      "acsTokenLink": string
    },
    "pdf": {
      "isAvailable": boolean,
      "downloadLink": string,
      "acsTokenLink": string
    },
    "webReaderLink": string,
    "accessViewStatus": string,
    "downloadAccess": {
      "kind": "books#downloadAccessRestriction",
      "volumeId": string,
      "restricted": boolean,
      "deviceAllowed": boolean,
      "justAcquired": boolean,
      "maxDownloadDevices": integer,
      "downloadsAcquired": integer,
      "nonce": string,
      "source": string,
      "reasonCode": string,
      "message": string,
      "signature": string
    }
  },
  "searchInfo": {
    "textSnippet": string
  }
}


/////////////////////////// Components /////////////////////////////







Layout
