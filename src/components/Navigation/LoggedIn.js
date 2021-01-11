import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {logOut} from "../../store/user/actions";
import {selectUser} from "../../store/user/selector";
import {Button, Typography} from "@material-ui/core";

export default function LoggedIn() {
    const dispatch = useDispatch();
    const user = useSelector(selectUser);
    return (
        <>
            <Typography style={{padding: ".5rem 1rem"}}>{user.email}</Typography>
            <Button onClick={() => dispatch(logOut())}>Logout</Button>
        </>
    );
}
