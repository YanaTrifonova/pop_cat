import {Jumbotron, Tab, Tabs, Button} from "react-bootstrap";
import React, {useEffect, useState} from "react";

import "./index.css";

import aNoteAudio from "../../media/defaul-piano/a_note.mp3";
import bNoteAudio from "../../media/defaul-piano/b_note.mp3";
import cNoteAudio from "../../media/defaul-piano/c_note.mp3";
import dNoteAudio from "../../media/defaul-piano/d_note.mp3";
import eNoteAudio from "../../media/defaul-piano/e_note.mp3";
import fNoteAudio from "../../media/defaul-piano/f_note.mp3";
import gNoteAudio from "../../media/defaul-piano/g_note.mp3";

import aNotePiano_2 from "../../media/piano-2/A2.mp3";
import bNotePiano_2 from "../../media/piano-2/B2.mp3";
import cNotePiano_2 from "../../media/piano-2/C3.mp3";
import dNotePiano_2 from "../../media/piano-2/D3.mp3";
import eNotePiano_2 from "../../media/piano-2/E2.mp3";
import fNotePiano_2 from "../../media/piano-2/F2.mp3";
import gNotePiano_2 from "../../media/piano-2/G2.mp3";

import catWithCloseMouth from "../../images/cat_default_close_mouth.jpg";

import {notePlayer} from "./notePlayer";
import {openCatMouth} from "./openCatMouth";
import {closeCatMouth} from "./closeCatMouth";

export function Home() {
    const [aNote, aNoteSetter] = useState(null);
    const [bNote, bNoteSetter] = useState(null);
    const [cNote, cNoteSetter] = useState(null);
    const [dNote, dNoteSetter] = useState(null);
    const [eNote, eNoteSetter] = useState(null);
    const [fNote, fNoteSetter] = useState(null);
    const [gNote, gNoteSetter] = useState(null);

    const [aNotePiano2, aNotePiano2Setter] = useState(null);
    const [bNotePiano2, bNotePiano2Setter] = useState(null);
    const [cNotePiano2, cNotePiano2Setter] = useState(null);
    const [dNotePiano2, dNotePiano2Setter] = useState(null);
    const [eNotePiano2, eNotePiano2Setter] = useState(null);
    const [fNotePiano2, fNotePiano2Setter] = useState(null);
    const [gNotePiano2, gNotePiano2Setter] = useState(null);

    const [cat, catSetter] = useState(null)

    useEffect(() => {
        aNoteSetter(document.getElementById('aAudio'));
        bNoteSetter(document.getElementById('bAudio'));
        cNoteSetter(document.getElementById('cAudio'));
        dNoteSetter(document.getElementById('dAudio'));
        eNoteSetter(document.getElementById('eAudio'));
        fNoteSetter(document.getElementById('fAudio'));
        gNoteSetter(document.getElementById('gAudio'));

        aNotePiano2Setter(document.getElementById('aAudioPiano2'))
        bNotePiano2Setter(document.getElementById('bAudioPiano2'))
        cNotePiano2Setter(document.getElementById('cAudioPiano2'))
        dNotePiano2Setter(document.getElementById('dAudioPiano2'))
        eNotePiano2Setter(document.getElementById('eAudioPiano2'))
        fNotePiano2Setter(document.getElementById('fAudioPiano2'))
        gNotePiano2Setter(document.getElementById('gAudioPiano2'))


        catSetter(document.getElementById('cat'));
    }, [aNote, bNote, cNote, dNote, eNote, fNote, gNote, cat])

    function play(note) {
        notePlayer(note);
        openCatMouth(cat);
    }

    function unPlay() {
        closeCatMouth(cat);
    }

    return (
        <>
            <audio id="aAudio">
                <source src={aNoteAudio} type="audio/mpeg"/>
            </audio>
            <audio id="bAudio">
                <source src={bNoteAudio} type="audio/mpeg"/>
            </audio>
            <audio id="cAudio">
                <source src={cNoteAudio} type="audio/mpeg"/>
            </audio>
            <audio id="dAudio">
                <source src={dNoteAudio} type="audio/mpeg"/>
            </audio>
            <audio id="eAudio">
                <source src={eNoteAudio} type="audio/mpeg"/>
            </audio>
            <audio id="fAudio">
                <source src={fNoteAudio} type="audio/mpeg"/>
            </audio>
            <audio id="gAudio">
                <source src={gNoteAudio} type="audio/mpeg"/>
            </audio>

            <audio id="aAudioPiano2">
                <source src={aNotePiano_2} type="audio/mpeg"/>
            </audio>
            <audio id="bAudioPiano2">
                <source src={bNotePiano_2} type="audio/mpeg"/>
            </audio>
            <audio id="cAudioPiano2">
                <source src={cNotePiano_2} type="audio/mpeg"/>
            </audio>
            <audio id="dAudioPiano2">
                <source src={dNotePiano_2} type="audio/mpeg"/>
            </audio>
            <audio id="eAudioPiano2">
                <source src={eNotePiano_2} type="audio/mpeg"/>
            </audio>
            <audio id="fAudioPiano2">
                <source src={fNotePiano_2} type="audio/mpeg"/>
            </audio>
            <audio id="gAudioPiano2">
                <source src={gNotePiano_2} type="audio/mpeg"/>
            </audio>

            <Jumbotron>
                <h1>Home</h1>
                <img id="cat" src={catWithCloseMouth} alt="cat with close mouth"/>
            </Jumbotron>

            <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
                <Tab eventKey="home" title="default-piano">
                    <div id="instrument">
                        <Button id="c" onMouseDown={() => play(cNote)} onMouseUp={unPlay} className="box">c</Button>
                        <Button id="d" onMouseDown={() => play(dNote)} onMouseUp={unPlay} className="box">d</Button>
                        <Button id="e" onMouseDown={() => play(eNote)} onMouseUp={unPlay} className="box">e</Button>
                        <Button id="f" onMouseDown={() => play(fNote)} onMouseUp={unPlay} className="box">f</Button>
                        <Button id="g" onMouseDown={() => play(gNote)} onMouseUp={unPlay} className="box">g</Button>
                        <Button id="a" onMouseDown={() => play(aNote)} onMouseUp={unPlay} className="box">a</Button>
                        <Button id="b" onMouseDown={() => play(bNote)} onMouseUp={unPlay} className="box">b</Button>
                    </div>
                </Tab>
                <Tab eventKey="profile" title="piano-2">
                    <div id="instrument">
                        <Button id="c" onMouseDown={() => play(cNotePiano2)} onMouseUp={unPlay} className="box">c</Button>
                        <Button id="d" onMouseDown={() => play(dNotePiano2)} onMouseUp={unPlay} className="box">d</Button>
                        <Button id="e" onMouseDown={() => play(eNotePiano2)} onMouseUp={unPlay} className="box">e</Button>
                        <Button id="f" onMouseDown={() => play(fNotePiano2)} onMouseUp={unPlay} className="box">f</Button>
                        <Button id="g" onMouseDown={() => play(gNotePiano2)} onMouseUp={unPlay} className="box">g</Button>
                        <Button id="a" onMouseDown={() => play(aNotePiano2)} onMouseUp={unPlay} className="box">a</Button>
                        <Button id="b" onMouseDown={() => play(bNotePiano2)} onMouseUp={unPlay} className="box">b</Button>
                    </div>
                </Tab>
            </Tabs>
        </>

    )
}