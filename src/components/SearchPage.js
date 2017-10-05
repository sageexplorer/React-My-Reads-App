import React, {Component} from 'react';
import * as BooksAPI from '../BooksAPI';
import {Link} from "react-router-dom";
import {PropTypes} from 'prop-types'
import Book from './Book'

import 'request'


class SearchResults extends Component {


    state = {
        query: "",
        bookShelf: [],
    }


    static propTypes = {
        onUpdateShelf: PropTypes.func,
        books: PropTypes.array.isRequired
    }

    updateQuery = (query) => {
        if (query !== "") {
            BooksAPI.search(query, 30).then((data) => {

                if (data.error) {
                    this.setState({bookShelf: []})
                } else {
                    data = data.filter((book) => (book.imageLinks))
                    data.forEach(book => {
                        var bookOnShelf = this.props.books.find(b => b.id === book.id);

                        if (bookOnShelf !== undefined) {
                            book.shelf = bookOnShelf.shelf;
                        }
                        else {
                            book.shelf = "none";
                        }
                    })
                    this.setState({bookShelf: data})
                }
            })
        } else {
            this.setState({bookShelf: []})
        }
    }



    render() {

        return (

            <div className="search-books">
                <div className="search-books-bar">

                    <Link to="/" className="close-search">
                        Close
                    </Link>

                    <div className="search-books-input-wrapper">

                        {<input type="text" placeholder="Search by title or author" value={this.query}
                                onChange={(event) => this.updateQuery(event.target.value)}/>}

                    </div>

                </div>

                <div className="search-books-results">


                    <ol className="books-grid">

                        {this.state.bookShelf.map((book, index) => (
                            <Book book={book} key={index} onUpdateShelf={(shelf) => {
                                this.props.onShelfChange(book, shelf)

                            }}/>))}


                    </ol>
                </div>

            </div>


        )

    }


}


export default SearchResults