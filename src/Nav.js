import { BellFilled, SearchOutlined } from '@ant-design/icons';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { selectUser } from './features/userSlice';
import './Nav.css'

const Nav = () => {
    const [show,handleShow] = useState(false);
    const user = useSelector(selectUser);
    const history = useHistory();

    const transitionNavBar = () =>{
        if(window.scrollY >100){
            handleShow(true);
        }else{
            handleShow(false)
        }
    }

    useEffect(() => {
        window.addEventListener("scroll",transitionNavBar);
        return () => window.removeEventListener("scroll",transitionNavBar)
    }, [])

    return (
        <div className={`nav ${show && "nav_black"}`}>
            <div className="nav_content">
                <img 
                    onClick={() => {if(!user.role) {history.push("/profile")} else{history.push("/")}}}
                    className="nav_logo"
                    src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" 
                    alt=""
                    width={300}
                    height={100}
                />
                <div className="nav_mid">
                    <p>Home</p>
                    <p>TV Shows</p>
                    <p>Movies</p>
                    <p>New & Popular</p>
                    <p>My List</p>
                </div>
                <div className="nav_cmid"></div>
                <div className="nav_lmid">
                <SearchOutlined />
                <p>CHILDREN</p>
                <BellFilled />
                </div>
                <img 
                    onClick={() => history.push("/profile")}
                    className="nav_avatar"
                    src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png" 
                    alt=""
                />
            </div>
        </div>
    )
}

export default Nav
 