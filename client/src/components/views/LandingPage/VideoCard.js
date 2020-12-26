import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import './VideoCard.css'

function VideoCard({ image, title, channel, views, timestamp, channelImage, created, videoId}) {
    
    return (
        <div className="videoCard">
            <a href={`/video/${videoId}`} >
            <img className="videoCard_thumbnail" src={`http://localhost:5000/${image}`} alt="thumbnail" />
            <div className="videoCard_info">
                <Avatar className="videoCard_avatar" alt={channel} src={channelImage} />

                <div className="videoCard_text">
                    <h4>{title}</h4>
                    <p>{channel}</p>
                    <p>
                        {views} views • {timestamp} • {created}
                    </p>
                </div>
            </div>
            </a>
        </div>
    )
}

export default VideoCard
