import React from 'react'
import './VideoRow.css'

function VideoRow({views, subs, description, timestamp, channel, title, image, created, videoId, subscribe}) {
    return (
        <div className="videoRow">
            <img src={`http://localhost:5000/${image}`} alt="thumbnail" />
            <a href={`/video/${videoId}`}>
            <div className="videoRow_text">
                <h3>{title}</h3>
                <p className="videoRow_headline">
                    {channel} • <span className="videoRow_subs"><span className="videoRow_subsNumber">{subscribe}</span> Subscribers</span>
                     • {views} views • {timestamp} • Posted: {created}
                </p>
                <p className="videoRow_description">{description}</p>
            </div>
            </a>
        </div>
    )
}

export default VideoRow