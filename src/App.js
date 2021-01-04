import React, {useEffect} from "react";
import {Route, Switch} from 'react-router';
import {useDispatch, useSelector} from "react-redux";

import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Discover from "./pages/Discover";
import MySongs from "./pages/MySongs";
import AboutPopCat from "./pages/About";

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
        <div className="App">
            <Navigation/>
            <MessageBox/>
            {isLoading ? <Loading/> : null}
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/discover" component={Discover}/>
                <Route path="/private" component={MySongs}/>
                <Route path="/about" component={AboutPopCat}/>
                <Route path="/signup" component={SignUp}/>
                <Route path="/login" component={Login}/>
            </Switch>
        </div>
    );
}

export default App;
