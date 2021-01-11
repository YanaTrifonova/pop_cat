import React from "react";
import {Button} from "@material-ui/core";

export default function LoggedOut() {
    return (
        <>
            <Button href="/login" color="primary">Login</Button>
        </>
    );
}
