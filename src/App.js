import React, {useEffect} from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";

import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Discover from "./pages/Discover";
import MySongs from "./pages/MySongs";
import Favorites from "./pages/Favorites";
import AboutPopCatAndMe from "./pages/About";
import PageNotFound from "./pages/404";

import Navigation from "./components/Navigation";
import LoadingSpinner from "./components/Spinner";
import MessageBox from "./components/MessageBox";

import {selectAppLoading} from "./store/appState/selector";
import {getUserWithStoredToken} from "./store/user/actions";

import "./App.css";

function App() {
    const dispatch = useDispatch();
    const isLoading = useSelector(selectAppLoading);

    useEffect(() => {
        dispatch(getUserWithStoredToken());
    }, [dispatch]);

    return (
        <Router>
            <div className="App">
                <Navigation/>
                <MessageBox/>
                {isLoading ? <LoadingSpinner /> : null}
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/discover" component={Discover}/>
                    <Route exact path="/private" component={MySongs}/>
                    <Route exact path="/favorites" component={Favorites}/>
                    <Route exact path="/about" component={AboutPopCatAndMe}/>
                    <Route exact path="/signup" component={SignUp}/>
                    <Route exact path="/login" component={Login}/>
                    <Route path="/" component={PageNotFound}/>
                </Switch>
            </div>
        </Router>

    );
}

export default App;
