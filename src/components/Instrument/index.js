import {Button} from "react-bootstrap";
import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {defaultNotes} from "./export";
import {play} from "./play";
import {unPlay} from "./unPlay";
import {recordPreSaver} from "../../store/record/actions";

import "./index.css";

export default function Instrument(props) {
    const dispatch = useDispatch();

    const notes = props.notes;
    const cat = document.getElementById(props.cat);
    const keyEvent = props.keyEvent;
    const isRecord = props.isRecord;

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

                                if (isRecord) {
                                    dispatch(recordPreSaver(note.id, Date.now()));
                                }
                                clicked(defaultNotes[index]);
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