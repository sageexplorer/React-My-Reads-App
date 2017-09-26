import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import {Link} from 'react-router-dom'
import {Route} from 'react-router-dom'
import SearchResults from "./components/search";
import AddToBookShelf from "./components/bookshelf";

class BooksApp extends React.Component {


    render() {
        return (
            <div className="app">


                <Route path='/search' render={() => (

                    <SearchResults  />

                )}/>


                <Route exact path='/' render={() => (


                    <div>

                        <div className="list-books-title">

                            <h2>My Reads</h2>

                        </div>

                        <AddToBookShelf type="currentlyReading" title="Currently Reading"/>

                        <AddToBookShelf type="wantToRead" title="Want To Read"/>

                        <AddToBookShelf type="read" title="Read"/>


                    </div>

                )}/>

            </div>
        )
    }
}

export default BooksApp


