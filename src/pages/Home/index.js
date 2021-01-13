import {Button, Col, Jumbotron, Nav, Row, Tab, Tabs} from "react-bootstrap";
import React, {useCallback, useEffect, useState} from "react";

import "./index.css";

import catWithCloseMouth from "../../images/default/cat_default_close_mouth.jpg";
import pixelCatWithCloseMouth from "../../images/pixel/cat_pixel_close_mouth.jpg";
import pirateCatWithCloseMouth from "../../images/pirate/cat_pirate_close_mouth.png";
import winterCatWithCloseMouth from "../../images/winter/cat_winter_close_mouth.png";
import bwCatWithCloseMouth from "../../images/b&w/cat_bw_close_mouth.png";

import Audio from "../../components/Audio";
import Instrument from "../../components/Instrument";

import {setElementsToArrayById} from "./helpers";
import {audioSwitcher} from "./audioSwitcher";
import {
    bassDrumsId,
    cowsId,
    defaultPianoId,
    dunDunDunId,
    electricSawId,
    heartBitId,
    piano2Id,
    piano3Id,
    piano4Id,
    pigId,
    sadViolinId,
} from "./export";
import {play} from "../../components/Instrument/play";
import {closeCatMouth} from "../../components/Instrument/closeCatMouth";
import Timer from "./timer";
import OnSaveModal from "./modal";

