import React, {useEffect, useState} from "react";
import {login} from "../../store/user/actions";
import {selectToken} from "../../store/user/selector";
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router-dom";
import {Button, Container, makeStyles, TextField} from "@material-ui/core";

export default function SignUp() {
    const useStyles = makeStyles((_) => ({
        container: {
            display: 'flex',
            flexWrap: 'wrap',
            flexDirection: "column",
            maxWidth: "400px",
            margin: "auto",
        },
        button: {
            maxWidth: "fit-content",
            margin: "auto",
            marginTop: "30px"
        }
    }));

    const classes = useStyles();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const token = useSelector(selectToken);
    const history = useHistory();

    useEffect(() => {
        if (token !== null) {
            history.push("/");
        }
    }, [token, history]);

    function submitForm(event) {
        console.log("hi");
        event.preventDefault();

        dispatch(login(email, password));

        setEmail("");
        setPassword("");
    }

    return (
        <Container>
            <form className={classes.container}>
                <h1>Login</h1>
                <TextField
                    margin="normal"
                    value={email}
                    onChange={event => setEmail(event.target.value)}
                    required
                    label="email"
                    type="email"
                    autoComplete="current-email"
                    variant="outlined"
                    id="outlined-email-input"
                />

                <TextField
                    margin="normal"
                    value={password}
                    onChange={event => setPassword(event.target.value)}
                    required
                    id="outlined-password-input"
                    label="password"
                    type="password"
                    autoComplete="current-password"
                    variant="outlined"
                />

                <Button className={classes.button} variant="contained" color="primary" type="submit"
                        onClick={submitForm}>
                    Log in
                </Button>
                <a className={classes.button} href={"/signup"}>
                    Click here to sign up
                </a>
            </form>
        </Container>
    );
}
