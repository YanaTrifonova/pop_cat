export function notePlayer(noteType, aNote, bNote, cNote, dNote, eNote, fNote, gNote) {
    switch (noteType) {
        case "a" : {
            aNote.currentTime = 0;
            aNote.play();
            break;
        }
        case "b" : {
            bNote.currentTime = 0;
            bNote.play();
            break;
        }
        case "c" : {
            cNote.currentTime = 0;
            cNote.play();
            break;
        }
        case "d" : {
            dNote.currentTime = 0;
            dNote.play();
            break;
        }
        case "e" : {
            eNote.currentTime = 0;
            eNote.play();
            break;
        }
        case "f" : {
            fNote.currentTime = 0;
            fNote.play();
            break;
        }
        case "g" : {
            gNote.currentTime = 0;
            gNote.play();
            break;
        }
        default :
            return;
    }
}