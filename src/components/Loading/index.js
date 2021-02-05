import React from "react";
import loadingCat from "../../images/loading_cat.gif";

export default function Loading() {
    return (
        <div>
            <img src={loadingCat} alt="Loading..."/>
        </div>
    );
}
