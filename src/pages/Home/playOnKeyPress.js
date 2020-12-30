import {play} from "../../components/Instrument/play";

export function playOnKeyPress(key, audioType, cat) {
    switch (key) {
        case "1" :
        case "c" : {
            play(audioType[0], cat);
            break;
        }
        case "2" :
        case "d" : {
            play(audioType[1], cat);
            break;
        }
        case "3" :
        case "e" : {
            play(audioType[2], cat);
            break;
        }
        case "4" :
        case "f" : {
            play(audioType[3], cat);
            break;
        }
        case "5" :
        case "g" : {
            play(audioType[4], cat);
            break;
        }
        case "6" :
        case "a" : {
            play(audioType[5], cat);
            break;
        }
        case "7" :
        case "b" : {
            play(audioType[6], cat);
            break;
        }
        default :
            return null;
    }
}