import React from "react";
import {audioSwitcher} from "./audioSwitcher";

export default function Audio(props) {
    const ids = props.id;
    const type = props.type;
    const audios = audioSwitcher(type);

    return (
        ids.map((id, index) => {
            return (
                <audio id={id} key={index}>
                    <source src={audios[index]} type="audio/mpeg"/>
                </audio>
            )
        })
    )
}