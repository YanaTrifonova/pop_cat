import {Button} from "react-bootstrap";
import React, {useState} from "react";
import {defaultNotes} from "./export";
import {play} from "./play";
import {unPlay} from "./unPlay";

import "./index.css";

export default function Instrument(props) {
    const notes = props.notes;
    const cat = document.getElementById(props.cat);
    const keyEvent = props.keyEvent;

    const [clickedButtonId, setClickedButtonId] = useState(null);

    function clicked(buttonId) {
        setClickedButtonId(buttonId);
    }

    function unClicked() {
        setClickedButtonId(null);
    }

    return (
        <div className="instrument">
            {notes.map((note, index) => {
                return (
                    <Button key={index}
                            id={defaultNotes[index]}
                            className="button-key"
                            onMouseDown={() => {
                                play(note, cat);
                                clicked(defaultNotes[index])
                            }}
                            onMouseUp={() => {
                                unPlay(cat);
                                unClicked();
                            }}
                            variant={clickedButtonId === defaultNotes[index] || keyEvent === defaultNotes[index] ? 'danger' : "primary"}>
                        {defaultNotes[index]}
                    </Button>
                )
            })}
        </div>
    );
}