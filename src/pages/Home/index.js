import {Jumbotron} from "react-bootstrap";
import React, {useEffect, useState} from "react";
import Button from "react-bootstrap/Button";

import "./index.css";

import aNoteAudio from "../../media/a_note.mp3";
import bNoteAudio from "../../media/b_note.mp3";
import cNoteAudio from "../../media/c_note.mp3";
import dNoteAudio from "../../media/d_note.mp3";
import eNoteAudio from "../../media/e_note.mp3";
import fNoteAudio from "../../media/f_note.mp3";
import gNoteAudio from "../../media/g_note.mp3";

import catWithOpenMouth from "../../images/cat_default_open_mouth.jpg";
import catWithCloseMouth from "../../images/cat_default_close_mouth.jpg";

export function Home() {
    const [aNote, aNoteSetter] = useState(null);
    const [bNote, bNoteSetter] = useState(null);
    const [cNote, cNoteSetter] = useState(null);
    const [dNote, dNoteSetter] = useState(null);
    const [eNote, eNoteSetter] = useState(null);
    const [fNote, fNoteSetter] = useState(null);
    const [gNote, gNoteSetter] = useState(null);

    const [cat, catSetter] = useState(null)

    useEffect(() => {
        aNoteSetter(document.getElementById('aAudio'));
        bNoteSetter(document.getElementById('bAudio'));
        cNoteSetter(document.getElementById('cAudio'));
        dNoteSetter(document.getElementById('dAudio'));
        eNoteSetter(document.getElementById('eAudio'));
        fNoteSetter(document.getElementById('fAudio'));
        gNoteSetter(document.getElementById('gAudio'));

        catSetter(document.getElementById('cat'));
    }, [aNote, bNote, cNote, dNote, eNote, fNote, gNote, cat])

    function playNote(noteType) {
        switch (noteType) {
            case "a" : {
                aNote.currentTime = 0;
                aNote.play();
                break;
            }
            case "b" : {
                bNote.currentTime = 0;
                bNote.play();
                break;
            }
            case "c" : {
                cNote.currentTime = 0;
                cNote.play();
                break;
            }
            case "d" : {
                dNote.currentTime = 0;
                dNote.play();
                break;
            }
            case "e" : {
                eNote.currentTime = 0;
                eNote.play();
                break;
            }
            case "f" : {
                fNote.currentTime = 0;
                fNote.play();
                break;
            }
            case "g" : {
                gNote.currentTime = 0;
                gNote.play();
                break;
            }
            default :
                return;
        }

        cat.src = catWithOpenMouth;
    }

    function unPlay() {
        cat.src = catWithCloseMouth;
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

            <Jumbotron>
                <h1>Home</h1>
                <img id="cat" src={catWithCloseMouth} alt="cat with close mouth"/>
            </Jumbotron>

            <div id="instrument">
                <Button id="c" onMouseDown={() => playNote("c")} onMouseUp={unPlay} className="box">c</Button>
                <Button id="d" onMouseDown={() => playNote("d")} onMouseUp={unPlay} className="box">d</Button>
                <Button id="e" onMouseDown={() => playNote("e")} onMouseUp={unPlay} className="box">e</Button>
                <Button id="f" onMouseDown={() => playNote("f")} onMouseUp={unPlay} className="box">f</Button>
                <Button id="g" onMouseDown={() => playNote("g")} onMouseUp={unPlay} className="box">g</Button>
                <Button id="a" onMouseDown={() => playNote("a")} onMouseUp={unPlay} className="box">a</Button>
                <Button id="b" onMouseDown={() => playNote("b")} onMouseUp={unPlay} className="box">b</Button>
            </div>
        </>

    )
}