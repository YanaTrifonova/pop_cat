import React from "react";
import {Button, Jumbotron} from "react-bootstrap";
import cryingLeft from  "../../images/crying_cat_left.png";
import cryingRight from  "../../images/crying_cat_right.png";

import "./index.css";

export default function PageNotFound() {

    return (
        <>
            <Jumbotron>
                <h1>404 error. Page not found</h1>
                <Button className="button" href="/" variant="outline-secondary">Bring me back home</Button>
            </Jumbotron>

            <div className="container">
                <img className="img img-left" src={cryingLeft} alt="cats that cry"/>
                <img className="img img-right" src={cryingRight} alt="another cat that cry"/>
            </div>
        </>
    )
}