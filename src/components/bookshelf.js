import React, {Component} from 'react';
import * as BooksAPI from '../BooksAPI';
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import '../App.css'


class AddToBookShelf extends Component {

    state = {
        bookShelf: [],
        bookChanged: false,
        shelf:[]

    }

    //Book type, and title are sent in the props, and are required
    static propTypes = {
        type:  PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
    }


    updateBookShelf = () => {
        BooksAPI.getAll().then((result) => {
            console.log("My get all results are",result)
            this.setState({bookShelf: result})
        })
    }


     componentDidMount() {
        this.updateBookShelf()
     }



    changeBookState = (book, shelf) => {
        BooksAPI.update(book, shelf).then((result) => {
            this.updateBookShelf()

        })
    }



    render() {


        return (

            <div className="bookshelf">

                <h2 className="bookshelf-title">

                    {this.props.title}

                </h2>


                <div className="list-books-content">


                    <ol className="books-grid">


                        {this.state.bookShelf.filter(book => book.shelf === this.props.type).map(book =>

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
                                                value={book.shelf}
                                                onChange={e => this.changeBookState(book, e.target.value)}
                                            >

                                                <option value="none">Move to...</option>
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

                    <div className="open-search">
                        <Link to="/search">Add a book</Link>
                    </div>

                </div>


            </div>

        )

    }

}


export default AddToBookShelf
