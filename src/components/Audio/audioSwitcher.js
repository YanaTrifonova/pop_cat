import {
    bassDrum, cow,
    defaultPianoAudios,
    dunDunDun,
    electricSaw,
    heartBit,
    piano2,
    piano3,
    piano4, pig,
    sadViolin
} from "./imports";

export function audioSwitcher(type) {
    switch (type) {
        case "default" : {
            return defaultPianoAudios;
        }
        case "piano-2" : {
            return piano2;
        }
        case "piano-3" : {
            return piano3;
        }
        case "piano-4" : {
            return piano4;
        }
        case "bass-drum" : {
            return bassDrum;
        }
        case "sad-violin" : {
            return sadViolin;
        }
        case "dun-dun-dun" : {
            return dunDunDun;
        }
        case "electric-saw" : {
            return electricSaw;
        }
        case "heart-bit" : {
            return heartBit;
        }
        case "cows" : {
            return cow;
        }
        case "pig" : {
            return pig;
        }
        default :
            return null;
    }
}