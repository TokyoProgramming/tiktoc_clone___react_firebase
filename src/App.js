import React, {useState, useEffect} from 'react';
import './App.css';

import Video from "./Components/Video";

import db from './firebase'

function App() {
    const [videos, setVideos] =useState([])
    useEffect(() => {
        db.collection('videos').onSnapshot((snapshot) =>
        setVideos(snapshot.docs.map((doc) => doc.data()))
        );
    },[]);
      return (
        <div className="app">

            <h1>Tik Tok Clone React made by 吉岡裕輔</h1>
                <div className="app__videos">
                    {videos.map(
                        ({channel, description, song, url, likes, messages, share }) => (
                            <Video
                            channel={channel}
                            description={description}
                            song={song}
                            url={url}
                            likes={likes}
                            messages={messages}
                            share={share}
                            />
                        )
                    )}

                </div>
        </div>
      );
}

export default App;
