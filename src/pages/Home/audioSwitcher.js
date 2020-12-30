export function audioSwitcher(instrument, defaultNotes, piano2Notes, piano3Notes, piano4Notes, bassDrumsNotes,
                              sadViolinNotes, dunDunDunNotes, electricSawNotes, heartBitNotes, cowsNotes, pigNotes
) {
    switch (instrument) {
        case "home" : {
            return defaultNotes;
        }
        case "piano-2" : {
            return piano2Notes;
        }
        case "piano-3" : {
            return piano3Notes;
        }
        case "piano-4" : {
            return piano4Notes;
        }
        case "bass-drum" : {
            return bassDrumsNotes;
        }
        case "sad-violin" : {
            return sadViolinNotes;
        }
        case "dun-dun-dun" : {
            return dunDunDunNotes;
        }
        case "electric-saw" : {
            return electricSawNotes;
        }
        case "heart-bit" : {
            return heartBitNotes;
        }
        case "cows" : {
            return cowsNotes;
        }
        case "pig" : {
            return pigNotes;
        }
        default :
            return null;
    }
}