import { NavBar } from "./shared"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { BooksList } from "./BooksList";
import { CreateBook } from "./CreateBook";
import { UpdateBook } from "./UpdateBook";
import React from 'react';
function App() {
    return (
        <Router>
                <NavBar />
                <Switch>
                    <Route path="/create-book">
                        <CreateBook />
                    </Route>
                    <Route path="/update-book/:id">
                        <UpdateBook />
                    </Route>
                    <Route path="/">
                        <BooksList />
                    </Route>
                </Switch>
        </Router>
    );
}

export default App;