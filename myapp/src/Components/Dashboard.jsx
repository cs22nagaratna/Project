import React from "react";
import "./Dashboard.css"
import { CiHeart } from "react-icons/ci";

const Dashboard=()=>{
    return(
        <div className="container">
            <div className="contant">
                <h1>Fresh recommendation</h1>
                <div className="box">
                    <div className="box1">
                        <div className="top">
                            <img src="https://assets-news.housing.com/news/wp-content/uploads/2022/03/27180925/featured-compressed-36-686x400.jpg"></img>
                            <div className="icon21">
                                <CiHeart />
                            </div>
                            <div className="but">
                                <button>FEATURED</button>
                            </div>
                        </div>
                        <div className="bottom">
                            <a>₹ 14,500<br/>
                            <a>2 Bds -2 Ba -900 ft2<br/>
                            <a>Makhmalabad, nashik 422004<br/>
                            <a>MAKHAMALABED GAOTHAN NASHIK<a>3 DAYS AGO</a></a></a></a></a>
                        </div>
                    </div>
                    <div className="box2">
                        <div className="top">
                            <img src="https://digital.ihg.com/is/image/ihg/ihg-affinity-rates-lp-hero-senior-usen-lvp-1440x617"></img>
                            <div className="icon11">
                                <CiHeart />
                            </div>
                            <div className="but">
                                <button>FEATURED</button>
                            </div>
                        </div>
                        <div className="bottom">
                            <a>₹ 2,500<br/>
                            <a>Willys stering wheel jeep spareparts<br/>
                            <a><br/>
                            <a>MARATHADA CHOWK,BALAPUR HIN...<a>JAN 27</a></a></a></a></a>
                        </div>
                    </div>
                    <div className="box3">
                        <div className="top">
                            <img src="https://arcticfox.com/cdn/shop/files/8_b5937b5b-8c26-4450-a248-3162a20e83a3.jpg?v=1706020146"></img>
                            <div className="icon11">
                                <CiHeart />
                            </div>
                        </div>
                        <div className="bottom">
                            <a>₹ 349<br/>
                            <a>All type Of brand new Bluetooth..<br/>
                            <a><br/>
                            <a>SAMUDRAPUR,MAHARASHTRA<a>2 DAYS AGO</a></a></a></a></a>
                        </div>
                    </div>
                    <div className="box4">
                        <div className="top">
                            <img src="https://media.wired.com/photos/64d53749c859c4a1cdecc556/master/pass/Samsung-Galaxy-Tab-S9-Series-SOURCE-Samsung-Featured-Gear.jpg"></img>
                            <div className="icon11">
                                <CiHeart />
                            </div>
                        </div>
                        <div className="bottom">
                            <a>₹ 30,000<br/>
                            <a>Selling my 6 month old Samsung <br/>
                            <a><br/>
                            <a>SAMUDRAPUR,MIDC,MAHARASHTRA<a>5DAYS AGO</a></a></a></a></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Dashboard;