import React from "react";
import {defaultPianoAudios, piano2, piano3, piano4, bassDrum, sadViolin, dunDunDun, electricSaw, heartBit, cow, pig} from "./imports";

export default function Audio(props) {
    const ids = props.id;
    const type = props.type;
    let audios;

    switch (type) {
        case "default" : {
            audios = defaultPianoAudios;
            break;
        }
        case "piano-2" : {
            audios = piano2;
            break;
        }
        case "piano-3" : {
            audios = piano3;
            break;
        }
        case "piano-4" : {
            audios = piano4;
            break;
        }
        case "bass-drum" : {
            audios = bassDrum;
            break;
        }
        case "sad-violin" : {
            audios = sadViolin;
            break;
        }
        case "dun-dun-dun" : {
            audios = dunDunDun;
            break;
        }
        case "electric-saw" : {
            audios = electricSaw;
            break;
        }
        case "heart-bit" : {
            audios = heartBit;
            break;
        }
        case "cows" : {
            audios = cow;
            break;
        }
        case "pig" : {
            audios = pig;
            break;
        }
        default :
            return null;
    }

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