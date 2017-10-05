import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { PropTypes } from 'prop-types'
import BookShelf from './BookShelf'

class BookList extends Component {


    static propTypes = {

        books: PropTypes.array.isRequired,
        onShelfChange: PropTypes.func.isRequired
    }

    render() {
        const books = this.props.books

        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <BookShelf books={this.props.books.filter((book) => (book.shelf === "currentlyReading"))} title="Currently Reading" onShelfChange={this.props.onShelfChange}/>
                        <BookShelf books={this.props.books.filter((book) => (book.shelf === "read"))} title="Read" onShelfChange={this.props.onShelfChange}/>
                        <BookShelf books={this.props.books.filter((book) => (book.shelf === "wantToRead"))} title="Want to Read" onShelfChange={this.props.onShelfChange}/>
                    </div>
                </div>
                <div className="open-search">
                    <Link to='/search'>Add a book</Link>
                </div>
            </div>
        )
    }
}







 export default BookList

