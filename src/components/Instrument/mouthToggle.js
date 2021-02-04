import {apiUrl} from "../../config/constants";

export function mouthToggle(cat, open, index) {
    const cats = JSON.parse(window.localStorage.getItem("cats"));
    let findCat;

    if (index === -1) {
        findCat = cats.find((thatCat) => thatCat.cat === cat?.id);
    } else {
        findCat = cats.find((thatCat) => thatCat.cat + index === cat?.id);
    }

    if (cat) {
        cat.src = open ? apiUrl + findCat.url.openMouth : apiUrl + findCat.url.closeMouth;
    }
}