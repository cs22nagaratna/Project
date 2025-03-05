import React from "react";
import "./Login.css"
import { FiSearch } from "react-icons/fi";

const Login=()=>{
    return(
        <div className="contaner">
            <div className="boxes">
                <img src="https://play-lh.googleusercontent.com/76gEFhQto5xMHr2Qf8nWLvm1s0O60clhkwHvxQDSeI3hthf7Zs05JJQeyg5H347DGQ" />
                <h1>naukri</h1>
                <p>Jobs</p>
                <p>Companies</p>
                <p>Services</p>
                <div className="search">
                    <div className="se">
                        Search jobs here
                    </div>
                    <div className="cir">
                        <div className="c"><p><FiSearch /></p></div>
                    </div>    
                </div>
            </div>
        </div>
    );
};
export default Login;