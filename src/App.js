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

import Navigation from "./components/Navigation";
import Loading from "./components/Loading";
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
                {isLoading ? <Loading/> : null}
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/discover" component={Discover}/>
                    <Route path="/private" component={MySongs}/>
                    <Route path="/favorites" component={Favorites}/>
                    <Route path="/about" component={AboutPopCatAndMe}/>
                    <Route path="/signup" component={SignUp}/>
                    <Route path="/login" component={Login}/>
                </Switch>
            </div>
        </Router>

    );
}

export default App;
