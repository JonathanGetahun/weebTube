import React, { useEffect, useState } from 'react'
import { FaCode } from "react-icons/fa";
import axios from 'axios';
import moment from 'moment';

import VideoCard from './VideoCard';
import './LandingPage.css';

function LandingPage() {

    const [Videos, setVideos] = useState([])

    useEffect(() => {
        axios.get('/api/video/getVideos')
            .then(response => {
                if (response.data.success) {
                    setVideos(response.data.videos)
                } else {
                    alert('Failed to get Videos')
                }
            })
    }, [])



    const renderCards = Videos.map(video => {
        var minutes = Math.floor(video.duration / 60);
        var seconds = Math.floor(video.duration - minutes * 60);
        var timestamp = `${minutes}:${seconds}`
        var created = moment(video.createdAt).format("MMM Do YY")

        return <VideoCard image={video.thumbnail} 
        title={video.title} 
        channel={video.writer.name}
        views={video.views}
        timestamp={timestamp}
        channelImage={video.writer.image}
        created = {created}
        videoId = {video._id}/>
    
    })

    return (
        <div className="recommendedVideos">
            <h2>Recommended</h2>
            <div className="recommendedVideos_videos">
                {renderCards}
            </div>
        </div>
    )


}


export default LandingPage