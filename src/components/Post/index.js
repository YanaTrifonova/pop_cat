import {Button, ButtonGroup, Card, Dropdown, DropdownButton, Form, Modal} from "react-bootstrap";
import React, {useState} from "react";
import {apiUrl} from "../../config/constants";
import {play} from "../Instrument/play";
import {unPlay} from "../Instrument/unPlay";

import "./index.css";

import stopButton from "../../images/black-check-box.svg";
import playButton from "../../images/play-arrow.svg";
import {useDispatch, useSelector} from "react-redux";
import {deletePost, updatePostDescription, updatePostName} from "../../store/renamePost/actions";
import {selectToken} from "../../store/user/selector";
import {showMessageWithTimeout} from "../../store/appState/actions";

export default function Post(props) {
    const token = useSelector(selectToken);
    const dispatch = useDispatch();
    const posts = props.data;

    console.log("POSTS", posts);

    // post name useStates:
    const [showChangeNameModal, setShowChangeNameModal] = useState(false);
    const [newName, setNewName] = useState("");
    const [validatedNewName, setValidatedNewName] = useState(false);
    const [postOldName, setPostOldName] = useState("");

    // post description useState:
    const [showChangeDescriptionModal, setShowChangeDescriptionModal] = useState(false);
    const [newDescription, setNewDescription] = useState("");
    const [validatedNewDescription, setValidatedNewDescription] = useState(false);
    const [postOldDescription, setPostOldDescription] = useState("");

    const [postId, setPostId] = useState("");

    var interval;
    var interval2;
    var intervals = [];

    function playButtonClicked(song, catId, index) {
        let catElement = document.getElementById(catId + index);
        song.forEach((item) => {
            interval = setTimeout(() => {
                play(item.note, catElement, index);

                let catOpenMouthTimeout = (item.note.includes("sadViolin")
                                           || item.note.includes("dunDunDun")
                                           || item.note.includes("electricSaw")
                                           || item.note.includes("pig")
                                           || item.note.includes("pig"))
                                          ? 400
                                          : 100;

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

    function handleSelect(e, postId, name, description) {
        console.log(e);
        console.log(postId);
        console.log(name);

        setPostId(postId);
        setPostOldName(name);
        setPostOldDescription(description);

        switch (e) {
            case "1" : {
                setShowChangeNameModal(true);
                break;
            }
            case "2" : {
                setShowChangeDescriptionModal(true);
                break;
            }
            case "3" : {
                dispatch(deletePost(postId, token));
                dispatch(showMessageWithTimeout(
                    "success",
                    false,
                    `Post number ${postId} was successfully deleted!`,
                    3500
                ));
                break;
            }

            default :
                return
        }
    }

    function handleSaveNewPostName() {
        if (newName !== "") {
            console.log("NEW POST NAME:", newName);

            setValidatedNewName(false);
            setShowChangeNameModal(false);

            if (postOldName !== newName) {
                dispatch(updatePostName(postId, newName, token));
                dispatch(showMessageWithTimeout(
                    "success",
                    false,
                    `Name of the post number ${postId} was successfully changed from ${postOldName} to ${newName}!`,
                    3500
                ));
            } else {
                dispatch(showMessageWithTimeout(
                    "danger",
                    false,
                    `You loved name of your post so much that entered the same name again! Try something new than ${newName}.`,
                    3500
                ));
            }

        } else {
            console.log("EMPTY NAME");
            setValidatedNewName(true);
        }

        setNewName("");
    }

    function handleSaveNewPostDescription() {
        if (newDescription !== "") {
            console.log("NEW DESCRIPTION:", newDescription);

            setValidatedNewDescription(false);
            setShowChangeDescriptionModal(false);

            if (postOldDescription !== newDescription) {
                dispatch(updatePostDescription(postId, newDescription, token));
                dispatch(showMessageWithTimeout(
                    "success",
                    false,
                    `Description of the post number ${postId} was successfully changed!`,
                    3500
                ));
            } else {
                dispatch(showMessageWithTimeout(
                    "danger",
                    false,
                    `No idea how it was happen but you entered the same description for your post as before.`,
                    3500
                ));
            }

        } else {
            console.log("EMPTY DESCRIPTION");
            setValidatedNewDescription(true);
        }

        setNewDescription("");
    }

    return (
        <>
            {
                posts?.map((post, index) => {
                    return (
                        <Card style={{
                            width: '18rem',
                            margin: "20px"
                        }} key={index}>
                            <Card.Body className="post-top">
                                <Card.Text style={{backgroundColor: post.userColor}}
                                           className="post-round-text">{post.creator.charAt(0)}
                                </Card.Text>
                                <>
                                    <div className="mb-2">
                                        <DropdownButton
                                            as={ButtonGroup}
                                            key={"right"}
                                            id={`dropdown-button-drop-right`}
                                            drop={"right"}
                                            variant="secondary"
                                            title={`Post № ${post.id}`}
                                            onSelect={(e) => handleSelect(
                                                e, post.id, post.postName, post.postDescription)}
                                        >
                                            <Dropdown.Header>Rename post options</Dropdown.Header>
                                            <Dropdown.Item eventKey="1">Name</Dropdown.Item>
                                            <Dropdown.Item eventKey="2">Description</Dropdown.Item>
                                            <Dropdown.Divider/>
                                            <Dropdown.Item eventKey="3">Delete Post</Dropdown.Item>
                                        </DropdownButton>
                                    </div>
                                </>
                            </Card.Body>
                            <Card.Img id={post.catName + index}
                                      variant="top"
                                      src={`${apiUrl + post.catUrl}`}
                                      className="post-image"/>
                            <Card.Body>
                                <Card.Title className="mb-3 post-title">{post.postName}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">
                                    Created by: {post.creator}
                                </Card.Subtitle>
                                <Card.Subtitle className="mb-2 text-muted">
                                    Created at: {post.updatedAt.substring(0, post.updatedAt.indexOf("T"))}
                                </Card.Subtitle>
                                <Card.Text className="post-text">
                                    {post.postDescription}
                                </Card.Text>
                                <Card.Body className="songs-buttons-container">
                                    <Button className="songs-button"
                                            variant="outline-success"
                                            onClick={() => playButtonClicked(
                                                post.song, post.catName, index)}>
                                        <img className="button-img" src={playButton} alt="Play button"/>
                                    </Button>
                                    <Button className="songs-button"
                                            variant="outline-danger"
                                            onClick={() => stopButtonClicked()}>
                                        <img className="button-img" src={stopButton} alt="Stop button"/>
                                    </Button>
                                </Card.Body>
                                <Card.Body>
                                    <Button variant="primary" style={{marginRight: "5px"}}>Like</Button>
                                    <Button variant="primary">Favorites</Button>
                                </Card.Body>
                            </Card.Body>
                        </Card>
                    )
                })
            }
            <>
                <Modal show={showChangeNameModal} onHide={() => setShowChangeNameModal(false)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Change name of the post</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form noValidate validated={validatedNewName}>
                            <Form.Group controlId="form1">
                                <Form.Label>Give song a new name</Form.Label>
                                <Form.Control type="text"
                                              placeholder={postOldName}
                                              required
                                              value={newName}
                                              onChange={event => setNewName(event.target.value)}/>
                                <Form.Control.Feedback type="invalid">
                                    Your name field is empty. Please provide a valid name.
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => setShowChangeNameModal(false)}>
                            Cancel
                        </Button>
                        <Button variant="primary" onClick={handleSaveNewPostName}>
                            Save
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
            <>
                <Modal show={showChangeDescriptionModal} onHide={() => setShowChangeDescriptionModal(false)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Change description of the post</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form noValidate validated={validatedNewDescription}>
                            <Form.Group controlId="form2">
                                <Form.Label>Give song a new description</Form.Label>
                                <Form.Control type="text"
                                              placeholder={postOldDescription}
                                              required
                                              value={newDescription}
                                              onChange={event => setNewDescription(event.target.value)}/>
                                <Form.Control.Feedback type="invalid">
                                    Your description field is empty. Please provide a valid description.
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => setShowChangeNameModal(false)}>
                            Cancel
                        </Button>
                        <Button variant="primary" onClick={handleSaveNewPostDescription}>
                            Save
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        </>
    )
}