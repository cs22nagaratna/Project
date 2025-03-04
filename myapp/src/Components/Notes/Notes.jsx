import React from "react";
import "./Notes.css"
import { GoBell } from "react-icons/go";
import { FaCalendarAlt } from "react-icons/fa";

const Notes=()=>{
    return(
        <div className="container">
            <div className="contant1">
                <div className="first">
                    <div className="a1">
                        <img src="https://static.vecteezy.com/system/resources/thumbnails/000/439/863/small/Basic_Ui__28186_29.jpg"/>
                    </div>
                    <div className="a2">
                        <a>Hello,<br/><a>Joko Husein</a></a>
                    </div>
                    <div className="a3">
                    <FaCalendarAlt />
                    </div>
                    <div className="a4">
                    <GoBell />
                    </div>
                </div>
                <div className="second">
                    <h3>On Progress(12) <a>View More</a></h3>
                </div>
                <div className="design">
                    <div className="b1">
                        <div className="c1">
                            <h3>Design UI ToDo APP<br/><a>Friday ,03 July 2022</a></h3>
                            <div className="im"></div>
                        </div>
                        <p>Description</p>
                        <a>Design a simple home pages with <br/><a></a>clean layout and color based on the <a>guidelines.</a></a>
                        <div className="c3"></div>
                    </div>
                    <div className="b2">
                    <div className="c2">
                            <h3>Wee<br/><a>Friday</a></h3>
                        </div>
                        <p>Desc</p>
                        <a>Meet<br/><a></a>pages</a>
                        <div className="c4"></div>
                    </div>
                </div>
                <div className="third">
                    <h3>Completed</h3>
                </div>
            </div>
            <div className="contant2"></div>
        </div>
    )
}
export default Notes;