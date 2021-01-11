import catWithOpenMouth from "../../images/default/cat_default_open_mouth.jpg";
import pixelCatWithOpenMouth from "../../images/pixel/cat_pixel_open_mouth.jpg";
import pirateCatWithOpenMouth from "../../images/pirate/cat_pixel_open_mouth.png";
import winterCatWithOpenMouth from "../../images/winter/cat_winter_open_mouth.png";
import BWCatWithOpenMouth from "../../images/b&w/cat_bw_open_mouth.png";

import catWithCloseMouth from "../../images/default/cat_default_close_mouth.jpg";
import pixelCatWithCloseMouth from "../../images/pixel/cat_pixel_close_mouth.jpg";
import pirateCatWithCloseMouth from "../../images/pirate/cat_pirate_close_mouth.png";
import winterCatWithCloseMouth from "../../images/winter/cat_winter_close_mouth.png";
import BWCatWithCloseMouth from "../../images/b&w/cat_bw_close_mouth.png";

export function mouthToggle(cat, open) {
    switch (cat?.id) {
        case 'catDefault' : {
            cat.src = open ? catWithOpenMouth : catWithCloseMouth;
            break;
        }
        case 'catPixel' : {
            cat.src = open ? pixelCatWithOpenMouth : pixelCatWithCloseMouth;
            break;
        }
        case 'catPirate' : {
            cat.src = open ? pirateCatWithOpenMouth : pirateCatWithCloseMouth;
            break;
        }
        case 'catWinter' : {
            cat.src = open ? winterCatWithOpenMouth : winterCatWithCloseMouth;
            break;
        }
        case 'catBW' : {
            cat.src = open ? BWCatWithOpenMouth : BWCatWithCloseMouth;
            break;
        }
        default :
            return null;
    }
}