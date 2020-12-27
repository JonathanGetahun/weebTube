import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import './VideoCard.css'
import { makeStyles } from '@material-ui/core/styles';
import blueGrey from '@material-ui/core/colors/blueGrey';


const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    blueGrey: {
      color: theme.palette.getContrastText(blueGrey[500]),
      backgroundColor: blueGrey[500],
    }
  }));

function VideoCard({ image, title, channel, views, timestamp, channelImage, created, videoId}) {
    const classes= useStyles();
    return (
        <div className="videoCard">
            <a href={`/video/${videoId}`} >
            <img className="videoCard_thumbnail" src={`http://localhost:5000/${image}`} alt="thumbnail" />
            <div className="videoCard_info">
                <Avatar className= {classes.blueGrey}>{channel[0]}</Avatar>

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