export default function Home() {
    const [defaultNotes, setDefaultNotes] = useState([]);
    const [piano2Notes, setPiano2Notes] = useState([]);
    const [piano3Notes, setPiano3Notes] = useState([]);
    const [piano4Notes, setPiano4Notes] = useState([]);
    const [bassDrumsNotes, setBassDrumsNotes] = useState([]);
    const [sadViolinNotes, setSadViolinId] = useState([]);
    const [dunDunDunNotes, setDunDunDunNotes] = useState([]);
    const [electricSawNotes, setElectricSawId] = useState([]);
    const [heartBitNotes, setHeartBitNotes] = useState([]);
    const [cowsNotes, setCowsNotes] = useState([]);
    const [pigNotes, setPigNotes] = useState([]);

    const [catImg, catImgSetter] = useState(catWithCloseMouth);

    const [cat, setCat] = useState('catDefault');
    const [instrument, setInstrument] = useState('home');

    const [keyPressedEvent, setKeyPressedEvent] = useState(null);

    const [openRecordPanel, setOpenRecordPanel] = useState(false);
    const [disableOnStop, setDisableOnStop] = useState(false);
    const [timer, setTimer] = useState(false);

    const [modalShow, setModalShow] = useState(false);

    const keyPressed = useCallback(event => {
        if (defaultNotes.length !== 0) {
            const eventKey = event.key.toLowerCase();

            const audioType = audioSwitcher(
                instrument, defaultNotes, piano2Notes, piano3Notes, piano4Notes, bassDrumsNotes, sadViolinNotes,
                dunDunDunNotes, electricSawNotes, heartBitNotes, cowsNotes, pigNotes
            );

            const catElement = document.getElementById(cat);
            switch (eventKey) {
                case "1" :
                case "c" : {
                    play(audioType[0], catElement);
                    setKeyPressedEvent("c");
                    break;
                }
                case "2" :
                case "d" : {
                    play(audioType[1], catElement);
                    setKeyPressedEvent("d");
                    break;
                }
                case "3" :
                case "e" : {
                    play(audioType[2], catElement);
                    setKeyPressedEvent("e");
                    break;
                }
                case "4" :
                case "f" : {
                    play(audioType[3], catElement);
                    setKeyPressedEvent("f");
                    break;
                }
                case "5" :
                case "g" : {
                    play(audioType[4], catElement);
                    setKeyPressedEvent("g");
                    break;
                }
                case "6" :
                case "a" : {
                    play(audioType[5], catElement);
                    setKeyPressedEvent("a");
                    break;
                }
                case "7" :
                case "b" : {
                    play(audioType[6], catElement);
                    setKeyPressedEvent("b");
                    break;
                }
                default :
                    return null;
            }
        }
    }, [instrument, cat, defaultNotes.length]);

    const keyUp = useCallback(_ => {
        closeCatMouth(document.getElementById(cat));
        setKeyPressedEvent(null);
    }, [cat]);

    useEffect(() => {
        console.log("RENDER");
        setDefaultNotes(setElementsToArrayById(defaultPianoId));
        setPiano2Notes(setElementsToArrayById(piano2Id));
        setPiano3Notes(setElementsToArrayById(piano3Id));
        setPiano4Notes(setElementsToArrayById(piano4Id));
        setBassDrumsNotes(setElementsToArrayById(bassDrumsId));
        setSadViolinId(setElementsToArrayById(sadViolinId));
        setDunDunDunNotes(setElementsToArrayById(dunDunDunId));
        setElectricSawId(setElementsToArrayById(electricSawId));
        setHeartBitNotes(setElementsToArrayById(heartBitId));
        setCowsNotes(setElementsToArrayById(cowsId));
        setPigNotes(setElementsToArrayById(pigId));

        document.addEventListener("keypress", keyPressed, false);
        document.addEventListener("keyup", keyUp, false);

        return () => {
            document.removeEventListener("keypress", keyPressed, false);
            document.removeEventListener("keyup", keyUp, false);
        };
    }, [keyUp, keyPressed, openRecordPanel]);

    function setInstrumentTabAction(k) {
        //close record panel when User picked new instrument
        if (k !== instrument) {
            setOpenRecordPanel(false);
        }

        setInstrument(k);
    }

    function setCatOnSelect(k) {
        //close record panel when User picked new cat
        if (k !== cat) {
            setOpenRecordPanel(false);
        }

        switch (k) {
            case 'catDefault' : {
                setCat('catDefault');
                catImgSetter(catWithCloseMouth);
                break;
            }
            case 'catPixel' : {
                setCat('catPixel');
                catImgSetter(pixelCatWithCloseMouth);
                break;
            }
            case 'catPirate' : {
                setCat('catPirate');
                catImgSetter(pirateCatWithCloseMouth);
                break;
            }
            case 'catWinter' : {
                setCat('catWinter');
                catImgSetter(winterCatWithCloseMouth);
                break;
            }
            case 'catBW' : {
                setCat('catBW');
                catImgSetter(bwCatWithCloseMouth);
                break;
            }
            default : {
                setCat('catDefault');
                catImgSetter(catWithCloseMouth);
                break;
            }
        }
    }

    function onRecordClicked() {
        _logsForRecords("RECORD");

        setOpenRecordPanel(true);
        setTimer(true);

    }

    function onStopRecordClicked() {
        _logsForRecords("STOP");

        setTimer(false);
        setDisableOnStop(true);
    }

    function onCancelRecordClicked() {
        _logsForRecords("CANCEL");

        setOpenRecordPanel(false);
        setDisableOnStop(false);
    }

    function onSaveButtonClicked() {
        setModalShow(true);

        // remove listeners to prevent playing notes when user enter description with letters that are defined as notes
        document.removeEventListener("keypress", keyPressed, false);
        document.removeEventListener("keyup", keyUp, false);
    }

    function onListenButtonClicked() {
        _logsForRecords("LISTEN");
    }

    function onRevertButtonClicked() {
        _logsForRecords("REVERT");
    }

    function _logsForRecords(functionName) {
        console.log(functionName, new Date());
        console.log(`
            openRecordPanel = ${openRecordPanel}
            disableOnStop = ${disableOnStop}
            timer = ${timer}
            modalShow = ${modalShow}
        `);
    }

    function _logsForModal(buttonType) {
        console.log(buttonType, new Date());
    }

    function modalButtonClicked(buttonType, name, description) {
        _logsForModal(buttonType);

        if (buttonType === 'cancel') {
            setModalShow(false);
            setOpenRecordPanel(false);
            setDisableOnStop(false);
        }

        if (buttonType === 'save') {
            _logsForRecords("SAVE");
            setModalShow(false);
            setOpenRecordPanel(false);
            setDisableOnStop(false);

            console.log("song name", name);
            console.log("song description", description);
        }
    }

    return (
        <>
            <Audio id={defaultPianoId} type="default"/>
            <Audio id={piano2Id} type="piano-2"/>
            <Audio id={piano3Id} type="piano-3"/>
            <Audio id={piano4Id} type="piano-4"/>
            <Audio id={bassDrumsId} type="bass-drum"/>
            <Audio id={sadViolinId} type="sad-violin"/>
            <Audio id={dunDunDunId} type="dun-dun-dun"/>
            <Audio id={electricSawId} type="electric-saw"/>
            <Audio id={heartBitId} type="heart-bit"/>
            <Audio id={cowsId} type="cows"/>
            <Audio id={pigId} type="pig"/>

            <Jumbotron>
                <h1>Cat:</h1>
                <Tab.Container id="left-tabs-example"
                               defaultActiveKey="first"
                               onSelect={(k) => setCatOnSelect(k)}
                               activeKey={cat}
                >
                    <Row>
                        <Col sm={2}>
                            <Nav variant="pills" className="flex-column">
                                <Nav.Item>
                                    <Nav.Link eventKey="catDefault">Default</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="catPixel">Pixel</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="catPirate">Pirate</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="catWinter">Winter</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="catBW">Black and White</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={3}>
                            <Tab.Content>
                                <Tab.Pane eventKey="catDefault">
                                    <img id="catDefault" className="cat" src={catImg} alt="cat with close mouth"/>
                                </Tab.Pane>
                                <Tab.Pane eventKey="catPixel">
                                    <img id="catPixel" className="cat" src={catImg} alt="cat with close mouth"/>
                                </Tab.Pane>
                                <Tab.Pane eventKey="catPirate">
                                    <img id="catPirate" className="cat" src={catImg} alt="cat with close mouth"/>
                                </Tab.Pane>
                                <Tab.Pane eventKey="catWinter">
                                    <img id="catWinter" className="cat" src={catImg} alt="cat with close mouth"/>
                                </Tab.Pane>
                                <Tab.Pane eventKey="catBW">
                                    <img id="catBW" className="cat" src={catImg} alt="cat with close mouth"/>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Jumbotron>

            <Tabs
                id="controlled-tab"
                className="instrument-tabs"
                defaultActiveKey="home"
                onSelect={(k) => setInstrumentTabAction(k)}
                activeKey={instrument}>
                <Tab eventKey="home" title="default-piano">
                    <Instrument cat={cat} notes={defaultNotes} keyEvent={keyPressedEvent}/>
                </Tab>
                <Tab eventKey="piano-2" title="piano-2">
                    <Instrument cat={cat} notes={piano2Notes} keyEvent={keyPressedEvent}/>
                </Tab>
                <Tab eventKey="piano-3" title="piano-3">
                    <Instrument cat={cat} notes={piano3Notes} keyEvent={keyPressedEvent}/>
                </Tab>
                <Tab eventKey="piano-4" title="piano-4">
                    <Instrument cat={cat} notes={piano4Notes} keyEvent={keyPressedEvent}/>
                </Tab>
                <Tab eventKey="bass-drum" title="Bass Drum">
                    <Instrument cat={cat} notes={bassDrumsNotes} keyEvent={keyPressedEvent}/>
                </Tab>
                <Tab eventKey="sad-violin" title="Sad Violin">
                    <Instrument cat={cat} notes={sadViolinNotes} keyEvent={keyPressedEvent}/>
                </Tab>
                <Tab eventKey="dun-dun-dun" title="Dun Dun Dun">
                    <Instrument cat={cat} notes={dunDunDunNotes} keyEvent={keyPressedEvent}/>
                </Tab>
                <Tab eventKey="electric-saw" title="Electric Saw">
                    <Instrument cat={cat} notes={electricSawNotes} keyEvent={keyPressedEvent}/>
                </Tab>
                <Tab eventKey="heart-bit" title="Heart Bit">
                    <Instrument cat={cat} notes={heartBitNotes} keyEvent={keyPressedEvent}/>
                </Tab>
                <Tab eventKey="cows" title="Cow">
                    <Instrument cat={cat} notes={cowsNotes} keyEvent={keyPressedEvent}/>
                </Tab>
                <Tab eventKey="pig" title="Pig">
                    <Instrument cat={cat} notes={pigNotes} keyEvent={keyPressedEvent}/>
                </Tab>
            </Tabs>

            <div className="button-record">
                <Button variant="danger" disabled={disableOnStop} onClick={onRecordClicked}>Record</Button>
                {openRecordPanel
                 ? <>
                     <Button variant="primary" disabled={disableOnStop} onClick={onStopRecordClicked}>Stop</Button>
                     <Timer isActive={timer}/>
                     <Button variant="primary" onClick={onListenButtonClicked} disabled={timer}>Listen</Button>
                     <Button variant="primary" onClick={onRevertButtonClicked} disabled={timer}>Revert</Button>
                     <Button variant="primary" onClick={onSaveButtonClicked} disabled={timer}>Save</Button>
                     <Button variant="primary" onClick={onCancelRecordClicked} disabled={timer}>Cancel</Button>

                     <OnSaveModal
                         show={modalShow}
                         onEscapeKeyDown={() => setModalShow(false)}
                         onHide={(buttonType, name, description) => modalButtonClicked(buttonType, name, description)}
                     />
                 </>
                 : null}
            </div>
        </>
    )
}