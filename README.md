# MyReads

A bookshelf app that allows user to select and categorize books as you have read, are currently reading, or want to read. This app uses 4 components to manipulate books in a bookshelf.
 * Book.js
 * Boolist.js
 * BookShelf.js
 * SearchPage.js
 
The users can also perform these operations:
 
 * Move the books from one shelf to another
 * Search for the books(This is limited to search terms defined in SEARCH_TERMS.md)
 * Add a new book to a shelf


## Backend Server

The following file [`BooksAPI.js`](src/BooksAPI.js) contains the methods that are required to perform necessary operations on the backend:

### `getAll()`
* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update(book, shelf)`
* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search(query, maxResults)`
* query: `<String>`
* maxResults: `<Integer>` Due to the nature of the backend server, search results are capped at 20, even if this is set higher.
* Returns a Promise which resolves to a JSON object containing a collection of book objects.


## Prerequisites

* [`npm`](https://www.npmjs.com/)

## To Run the App:

* Clone or download the repo.
* Open a terminal in project directory
* Run `npm install` 
* Once all the dependencies are installed use command `npm start` to run the local server.
* App can be accessed at `localhost:3000` or any port intended 
