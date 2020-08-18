import React, { useRef, useState } from "react";
import './Video.css'

import VideoFooter from "./VideoFooter";
import VideoSidebar from "./VideoSidebar";

function Video({channel, description, song, url, likes, messages, share }){
    const [playing, setPlaying] = useState(false)
    const videoRef = useRef(null);

    const onVideoPress = () => {
        if (playing) {
            videoRef.current.pause();
            setPlaying(false);
        }else {
            videoRef.current.play();
            setPlaying(true);
        }
    };

    return (
        <div className="videos_style">

            <video
                className="video__player"
                loop
                onClick={onVideoPress}
                ref={videoRef}
                src = {url}>
            </video>

            {/*    Video Footer     */}
            <VideoFooter
                channel={channel}
                description={description}
                song={song}
            />

            {/*    Video Sidebar    */}
            <VideoSidebar likes={likes} messages={messages} share={share} />

        </div>
    )
}

export default Video

