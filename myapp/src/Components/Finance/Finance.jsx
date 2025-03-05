import React from "react";
import "./Finance.css"
import { FaStar } from "react-icons/fa6";
import { IoCalendarClearOutline } from "react-icons/io5";
import { SlLocationPin } from "react-icons/sl";

const Finance=()=>{
    return(
        <div className="con">
            <div className="finance">
                <div className="senior">
                    <div className="senior1">
                        <h2>Senior  Finance  Executive  Revenue  To  Record  CA  Freshers</h2>
                        <div className="unacademy">
                            <h3>Unacademy  <FaStar /> 3.0  1945 Reviews</h3>
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
                    <h3>Posted: 17 days ago  Openings: 2  Application:884</h3>
                </div>
            </div>
            <div className="job">
                
            </div>
        </div>
    )
}
export default Finance