import catWithOpenMouth from "../../images/default/cat_default_open_mouth.jpg";
import pixelCatWithOpenMouth from "../../images/pixel/cat_pixel_open_mouth.jpg";
import pirateCatWithOpenMouth from "../../images/pirate/cat_pixel_open_mouth.png";
import winterCatWithOpenMouth from "../../images/winter/cat_winter_open_mouth.png";
import BWCatWithOpenMouth from "../../images/b&w/cat_bw_open_mouth.png";

export function openCatMouth(cat) {
    switch (cat.id) {
        case 'catDefault' : {
            cat.src = catWithOpenMouth;
            break;
        }
        case 'catPixel' : {
            cat.src = pixelCatWithOpenMouth;
            break;
        }
        case 'catPirate' : {
            cat.src = pirateCatWithOpenMouth;
            break;
        }
        case 'catWinter' : {
            cat.src = winterCatWithOpenMouth;
            break;
        }
        case 'catBW' : {
            cat.src = BWCatWithOpenMouth;
            break;
        }
        default : {
            cat.src = catWithOpenMouth;
            break;
        }
    }
}