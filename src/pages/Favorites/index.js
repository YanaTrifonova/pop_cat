import {Jumbotron} from "react-bootstrap";
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {selectToken, selectUserId} from "../../store/user/selector";
import Audio from "../../components/Audio";
import LoadingSpinner from "../../components/Spinner";
import Post from "../../components/Post";
import {preLoadInstruments} from "../../store/preLoadMedia/actions";
import {getData} from "../../store/myFavourites/actions";
import {getMyFavouritePosts} from "../../store/myFavourites/selector";
import {likeSelector} from "../../store/likes/selector";
import {favouriteSelector} from "../../store/favourites/selector";

export default function Favorites() {
    const token = useSelector(selectToken);
    const userId = useSelector(selectUserId);
    const posts = useSelector(getMyFavouritePosts);
    const likeChangeSelector = useSelector(likeSelector);
    const favouriteChangerSelector = useSelector(favouriteSelector);

    const dispatch = useDispatch();
    const [mediaInstruments, setMediaInstruments] = useState(null);

    useEffect(() => {
        console.log("USER", userId);
        if (userId !== undefined) {
            dispatch(getData(userId, token));
        }

        if (window.localStorage.getItem("instruments") === null) {
            dispatch(preLoadInstruments())
                .then(() => setMediaInstruments(JSON.parse(window.localStorage.getItem("instruments"))));
        } else {
            setMediaInstruments(JSON.parse(window.localStorage.getItem("instruments")));
        }

        // eslint-disable-next-line
    }, [dispatch, userId, likeChangeSelector, favouriteChangerSelector]);

    return (
        <>
            {token === null
             ? <a href={'/login'}>Please log in or sign up to see this page</a>
             : <>
                 {mediaInstruments === null
                  ? <LoadingSpinner />
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
                     {posts?.length === 1
                      ? <h1>Favorite song</h1>
                      : <h1>Favorite songs</h1>}
                 </Jumbotron>

                 <div className="post-container">
                     {posts?.length === 0
                      ? <h1>No posts were added to favourites</h1>
                      : <Post data={posts} postOptions={false}/>}
                 </div>
             </>
            }
        </>
    )
}