import {Jumbotron} from "react-bootstrap";
import React from "react";

import "./index.css";

export default function AboutPopCatAndMe() {

    return (
        <>
            <Jumbotron>
                <h1>About Pop Cat</h1>
            </Jumbotron>
            <h2 className="header-container">Meme: Pop Cat (cat opens his mouth wide and makes a sound "boop")</h2>
            <div className="text-container">
                <p>At the end of November 2020, videos with a white cat, which opens its mouth wide, making the sound
                    "Boop", gained popularity in social networks. Now the animal "sings along" with hits from the 90s,
                    appears in scenes from Hollywood films and gets into various memes.</p>

                <p>According to Know Your Meme, Twitter user @XavierBFB posted two images of his cat on an unknown
                    Discord server in October - on one of them he used Photoshop to add a huge open mouth. Later, his
                    friend posted a GIF on Reddit, where they practically did not pay attention to it.</p>

                <div className="video">
                    <blockquote className="reddit-card" data-card-created="1609699704"><a
                        href="https://www.reddit.com/r/MEOW_IRL/comments/j7vs4o/meow_irl/">meow_irl</a> from <a
                        href="http://www.reddit.com/r/MEOW_IRL">r/MEOW_IRL</a></blockquote>
                </div>

                <p>A few days later, the GIF with the cat went viral on Twitter: the post with the caption “I can't stop
                    thinking about this video” received 160 thousand likes.</p>

                <div className="video">
                    <blockquote className="twitter-tweet"><p lang="en" dir="ltr">i cannot stop thinking about this
                        video <a href="https://t.co/SR799WZMx6">pic.twitter.com/SR799WZMx6</a></p>&mdash; emily
                        (@partitiongal) <a
                            href="https://twitter.com/partitiongal/status/1314970744569434112?ref_src=twsrc%5Etfw">October
                            10, 2020</a></blockquote>
                </div>

                <p>After that, the owner of the animal, Xavier Arshambaut, said that the cat's name was Oatmeal, and
                    created a GIF based on a video in which the
                    cat "chirps" at the beetle.</p>

                <div className="video">
                    <blockquote className="twitter-tweet" data-dnt="true"><p lang="en" dir="ltr">So there&#39;s a video
                        with
                        some images of my cat Oatmeal out and here&#39;s the full clip of him chirping at a bug. <a
                            href="https://t.co/4MVTWiIknc">pic.twitter.com/4MVTWiIknc</a></p>&mdash; Xavier Archambault
                        (@XavierBFB) <a
                            href="https://twitter.com/XavierBFB/status/1315184155274211329?ref_src=twsrc%5Etfw">October
                            11, 2020</a></blockquote>
                </div>
            </div>

            <Jumbotron>
                <h1>About Me</h1>
                <div className="text-container">
                    <p>If you like my work please feel free to contact me via
                        <a href="https://www.linkedin.com/in/yana-trifonova-0920b3179/"
                           target="_blank"
                           rel="noopener noreferrer"> LinkedIn</a> or
                        <a href="mailto: trifonova.yana.prof@gmail.com?subject=Hello there!"> email</a>. Also you can
                        see my other projects at
                        <a href="https://github.com/YanaTrifonova"
                           target="_blank"
                           rel="noopener noreferrer"> Github
                        </a>.
                    </p>
                </div>
            </Jumbotron>
        </>
    )
}