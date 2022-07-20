import React from 'react'
import groupm from '../images/groupmVideoContent.png'
import disconnect from '../images/diconnectVideoContent.png'
import '../CSS/videocontent.css'
import vid1 from '../images/vid_1.png'
import vid2 from '../images/vid_2.png'
import vid3 from '../images/vid_3.png'
import vid4 from '../images/vid_4.png'

const VideoContent = () => {
    return (
        <div className='container-fluid'>
            <div className="container">
                <div className="d-flex align-items-center my-5 flex-row justify-content-between">
                    <img src={groupm} className="groupm-logo-videocontent" alt="" srcset="" />
                    <img src={disconnect} className="disconnect-btn-videocontent" alt="" srcset="" />
                </div>
                <div className='my-5 text-center d-flex justify-content-center align-items-center'>
                    <div className='video-content-text mt-5'>
                        <span style={{ color: "#001F54", fontWeight: "700", fontSize: "52px" }}>About BREW 2022</span>
                        <p style={{ color: "#121212", fontWeight: "400", fontSize: "22px" }}>In a dynamic environment, ideas evolve rapidly and they have the power to change the course of how things are done. What holds true for an idea today might not hold true tomorrow. But a deeper understanding of content, culture and technology helps in mastering them.</p>
                        <p style={{ color: "#121212", fontWeight: "400", fontSize: "22px" }}>And so, we are inviting marketeers to take the plunge and <span style={{ fontWeight: "700" }}>#DiveIn at BREW.</span> To take the leap, get to the depths, unlearn & relearn from the best thought leaders out there.</p>
                    </div>
                </div>
            </div>
            <div style={{ background: "#001F54" }} className="py-5">
                <div className="container">
                    <div className='d-flex justify-content-center flex-column align-items-center'>
                        <span style={{ color: "white", fontWeight: "700", fontSize: "42px", fontStyle: "italic" }}>Inspiration awaits! </span>
                        <p className='mt-4' style={{ color: "white", fontWeight: "400", fontSize: "26px", fontStyle: "italic" }}>#DiveIn with us as we explore content, culture and technology deeper.</p>
                    </div>
                    <div className="row">
                        <div className="col-md-6 my-5 d-flex justify-content-center">
                            <div className="">
                            <img src={vid1} alt="" srcset="" className='videos-thumbnail' />
                            <p style={{fontSize:"18px",color:"white"}} className="text-center mt-3 videos-details">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                        <div className="col-md-6 my-5 d-flex justify-content-center">
                            <div>
                            <img src={vid2} alt="" srcset="" className='videos-thumbnail' />
                            <p style={{fontSize:"18px",color:"white"}} className="text-center mt-3 videos-details">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                        <div className="col-md-6 my-5 d-flex justify-content-center">
                            <div className="">
                            <img src={vid3} alt="" srcset="" className='videos-thumbnail' />
                            <p style={{fontSize:"18px",color:"white"}} className="text-center mt-3 videos-details">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                        <div className="col-md-6 my-5 d-flex justify-content-center">
                            <div className="">
                            <img src={vid4} alt="" srcset="" className='videos-thumbnail' />
                            <p style={{fontSize:"18px",color:"white"}} className="text-center mt-3 videos-details">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VideoContent