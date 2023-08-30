import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import { auth } from '../firebase';
import Nav from '../Nav';
import PlansScreen from './PlansScreen';
import './ProfileScreen.css';

function ProfileScreen() {
    const user = useSelector(selectUser)
    // const subs = useSelector(selectSubscription);
    return (
        <div className="profileScreen">
            <Nav/>
            <div className="empty"/>
            <div className="profileScreen_body">
                <h1>Edit Profile</h1>
                <div className="profileScreen_info">
                    <img src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png" alt="" />
                    <div className="profileScreen_details">
                        <h2>{user.email}</h2>
                        <div className="profileScreen_plans">
                            <h3>Plans : {user.role} </h3>
                            <PlansScreen/>
                            <button onClick={() => auth.signOut()} className="profileScreen_signout">Sign Out</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileScreen
