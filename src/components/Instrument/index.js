import {Button} from "react-bootstrap";
import React from "react";
import {defaultNotes} from "./export";
import {play} from "./play";
import {unPlay} from "./unPlay";

export default function Instrument(props) {
    const notes = props.notes;
    const cat = props.cat;

    console.log("notes", notes);

    return (
        <div className="instrument">
            {notes.map((note, index) => {
                return (
                    <Button key={index}
                            id={note[index]}
                            onMouseDown={() => play(note, cat)}
                            onMouseUp={() => unPlay(cat)}>
                        {defaultNotes[index]}
                    </Button>
                )
            })}
        </div>
    );
}