import {Jumbotron} from "react-bootstrap";
import React from "react";
import {useSelector} from "react-redux";
import {selectToken} from "../../store/user/selector";

export default function Favorites() {
    const token = useSelector(selectToken);

    return (
        <>
            {token === null
             ? <a href={'/login'}>Please log in or sign up to see this page</a>
             : <>
                 <Jumbotron>
                     <h1>Favorites songs</h1>
                 </Jumbotron>
             </>
            }
        </>
    )
}