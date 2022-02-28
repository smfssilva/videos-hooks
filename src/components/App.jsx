import React, {useState, useEffect} from "react";
import useVideos from "../hooks/useVideos";

import SearchBar from "./SeachBar.";
import VideoList from "./VideoList"
import VideoDetail from "./VideoDetail"

const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, search] = useVideos('cars')

  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos])

  return (
    <div className="ui container" style={{marginTop: '50px'}}>
      <SearchBar onFormSubmit={search} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList 
              videoSelect={setSelectedVideo}
              videos={videos} 
            />
          </div>
        </div>
      </div>
    </div>
  )

}

export default App;