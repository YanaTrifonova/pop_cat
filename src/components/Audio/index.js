import React from "react";
import {apiUrl} from "../../config/constants";

export default function Audio(props) {
    const instrument = props.instrument;

    return (
        <>
            {/*C*/}
            <audio id={instrument.name + "Note" + 0} key={0}>
                <source src={apiUrl + instrument.notes[2]} type="audio/mpeg"/>
            </audio>
            {/*D*/}
            <audio id={instrument.name + "Note" + 1} key={1}>
                <source src={apiUrl + instrument.notes[3]} type="audio/mpeg"/>
            </audio>
            {/*E*/}
            <audio id={instrument.name + "Note" + 2} key={2}>
                <source src={apiUrl + instrument.notes[4]} type="audio/mpeg"/>
            </audio>
            {/*F*/}
            <audio id={instrument.name + "Note" + 3} key={3}>
                <source src={apiUrl + instrument.notes[5]} type="audio/mpeg"/>
            </audio>
            {/*G*/}
            <audio id={instrument.name + "Note" + 4} key={4}>
                <source src={apiUrl + instrument.notes[6]} type="audio/mpeg"/>
            </audio>
            {/*A*/}
            <audio id={instrument.name + "Note" + 5} key={5}>
                <source src={apiUrl + instrument.notes[1]} type="audio/mpeg"/>
            </audio>
            {/*B*/}
            <audio id={instrument.name + "Note" + 6} key={6}>
                <source src={apiUrl + instrument.notes[2]} type="audio/mpeg"/>
            </audio>
        </>
    )
}