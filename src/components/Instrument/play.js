import {notePlayer} from "./notePlayer";
import {openCatMouth} from "./openCatMouth";

export function play(note, cat) {
    notePlayer(note);
    openCatMouth(cat);
}