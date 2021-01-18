import {Button, Card} from "react-bootstrap";
import React from "react";
import {apiUrl} from "../../config/constants";
import {play} from "../Instrument/play";
import {unPlay} from "../Instrument/unPlay";

import "./index.css";
import stopButton from "../../images/black-check-box.svg";
import playButton from "../../images/play-arrow.svg";

export default function Post(props) {
    const posts = props.data;
    console.log("POSTS", posts);

    var interval;
    var interval2;
    var intervals = [];

    function playButtonClicked(song, catId, index) {
        let catElement = document.getElementById(catId + index);
        song.forEach((item) => {
            interval = setTimeout(() => {
                play(item.note, catElement, index);

                let catOpenMouthTimeout = (item.note.includes("sadViolin") || item.note.includes("dunDunDun")
                                           || item.note.includes("electricSaw") || item.note.includes("pig")
                                           || item.note.includes("pig")) ? 400 : 100;

                interval2 = setTimeout(() => {
                    unPlay(catElement, index);
                }, catOpenMouthTimeout);

                intervals.push(interval2);
            }, item.time);

            intervals.push(interval);
        });
    }

    function stopButtonClicked() {
        intervals.forEach((interval) => clearTimeout(interval));
    }

    return (
        posts?.map((post, index) => {
            return (
                <Card style={{
                    width: '18rem',
                    margin: "20px"
                }} key={index}>
                    <Card.Img id={post.catName + index}
                              variant="top"
                              src={`${apiUrl + post.catUrl}`}
                              className="post-image"/>
                    <Card.Body>
                        <Card.Title className="mb-3 post-title">{post.postName}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Created by: {post.creator}</Card.Subtitle>
                        <Card.Subtitle className="mb-2 text-muted">Created at: {post.updatedAt.substring(0, post.updatedAt.indexOf("T"))}</Card.Subtitle>
                        <Card.Text className="post-text">
                            {post.postDescription}
                        </Card.Text>
                        <Card.Body className="songs-buttons-container">
                            <Button className="songs-button" variant="outline-success" style={{marginRight: "5px"}}
                                    onClick={() => playButtonClicked(
                                        post.song, post.catName, post.id - 1)}><img className="button-img" src={playButton}/></Button>
                            <Button className="songs-button" variant="outline-danger" onClick={() => stopButtonClicked()}><img className="button-img" src={stopButton}/></Button>
                        </Card.Body>
                        <Card.Body>
                            <Button variant="primary" style={{marginRight: "5px"}}>Like</Button>
                            <Button variant="primary">Favorites</Button>
                        </Card.Body>
                    </Card.Body>
                </Card>
            )
        })
    )
}