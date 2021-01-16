import {Button, Card, Jumbotron} from "react-bootstrap";
import React from "react";

export default function Discover() {

    return(
        <>
            <Jumbotron>
            <h1>Discover songs</h1>
        </Jumbotron>
            <Card style={{ width: '18rem', margin: "20px" }}>
                <Card.Img variant="top" src={"https://static.toiimg.com/photo/msid-67586673/67586673.jpg?3918697"} />
                <Card.Body>
                    <Card.Title>My first song</Card.Title>
                    <Card.Text>
                        I created my first song. Feel free to listen to it!
                    </Card.Text>
                    <Card.Body>
                        <Button variant="primary" style={{ marginRight: "5px" }}>Play</Button>
                        <Button variant="primary">Stop</Button>
                    </Card.Body>
                    <Card.Body>
                        <Button variant="primary" style={{ marginRight: "5px" }}>Like</Button>
                        <Button variant="primary">Favorites</Button>
                    </Card.Body>
                </Card.Body>
            </Card>
        </>
    )
}