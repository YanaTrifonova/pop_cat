import React, {useEffect, useState} from "react";
import {signUp} from "../../store/user/actions";
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

    const [name, setName] = useState("");
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
        event.preventDefault();

        dispatch(signUp(name, email, password));

        setEmail("");
        setPassword("");
        setName("");
    }

    return (
        <Container>
            <form className={classes.container}>
                <h1>Signup</h1>
                <TextField
                    id="outlined-name-input"
                    margin="normal"
                    value={name}
                    onChange={event => setName(event.target.value)}
                    type="text"
                    variant="outlined"
                    label="name"
                    autoComplete="current-name"
                    placeholder="name"
                    required
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
                    helperText="We'll never share your email with anyone else."
                />
                <Button className={classes.button} variant="contained" color="primary" type="submit"
                        onClick={submitForm}>
                    Sign up
                </Button>
                <a className={classes.button} href={"/login"}>
                    Click here to log in
                </a>
            </form>
        </Container>
    );
}
