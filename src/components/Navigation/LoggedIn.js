import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {logOut} from "../../store/user/actions";
import {selectUser} from "../../store/user/selector";
import {Box, Button, makeStyles, Typography} from "@material-ui/core";

export default function LoggedIn() {
    const useStyles = makeStyles((_) => ({
        login: {
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
        },
        email: {
            paddingTop: ".5rem",
            paddingBottom: ".5rem",
            paddingLeft:  "1rem",
            paddingRight:  "1rem"
        }
    }));

    const classes = useStyles();

    const dispatch = useDispatch();
    const user = useSelector(selectUser);

    return (
        <Box className={classes.login}>
            <Typography className={classes.email}>{user.email}</Typography>
            <Button onClick={() => dispatch(logOut())}>Logout</Button>
        </Box>
    );
}
