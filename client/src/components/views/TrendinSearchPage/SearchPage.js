import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './SearchPage.css';
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';
import moment from 'moment';


function SearchPage() {

    const [Videos, setVideos] = useState([])
    const [subscribe, setSubscribeNumber ] = useState([])

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

    Videos.map(video => {axios.post('/api/subscribe/subscribeNumber', {userTo: video.writer._id})
    .then(response => {
        if (response.data.success) {
            setSubscribeNumber(response.data.subscribeNumber)
        } else {
            alert('Failed to get subscriber Number')
        }
    })})



    const renderCards = Videos.map((video, index) => {
        var minutes = Math.floor(video.duration / 60);
        var seconds = Math.floor(video.duration - minutes * 60);
        var timestamp = `${minutes}:${seconds}`
        var created = moment(video.createdAt).format("MMM Do YY")



        return <VideoRow key={index} image={video.thumbnail}
        title={video.title}
        channel={video.writer.name}
        views={video.views}
        timestamp={timestamp}
        channelImage={video.writer.image}
        created = {created}
        videoId = {video._id}
        description = {video.description}
        subscribe = {subscribe} />
    })

    return (
        <div className="searchPage">
            <div className="searchPage_filter">
                <TuneOutlinedIcon />
                <h2>Filter</h2> 
            </div>
            <hr />

            <ChannelRow 
                image="https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5bb22ae84bbe6f67d2e82e05%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D560%26cropX2%3D1783%26cropY1%3D231%26cropY2%3D1455"
                channel="Jonny G."
                verified
                subs="404k Subscribers"
                noOfVideos={342}
                description="Check the channel out for awesome coding projects, nba factoids, league of legends domination, art, dessert recipes and more..."/>
        
        <hr />
        {renderCards}
        </div>

    )
}

export default SearchPage