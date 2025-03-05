import React from "react";
import "./Notes.css"
import { GoBell } from "react-icons/go";
import { TbUsersGroup } from "react-icons/tb";
import { FaUser } from "react-icons/fa6";
import { FaRegClock } from "react-icons/fa6";
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
                            <div className="im">
                            <TbUsersGroup />
                            </div>
                        </div>
                        <p>Description</p>
                        <a>Design a simple home pages with <br/><a></a>clean layout and color based on the <a>guidelines.</a></a><br/>
                        <div className="cir">
                            <div className="cir1">
                                <div className="te">
                                    <p>Terms:</p>
                                </div>
                                <div className="d1">
                                    <div className="e1"></div>
                                    <div className="e1"></div>
                                    <div className="e1"></div>
                                    <div className="e1"></div>
                                </div>
                            </div>
                            <div className="cir2">
                                <div className="pr">
                                    <p>Progress:</p>
                                </div>
                                <div className="d2">
                                    <div className="e2">
                                        <div className="progress-circle"></div>
                                    </div>
                                    <div className="e3">78%</div>
                                </div>
                            </div>
                        </div>
                        <div className="c3"></div>
                    </div>
                    <div className="b2">
                        <div className="c2">
                            <h3>Wee<br/><a>Friday</a></h3>
                        </div>
                        <p>Desc</p>
                        <a>Meet<br/><a></a>pages</a>
                        <div className="ci">
                            <div className="cir1">
                                <div className="te">
                                    <p>Terms:</p>
                                </div>
                                <div className="d1">
                                    <div className="e1"></div>
                                    <div className="e1"></div>
                                </div>
                            </div>
                        </div>    
                        <div className="c4"></div>
                    </div>
                </div>
                <div className="third">
                <h3>Completed<a>View More</a></h3>
                </div>
                <div className="four">
                    <div className="row1">
                        <div className="r1"></div>
                        <div className="r2">
                            <p>Meeting with Client</p>
                            <a>Redesign motion graphic</a>
                        </div>
                        <div className="r3"></div>
                    </div>
                    <div className="row2">
                        <div className="q1"></div>
                        <div className="q2">
                            <a>Today 11:25 PM</a>
                        </div>
                        <div className="q3">
                            <div className="w1"></div>
                            <div className="w2"></div>
                        </div>
                    </div>
                </div>
                <div className="five">
                    <div className="row1">
                        <div className="r1"></div>
                        <div className="r2">
                            <p>Task ExploreNFT</p>
                            <a>Explore design mobile UI.</a>
                        </div>
                        <div className="r3"></div>
                    </div>
                    <div className="row2">
                        <div className="q1"></div>
                        <div className="q2">
                            <a>01 July 10:30 AM</a>
                        </div>
                        <div className="q3">
                            <div className="w1"></div>
                            <div className="w2"></div>
                        </div>
                    </div>
                </div>
                <div className="six">
                    <h3>+ Create New</h3>
                </div>
            </div>
            <div className="contant2">
                <div className="all">
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
                                <div className="im">
                                <TbUsersGroup />
                                </div>
                            </div>
                        </div>
                        <div className="b2">
                            <div className="c2">
                                <h3>Wee<br/><a>Friday</a></h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="contact">
                    <div className="m"></div>
                    <h2>New Task ToDo</h2>
                    <div className="cov">
                        <h3>Title Task</h3>
                        <input type="box" placeholder="Add Task Name.."/>
                        <h3>Category</h3>
                        <div className="input">
                            <div className="i1"><FaUser /> Personal</div>
                            <div className="i2"><TbUsersGroup /> Teams</div>
                        </div>
                        <h3>Descrption</h3>
                        <div className="add">
                            <p>Add  Descrption..</p>
                        </div>
                        <div className="date">
                            <div className="date1">
                                <h3>Date</h3>
                                <div className="d1"><FaCalendarAlt />   dd/mm/yy</div>
                                <div className="d2">Cancle</div>
                            </div>
                            <div className="time">
                                <h3>Time</h3>
                                <div className="t1"><FaRegClock />   hh :mm</div>
                                <div className="t2">Create</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Notes;