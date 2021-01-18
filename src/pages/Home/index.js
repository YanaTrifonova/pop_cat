import {Button, Col, Jumbotron, Nav, Row, Tab, Tabs} from "react-bootstrap";
import React, {useCallback, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import "./index.css";

import Audio from "../../components/Audio";
import Instrument from "../../components/Instrument";
import {play} from "../../components/Instrument/play";
import {closeCatMouth} from "../../components/Instrument/closeCatMouth";
import Timer from "./timer";
import OnSaveModal from "./modal";
import {clearRecordInLocalStorage, preSaveToLocalStorage, recordPreSaver, saveRecord} from "../../store/record/actions";
import {unPlay} from "../../components/Instrument/unPlay";
import {selectToken} from "../../store/user/selector";
import {apiUrl} from "../../config/constants";
import {preLoadCats, preLoadInstruments} from "../../store/preLoadMedia/actions";
import {isNotePlayedSelector} from "../../store/record/selector";

export default function Home() {
    const dispatch = useDispatch();
    const token = useSelector(selectToken);
    const isNotePlayed = useSelector(isNotePlayedSelector);

    const [mediaCats, setMediaCats] = useState(null);
    const [mediaInstruments, setMediaInstruments] = useState(null);

    const [cat, setCat] = useState('catDefault');
    const [instrument, setInstrument] = useState('defaultPianoAudios');

    const [keyPressedEvent, setKeyPressedEvent] = useState(null);

    // when user click RECORD button - open panel with STOP, LISTEN, SAVE and CANCEL buttons
    const [openRecordPanel, setOpenRecordPanel] = useState(false);
    // when user click STOP button - disable RECORD and STOP buttons
    const [disableOnStop, setDisableOnStop] = useState(false);
    // when user click RECORD button - start timer and disable LISTEN, SAVE and CANCEL buttons
    const [timer, setTimer] = useState(false);
    // if during recording user did not played any notes disable LISTEN and SAVE buttons
    const [isRecordedMusicPlayed, setIsRecordedMusicPlayed] = useState(true);

    // flag when user start recorded their song
    const [record, setRecord] = useState(false);

    const [modalShow, setModalShow] = useState(false);

    const keyPressed = useCallback(event => {
        const eventKey = event.key.toLowerCase();
        const catElement = document.getElementById(cat);

        switch (eventKey) {
            case "1" :
            case "c" : {
                const noteId = instrument + "Note" + 0;

                play(noteId, catElement, -1);

                if (record) {
                    dispatch(recordPreSaver(noteId, Date.now()));
                }

                setKeyPressedEvent("c");
                break;
            }
            case "2" :
            case "d" : {
                const noteId = instrument + "Note" + 1;

                play(noteId, catElement, -1);

                if (record) {
                    dispatch(recordPreSaver(noteId, Date.now()));
                }

                setKeyPressedEvent("d");
                break;
            }
            case "3" :
            case "e" : {
                const noteId = instrument + "Note" + 2;

                play(noteId, catElement, -1);

                if (record) {
                    dispatch(recordPreSaver(noteId, Date.now()));
                }

                setKeyPressedEvent("e");
                break;
            }
            case "4" :
            case "f" : {
                const noteId = instrument + "Note" + 3;

                play(noteId, catElement, -1);

                if (record) {
                    dispatch(recordPreSaver(noteId, Date.now()));
                }

                setKeyPressedEvent("f");
                break;
            }
            case "5" :
            case "g" : {
                const noteId = instrument + "Note" + 4;

                play(noteId, catElement, -1);

                if (record) {
                    dispatch(recordPreSaver(noteId, Date.now()));
                }

                setKeyPressedEvent("g");
                break;
            }
            case "6" :
            case "a" : {
                const noteId = instrument + "Note" + 5;

                play(noteId, catElement, -1);

                if (record) {
                    dispatch(recordPreSaver(noteId, Date.now()));
                }

                setKeyPressedEvent("a");
                break;
            }
            case "7" :
            case "b" : {
                const noteId = instrument + "Note" + 6;

                play(noteId, catElement, -1);

                if (record) {
                    dispatch(recordPreSaver(noteId, Date.now()));
                }

                setKeyPressedEvent("b");
                break;
            }
            default :
                return null;
        }

    }, [instrument, cat, record]);

    const keyUp = useCallback(_ => {
        closeCatMouth(document.getElementById(cat), -1);
        setKeyPressedEvent(null);
    }, [cat]);

    useEffect(() => {
        console.log("RENDER");

        dispatch(preLoadCats())
            .then(() => setMediaCats(JSON.parse(window.localStorage.getItem("cats"))))

        dispatch(preLoadInstruments())
            .then(() => setMediaInstruments(JSON.parse(window.localStorage.getItem("instruments"))));

        document.addEventListener("keypress", keyPressed, false);
        document.addEventListener("keyup", keyUp, false);

        return () => {
            document.removeEventListener("keypress", keyPressed, false);
            document.removeEventListener("keyup", keyUp, false);
        };
    }, [keyUp, keyPressed, dispatch, mediaCats?.length, mediaInstruments?.length]);

    function setInstrumentTabAction(k) {
        if (k !== instrument) {
            // set instrument that have chosen by user
            setInstrument(k);
            // close record panel when User picked new instrument
            setOpenRecordPanel(false);
            // revert changes of disables
            setDisableOnStop(false);
            // clear song values in local storage
            dispatch(clearRecordInLocalStorage());
        }
    }

    function setCatOnSelect(k) {
        if (k !== cat) {
            // set cat that have chosen by user
            setCat(k);
            // close record panel when User picked new cat
            setOpenRecordPanel(false);
            // revert changes of disables
            setDisableOnStop(false);
            // clear song values in local storage
            dispatch(clearRecordInLocalStorage());
        }
    }

    function onRecordClicked() {
        _logsForRecords("RECORD");
        dispatch(clearRecordInLocalStorage());

        setOpenRecordPanel(true);
        setTimer(true);
        setRecord(true);
    }

    function onStopRecordClicked() {
        _logsForRecords("STOP");

        setTimer(false);
        setDisableOnStop(true);
        setRecord(false);

        // if user played any notes during recorder. At every note played ADD_NOTE updated state with new song item
        // otherwise record state is empty
        if (isNotePlayed) {
            // save song that recorded to local storage
            dispatch(preSaveToLocalStorage());
        } else {
            console.log("NO SOUNDS RECORDER");
            setIsRecordedMusicPlayed(false);
        }
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

        const catElement = document.getElementById(cat);
        const song = JSON.parse(window.localStorage.getItem("song"));

        song.forEach((item) => {
            let catOpenMouthTimeout = (item.note.includes("sadViolin") || item.note.includes("dunDunDun")
                                       || item.note.includes("electricSaw") || item.note.includes("pig")
                                       || item.note.includes("pig")) ? 400 : 100;

            setTimeout(() => {
                play(item.note, catElement, -1);

                setTimeout(() => {
                    unPlay(catElement, -1);
                }, catOpenMouthTimeout);

            }, item.time);
        })
    }

    function modalButtonClicked(buttonType, name, description) {
        _logsForModal(buttonType);

        if (buttonType === 'cancel') {
            setModalShow(false);
            setOpenRecordPanel(false);
            setDisableOnStop(false);

            dispatch(clearRecordInLocalStorage());
        }

        if (buttonType === 'save') {
            _logsForRecords("SAVE");
            setModalShow(false);
            setOpenRecordPanel(false);
            setDisableOnStop(false);

            const song = JSON.parse(window.localStorage.getItem("song"));
            dispatch(saveRecord(token, cat, instrument, song, name, description));
            dispatch(clearRecordInLocalStorage());
        }
    }

    function _logsForRecords(functionName) {
        console.log(functionName, new Date());
        console.log(`
            openRecordPanel = ${openRecordPanel}
            disableOnStop = ${disableOnStop}
            timer = ${timer}
            modalShow = ${modalShow}
            record = ${record}
        `);
    }

    function _logsForModal(buttonType) {
        console.log(buttonType, new Date());
    }

    return (
        <>
            {mediaInstruments === null
             ? <h1>Loading...</h1>
             : <>
                 <Audio instrument={mediaInstruments[0]} type="default"/>
                 <Audio instrument={mediaInstruments[1]} type="piano-2"/>
                 <Audio instrument={mediaInstruments[2]} type="piano-3"/>
                 <Audio instrument={mediaInstruments[3]} type="piano-4"/>
                 <Audio instrument={mediaInstruments[4]} type="bass-drum"/>
                 <Audio instrument={mediaInstruments[5]} type="sad-violin"/>
                 <Audio instrument={mediaInstruments[6]} type="dun-dun-dun"/>
                 <Audio instrument={mediaInstruments[7]} type="electric-saw"/>
                 <Audio instrument={mediaInstruments[8]} type="heart-bit"/>
                 <Audio instrument={mediaInstruments[9]} type="cows"/>
                 <Audio instrument={mediaInstruments[10]} type="pig"/>

                 {mediaCats === null
                  ? <h1>Loading...</h1>
                  : <Jumbotron>
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
                                          <img id="catDefault" className="cat"
                                               src={apiUrl + mediaCats[0].url.closeMouth}
                                               alt="cat with close mouth"/>
                                      </Tab.Pane>
                                      <Tab.Pane eventKey="catPixel">
                                          <img id="catPixel" className="cat" src={apiUrl + mediaCats[1].url.closeMouth}
                                               alt="cat with close mouth"/>
                                      </Tab.Pane>
                                      <Tab.Pane eventKey="catPirate">
                                          <img id="catPirate" className="cat" src={apiUrl + mediaCats[2].url.closeMouth}
                                               alt="cat with close mouth"/>
                                      </Tab.Pane>
                                      <Tab.Pane eventKey="catWinter">
                                          <img id="catWinter" className="cat" src={apiUrl + mediaCats[3].url.closeMouth}
                                               alt="cat with close mouth"/>
                                      </Tab.Pane>
                                      <Tab.Pane eventKey="catBW">
                                          <img id="catBW" className="cat" src={apiUrl + mediaCats[4].url.closeMouth}
                                               alt="cat with close mouth"/>
                                      </Tab.Pane>
                                  </Tab.Content>
                              </Col>
                          </Row>

                      </Tab.Container>
                  </Jumbotron>
                 }


                 <Tabs
                     id="controlled-tab"
                     className="instrument-tabs"
                     defaultActiveKey="defaultPianoAudios"
                     onSelect={(k) => setInstrumentTabAction(k)}
                     activeKey={instrument}>
                     <Tab eventKey="defaultPianoAudios" title="default-piano">
                         <Instrument cat={cat} instrument={mediaInstruments[0]} keyEvent={keyPressedEvent}
                                     isRecord={record}/>
                     </Tab>
                     <Tab eventKey="piano2" title="piano-2">
                         <Instrument cat={cat} instrument={mediaInstruments[1]} keyEvent={keyPressedEvent}
                                     isRecord={record}/>
                     </Tab>
                     <Tab eventKey="piano3" title="piano-3">
                         <Instrument cat={cat} instrument={mediaInstruments[2]} keyEvent={keyPressedEvent}
                                     isRecord={record}/>
                     </Tab>
                     <Tab eventKey="piano4" title="piano-4">
                         <Instrument cat={cat} instrument={mediaInstruments[3]} keyEvent={keyPressedEvent}
                                     isRecord={record}/>
                     </Tab>
                     <Tab eventKey="bassDrum" title="Bass Drum">
                         <Instrument cat={cat} instrument={mediaInstruments[4]} keyEvent={keyPressedEvent}
                                     isRecord={record}/>
                     </Tab>
                     <Tab eventKey="sadViolin" title="Sad Violin">
                         <Instrument cat={cat} instrument={mediaInstruments[5]} keyEvent={keyPressedEvent}
                                     isRecord={record}/>
                     </Tab>
                     <Tab eventKey="dunDunDun" title="Dun Dun Dun">
                         <Instrument cat={cat} instrument={mediaInstruments[6]} keyEvent={keyPressedEvent}
                                     isRecord={record}/>
                     </Tab>
                     <Tab eventKey="electricSaw" title="Electric Saw">
                         <Instrument cat={cat} instrument={mediaInstruments[7]} keyEvent={keyPressedEvent}
                                     isRecord={record}/>
                     </Tab>
                     <Tab eventKey="heartBit" title="Heart Bit">
                         <Instrument cat={cat} instrument={mediaInstruments[8]} keyEvent={keyPressedEvent}
                                     isRecord={record}/>
                     </Tab>
                     <Tab eventKey="cow" title="Cow">
                         <Instrument cat={cat} instrument={mediaInstruments[9]} keyEvent={keyPressedEvent}
                                     isRecord={record}/>
                     </Tab>
                     <Tab eventKey="pig" title="Pig">
                         <Instrument cat={cat} instrument={mediaInstruments[10]} keyEvent={keyPressedEvent}
                                     isRecord={record}/>
                     </Tab>
                 </Tabs>

                 <div className="button-record">
                     <Button variant="danger" disabled={disableOnStop} onClick={onRecordClicked}>Record</Button>
                     {openRecordPanel
                      ? <>
                          <Button variant="primary" disabled={disableOnStop} onClick={onStopRecordClicked}>Stop</Button>
                          <Timer isActive={timer}/>
                          <Button variant="primary" onClick={onListenButtonClicked} disabled={timer || !isRecordedMusicPlayed}>Listen</Button>
                          <Button variant="primary" onClick={onSaveButtonClicked} disabled={timer || !isRecordedMusicPlayed}>Save</Button>
                          <Button variant="primary" onClick={onCancelRecordClicked} disabled={timer}>Cancel</Button>

                          <OnSaveModal
                              show={modalShow}
                              onEscapeKeyDown={() => setModalShow(false)}
                              onHide={(buttonType, name, description) => modalButtonClicked(
                                  buttonType, name, description)}
                          />
                      </>
                      : null}
                 </div>
             </>
            }
        </>
    )
}