import React from "react";
import {useSelector} from "react-redux";
import {selectToken} from "../../store/user/selector";
import LoggedIn from "./LoggedIn";
import LoggedOut from "./LoggedOut";
import {Box, Button, makeStyles, Typography} from "@material-ui/core";

export default function Navigation() {
    const useStyles = makeStyles((theme) => ({
        root: {
            display: "flex",
            alignItems: "center",
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            marginRight: theme.spacing(4),
        },
        menuLogin: {
            textAlign: "right",
            flexGrow: 1
        },
        link: {
            color: "inherit",
            "&:hover, &:focus": {
                textDecoration: 'none',
                color: "inherit"
            }
        }
    }));

    const classes = useStyles();

    const token = useSelector(selectToken);

    const loginLogoutControls = token ? <LoggedIn/> : <LoggedOut/>;

    return (
        <Box className={classes.root} color="inherit" p={3}>
            <Typography className={classes.title}><a className={classes.link} href="/">POP CAT SING A
                SONG</a></Typography>
            <Box className={classes.menuButton}>
                <Button href="/" color="primary">Home</Button>
                <Button href="/private" color="primary">My songs</Button>
                <Button href="/discover" color="primary">Discover</Button>
                <Button href="/favorites" color="primary">Favorites</Button>
                <Button href="/about" color="primary">About Me</Button>
            </Box>
            <Box className={classes.menuLogin}>
                {loginLogoutControls}
            </Box>
        </Box>
    );
}
