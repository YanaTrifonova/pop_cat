import {apiUrl} from "../../config/constants";

export function mouthToggle(cat, open) {
    const cats = JSON.parse(window.localStorage.getItem("cats"));
    const findCat = cats.find((thatCat) => thatCat.cat === cat?.id);
    cat.src = open ? apiUrl + findCat.url.openMouth : apiUrl + findCat.url.closeMouth;
}