import {notePlayer} from "./notePlayer";
import {openCatMouth} from "./openCatMouth";

/**
 * index = -1 means that play goes from home page and there is only on cat of each type
 * otherwise index goes as a part of cat's image id to open/close mouth of particular cat
 **/

export function play(noteId, cat, index) {
    notePlayer(document.getElementById(noteId));
    openCatMouth(cat, index);
}