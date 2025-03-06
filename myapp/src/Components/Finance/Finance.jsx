import React from "react";
import "./Finance.css"
import { FaStar } from "react-icons/fa6";
import { IoCalendarClearOutline } from "react-icons/io5";
import { SlLocationPin } from "react-icons/sl";
import { GoDotFill } from "react-icons/go";
import { CiStar } from "react-icons/ci";

const Finance=()=>{
    return(
        <div className="con">
            <div className="finance">
                <div className="senior">
                    <div className="senior1">
                        <h2>Senior  Finance  Executive  Revenue  To  Record  CA  Freshers</h2>
                        <div className="unacademy">
                            <h3>Unacademy  <a><FaStar /></a> 3.0  1945 Reviews</h3>
                            <a><IoCalendarClearOutline />0.2 years<a>₹ Not Disclosed</a></a><br/>
                            <a><SlLocationPin />Bengaluru</a>
                        </div>
                    </div>
                    <div className="icon">
                        <div className="icon1">
                            <img src="https://play-lh.googleusercontent.com/DT0jm91vA_rOkxwatXhI4yVpjU4KI0augje6ZJGYxEyNjKvIhcQt8npiLHf5-ydclsqe" />
                        </div>
                        <h3>Send me jobs like this</h3>
                    </div>
                </div>
                <div className="pos">
                    <h3>Posted: <a>17 days ago</a>  Openings: <a>2</a>   Application:<a>884</a></h3>
                    <div className="register">
                        <h3>Register to apply</h3>
                    </div>
                    <div className="login">
                        <h3>Login to apply</h3>
                    </div>
                </div>
            </div>
            <div className="job">
                <h2>Job description</h2>
                <div className="bengaluru">
                    <h3>Unacademy - Bengalore</h3>
                    <a>Position: Senior Finance Executive Revenue</a>
                </div>
                <div className="jobs">
                    <h2>Job Description</h2>
                    <p><GoDotFill /> Conduct a three-way revenue reconciliation (Revenue to Record).</p>
                </div>
                <div className="read">
                    <h3>read more</h3>
                </div>
                <div className="key">
                    <h2>Key Skills</h2>
                    <p>Skills highlighted with '<CiStar />' are preferred keyskils</p>
                </div>
                <div className="star">
                    <CiStar /> Ca
                </div>
                <div className="reco">
                    <div className="revenue">
                        <a>Revenue Reconciliation</a>
                    </div>
                    <div className="filing">
                        <p>Gst Filing</p>
                    </div>
                    <div className="gst">
                        <p>Gst</p>
                    </div>
                    <div className="recognition">
                        <p>Revenue Recognition</p>
                    </div>
                </div>
                <div className="border"></div>
                <div className="website">
                    <div className="facebook">
                        <img src="https://static.vecteezy.com/system/resources/previews/021/495/985/non_2x/facebook-social-media-logo-icon-free-png.png"/>
                    </div>
                    <div className="x">
                        <img src="https://icon2.cleanpng.com/20240119/phb/transparent-x-icon-black-and-white-x-in-the-1710888893456.webp"/>
                    </div>
                    <div className="in">
                        <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Finance