import React from 'react'
import './Sidebar.css'
import SidebarRow from './SidebarRow';
import HomeIcon from "@material-ui/icons/Home";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";

function Sidebar() {
    return (
        <div className="sidebar">
            {window.location.pathname === "/" ? <a href="/"><SidebarRow selected Icon={HomeIcon} title="Home" /> </a>: <a href="/"><SidebarRow Icon={HomeIcon} title="Home" /></a>}
            <a href="/video/upload"><SidebarRow Icon={OndemandVideoIcon} title="Upload video" /></a>
            <a href="/subscription"><SidebarRow Icon={SubscriptionsIcon} title="Subscription" /></a>

            <hr />
            <a href="/trending"><SidebarRow Icon={WhatshotIcon} title="Trending" /></a>
            <SidebarRow  Icon={ThumbUpAltOutlinedIcon} title="Liked videos" />
            <SidebarRow Icon={WatchLaterIcon} title="Watch Later" />
            <SidebarRow Icon={ExpandMoreOutlinedIcon} title="Show more" />
            <hr />

        </div>
    )
}

export default Sidebar
