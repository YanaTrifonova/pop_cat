import React, {useEffect, useState} from "react";
import {Jumbotron} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {getData} from "../../store/allPosts/action";
import {getAllPosts} from "../../store/allPosts/selector";
import Post from "../../components/Post";
import Audio from "../../components/Audio";
import {preLoadInstruments} from "../../store/preLoadMedia/actions";

import "./index.css";

export default function Discover() {
    const dispatch = useDispatch();
    const posts = useSelector(getAllPosts);

    const [mediaInstruments, setMediaInstruments] = useState(null);

    useEffect(() => {
        dispatch(getData());

        dispatch(preLoadInstruments())
            .then(() => setMediaInstruments(JSON.parse(window.localStorage.getItem("instruments"))));

    }, [dispatch, posts.length]);

    return (
        <>
            {mediaInstruments === null
             ? <h1>Loading...</h1>
             : <>
                 <Audio instrument={mediaInstruments[0]} type="default"/>
                 <Audio instrument={mediaInstruments[1]} type="piano-2"/>
                 <Audio instrument={mediaInstruments[2]} type="piano-3"/>
                 <Audio instrument={mediaInstruments[3]} type="piano-4"/>
                 <Audio instrument={mediaInstruments[4]} type="bass-drum"/>
                 <Audio instrument={mediaInstruments[5]} type="sad-violin"/>
                 <Audio instrument={mediaInstruments[6]} type="dun-dun-dun"/>
                 <Audio instrument={mediaInstruments[7]} type="electric-saw"/>
                 <Audio instrument={mediaInstruments[8]} type="heart-bit"/>
                 <Audio instrument={mediaInstruments[9]} type="cows"/>
                 <Audio instrument={mediaInstruments[10]} type="pig"/>
             </>}

            <Jumbotron>
                <h1>Discover songs</h1>
            </Jumbotron>

            <div className="post-container">
                {posts?.length === 0
                 ? <h1>Loading..</h1>
                 : <Post data={posts}/>}
            </div>
        </>
    )
}