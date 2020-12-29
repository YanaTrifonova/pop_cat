import {Jumbotron, Tab, Tabs} from "react-bootstrap";
import React, {useEffect, useState} from "react";

import "./index.css";

import catWithCloseMouth from "../../images/default/cat_default_close_mouth.jpg";
import Audio from "../../components/Audio";
import Instrument from "../../components/Instrument";
import {setElementsToArrayById} from "./helpers";
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
    sadViolinId,
    pigId,
} from "./export";

export function Home() {
    const [cat, catSetter] = useState(null);

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

    useEffect(() => {
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

        catSetter(document.getElementById('cat'));
    }, []);

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
                <h1>Home</h1>

                <img id="cat" src={catWithCloseMouth} alt="cat with close mouth"/>
            </Jumbotron>

            <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
                <Tab eventKey="home" title="default-piano">
                    <Instrument cat={cat} notes={defaultNotes}/>
                </Tab>
                <Tab eventKey="piano-2" title="piano-2">
                    <Instrument cat={cat} notes={piano2Notes}/>
                </Tab>
                <Tab eventKey="piano-3" title="piano-3">
                    <Instrument cat={cat} notes={piano3Notes}/>
                </Tab>
                <Tab eventKey="piano-4" title="piano-4">
                    <Instrument cat={cat} notes={piano4Notes}/>
                </Tab>
                <Tab eventKey="bass-drum" title="Bass Drum">
                    <Instrument cat={cat} notes={bassDrumsNotes}/>
                </Tab>
                <Tab eventKey="sad-violin" title="Sad Violin">
                    <Instrument cat={cat} notes={sadViolinNotes}/>
                </Tab>
                <Tab eventKey="dun-dun-dun" title="Dun Dun Dun">
                    <Instrument cat={cat} notes={dunDunDunNotes}/>
                </Tab>
                <Tab eventKey="electric-saw" title="Electric Saw">
                    <Instrument cat={cat} notes={electricSawNotes}/>
                </Tab>
                <Tab eventKey="heart-bit" title="Heart Bit">
                    <Instrument cat={cat} notes={heartBitNotes}/>
                </Tab>
                <Tab eventKey="cows" title="Cow">
                    <Instrument cat={cat} notes={cowsNotes}/>
                </Tab>
                <Tab eventKey="pig" title="Pig">
                    <Instrument cat={cat} notes={pigNotes}/>
                </Tab>
            </Tabs>
        </>

    )
}