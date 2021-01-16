import React from "react";
import {apiUrl} from "../../config/constants";

export default function Audio(props) {
    const instrument = props.instrument;

    return (
        instrument.notes.map((note, index) => {
            return (
                <audio id={instrument.name + "Note" + index} key={index}>
                    <source src={apiUrl + note} type="audio/mpeg"/>
                </audio>
            )
        })
    )
}