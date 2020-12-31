/* eslint-disable array-callback-return*/
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './SearchPage.css';
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';
import moment from 'moment';


function SearchPage() {

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


    const renderCards = Videos.map((video, index) => {
        var minutes = Math.floor(video.duration / 60);
        var seconds = Math.floor(video.duration - minutes * 60);
        var timestamp = `${minutes}:${seconds}`
        var created = moment(video.createdAt).format("MMM Do YY")


        return <VideoRow key={index} image={video.thumbnail}
        title={video.title}
        channel={video.writer.name}
        views={Math.floor(video.views / 4) + 1}
        timestamp={timestamp}
        channelImage={video.writer.image}
        created = {created}
        videoId = {video._id}
        description = {video.description}
        subscribe = {video.writer.subNum}
         />
    })

    return (
        <div className="searchPage">
            <div className="searchPage_filter">
                <TuneOutlinedIcon />
                <h2>Filter</h2> 
            </div>
            <hr />

            <ChannelRow 
                
                channel="Jonny G."
                verified
                subs="404k Subscriber(s)"
                noOfVideos={342}
                description="Check the channel out for awesome coding projects, nba factoids, league of legends domination, art, dessert recipes and more..."/>
        
        <hr />
        {renderCards}
        </div>

    )
}

export default SearchPage