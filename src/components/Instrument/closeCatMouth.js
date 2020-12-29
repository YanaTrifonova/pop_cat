import catWithCloseMouth from "../../images/default/cat_default_close_mouth.jpg";
import pixelCatWithCloseMouth from "../../images/pixel/cat_pixel_close_mouth.jpg";
import pirateCatWithCloseMouth from "../../images/pirate/cat_pirate_close_mouth.png";
import winterCatWithCloseMouth from "../../images/winter/cat_winter_close_mouth.png";
import BWCatWithCloseMouth from "../../images/b&w/cat_bw_close_mouth.png";

export function closeCatMouth(cat) {
    switch (cat.id) {
        case 'catDefault' : {
            cat.src = catWithCloseMouth;
            break;
        }
        case 'catPixel' : {
            cat.src = pixelCatWithCloseMouth;
            break;
        }
        case 'catPirate' : {
            cat.src = pirateCatWithCloseMouth;
            break;
        }
        case 'catWinter' : {
            cat.src = winterCatWithCloseMouth;
            break;
        }
        case 'catBW' : {
            cat.src = BWCatWithCloseMouth;
            break;
        }
        default : {
            cat.src = catWithCloseMouth;
            break;
        }
    }
}
