import {notePlayer} from "./notePlayer";
import {openCatMouth} from "./openCatMouth";

export function play(noteId, cat) {
    notePlayer(document.getElementById(noteId));
    openCatMouth(cat);
}