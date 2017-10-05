import React, {Component} from 'react'
import {Route} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'


//Components
import SearchPage from './components/SearchPage'
import BookList from './components/BookList'

export default class BooksApp extends Component {

    state = {
        bookShelf: []
    }


    //This  gets the book details
    getDetails = () => {
        BooksAPI.getAll().then((result) => {
            this.setState({bookShelf: result})

        })
    }


    componentDidMount() {
        this.getDetails()
    }


    changeBookState = (book, shelf) => {
        BooksAPI.update(book, shelf).then(() => {
            this.getDetails()

        })
    }


    render() {
        return (
            <div className="app">
                <Route
                    exact path="/search"
                    render={() => (
                        <SearchPage
                            books={this.state.bookShelf}
                            onShelfChange={this.changeBookState}
                        />
                    )}
                />

                <Route
                    exact path="/"
                    render={() => (
                        <BookList
                            books={this.state.bookShelf}
                            onShelfChange={this.changeBookState}
                        />
                    )}
                />
            </div>
        )
    }
}
