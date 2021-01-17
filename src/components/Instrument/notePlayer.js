export function notePlayer(note) {
    note.currentTime = 0;
    note.play();

    if (note.id.includes("sadViolin") || note.id.includes("dunDunDun")) {
        setTimeout(() => {
            note.pause();
        }, 1300)
    } if ( note.id.includes("electricSaw"))  {
        setTimeout(() => {
            note.pause();
        }, 2000)
    } else {
        setTimeout(() => {
            note.pause();
        }, 3000)
    }
}