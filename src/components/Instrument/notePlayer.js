export function notePlayer(note) {
    note.currentTime = 0;
    note.play();

    setTimeout(() => {
        note.pause();
    }, 3000)
}