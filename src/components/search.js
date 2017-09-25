import React, {Component} from 'react';
import * as BooksAPI from '../BooksAPI';
import {Link} from "react-router-dom";

import 'request'


class SearchResults extends Component {


    state = {
        query: "",
        books: [],
        myShelf: []
    }


   updateQuery = (query) => {
        if (query !== "") {
            BooksAPI.search(query, 30).then((data) => {

                if (data.error) {
                    this.setState({books: []})
                } else {
                    this.setState({books: data})
                }
            })
        } else {
            console.log("No Query Found")
            this.setState({books: []})
        }
    }


    changeBookState =(book, shelf) => {
        BooksAPI.update(book, shelf).then((result) =>{
             console.log(result);
             this.setState({myShelf: result})

        })
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

                <div className="list-books-content">

                    <ol className="books-grid">

                        {this.state.books.map(book =>


                            <li key={book.id}>

                                <div className="book">
                                    <div className="book-top">
                                        <div className="book-cover" style={{
                                            width: 128,
                                            height: 174,
                                            backgroundImage: "url(" + book.imageLinks.thumbnail + ")"
                                        }}></div>
                                        <div className="book-shelf-changer">
                                            <select
                                                value={ this.shelf}
                                                onChange={e => this.changeBookState(book, e.target.value)}
                                            >
                                                <option value="none" disabled>Move to...</option>
                                                <option value="none">None</option>
                                                <option value="currentlyReading">Currently Reading</option>
                                                <option value="wantToRead">Want to Read</option>
                                                <option value="read">Read</option>
                                            </select>

                                        </div>
                                    </div>
                                    <div className="book-title">{book.title}</div>
                                    <div className="book-authors">{book.authors}</div>


                                </div>


                            </li>
                        )}

                    </ol>
                </div>

            </div>

        </div>


        )

}



}


export default SearchResults
