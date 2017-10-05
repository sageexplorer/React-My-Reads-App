import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import Book from './Book'

class BookShelf extends Component {

  static propTypes={
    title: PropTypes.string.isRequired,
    books: PropTypes.array.isRequired,
    onShelfChange: PropTypes.func.isRequired
  }


  changeShelf = (book, shelf) => {
      this.props.onShelfChange(book, shelf)
  }


  render(){
    const books = this.props.books
    return(
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books.map((book,index)=>(
              <Book
                key={index}
                book={book}
                onUpdateShelf={(shelf) =>
                {this.changeShelf(book, shelf)}}
              />))}
          </ol>
        </div>
      </div>
    )
  }
}
export default BookShelf
