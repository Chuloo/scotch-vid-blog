import React from "react";
import "lodash/lodash.js";
import cloudinary from "cloudinary-core";
import "cloudinary-video-player/dist/cld-video-player.js"
import "cloudinary-video-player/dist/cld-video-player.min.css"
import "jquery/dist/jquery.js"
import './videoplayer.css'
import Helmet from "react-helmet"

class VideoPlayer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            loaded: false
        }
    }

    componentDidMount(){
        const {publicID, title, subtitle, muted} = this.props

        let cl = cloudinary.Cloudinary.new({cloud_name: "chuloo", secure: true})
        let videoPlayer = cl.videoPlayer('cl-vp',{
            loop: true,
            controls: true,
            muted: muted ? true : false,
        })
        videoPlayer.source(publicID ? publicID: "", {info:{title: title ? title : "", subtitle: subtitle ? subtitle : ""}})
    }

    render(){
        return (
            <div className="video-player">
                    <video 
                        autoPlay
                        id="cl-vp">
                    </video>
            </div>
            
        )
    }
}

export default VideoPlayer